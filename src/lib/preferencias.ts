export type Intencion =
  | "rapido"
  | "economico"
  | "saludable"
  | "romantica"
  | "familia"
  | "especial"
  | "aprovechar"
  | "sorpresa";

export type Personas = "1" | "2" | "3-4" | "5-6" | "7+";
export type Tiempo = "15" | "30" | "60" | "libre";

export type Preferencias = {
  intencion?: Intencion | undefined;
  personas?: Personas | undefined;
  tiempo?: Tiempo | undefined;
};

export const INTENCIONES: { valor: Intencion; etiqueta: string }[] = [
  { valor: "rapido", etiqueta: "Algo rápido" },
  { valor: "economico", etiqueta: "Algo económico" },
  { valor: "saludable", etiqueta: "Algo saludable" },
  { valor: "romantica", etiqueta: "Cena romántica" },
  { valor: "familia", etiqueta: "Para la familia" },
  { valor: "especial", etiqueta: "Algo especial" },
  { valor: "aprovechar", etiqueta: "Aprovechar lo que tengo" },
  { valor: "sorpresa", etiqueta: "Sorpréndeme" },
];

export const PERSONAS: Personas[] = ["1", "2", "3-4", "5-6", "7+"];

export const TIEMPOS: { valor: Tiempo; etiqueta: string }[] = [
  { valor: "15", etiqueta: "15 minutos" },
  { valor: "30", etiqueta: "30 minutos" },
  { valor: "60", etiqueta: "1 hora" },
  { valor: "libre", etiqueta: "No importa" },
];

export function etiquetaIntencion(v?: Intencion) {
  return INTENCIONES.find((i) => i.valor === v)?.etiqueta;
}

export function etiquetaTiempo(v?: Tiempo) {
  return TIEMPOS.find((t) => t.valor === v)?.etiqueta;
}

const sinAcentos = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

/** Interpretación básica y robusta del texto libre del usuario. */
export function interpretarTexto(texto: string): Preferencias {
  const t = sinAcentos(texto);
  const p: Preferencias = {};

  // Personas
  const m =
    t.match(/para\s+(\d{1,2})\s*(?:personas?|comensales?|pax)?/) ??
    t.match(/(\d{1,2})\s*(?:personas?|comensales?)/);
  const n = m ? parseInt(m[1]!, 10) : undefined;
  if (n && n > 0) {
    p.personas = n === 1 ? "1" : n === 2 ? "2" : n <= 4 ? "3-4" : n <= 6 ? "5-6" : "7+";
  } else if (/\bpareja\b|romantic/.test(t)) {
    p.personas = "2";
    p.intencion = "romantica";
  } else if (/\bfamilia\b|\bfamiliar\b/.test(t)) {
    p.personas = "3-4";
    p.intencion ??= "familia";
  }

  // Tiempo
  const mt = t.match(/(\d{1,3})\s*(?:min|minutos?)/);
  if (mt) {
    const mins = parseInt(mt[1]!, 10);
    p.tiempo = mins <= 15 ? "15" : mins <= 30 ? "30" : mins <= 60 ? "60" : "libre";
  } else if (/\b(1|una)\s*hora\b/.test(t)) {
    p.tiempo = "60";
  } else if (/\brapid|\bexpres|\bal vuelo\b|poco tiempo|sin tiempo/.test(t)) {
    p.tiempo ??= "15";
    p.intencion ??= "rapido";
  }

  // Objetivos
  if (/saludable|sano|light|fit|dieta|bajo en calorias/.test(t)) p.intencion ??= "saludable";
  if (/economic|barat|low cost|ahorr/.test(t)) p.intencion ??= "economico";
  if (/aprovech|sobras|no desperdiciar/.test(t)) p.intencion ??= "aprovechar";
  if (/especial|celebrar|cumpleanos|gourmet/.test(t)) p.intencion ??= "especial";

  return p;
}

/** Combina lo elegido en el acordeón (prioritario) con lo inferido del texto. */
export function combinarPreferencias(
  elegidas: Preferencias,
  texto: string,
): Preferencias & { inferidas: Preferencias } {
  const inferidas = interpretarTexto(texto);
  return {
    intencion: elegidas.intencion ?? inferidas.intencion,
    personas: elegidas.personas ?? inferidas.personas,
    tiempo: elegidas.tiempo ?? inferidas.tiempo,
    inferidas,
  };
}
