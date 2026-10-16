import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

/**
 * Funciones Premium "Chef IA".
 * Todas se ejecutan SOLO cuando el usuario las solicita explícitamente:
 * nunca se llaman al abrir una receta, navegar, compartir o marcar favoritos.
 */

const GATEWAY = "https://ai.gateway.lovable.dev/v1/chat/completions";
const MODELO = "google/gemini-3.8-flash";
const MODELO_IMAGEN = "google/gemini-2.5-flash-image";

function clave() {
  const key = process.env["LOVABLE_API_KEY"];
  if (!key) throw new Error("Falta la configuración de IA.");
  return key;
}

function errorGateway(status: number, texto: string) {
  if (status === 429) return new Error("Demasiadas solicitudes. Espera un momento e inténtalo otra vez.");
  if (status === 402) return new Error("Se agotaron los créditos de IA del espacio de trabajo.");
  return new Error(`No se pudo completar la solicitud (${status}). ${texto.slice(0, 160)}`);
}

async function pedirTexto(system: string, user: string) {
  const res = await fetch(GATEWAY, {
    method: "POST",
    headers: { "Content-Type": "application/json", "Lovable-API-Key": clave() },
    body: JSON.stringify({
      model: MODELO,
      messages: [
        { role: "system", content: system },
        { role: "user", content: user },
      ],
    }),
  });
  if (!res.ok) throw errorGateway(res.status, await res.text());
  const payload = (await res.json()) as { choices?: { message?: { content?: string } }[] };
  return payload.choices?.[0]?.message?.content?.trim() ?? "";
}

async function pedirJson<T>(
  system: string,
  user: string,
  nombre: string,
  schema: unknown,
  parser: z.ZodType<T>,
): Promise<T> {
  const res = await fetch(GATEWAY, {
    method: "POST",
    headers: { "Content-Type": "application/json", "Lovable-API-Key": clave() },
    body: JSON.stringify({
      model: MODELO,
      messages: [
        { role: "system", content: system },
        { role: "user", content: user },
      ],
      response_format: { type: "json_schema", json_schema: { name: nombre, strict: true, schema } },
    }),
  });
  if (!res.ok) throw errorGateway(res.status, await res.text());
  const payload = (await res.json()) as { choices?: { message?: { content?: string } }[] };
  const content = payload.choices?.[0]?.message?.content ?? "";
  return parser.parse(JSON.parse(content));
}

const contextoReceta = z.object({
  titulo: z.string(),
  porciones: z.string().optional(),
  tiempoPreparacion: z.string().optional(),
  tiempoCoccion: z.string().optional(),
  dificultad: z.string().optional(),
  ingredientes: z.array(z.string()),
  pasos: z.array(z.string()),
});
export type ContextoReceta = z.infer<typeof contextoReceta>;

function resumenReceta(r: ContextoReceta) {
  return [
    `Receta: ${r.titulo}.`,
    r.porciones ? `Porciones: ${r.porciones}.` : "",
    r.tiempoPreparacion ? `Preparación: ${r.tiempoPreparacion}.` : "",
    r.tiempoCoccion ? `Cocción: ${r.tiempoCoccion}.` : "",
    r.dificultad ? `Dificultad: ${r.dificultad}.` : "",
    `Ingredientes: ${r.ingredientes.join("; ")}.`,
    `Pasos: ${r.pasos.map((p, i) => `${i + 1}) ${p}`).join(" ")}`,
  ]
    .filter(Boolean)
    .join(" ");
}

/* ------------------------------ Pregúntale a tu Chef IA ------------------------------ */

export const preguntarChef = createServerFn({ method: "POST" })
  .validator((input: unknown) =>
    z
      .object({
        receta: contextoReceta,
        pregunta: z.string().min(2).max(400),
        historial: z
          .array(z.object({ rol: z.enum(["usuario", "chef"]), texto: z.string().max(2000) }))
          .max(10)
          .optional(),
      })
      .parse(input),
  )
  .handler(async ({ data }): Promise<{ respuesta: string }> => {
    const historial = (data.historial ?? [])
      .map((m) => `${m.rol === "usuario" ? "Usuario" : "Chef"}: ${m.texto}`)
      .join("\n");
    const respuesta = await pedirTexto(
      "Eres el Chef IA de una app de cocina. Respondes SIEMPRE en español neutro, breve (máximo 140 palabras), práctico y concreto. " +
        "Respondes ÚNICAMENTE sobre la receta indicada: sustituciones, cantidades, tiempos, técnica, costo o punto de cocción. " +
        "Si preguntan algo ajeno a la cocina, invita amablemente a volver a la receta. No inventes datos nutricionales exactos.",
      `${resumenReceta(data.receta)}\n${historial ? `Conversación previa:\n${historial}\n` : ""}Pregunta del usuario: ${data.pregunta}`,
    );
    return { respuesta };
  });

