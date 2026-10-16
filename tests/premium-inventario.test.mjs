import test from "node:test";
import assert from "node:assert/strict";
import { calcularPlanConInventario } from "../src/lib/premium-inventario.ts";

const opciones={personas:2,dias:3,comidasPorDia:1,presupuesto:30000,despensa:"",variante:0};
test("Las compras netas nunca son negativas",()=>{
 const plan=calcularPlanConInventario(opciones,{arroz:100000,papa:100000});
 assert.ok(plan.comprasNetas.every(item=>item.comprar>=0 && item.costo>=0));
});
test("El inventario descuenta exactamente lo disponible",()=>{
 const base=calcularPlanConInventario(opciones,{});
 const primero=base.comprasNetas.find(item=>item.requerido>0);
 assert.ok(primero);
 const conStock=calcularPlanConInventario(opciones,{[primero.id]:primero.requerido/2});
 const item=conStock.comprasNetas.find(x=>x.id===primero.id);
 assert.ok(item);
 assert.equal(item.comprar,primero.requerido/2);
 assert.ok(conStock.costoCompraNeta<=base.costoCompraNeta);
});
test("Las porciones incrementan los requerimientos",()=>{
 const dos=calcularPlanConInventario(opciones,{});
 const cuatro=calcularPlanConInventario({...opciones,personas:4},{});
 assert.ok(cuatro.costoIngredientesConsumidos>=dos.costoIngredientesConsumidos);
});
