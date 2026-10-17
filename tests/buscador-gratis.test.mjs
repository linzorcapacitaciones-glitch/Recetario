import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { buscarRecetasGratis, extraerIngredientes, TOTAL_RECETAS_CATALOGO } from "../src/lib/buscador-gratis.ts";

test("Catálogo local supera la demo estática de diez recetas", () => {
  assert.ok(TOTAL_RECETAS_CATALOGO >= 25);
});
test("Buscar con arroz, pollo y tomate cambia realmente las coincidencias", () => {
  const a=buscarRecetasGratis("pollo, arroz, tomate");
  const b=buscarRecetasGratis("espinaca, queso, pasta");
  assert.ok(a.recetas.length>=1 && b.recetas.length>=1);
  assert.notEqual(a.recetas[0]?.titulo,b.recetas[0]?.titulo);
  assert.ok(a.recetas.every(r=>r.pasos.length>=4));
  assert.ok(a.recetas.every(r=>r.ingredientesCoincidentes?.length));
  assert.ok(a.recetas.every(r=>(r.porcentajeCoincidencia ?? -1)>=0 && (r.porcentajeCoincidencia ?? 101)<=100));
});
test("Acentos, plurales y conjunciones se reconocen", () => {
  assert.deepEqual(extraerIngredientes("atún, huevos y papas"),["atun","huevo","papa"]);
});
test("Ingredientes desconocidos no devuelven diez recetas inventadas", () => {
  const r=buscarRecetasGratis("camarones, coco, limon");
  assert.equal(r.recetas.length,0);
  assert.equal(r.ingredientesReconocidos.length,0);
});
test("Filtro de tiempo se respeta", () => {
  const r=buscarRecetasGratis("huevo, arroz, papa, tomate, espinaca",{tiempo:"15"});
  assert.ok(r.recetas.every(x=>
    Number(x.tiempoPreparacion.replace(/\D/g,""))+Number(x.tiempoCoccion.replace(/\D/g,""))<=15));
});
test("Backend facturable permanece cerrado por defecto", () => {
  const src=readFileSync(new URL("../src/lib/recipes.functions.ts",import.meta.url),"utf8");
  assert.match(src,/RECIPE_AI_ENABLED/);
  assert.match(src,/!== "true"/);
});

test("El catálogo ampliado contiene al menos 100 recetas únicas", () => {
  assert.ok(TOTAL_RECETAS_CATALOGO >= 100, `Solo hay ${TOTAL_RECETAS_CATALOGO} recetas`);
});
test("El buscador encuentra recetas con legumbres", () => {
  const r=buscarRecetasGratis("garbanzos, cebolla, tomate");
  assert.ok(r.recetas.length>0);
  assert.ok(r.recetas.every(x=>x.pasos.length>=4));
});

test("Búsqueda natural sin comas reconoce arroz pollo papas", () => {
 const r=buscarRecetasGratis("arroz pollo papas");
 assert.deepEqual(extraerIngredientes("arroz pollo papas"),["arroz","pollo","papa"]);
 assert.ok(r.recetas.length>0);
 assert.ok(r.ingredientesReconocidos.includes("Arroz"));
 assert.equal(r.ignorados.length,0);
});
test("Búsqueda natural reconoce frases con tengo y conjunciones", () => {
 const r=buscarRecetasGratis("tengo arroz y pollo en casa");
 assert.ok(r.recetas.length>0);
 assert.ok(r.ingredientesReconocidos.includes("Pollo"));
});

test("El lote tres incluye quince recetas con instrucciones específicas", async () => {
 const { RECETAS_LOTE_3 } = await import("../src/lib/recetas-lote-3.ts");
 assert.equal(RECETAS_LOTE_3.length,15);
 assert.equal(new Set(RECETAS_LOTE_3.map(r=>r.titulo.toLowerCase())).size,15);
 assert.ok(RECETAS_LOTE_3.every(r=>r.pasos.length>=4 && r.ingredientes.length>=3));
 assert.ok(TOTAL_RECETAS_CATALOGO>=115);
});
