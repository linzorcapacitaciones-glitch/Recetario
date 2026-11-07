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

test("La clasificación funciona con variantes y productos mixtos",()=>{
 const r=detectarAlergenos(["150 ml de leche de coco","80 g de quesos","100 g de cuscús","40 g de tahini","150 g de tofu"]);
 assert.ok(r.confirmados.includes("Leche y derivados"));
 assert.ok(r.confirmados.includes("Trigo (gluten)"));
 assert.ok(r.confirmados.includes("Sésamo"));
 assert.ok(r.confirmados.includes("Soya"));
});
test("El aviso de ausencia de coincidencias no debe interpretarse como libre de alérgenos",()=>{
 const r=detectarAlergenos(["200 g de zanahoria","150 g de arroz"]);
 assert.deepEqual(r.confirmados,[]);
 assert.deepEqual(r.verificar,[]);
});
