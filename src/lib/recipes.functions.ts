import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const RecipeSchema = z.object({
  titulo: z.string(),
  descripcion: z.string(),
  tiempoPreparacion: z.string(),
  tiempoCoccion: z.string(),
  porciones: z.string(),
  dificultad: z.string(),
  ingredientes: z.array(z.string()),
  pasos: z.array(z.string()),
  preferencia: z.string(),
  costoAproximado: z.string(),
  ingredientesCoincidentes: z.array(z.string()),
  ingredientesFaltantes: z.array(z.string()),
  porcentajeCoincidencia: z.number(),
});

type RecetaIA = z.infer<typeof RecipeSchema>;

type Extra =
  | "preferencia"
  | "costoAproximado"
  | "ingredientesCoincidentes"
  | "ingredientesFaltantes"
  | "porcentajeCoincidencia";

export type Receta = Omit<RecetaIA, Extra> &
  Partial<Pick<RecetaIA, Extra>> & {
    id: string;
    mejorOpcion?: boolean;
  };

const ResponseSchema = z.object({
  recetas: z.array(RecipeSchema),
});

const jsonSchema = {
  type: "object",
  additionalProperties: false,
  required: ["recetas"],
  properties: {
    recetas: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        required: [
          "titulo",
          "descripcion",
          "tiempoPreparacion",
          "tiempoCoccion",
          "porciones",
          "dificultad",
          "ingredientes",
          "pasos",
          "preferencia",
          "costoAproximado",
          "ingredientesCoincidentes",
          "ingredientesFaltantes",
          "porcentajeCoincidencia",
        ],
        properties: {
          titulo: { type: "string" },
          descripcion: { type: "string" },
          tiempoPreparacion: { type: "string" },
          tiempoCoccion: { type: "string" },
          porciones: { type: "string" },
          dificultad: { type: "string" },
          ingredientes: {
            type: "array",
            items: { type: "string" },
          },
          pasos: {
            type: "array",
            items: { type: "string" },
          },
          preferencia: { type: "string" },
          costoAproximado: { type: "string" },
          ingredientesCoincidentes: {
            type: "array",
            items: { type: "string" },
          },
          ingredientesFaltantes: {
            type: "array",
            items: { type: "string" },
          },
          porcentajeCoincidencia: {
            type: "number",
          },
        },
      },
    },
  },
} as const;

const LOVABLE_GATEWAY =
  "https://ai.gateway.lovable.dev/v1/chat/completions";

const OPENAI_GATEWAY =
  "https://api.openai.com/v1/chat/completions";

type ConfigIA = {
  url: string;
  model: string;
  proveedor: "Lovable" | "OpenAI";
  headers: Record<string, string>;
};

