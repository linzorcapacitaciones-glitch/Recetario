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
  const r=buscarRecetasGratis("tamarindo, rambután, wasabi");
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

test("Lote 4 incorpora 20 recetas únicas con instrucciones",async()=>{
 const {RECETAS_LOTE_4}=await import("../src/lib/recetas-lote-4.ts");
 assert.equal(RECETAS_LOTE_4.length,20);
 assert.equal(new Set(RECETAS_LOTE_4.map(x=>x.titulo.toLowerCase())).size,20);
 assert.ok(RECETAS_LOTE_4.every(x=>x.pasos.length>=4&&x.ingredientes.length>=3));
 assert.ok(TOTAL_RECETAS_CATALOGO>=135,`Total: ${TOTAL_RECETAS_CATALOGO}`);
});

test("Lote 5 agrega 25 recetas con títulos únicos y cuatro pasos",async()=>{
 const {RECETAS_LOTE_5}=await import("../src/lib/recetas-lote-5.ts");
 assert.equal(RECETAS_LOTE_5.length,25);
 assert.equal(new Set(RECETAS_LOTE_5.map(x=>x.titulo.toLowerCase())).size,25);
 assert.ok(RECETAS_LOTE_5.every(x=>x.ingredientes.length>=3&&x.pasos.length>=4));
 assert.ok(TOTAL_RECETAS_CATALOGO>=160,`Total: ${TOTAL_RECETAS_CATALOGO}`);
});

test("Buscador reconoce pescado, brócoli y otros ingredientes nuevos",()=>{
 const r=buscarRecetasGratis("merluza papas limón");
 assert.ok(r.recetas.length>0);
 assert.ok(r.ingredientesReconocidos.includes("merluza"));
 assert.ok(extraerIngredientes("brócoli, champiñones y pimentones").includes("brocoli"));
});
test("Lote 6 incorpora 15 recetas con ingredientes nuevos",async()=>{
 const {RECETAS_LOTE_6}=await import("../src/lib/recetas-lote-6.ts");
 assert.equal(RECETAS_LOTE_6.length,15);
 assert.equal(new Set(RECETAS_LOTE_6.map(x=>x.titulo.toLowerCase())).size,15);
 assert.ok(RECETAS_LOTE_6.every(x=>x.ingredientes.length>=3&&x.pasos.length>=4));
 assert.ok(TOTAL_RECETAS_CATALOGO>=175,`Total: ${TOTAL_RECETAS_CATALOGO}`);
});

test("Lote 7 incorpora 25 recetas y alcanza 200 fichas previstas",async()=>{
 const {RECETAS_LOTE_7}=await import("../src/lib/recetas-lote-7.ts");
 assert.equal(RECETAS_LOTE_7.length,25);
 assert.equal(new Set(RECETAS_LOTE_7.map(x=>x.titulo.toLowerCase())).size,25);
 assert.ok(RECETAS_LOTE_7.every(x=>x.pasos.length>=4&&x.ingredientes.length>=3));
 assert.ok(TOTAL_RECETAS_CATALOGO>=200,`Total: ${TOTAL_RECETAS_CATALOGO}`);
});

test("Lote 8 contiene veinte preparaciones y amplía el catálogo",async()=>{
 const {RECETAS_LOTE_8}=await import("../src/lib/recetas-lote-8.ts");
 assert.equal(RECETAS_LOTE_8.length,20);
 assert.equal(new Set(RECETAS_LOTE_8.map(r=>r.titulo.toLowerCase())).size,20);
 assert.ok(RECETAS_LOTE_8.every(r=>r.pasos.length>=4&&r.ingredientes.length>=3));
 assert.ok(TOTAL_RECETAS_CATALOGO>=220,`Total: ${TOTAL_RECETAS_CATALOGO}`);
});

test("Lote 9 aporta 25 recetas y nueva meta de 500",async()=>{
 const {RECETAS_LOTE_9}=await import("../src/lib/recetas-lote-9.ts");
 assert.equal(RECETAS_LOTE_9.length,25);
 assert.equal(new Set(RECETAS_LOTE_9.map(r=>r.titulo.toLowerCase())).size,25);
 assert.ok(RECETAS_LOTE_9.every(r=>r.pasos.length>=4&&r.ingredientes.length>=3));
 assert.ok(TOTAL_RECETAS_CATALOGO>=245,`Total: ${TOTAL_RECETAS_CATALOGO}`);
 assert.ok(extraerIngredientes("quinoa, berenjenas, arvejas").includes("quinoa"));
});

