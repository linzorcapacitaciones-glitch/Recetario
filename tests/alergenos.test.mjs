import test from "node:test";
import assert from "node:assert/strict";
import { detectarAlergenos } from "../src/lib/alergenos.ts";
test("Señala alérgenos declarados y separa los productos por verificar",()=>{
 const r=detectarAlergenos(["80 g de queso","2 huevos","180 g de pasta"]);
 assert.ok(r.confirmados.includes("Leche y derivados"));
 assert.ok(r.confirmados.includes("Huevo"));
 assert.ok(r.verificar.some(x=>x.includes("Gluten")));
});
test("La leche de coco no se identifica como leche animal",()=>{
 const r=detectarAlergenos(["150 ml de leche de coco","200 g de zanahoria"]);
 assert.ok(!r.confirmados.includes("Leche y derivados"));
});
test("El pescado y la soya se identifican",()=>{
 const r=detectarAlergenos(["140 g de atún","200 g de tofu"]);
 assert.ok(r.confirmados.includes("Pescado"));
 assert.ok(r.confirmados.includes("Soya"));
});
