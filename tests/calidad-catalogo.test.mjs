import test from "node:test";
import assert from "node:assert/strict";
import {RECETAS_DEMO} from "../src/lib/recetas-demo.ts";
import {RECETAS_ADICIONALES} from "../src/lib/recetas-adicionales.ts";
import {RECETAS_LOTE_2} from "../src/lib/recetas-lote-2.ts";
import {RECETAS_LOTE_3} from "../src/lib/recetas-lote-3.ts";
import {RECETAS_LOTE_4} from "../src/lib/recetas-lote-4.ts";
import {RECETAS_LOTE_5} from "../src/lib/recetas-lote-5.ts";
import {RECETAS_LOTE_6} from "../src/lib/recetas-lote-6.ts";
import {RECETAS_LOTE_7} from "../src/lib/recetas-lote-7.ts";
import {RECETAS_LOTE_8} from "../src/lib/recetas-lote-8.ts";
import {RECETAS_LOTE_9} from "../src/lib/recetas-lote-9.ts";
import {RECETAS_LOTE_10} from "../src/lib/recetas-lote-10.ts";
import {RECETAS_LOTE_11} from "../src/lib/recetas-lote-11.ts";
import {RECETAS_LOTE_12} from "../src/lib/recetas-lote-12.ts";
import {RECETAS_LOTE_13} from "../src/lib/recetas-lote-13.ts";
import {RECETAS_LOTE_14} from "../src/lib/recetas-lote-14.ts";
import {RECETAS_LOTE_15} from "../src/lib/recetas-lote-15.ts";
import {RECETAS_LOTE_16} from "../src/lib/recetas-lote-16.ts";
import {RECETAS_LOTE_17} from "../src/lib/recetas-lote-17.ts";
import {RECETAS_LOTE_18} from "../src/lib/recetas-lote-18.ts";
import {RECETAS_LOTE_19} from "../src/lib/recetas-lote-19.ts";
const recetas=[...RECETAS_DEMO,...RECETAS_ADICIONALES,...RECETAS_LOTE_2,...RECETAS_LOTE_3,...RECETAS_LOTE_4,...RECETAS_LOTE_5,...RECETAS_LOTE_6,...RECETAS_LOTE_7,...RECETAS_LOTE_8,...RECETAS_LOTE_9,...RECETAS_LOTE_10,...RECETAS_LOTE_11,...RECETAS_LOTE_12,...RECETAS_LOTE_13,...RECETAS_LOTE_14,...RECETAS_LOTE_15,...RECETAS_LOTE_16,...RECETAS_LOTE_17,...RECETAS_LOTE_18,...RECETAS_LOTE_19];
const normalizar=s=>s.toLowerCase().normalize("NFD").replace(/[^a-z0-9 ]/g," ").replace(/ +/g," ").trim();
test("El catálogo ampliado no contiene títulos repetidos entre lotes",()=>{
 const vistos=new Map();const duplicados=[];
 for(const r of recetas){const clave=normalizar(r.titulo);if(vistos.has(clave))duplicados.push([vistos.get(clave),r.titulo]);else vistos.set(clave,r.titulo)}
 assert.deepEqual(duplicados,[]);
});
test("Todas las fichas tienen ingredientes y pasos completos",()=>{
 for(const r of recetas){assert.ok(r.titulo?.trim(),r.id);assert.ok(r.ingredientes.length>=2,r.titulo);assert.ok(r.pasos.length>=4,r.titulo);assert.ok(r.pasos.every(p=>p.trim().length>=8),r.titulo);assert.ok(r.ingredientes.filter(x=>/[0-9]|media|medio/.test(x)).length>=2,r.titulo)}
});

test("Los últimos 50 platos no contienen instrucciones genéricas de relleno",()=>{
 const recientes=[...RECETAS_LOTE_18,...RECETAS_LOTE_19];
 const relleno=/prepara .+ y córtalo en porciones adecuadas|según su textura|mezcla cuidadosamente los ingredientes|sirve a la temperatura adecuada|sirve la preparación para dos personas/i;
 for(const receta of recientes)for(const paso of receta.pasos)assert.doesNotMatch(paso,relleno,receta.titulo);
});

