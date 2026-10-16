import { PRODUCTOS, type IngredienteId, type OpcionesPlan, type ResultadoPlan, planificarSemana } from "./planificador-semanal.ts";

/** Inventario cuantificado: cantidades en gramos o unidades, conforme a PRODUCTOS. */
export type InventarioCantidad = Partial<Record<IngredienteId, number>>;
export type CompraNeta = { id: IngredienteId; nombre: string; requerido: number; disponible: number; comprar: number; unidad: string; costo: number };
export type PlanConInventario = ResultadoPlan & { comprasNetas: CompraNeta[]; costoCompraNeta: number; costoIngredientesConsumidos: number };

export function calcularPlanConInventario(opciones: OpcionesPlan, inventario: InventarioCantidad): PlanConInventario {
  // Evitamos el descuento binario de despensa: un ingrediente existente no equivale a stock ilimitado.
  const base = planificarSemana({ ...opciones, despensa: "" });
  const requeridos = new Map<IngredienteId, number>();
  for (const item of base.platos) {
    for (const [id, cantidad] of item.plato.ingredientes) {
      requeridos.set(id, (requeridos.get(id) ?? 0) + cantidad * base.personas / 2);
    }
  }
  const precios = { ...Object.fromEntries(Object.entries(PRODUCTOS).map(([id, p]) => [id, p.precio])), ...opciones.precios } as Record<IngredienteId, number>;
  const comprasNetas = [...requeridos].map(([id, requerido]) => {
    const disponible = Math.max(0, Number.isFinite(inventario[id] ?? 0) ? (inventario[id] ?? 0) : 0);
    const comprar = Math.max(0, requerido - disponible);
    return { id, nombre: PRODUCTOS[id].nombre, requerido, disponible: Math.min(disponible, requerido), comprar, unidad: PRODUCTOS[id].unidad === "unidad" ? "unidad" : "g", costo: Math.round(comprar * Math.max(0, precios[id] ?? 0)) };
  }).sort((a, b) => a.nombre.localeCompare(b.nombre, "es"));
  return {
    ...base,
    comprasNetas,
    costoCompraNeta: comprasNetas.reduce((sum, p) => sum + p.costo, 0),
    costoIngredientesConsumidos: base.costoTotal,
  };
}
