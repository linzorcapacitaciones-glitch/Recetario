import test from "node:test";
import assert from "node:assert/strict";
import {
  planificarSemana, interpretarDespensa, CATALOGO, PRODUCTOS, PRECIOS_REFERENCIA
} from "../src/lib/planificador-semanal.ts";

test("Planificador: catálogo diverso y completo", () => {
  assert.ok(CATALOGO.length >= 16);
  assert.equal(new Set(CATALOGO.map(p => p.id)).size, CATALOGO.length);
  for (const plato of CATALOGO) {
    assert.ok(plato.ingredientes.length >= 3);
    for (const [id,cantidad] of plato.ingredientes) {
      assert.ok(PRODUCTOS[id]);
      assert.ok(cantidad > 0);
    }
  }
});
test("Planificador: 7 días y almuerzo+cena sin repeticiones", () => {
  const r=planificarSemana({personas:4,dias:7,comidasPorDia:2,presupuesto:90000,despensa:"arroz, pollo, huevos"});
  assert.equal(r.platos.length,14);
  assert.equal(new Set(r.platos.map(x=>x.plato.id)).size,14);
  assert.equal(r.platos.filter(p=>p.dia==="Lunes").length,2);
  assert.ok(r.costoTotal>0);
  assert.ok(r.compras.length>0);
});
test("Planificador: reconoce plurales y acentos de despensa", () => {
  const ids=interpretarDespensa("huevos, tomates, atún, fideos, patatas");
  assert.deepEqual([...ids].sort(),["huevo","tomate","atun","pasta","papa"].sort());
});
test("Planificador: compra acumulada y precios consistentes", () => {
  const a=planificarSemana({personas:2,dias:3,comidasPorDia:1,presupuesto:15000,despensa:""});
  const b=planificarSemana({personas:2,dias:3,comidasPorDia:1,presupuesto:15000,despensa:"arroz, huevos, tomate, pollo, lentejas, pasta"});
  assert.ok(a.costoCompraEstimada>=b.costoCompraEstimada);
  assert.equal(a.costoTotal,a.platos.reduce((sum,p)=>sum+p.costoIngredientes,0));
  assert.equal(a.costoCompraEstimada,a.compras.reduce((sum,p)=>sum+p.costo,0));
});
test("Planificador: al duplicar precios también se eleva el gasto", () => {
  const entradas={personas:2,dias:5,comidasPorDia:1,presupuesto:0,despensa:""};
  const base=planificarSemana(entradas);
  const precios=Object.fromEntries(Object.entries(PRECIOS_REFERENCIA).map(([id,n])=>[id,n*2]));
  const caro=planificarSemana({...entradas,precios});
  assert.ok(caro.costoTotal>=base.costoTotal*1.95);
});
test("Planificador: presupuesto insuficiente se informa explícitamente", () => {
  const r=planificarSemana({personas:4,dias:7,comidasPorDia:2,presupuesto:1000,despensa:""});
  assert.equal(r.excedePresupuesto,true);
  assert.equal(r.platos.length,14);
});