/* ---------------------------------- Adaptar receta ---------------------------------- */

const adaptadaSchema = z.object({
  titulo: z.string(),
  resumen: z.string(),
  porciones: z.string(),
  tiempoPreparacion: z.string(),
  tiempoCoccion: z.string(),
  ingredientes: z.array(z.string()),
  pasos: z.array(z.string()),
  notas: z.string(),
});
export type RecetaAdaptada = z.infer<typeof adaptadaSchema>;

const adaptadaJsonSchema = {
  type: "object",
  additionalProperties: false,
  required: [
    "titulo",
    "resumen",
    "porciones",
    "tiempoPreparacion",
    "tiempoCoccion",
    "ingredientes",
    "pasos",
    "notas",
  ],
  properties: {
    titulo: { type: "string" },
    resumen: { type: "string" },
    porciones: { type: "string" },
    tiempoPreparacion: { type: "string" },
    tiempoCoccion: { type: "string" },
    ingredientes: { type: "array", items: { type: "string" } },
    pasos: { type: "array", items: { type: "string" } },
    notas: { type: "string" },
  },
} as const;

export const adaptarReceta = createServerFn({ method: "POST" })
  .validator((input: unknown) =>
    z
      .object({
        receta: contextoReceta,
        tipo: z.enum(["personas", "sustituir", "tiempo", "presupuesto", "preferencias", "variacion"]),
        instruccion: z.string().min(1).max(300),
      })
      .parse(input),
  )
  .handler(async ({ data }): Promise<RecetaAdaptada> => {
    const guias: Record<typeof data.tipo, string> = {
      personas:
        "Recalcula TODAS las cantidades de los ingredientes de forma proporcional al nuevo número de personas y ajusta tiempos si corresponde.",
      sustituir: "Reemplaza los ingredientes indicados por alternativas realistas y explica la proporción del reemplazo.",
      tiempo: "Reorganiza técnica y pasos para cumplir el tiempo total pedido, sin arruinar el resultado.",
      presupuesto: "Reduce el costo cambiando ingredientes caros por opciones económicas equivalentes.",
      preferencias: "Adapta la receta a la preferencia alimentaria indicada manteniendo sabor y textura.",
      variacion: "Crea una variación creativa pero realista de la misma receta.",
    };
    return pedirJson(
      "Eres un chef profesional. Respondes SIEMPRE en español neutro. Devuelves una versión adaptada y completa de la receta dada, con cantidades explícitas en cada ingrediente y pasos claros. " +
        "Si cambia el número de personas, las cantidades DEBEN recalcularse. En notas explica en una o dos frases qué cambiaste.",
      `${resumenReceta(data.receta)}\nTarea: ${guias[data.tipo]}\nInstrucción del usuario: ${data.instruccion}`,
      "receta_adaptada",
      adaptadaJsonSchema,
      adaptadaSchema,
    );
  });

/* ------------------------------------- Costo ---------------------------------------- */

const costoSchema = z.object({
  moneda: z.string(),
  personas: z.number(),
  costoTotal: z.number(),
  costoPorPersona: z.number(),
  items: z.array(z.object({ ingrediente: z.string(), costo: z.number(), disponible: z.boolean() })),
  faltantes: z.array(z.string()),
  nota: z.string(),
});
export type CostoReceta = z.infer<typeof costoSchema>;

const costoJsonSchema = {
  type: "object",
  additionalProperties: false,
  required: ["moneda", "personas", "costoTotal", "costoPorPersona", "items", "faltantes", "nota"],
  properties: {
    moneda: { type: "string" },
    personas: { type: "number" },
    costoTotal: { type: "number" },
    costoPorPersona: { type: "number" },
    items: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        required: ["ingrediente", "costo", "disponible"],
        properties: {
          ingrediente: { type: "string" },
          costo: { type: "number" },
          disponible: { type: "boolean" },
        },
      },
    },
    faltantes: { type: "array", items: { type: "string" } },
    nota: { type: "string" },
  },
} as const;