function obtenerConfigIA(): ConfigIA {
  const lovableKey =
    process.env["LOVABLE_API_KEY"]?.trim();

  if (lovableKey) {
    return {
      url: LOVABLE_GATEWAY,
      model: "google/gemini-3.7-flash",
      proveedor: "Lovable",
      headers: {
        "Content-Type": "application/json",
        "Lovable-API-Key": lovableKey,
        Authorization: `Bearer ${lovableKey}`,
        "X-Lovable-AIG-SDK": "tanstack-ai",
      },
    };
  }

  const openAIKey =
    process.env["OPENAI_API_KEY"]?.trim() ||
    process.env["OPEN_API_KEY"]?.trim();

  if (openAIKey) {
    return {
      url: OPENAI_GATEWAY,
      model:
        process.env["OPENAI_MODEL"]?.trim() ||
        "gpt-5.6-luna",
      proveedor: "OpenAI",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${openAIKey}`,
      },
    };
  }

  throw new Error(
    "Falta la configuración de IA. Configura LOVABLE_API_KEY u OPENAI_API_KEY en los secretos del proyecto.",
  );
}

function extraerJson(content: string) {
  const limpio = content
    .trim()
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/\s*```$/i, "")
    .trim();

  if (!limpio) {
    throw new Error(
      "La IA respondió sin contenido. Inténtalo nuevamente.",
    );
  }

  return JSON.parse(limpio) as unknown;
}

export const generarRecetas = createServerFn({
  method: "POST",
})
  .inputValidator((input: unknown) =>
    z
      .object({
        ingredientes: z
          .string()
          .min(2)
          .max(500),

        preferencias: z
          .object({
            intencion: z.string().optional(),
            personas: z.string().optional(),
            tiempo: z.string().optional(),
          })
          .optional(),
      })
      .parse(input),
  )

  .handler(
    async ({
      data,
    }): Promise<{ recetas: Receta[] }> => {
      const config = obtenerConfigIA();

      const res = await fetch(config.url, {
        method: "POST",

        headers: config.headers,

        body: JSON.stringify({
          model: config.model,

          messages: [
            {
              role: "system",

              content:
                "Eres un chef profesional. Respondes SIEMPRE en español neutro. " +
                "Genera exactamente 10 recetas distintas y realistas usando principalmente los ingredientes disponibles del usuario. " +
                "Puedes considerar como básicos sal, pimienta, aceite y agua. " +
                "Entrega instrucciones claras paso a paso. " +
                "Para cada receta evalúa tiempos de preparación y cocción, dificultad, porciones, preferencia del usuario y costo aproximado. " +
                "Rellena ingredientesCoincidentes con los ingredientes que el usuario ya tiene. " +
                "Rellena ingredientesFaltantes con los ingredientes que debería comprar. " +
                "porcentajeCoincidencia debe ser un número entre 0 y 100. " +
                "El campo preferencia debe describir brevemente la intención de la receta. " +
                "El campo costoAproximado debe ser Bajo, Medio o Alto. " +
                "Prioriza las recetas que requieren comprar menos ingredientes y ordénalas por compatibilidad.",
            },

            {
              role: "user",

              content: [
                `Ingredientes disponibles en mi alacena: ${data.ingredientes}.`,

                data.preferencias?.intencion
                  ? `Intención: ${data.preferencias.intencion}.`
                  : "",

                data.preferencias?.personas
                  ? `Cantidad de personas: ${data.preferencias.personas}.`
                  : "",

                data.preferencias?.tiempo
                  ? `Tiempo disponible: ${data.preferencias.tiempo}.`
                  : "",

                "Devuelve exactamente 10 recetas variadas.",
              ]
                .filter(Boolean)
                .join(" "),
            },
          ],

          response_format: {
            type: "json_schema",

            json_schema: {
              name: "recetas",
              strict: true,
              schema: jsonSchema,
            },
          },
        }),
      });

      if (!res.ok) {
        const text = await res.text();

        if (
          res.status === 401 ||
          res.status === 403
        ) {
          throw new Error(
            `La clave de IA configurada para ${config.proveedor} no fue aceptada. Revisa el secreto del proyecto.`,
          );
        }

        if (res.status === 429) {
          throw new Error(
            "Demasiadas solicitudes. Espera un momento e inténtalo de nuevo.",
          );
        }

        if (res.status === 402) {
          throw new Error(
            "Se agotaron los créditos de IA del espacio de trabajo.",
          );
        }

        throw new Error(
          `No se pudieron generar las recetas (${res.status}, ${config.proveedor}). ${text.slice(0, 200)}`,
        );
      }

      const payload = (await res.json()) as {
        choices?: {
          message?: {
            content?: string;
          };
        }[];
      };

      const content =
        payload.choices?.[0]?.message?.content ?? "";

      let parsed: z.infer<typeof ResponseSchema>;

      try {
        parsed = ResponseSchema.parse(
          extraerJson(content),
        );
      } catch (error) {
        console.error(
          "Respuesta de IA no válida al generar recetas",
          error,
        );

        throw new Error(
          "La IA respondió en un formato inesperado. Inténtalo nuevamente.",
        );
      }

      if (parsed.recetas.length === 0) {
        throw new Error(
          "La IA no devolvió recetas. Inténtalo nuevamente.",
        );
      }

      const normalizadas: Receta[] =
        parsed.recetas
          .slice(0, 10)
          .map((r, i) => {
            const coinciden =
              r.ingredientesCoincidentes.length;

            const faltan =
              r.ingredientesFaltantes.length;

            const total =
              coinciden + faltan;

            const calculado =
              total > 0
                ? (coinciden / total) * 100
                : r.porcentajeCoincidencia;

            const pct = Math.max(
              0,
              Math.min(
                100,
                Math.round(
                  (calculado +
                    r.porcentajeCoincidencia) /
                    2,
                ),
              ),
            );

            return {
              ...r,

              porcentajeCoincidencia: pct,

              id: `${Date.now()}-${i}-${r.titulo
                .toLowerCase()
                .replace(
                  /[^a-z0-9]+/g,
                  "-",
                )}`,
            };
          });

      normalizadas.sort((a, b) => {
        const fa =
          a.ingredientesFaltantes?.length ?? 0;

        const fb =
          b.ingredientesFaltantes?.length ?? 0;

        if (
          (fa === 0) !==
          (fb === 0)
        ) {
          return fa === 0 ? -1 : 1;
        }

        return (
          (b.porcentajeCoincidencia ?? 0) -
          (a.porcentajeCoincidencia ?? 0)
        );
      });

      return {
        recetas: normalizadas.map(
          (r, i) => ({
            ...r,
            mejorOpcion: i === 0,
          }),
        ),
      };
    },
  );
