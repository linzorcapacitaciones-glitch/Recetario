/**
 * Planificador determinista, sin peticiones a la API.
 * Precios de REFERENCIA SIMULADOS y editables; no son cotizaciones actuales.
 * Las cantidades corresponden a una receta para 2 personas.
 */
export type IngredienteId =
  | "arroz" | "pollo" | "huevo" | "tomate" | "cebolla" | "papa"
  | "zanahoria" | "pasta" | "atun" | "lenteja" | "garbanzo"
  | "queso" | "espinaca" | "zapallo";

export type Producto = { nombre: string; unidad: "g" | "unidad"; precio: number };
export const PRODUCTOS: Record<IngredienteId, Producto> = {
  arroz: { nombre: "Arroz", unidad: "g", precio: 2.2 },
  pollo: { nombre: "Pollo", unidad: "g", precio: 8.5 },
  huevo: { nombre: "Huevo", unidad: "unidad", precio: 340 },
  tomate: { nombre: "Tomate", unidad: "g", precio: 2.4 },
  cebolla: { nombre: "Cebolla", unidad: "g", precio: 1.2 },
  papa: { nombre: "Papa", unidad: "g", precio: 1.4 },
  zanahoria: { nombre: "Zanahoria", unidad: "g", precio: 1.3 },
  pasta: { nombre: "Pasta", unidad: "g", precio: 2 },
  atun: { nombre: "Atún", unidad: "g", precio: 9 },
  lenteja: { nombre: "Lentejas", unidad: "g", precio: 2.8 },
  garbanzo: { nombre: "Garbanzos", unidad: "g", precio: 2.8 },
  queso: { nombre: "Queso", unidad: "g", precio: 9 },
  espinaca: { nombre: "Espinaca", unidad: "g", precio: 6 },
  zapallo: { nombre: "Zapallo", unidad: "g", precio: 1.7 },
};
export const IDS_INGREDIENTES = Object.keys(PRODUCTOS) as IngredienteId[];
export const PRECIOS_REFERENCIA = Object.fromEntries(IDS_INGREDIENTES.map(id => [id, PRODUCTOS[id].precio])) as Record<IngredienteId, number>;

export type Insumo = [id: IngredienteId, cantidad: number];
export type Plato = { id: string; titulo: string; categoria: string; ingredientes: Insumo[] };
const receta = (id: string, titulo: string, categoria: string, ingredientes: Insumo[]): Plato =>
  ({ id, titulo, categoria, ingredientes });

export const CATALOGO: Plato[] = [
  receta("pollo_arroz", "Pollo al tomate con arroz", "pollo", [["pollo", 260], ["tomate", 220], ["arroz", 150], ["cebolla", 80]]),
  receta("tortilla_papa", "Tortilla de papas", "huevo", [["papa", 350], ["huevo", 3], ["cebolla", 70]]),
  receta("pasta_atun", "Pasta con atún y tomate", "pescado", [["pasta", 180], ["atun", 140], ["tomate", 220]]),
  receta("guiso_lentejas", "Lentejas guisadas con arroz", "legumbres", [["lenteja", 170], ["zanahoria", 130], ["cebolla", 90], ["arroz", 100]]),
  receta("garbanzos_espinaca", "Salteado de garbanzos y espinaca", "legumbres", [["garbanzo", 190], ["espinaca", 160], ["cebolla", 100]]),
  receta("pollo_horno", "Pollo al horno con papas", "pollo", [["pollo", 320], ["papa", 360], ["zanahoria", 140]]),
  receta("arroz_huevo", "Arroz salteado con huevo y zanahoria", "huevo", [["arroz", 170], ["huevo", 3], ["zanahoria", 130]]),
  receta("pasta_espinaca", "Fideos con queso y espinaca", "pasta", [["pasta", 180], ["queso", 80], ["espinaca", 120]]),
  receta("tortilla_espinaca", "Tortilla de espinaca y tomate", "huevo", [["huevo", 4], ["espinaca", 150], ["tomate", 200]]),
  receta("zapallo_lentejas", "Crema de zapallo con lentejas", "legumbres", [["zapallo", 500], ["lenteja", 110], ["cebolla", 70]]),
  receta("ensalada_garbanzos", "Ensalada de garbanzos con atún", "pescado", [["garbanzo", 180], ["atun", 120], ["tomate", 180]]),
  receta("croquetas_pollo", "Croquetas de arroz y pollo", "pollo", [["pollo", 150], ["arroz", 160], ["huevo", 2]]),
  receta("papas_atun", "Papas rellenas de atún", "pescado", [["papa", 360], ["atun", 150], ["cebolla", 90]]),
  receta("fideos_pollo", "Fideos salteados con pollo", "pollo", [["pasta", 180], ["pollo", 200], ["zanahoria", 110]]),
  receta("arroz_garbanzos", "Arroz con garbanzos al tomate", "legumbres", [["arroz", 150], ["garbanzo", 170], ["tomate", 200]]),
  receta("huevos_papas", "Huevos al plato con papas y tomate", "huevo", [["huevo", 3], ["papa", 300], ["tomate", 180]]),
  receta("zapallo_pasta", "Pasta con zapallo y cebolla", "pasta", [["pasta", 180], ["zapallo", 260], ["cebolla", 95]]),
  receta("pollo_queso", "Pollo a la sartén con queso y tomate", "pollo", [["pollo", 240], ["queso", 65], ["tomate", 180]]),
];

