import test from "node:test";
import assert from "node:assert/strict";
import { consolidarComprasCuantificadas } from "../src/lib/compras-cantidades.ts";
const arroz = { id: "arroz", nombre: "Arroz", cantidad: 150, unidad: "g" };
test("No duplicar la misma planificación", () => {
 const a = consolidarComprasCuantificadas([], [arroz], "Plan", "plan-1", 100);
 const b = consolidarComprasCuantificadas(a.items, [arroz], "Plan", "plan-1", 200);
 assert.equal(b.modificados, 0);
 assert.equal(b.items[0].cantidad, 150);
});
