/**
 * Estructura básica y anónima de analítica.
 *
 * No almacena datos personales: sólo un identificador anónimo generado en el
 * navegador y métricas agregadas del evento (por ejemplo, cuántos ingredientes
 * se escribieron, no el texto). Los eventos se guardan localmente y quedan
 * listos para enviarse a una herramienta de analítica cuando se conecte una.
 */

export type EventoAnalitica =
  | "app_open"
  | "ingredient_search"
  | "recipe_results_view"
  | "recipe_open"
  | "favorite_recipe"
  | "share_recipe"
  | "recipe_rating"
  | "review_submitted"
  | "personalization_open"
  | "personalization_used"
  | "adapt_recipe_clicked"
  | "premium_preview_view";

/** Sólo valores no identificables: conteos, categorías o banderas. */
export type PropiedadesEvento = Record<string, string | number | boolean>;

export type RegistroEvento = {
  evento: EventoAnalitica;
  propiedades: PropiedadesEvento;
  anonimoId: string;
  sesionId: string;
  fecha: string;
};

const CLAVE_ANONIMO = "alacena-analitica-anonimo-v1";
const CLAVE_EVENTOS = "alacena-analitica-eventos-v1";
const MAX_EVENTOS = 500;

function idAleatorio() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
  return `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

/** Identificador anónimo estable por navegador; nunca contiene datos personales. */
export function anonimoId(): string {
  if (typeof window === "undefined") return "servidor";
  try {
    const guardado = window.localStorage.getItem(CLAVE_ANONIMO);
    if (guardado) return guardado;
    const nuevo = idAleatorio();
    window.localStorage.setItem(CLAVE_ANONIMO, nuevo);
    return nuevo;
  } catch {
    return "anonimo";
  }
}

let sesion: string | null = null;
function sesionId() {
  sesion ??= idAleatorio();
  return sesion;
}

export function leerEventos(): RegistroEvento[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(CLAVE_EVENTOS);
    return raw ? (JSON.parse(raw) as RegistroEvento[]) : [];
  } catch {
    return [];
  }
}

/**
 * Punto único de envío. Hoy sólo guarda en el navegador; cuando se conecte una
 * herramienta de analítica basta con enviar aquí el mismo registro.
 */
function enviar(registro: RegistroEvento) {
  try {
    const previos = leerEventos();
    const siguientes = [...previos, registro].slice(-MAX_EVENTOS);
    window.localStorage.setItem(CLAVE_EVENTOS, JSON.stringify(siguientes));
  } catch {
    // si el almacenamiento no está disponible, la analítica nunca debe romper la app
  }
}

export function registrarEvento(evento: EventoAnalitica, propiedades: PropiedadesEvento = {}) {
  if (typeof window === "undefined") return;
  enviar({
    evento,
    propiedades,
    anonimoId: anonimoId(),
    sesionId: sesionId(),
    fecha: new Date().toISOString(),
  });
}

/** Métrica no identificable del texto de búsqueda: sólo tamaño y cantidad. */
export function metricasBusqueda(texto: string): PropiedadesEvento {
  const ingredientes = texto
    .split(/[,\n;]+/)
    .map((t) => t.trim())
    .filter(Boolean);
  return { totalIngredientes: ingredientes.length, longitudTexto: texto.trim().length };
}