test("Lotes antiguos incluyen tiempos diferenciados y no un valor fijo",()=>{
 for(const lote of [RECETAS_LOTE_6,RECETAS_LOTE_7,RECETAS_LOTE_8,RECETAS_LOTE_9,RECETAS_LOTE_10,RECETAS_LOTE_11]){
  assert.ok(new Set(lote.map(r=>r.tiempoCoccion)).size>=2,"Lote sin variación en cocción");
 }
});

test("Ninguna receta presenta pasos nulos o tiempos inválidos",()=>{
 for(const r of recetas){
  assert.ok(r.pasos.every(p=>typeof p==="string"&&p.trim().length>=8),r.titulo);
  const preparacion=Number.parseInt(r.tiempoPreparacion,10),coccion=Number.parseInt(r.tiempoCoccion,10);
  assert.ok(Number.isFinite(preparacion)&&preparacion>=0&&preparacion<=240,r.titulo);
  assert.ok(Number.isFinite(coccion)&&coccion>=0&&coccion<=240,r.titulo);
  assert.ok(r.ingredientes.every(i=>typeof i==="string"&&i.trim().length>3),r.titulo);
 }
});
test("Ensaladas sin cocción no deben exigir cocer legumbres secas",()=>{
 for(const r of recetas){
  if(!/ensalada/i.test(r.titulo)||Number.parseInt(r.tiempoCoccion,10)!==0)continue;
  assert.ok(r.pasos.every(p=>!/cuece (los|las) (garbanzos|porotos|lentejas) (previamente remojados|hasta que estén tiernos)/i.test(p)),r.titulo);
 }
});

test("Legumbres de preparación rápida declaran que están cocidas",()=>{
 for(const receta of [...RECETAS_LOTE_18,...RECETAS_LOTE_19]){
  for(const ingrediente of receta.ingredientes){
   if(/de (garbanzos|porotos)/i.test(ingrediente))assert.match(ingrediente,/cocidos y escurridos/i,receta.titulo);
  }
 }
});

test("Las 500 fichas visibles del buscador tienen títulos normalizados distintos", async () => {
 const { TOTAL_RECETAS_CATALOGO } = await import("../src/lib/buscador-gratis.ts");
 assert.equal(TOTAL_RECETAS_CATALOGO, 500, "El catálogo debe contener exactamente 500 títulos únicos");
});

test("Ningún lote conserva instrucciones genéricas detectadas en la revisión", () => {
 const relleno = /ingrediente principal ya cocido|saltea el acompañamiento|cocina el acompañamiento|tritúralo si corresponde|hasta integrar los sabores|cuece el arroz como acompañamiento|sirve a la temperatura adecuada|mezcla cuidadosamente los ingredientes/i;
 for (const receta of recetas) {
  for (const paso of receta.pasos) assert.doesNotMatch(paso, relleno, receta.titulo);
 }
});

test("Recetas con los mismos ingredientes tienen técnicas culinarias diferenciadas", () => {
 const tortilla=RECETAS_LOTE_16.find(r=>r.titulo==="Tortilla de papas y arvejas al perejil");
 const budin=RECETAS_LOTE_16.find(r=>r.titulo==="Budín de avena y manzana al horno");
 const pure=RECETAS_LOTE_17.find(r=>r.titulo==="Puré rústico de arvejas y papa con menta");
 assert.ok(tortilla?.pasos.some(p=>/cuajado/i.test(p)));
 assert.ok(budin?.pasos.some(p=>/hornea a 180 °C durante 25 a 30 minutos/i.test(p)));
 assert.ok(pure?.pasos.some(p=>/machaca/i.test(p)));
 assert.ok(!recetas.some(r=>["Ensalada tibia de papa y arvejas","Panqueques de avena y manzana","Crema de arvejas y menta"].includes(r.titulo)));
});

test("Todas las cantidades de ingredientes están definidas", () => {
 for (const receta of recetas) {
  for (const ingrediente of receta.ingredientes) {
   assert.doesNotMatch(ingrediente, /\\bundefined\\b|\\bnull\\b|\\bNaN\\b/i, receta.titulo);
  }
 }
 const tallarines=RECETAS_LOTE_10.find(r=>r.titulo==="Tallarines al pesto de espinaca");
 assert.ok(tallarines?.ingredientes.some(i=>/150 g de espinaca/i.test(i)));
});