export const DIAS = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"] as const;
export type OpcionesPlan = {
  personas: number;
  dias: number;
  comidasPorDia: number;
  presupuesto: number;
  despensa: string;
  precios?: Partial<Record<IngredienteId, number>>;
  variante?: number;
};
export type PlatoPlan = {
  dia: string;
  comida: string;
  plato: Plato;
  costoIngredientes: number;
  costoPorPersona: number;
  costoFaltantes: number;
};
export type ItemFaltante = { id: IngredienteId; nombre: string; cantidad: number; unidad: string; costo: number };
export type ResultadoPlan = {
  platos: PlatoPlan[];
  compras: ItemFaltante[];
  costoTotal: number;
  costoPorPersona: number;
  costoCompraEstimada: number;
  presupuesto: number;
  excedePresupuesto: boolean;
  personas: number;
  dias: number;
};
const normalizar = (s: string) =>
  s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();

const ALIAS: Record<string, IngredienteId> = {
  "arroz": "arroz", "pollo": "pollo", "huevo": "huevo", "huevos": "huevo",
  "tomate": "tomate", "tomates": "tomate", "cebolla": "cebolla", "cebollas": "cebolla",
  "papa": "papa", "papas": "papa", "patata": "papa", "patatas": "papa",
  "zanahoria": "zanahoria", "zanahorias": "zanahoria",
  "pasta": "pasta", "fideos": "pasta", "tallarines": "pasta",
  "atun": "atun", "atun en lata": "atun", "lenteja": "lenteja", "lentejas": "lenteja",
  "garbanzo": "garbanzo", "garbanzos": "garbanzo", "queso": "queso",
  "espinaca": "espinaca", "espinacas": "espinaca", "zapallo": "zapallo", "calabaza": "zapallo",
};
export function interpretarDespensa(texto: string): Set<IngredienteId> {
  const resultado = new Set<IngredienteId>();
  for(const termino of texto.split(/[,;\n]+/)) {
    const id = ALIAS[normalizar(termino)];
    if (id) resultado.add(id);
  }
  return resultado;
}
const clp = (n: number) => Math.max(0, Math.round(n));

export function planificarSemana(opciones: OpcionesPlan): ResultadoPlan {
  const personas = Math.max(1, Math.min(12, Math.round(opciones.personas || 2)));
  const dias = Math.max(1, Math.min(7, Math.round(opciones.dias || 7)));
  const comidasPorDia = Math.max(1, Math.min(2, Math.round(opciones.comidasPorDia || 1)));
  const presupuesto = Math.max(0, Number(opciones.presupuesto) || 0);
  const inventario = interpretarDespensa(opciones.despensa);
  const precios = { ...PRECIOS_REFERENCIA, ...opciones.precios };
  const variante = Math.max(0, Math.round(opciones.variante || 0));
  const usados = new Set<string>();
  const platos: PlatoPlan[] = [];
  const compras = new Map<IngredienteId, number>();
  let costoTotal = 0;
  let costoCompraEstimada = 0;
  let categoriaPrevia = "";

  for (let i = 0; i < dias * comidasPorDia; i++) {
    const fecha = Math.floor(i / comidasPorDia);
    const candidatos = CATALOGO.map((plato, idx) => {
      const costo = plato.ingredientes.reduce((sum, [id, q]) =>
        sum + q * personas / 2 * Math.max(0, precios[id] ?? 0), 0);
      const faltante = plato.ingredientes.reduce((sum, [id, q]) =>
        sum + (inventario.has(id) ? 0 : q * personas / 2 * Math.max(0, precios[id] ?? 0)), 0);
      const presupuestoPorComida = presupuesto > 0 ? presupuesto / (dias * comidasPorDia) : Infinity;
      // Priorizamos bajo costo, poco gasto en compras y variedad. El presupuesto es orientativo.
      const score = costo * 0.45 + faltante * 0.55
        + (plato.categoria === categoriaPrevia ? 900 : 0)
        + (presupuesto > 0 && costo > presupuestoPorComida ? (costo - presupuestoPorComida) * 0.55 : 0)
        + (usados.has(plato.id) ? 100000 : 0)
        + ((idx + variante * 7) % CATALOGO.length) * 4;
      return { plato, costo, faltante, score };
    });
    candidatos.sort((a, b) => a.score - b.score);
    const elegido = candidatos[0]!;
    usados.add(elegido.plato.id);
    categoriaPrevia = elegido.plato.categoria;
    const comida = comidasPorDia === 1 ? "Plato principal" : i % 2 === 0 ? "Almuerzo" : "Cena";
    platos.push({
      dia: DIAS[fecha]!, comida, plato: elegido.plato,
      costoIngredientes: clp(elegido.costo),
      costoPorPersona: clp(elegido.costo / personas),
      costoFaltantes: clp(elegido.faltante)
    });
    costoTotal += elegido.costo;
    for(const [id,q] of elegido.plato.ingredientes) {
      if (!inventario.has(id)) compras.set(id, (compras.get(id) || 0) + q * personas / 2);
    }
  }
  const consolidado = Array.from(compras).map(([id,cantidad]) => ({
    id, nombre: PRODUCTOS[id].nombre,
    cantidad: Math.round(cantidad * 10) / 10,
    unidad: PRODUCTOS[id].unidad,
    costo: clp(cantidad * Math.max(0, precios[id] ?? 0)),
  })).sort((a,b) => a.nombre.localeCompare(b.nombre, "es"));
  costoCompraEstimada = consolidado.reduce((sum, p) => sum + p.costo, 0);
  return {
    platos, compras: consolidado,
    costoTotal: clp(costoTotal),
    costoPorPersona: clp(costoTotal / personas),
    costoCompraEstimada: clp(costoCompraEstimada),
    presupuesto, excedePresupuesto: presupuesto > 0 && costoTotal > presupuesto,
    personas, dias
  };
}