export const calcularCosto = createServerFn({ method: "POST" })
  .validator((input: unknown) =>
    z
      .object({
        receta: contextoReceta,
        personas: z.number().min(1).max(20),
        faltantes: z.array(z.string()).max(30).optional(),
        precios: z.string().max(400).optional(),
        presupuesto: z.number().optional(),
      })
      .parse(input),
  )
  .handler(async ({ data }): Promise<CostoReceta> =>
    pedirJson(
      "Eres un chef que estima costos de mercado en pesos chilenos (CLP). Respondes en español neutro. " +
        "Devuelves un costo ESTIMADO por ingrediente (sólo la porción usada en la receta), el total y el costo por persona. " +
        "Si el usuario entrega precios propios, respétalos. Marca disponible=false para los ingredientes que el usuario no tiene. En nota aclara que son estimaciones.",
      [
        resumenReceta(data.receta),
        `Personas: ${data.personas}.`,
        data.faltantes?.length ? `El usuario NO tiene: ${data.faltantes.join(", ")}.` : "",
        data.precios ? `Precios indicados por el usuario: ${data.precios}.` : "",
        data.presupuesto ? `Presupuesto máximo deseado: ${data.presupuesto} CLP.` : "",
      ]
        .filter(Boolean)
        .join(" "),
      "costo_receta",
      costoJsonSchema,
      costoSchema,
    ),
  );

/* ---------------------------------- Nutrición --------------------------------------- */

const nutricionSchema = z.object({
  porcion: z.string(),
  calorias: z.string(),
  proteinas: z.string(),
  carbohidratos: z.string(),
  grasas: z.string(),
  nota: z.string(),
});
export type Nutricion = z.infer<typeof nutricionSchema>;

const nutricionJsonSchema = {
  type: "object",
  additionalProperties: false,
  required: ["porcion", "calorias", "proteinas", "carbohidratos", "grasas", "nota"],
  properties: {
    porcion: { type: "string" },
    calorias: { type: "string" },
    proteinas: { type: "string" },
    carbohidratos: { type: "string" },
    grasas: { type: "string" },
    nota: { type: "string" },
  },
} as const;

export const estimarNutricion = createServerFn({ method: "POST" })
  .validator((input: unknown) => z.object({ receta: contextoReceta }).parse(input))
  .handler(async ({ data }): Promise<Nutricion> =>
    pedirJson(
      "Eres un chef. Entregas una estimación aproximada de calorías, proteínas, carbohidratos y grasas por porción, en español neutro. " +
        "Siempre aclaras en la nota que son valores estimados y no información médica ni nutricional clínica.",
      resumenReceta(data.receta),
      "nutricion",
      nutricionJsonSchema,
      nutricionSchema,
    ),
  );

/* -------------------------------- Aprovechar sobras --------------------------------- */

const sobrasSchema = z.object({
  ideas: z.array(
    z.object({
      titulo: z.string(),
      descripcion: z.string(),
      ingredientesUsados: z.array(z.string()),
      pasos: z.array(z.string()),
      urgencia: z.string(),
    }),
  ),
});
export type IdeasSobras = z.infer<typeof sobrasSchema>;

const sobrasJsonSchema = {
  type: "object",
  additionalProperties: false,
  required: ["ideas"],
  properties: {
    ideas: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        required: ["titulo", "descripcion", "ingredientesUsados", "pasos", "urgencia"],
        properties: {
          titulo: { type: "string" },
          descripcion: { type: "string" },
          ingredientesUsados: { type: "array", items: { type: "string" } },
          pasos: { type: "array", items: { type: "string" } },
          urgencia: { type: "string" },
        },
      },
    },
  },
} as const;

