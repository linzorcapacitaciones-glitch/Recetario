import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { consolidarComprasCuantificadas, firmaCompraPlan } from "../src/lib/compras-cantidades.ts";
const arroz = { id: "arroz", nombre: "Arroz", cantidad: 150, unidad: "g" };
test("Una misma planificación no duplica la compra al pulsar dos veces", () => {
 const a = consolidarComprasCuantificadas([], [arroz], "Plan", "plan-1", 100);
 const b = consolidarComprasCuantificadas(a.items, [arroz], "Plan", "plan-1", 200);
 assert.equal(b.modificados, 0);
 assert.equal(b.items[0].cantidad, 150);
});
test("Planes distintos suman cantidades del mismo producto", () => {
 const a = consolidarComprasCuantificadas([], [arroz], "Plan", "plan-1", 100);
 const b = consolidarComprasCuantificadas(a.items, [{...arroz, cantidad:250}], "Plan", "plan-2", 200);
 assert.equal(b.items.length, 1);
 assert.equal(b.items[0].cantidad, 400);
 assert.equal(b.items[0].nombre, "400 g de Arroz");
});
test("Productos diferentes y cantidades invalidas no se mezclan", () => {
 const b = consolidarComprasCuantificadas([], [arroz, {...arroz, cantidad:-1}, {id:"huevo",nombre:"Huevo",cantidad:3,unidad:"unidad"}], "Plan", "plan-1", 100);
 assert.equal(b.items.length, 2);
 assert.equal(b.items.find(x=>x.productoId==="arroz").cantidad, 150);
});

test("Editar precios no debe crear otra fuente de compras si el plan es idéntico",()=>{
 const productos=[arroz,{id:"huevo",nombre:"Huevo",cantidad:2,unidad:"unidad"}];
 const firma1=firmaCompraPlan(2,["plato-1"],productos);
 const firma2=firmaCompraPlan(2,["plato-1"],[productos[1],productos[0]]);
 assert.equal(firma1,firma2,"El orden de productos no cambia la firma");
 const primera=consolidarComprasCuantificadas([],productos,"Plan",firma1,100);
 const segunda=consolidarComprasCuantificadas(primera.items,productos,"Plan",firma2,200);
 assert.equal(segunda.modificados,0);
 assert.equal(segunda.items.find(i=>i.productoId==="arroz").cantidad,150);
 assert.notEqual(firma1,firmaCompraPlan(2,["plato-1"],[{...arroz,cantidad:250}]));
});

test("El planificador gratuito usa compras cuantificadas y evita duplicar la misma semana",()=>{
 const codigo=readFileSync(new URL("../src/routes/plan-gratis.tsx",import.meta.url),"utf8");
 assert.match(codigo,/firmaCompraPlan\(resultado\.personas/);
 assert.match(codigo,/agregarCantidades\(productos, "Plan gratuito", fuente\)/);
 assert.doesNotMatch(codigo,/agregar\(resultado\.compras\.map/);
 const productos=[arroz,{id:"huevo",nombre:"Huevo",cantidad:2,unidad:"unidad"}];
 const fuente=firmaCompraPlan(2,["plato-a","plato-b"],productos);
 const primera=consolidarComprasCuantificadas([],productos,"Plan gratuito",fuente,100);
 const repetida=consolidarComprasCuantificadas(primera.items,productos,"Plan gratuito",fuente,200);
 assert.equal(repetida.modificados,0);
 assert.equal(repetida.items.length,2);
});
