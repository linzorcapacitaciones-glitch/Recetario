export type ProductoCompra = { id: string; nombre: string; cantidad: number; unidad: "g" | "unidad" };
export type ItemCompraCuantificada = { id: string; nombre: string; origen: string; comprado: boolean; productoId?: string; cantidad?: number; unidad?: "g" | "unidad"; fuentes?: string[] };
const rotulo = (cantidad: number, unidad: "g" | "unidad", nombre: string) =>
  (Math.round(cantidad * 10) / 10) + (unidad === "g" ? " g de " : cantidad === 1 ? " unidad de " : " unidades de ") + nombre;

export function consolidarComprasCuantificadas(
  actuales: ItemCompraCuantificada[], productos: ProductoCompra[], origen: string, fuente: string, ahora: number
): { items: ItemCompraCuantificada[]; modificados: number } {
  const items = actuales.map(i => ({ ...i, fuentes: i.fuentes ? [...i.fuentes] : undefined }));
  const entradas = new Map<string, ProductoCompra>();
  for (const p of productos) {
    if (!p.id.trim() || !p.nombre.trim() || !Number.isFinite(p.cantidad) || p.cantidad <= 0 || (p.unidad !== "g" && p.unidad !== "unidad")) continue;
    const key = p.id + ":" + p.unidad;
    entradas.set(key, { ...p, cantidad: (entradas.get(key)?.cantidad ?? 0) + p.cantidad });
  }
  let modificados = 0;
  for (const p of entradas.values()) {
    const index = items.findIndex(i => i.productoId === p.id && i.unidad === p.unidad);
    if (index >= 0) {
      const previo = items[index]!;
      if (previo.fuentes?.includes(fuente)) continue;
      const cantidad = Math.round(((previo.cantidad ?? 0) + p.cantidad) * 10) / 10;
      items[index] = { ...previo, cantidad, nombre: rotulo(cantidad, p.unidad, p.nombre), comprado: false,
        origen: previo.origen === origen ? origen : "Varios planes", fuentes: [...(previo.fuentes ?? []), fuente] };
    } else {
      items.push({ id: ahora + "-plan-" + items.length + "-" + p.id, nombre: rotulo(p.cantidad, p.unidad, p.nombre),
        origen, comprado: false, productoId: p.id, cantidad: p.cantidad, unidad: p.unidad, fuentes: [fuente] });
    }
    modificados++;
  }
  return { items, modificados };
}