export const aprovecharSobras = createServerFn({ method: "POST" })
  .validator((input: unknown) =>
    z.object({ sobras: z.string().min(2).max(400) }).parse(input),
  )
  .handler(async ({ data }): Promise<IdeasSobras> =>
    pedirJson(
      "Eres un chef especializado en reducir el desperdicio de alimentos. Respondes en español neutro. " +
        "Devuelves 4 ideas de preparación que aprovechen la mayor cantidad posible de las sobras, priorizando primero los alimentos más perecibles. " +
        "En urgencia indica en pocas palabras qué tan pronto conviene usar esos ingredientes.",
      `Sobras disponibles: ${data.sobras}.`,
      "ideas_sobras",
      sobrasJsonSchema,
      sobrasSchema,
    ),
  );

/* ---------------------------------- Menú semanal ------------------------------------ */

const menuSchema = z.object({
  dias: z.array(
    z.object({
      dia: z.string(),
      comidas: z.array(z.object({ tipo: z.string(), nombre: z.string(), emoji: z.string() })),
    }),
  ),
  listaCompras: z.array(z.string()),
  costoEstimado: z.string(),
  nota: z.string(),
});
export type MenuSemanal = z.infer<typeof menuSchema>;

const menuJsonSchema = {
  type: "object",
  additionalProperties: false,
  required: ["dias", "listaCompras", "costoEstimado", "nota"],
  properties: {
    dias: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        required: ["dia", "comidas"],
        properties: {
          dia: { type: "string" },
          comidas: {
            type: "array",
            items: {
              type: "object",
              additionalProperties: false,
              required: ["tipo", "nombre", "emoji"],
              properties: {
                tipo: { type: "string" },
                nombre: { type: "string" },
                emoji: { type: "string" },
              },
            },
          },
        },
      },
    },
    listaCompras: { type: "array", items: { type: "string" } },
    costoEstimado: { type: "string" },
    nota: { type: "string" },
  },
} as const;

export const crearMenuSemanal = createServerFn({ method: "POST" })
  .validator((input: unknown) =>
    z
      .object({
        personas: z.number().min(1).max(20),
        dias: z.number().min(1).max(7),
        comidas: z.string().max(120),
        presupuesto: z.string().max(60).optional(),
        preferencias: z.string().max(200).optional(),
        tiene: z.string().max(300).optional(),
      })
      .parse(input),
  )
  .handler(async ({ data }): Promise<MenuSemanal> =>
    pedirJson(
      "Eres un chef planificador de menús. Respondes en español neutro. Creas un menú organizado por día, variado y realista, " +
        "aprovechando primero los alimentos que el usuario ya tiene. Devuelves también la lista de compras consolidada y un costo total estimado en pesos chilenos (CLP), aclarando en la nota que es una estimación.",
      [
        `Personas: ${data.personas}.`,
        `Días: ${data.dias}.`,
        `Tipos de comida: ${data.comidas}.`,
        data.presupuesto ? `Presupuesto aproximado: ${data.presupuesto}.` : "",
        data.preferencias ? `Preferencias: ${data.preferencias}.` : "",
        data.tiene ? `Ya tiene en casa: ${data.tiene}.` : "",
      ]
        .filter(Boolean)
        .join(" "),
      "menu_semanal",
      menuJsonSchema,
      menuSchema,
    ),
  );

/* ------------------------------- Imagen referencial --------------------------------- */

export const imagenReceta = createServerFn({ method: "POST" })
  .validator((input: unknown) =>
    z
      .object({ titulo: z.string().min(2).max(160), descripcion: z.string().max(300).optional() })
      .parse(input),
  )
  .handler(async ({ data }): Promise<{ imagen: string }> => {
    const res = await fetch(GATEWAY, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Lovable-API-Key": clave() },
      body: JSON.stringify({
        model: MODELO_IMAGEN,
        modalities: ["image", "text"],
        messages: [
          {
            role: "user",
            content:
              `Fotografía culinaria profesional del plato terminado: ${data.titulo}. ${data.descripcion ?? ""} ` +
              "Luz natural suave, fondo claro y cálido de cocina, vajilla sencilla, plano cenital ligeramente inclinado, aspecto apetitoso y realista, sin texto ni marcas.",
          },
        ],
      }),
    });
    if (!res.ok) throw errorGateway(res.status, await res.text());
    const payload = (await res.json()) as {
      choices?: { message?: { images?: { image_url?: { url?: string } }[] } }[];
    };
    const url = payload.choices?.[0]?.message?.images?.[0]?.image_url?.url;
    if (!url) throw new Error("No se pudo generar la imagen del plato.");
    return { imagen: url };
  });
