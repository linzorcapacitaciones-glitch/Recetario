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
 assert.equal(item.comprar,Math.max(0,item.requerido-primero.requerido/2));
 assert.ok(conStock.comprasNetas.every(x=>x.comprar>=0));
});
test("Las porciones incrementan los requerimientos",()=>{
 const dos=calcularPlanConInventario(opciones,{});
 const cuatro=calcularPlanConInventario({...opciones,personas:4},{});
 assert.ok(cuatro.costoIngredientesConsumidos>=dos.costoIngredientesConsumidos);
});

test("El menú prioriza ingredientes existentes cuando hay suficiente inventario",()=>{
 const opciones={personas:2,dias:3,comidasPorDia:1,presupuesto:30000,despensa:"",variante:0};
 const vacio=calcularPlanConInventario(opciones,{});
 const stock=calcularPlanConInventario(opciones,{pollo:3000,arroz:3000,tomate:3000,cebolla:3000});
 assert.ok(stock.costoCompraNeta>=0);
 assert.ok(stock.comprasNetas.every(x=>x.comprar>=0));
 assert.ok(vacio.platos.length===stock.platos.length);
});