test("Lote 10 suma treinta preparaciones y alcanza 275 recetas",async()=>{
 const {RECETAS_LOTE_10}=await import("../src/lib/recetas-lote-10.ts");
 assert.equal(RECETAS_LOTE_10.length,30);
 assert.equal(new Set(RECETAS_LOTE_10.map(r=>r.titulo.toLowerCase())).size,30);
 assert.ok(RECETAS_LOTE_10.every(r=>r.pasos.length>=4&&r.ingredientes.length>=3));
 assert.ok(TOTAL_RECETAS_CATALOGO>=275,`Total: ${TOTAL_RECETAS_CATALOGO}`);
 assert.ok(extraerIngredientes("acelga y polenta").includes("acelga"));
});

test("Lote 11 incorpora treinta recetas internacionales y supera 300",async()=>{
 const {RECETAS_LOTE_11}=await import("../src/lib/recetas-lote-11.ts");
 assert.equal(RECETAS_LOTE_11.length,30);
 assert.equal(new Set(RECETAS_LOTE_11.map(r=>r.titulo.toLowerCase())).size,30);
 assert.ok(RECETAS_LOTE_11.every(r=>r.pasos.length>=4&&r.ingredientes.length>=3));
 assert.ok(TOTAL_RECETAS_CATALOGO>=305,`Total: ${TOTAL_RECETAS_CATALOGO}`);
 assert.ok(extraerIngredientes("tofu, aceitunas y tortillas").includes("tofu"));
});

test("Lote 12 suma veinte recetas con tiempos de preparación diferenciados",async()=>{
 const {RECETAS_LOTE_12}=await import("../src/lib/recetas-lote-12.ts");
 assert.equal(RECETAS_LOTE_12.length,20);
 assert.equal(new Set(RECETAS_LOTE_12.map(r=>r.titulo.toLowerCase())).size,20);
 assert.ok(new Set(RECETAS_LOTE_12.map(r=>r.tiempoCoccion)).size>=5);
 assert.ok(RECETAS_LOTE_12.every(r=>r.pasos.length>=4&&r.ingredientes.length>=3));
 assert.ok(TOTAL_RECETAS_CATALOGO>=325,`Total: ${TOTAL_RECETAS_CATALOGO}`);
});

test("Lote 13 incorpora 25 recetas y alcanza 350",async()=>{
 const {RECETAS_LOTE_13}=await import("../src/lib/recetas-lote-13.ts");
 assert.equal(RECETAS_LOTE_13.length,25);
 assert.equal(new Set(RECETAS_LOTE_13.map(r=>r.titulo.toLowerCase())).size,25);
 assert.ok(new Set(RECETAS_LOTE_13.map(r=>r.tiempoCoccion)).size>=5);
 assert.ok(RECETAS_LOTE_13.every(r=>r.pasos.length>=4&&r.ingredientes.length>=3));
 assert.ok(TOTAL_RECETAS_CATALOGO>=350,`Total: ${TOTAL_RECETAS_CATALOGO}`);
});

test("Lote 14 suma veinticinco recetas y alcanza 375",async()=>{
 const {RECETAS_LOTE_14}=await import("../src/lib/recetas-lote-14.ts");
 assert.equal(RECETAS_LOTE_14.length,25);
 assert.equal(new Set(RECETAS_LOTE_14.map(r=>r.titulo.toLowerCase())).size,25);
 assert.ok(new Set(RECETAS_LOTE_14.map(r=>r.tiempoCoccion)).size>=5);
 assert.ok(RECETAS_LOTE_14.every(r=>r.pasos.length>=4&&r.ingredientes.length>=3));
 assert.ok(TOTAL_RECETAS_CATALOGO>=375,`Total: ${TOTAL_RECETAS_CATALOGO}`);
});

test("Lote 15 aporta 25 preparaciones únicas y alcanza 400",async()=>{
 const {RECETAS_LOTE_15}=await import("../src/lib/recetas-lote-15.ts");
 assert.equal(RECETAS_LOTE_15.length,25);
 assert.equal(new Set(RECETAS_LOTE_15.map(r=>r.titulo.toLowerCase())).size,25);
 assert.ok(new Set(RECETAS_LOTE_15.map(r=>r.tiempoCoccion)).size>=5);
 assert.ok(RECETAS_LOTE_15.every(r=>r.pasos.length>=4&&r.ingredientes.length>=3));
 assert.ok(TOTAL_RECETAS_CATALOGO>=400,`Total: ${TOTAL_RECETAS_CATALOGO}`);
});
