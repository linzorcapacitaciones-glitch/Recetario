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
   assert.doesNotMatch(ingrediente, /\bundefined\b|\bnull\b|\bNaN\b/i, receta.titulo);
  }
 }
 const tallarines=RECETAS_LOTE_10.find(r=>r.titulo==="Tallarines al pesto de espinaca");
 assert.ok(tallarines?.ingredientes.some(i=>/150 g de espinaca/i.test(i)));
});

test("Cuatro preparaciones similares se diferencian por su técnica", () => {
 const casos=[
  [RECETAS_LOTE_12,"Revuelto de espinaca, tomate y queso",/removiendo continuamente/i],
  [RECETAS_LOTE_14,"Croquetas horneadas de porotos negros y avena",/hornea a 190 °C durante 20 a 25 minutos/i],
  [RECETAS_LOTE_15,"Pastel suave de brócoli y papas con leche",/extiende la mezcla en una fuente/i],
  [RECETAS_LOTE_16,"Tortitas de papa con espinaca y queso",/dora las tortitas/i],
 ];
 for (const [lote,titulo,tecnica] of casos) {
  const receta=lote.find(r=>r.titulo===titulo);
  assert.ok(receta,titulo);
  assert.ok(receta.pasos.some(p=>tecnica.test(p)),titulo);
 }
 const croquetas=RECETAS_LOTE_14.find(r=>r.titulo==="Croquetas horneadas de porotos negros y avena");
 assert.ok(croquetas.ingredientes.some(i=>/porotos negros cocidos y escurridos/i.test(i)));
});


test("Las recetas del lote 3 especifican garbanzos ya cocidos", () => {
 for (const receta of RECETAS_LOTE_3) {
  if (!/garbanzo/i.test(receta.titulo)) continue;
  assert.ok(receta.ingredientes.some(i=>/garbanzos cocidos y escurridos/i.test(i)),receta.titulo);
 }
});


test("El falafel diferencia garbanzos secos y remojo obligatorio", () => {
 const falafel=RECETAS_LOTE_11.find(r=>r.titulo==="Falafel al horno");
 assert.ok(falafel);
 assert.ok(falafel.ingredientes.some(i=>/garbanzos secos.*12 horas/i.test(i)));
 assert.ok(falafel.pasos.some(p=>/remoja.*12 horas/i.test(p)));
 assert.equal(Number.parseInt(falafel.tiempoCoccion,10),35);
});


test("Legumbres ya cocidas se identifican en la lista de ingredientes",()=>{
 const lotes=[RECETAS_LOTE_4,RECETAS_LOTE_5,RECETAS_LOTE_6,RECETAS_LOTE_7,RECETAS_LOTE_8,RECETAS_LOTE_9,RECETAS_LOTE_10,RECETAS_LOTE_12,RECETAS_LOTE_13,RECETAS_LOTE_15,RECETAS_LOTE_16,RECETAS_LOTE_17];
 for(const receta of lotes.flat()){
  const pasos=receta.pasos.join(" ");
  for(const [patron,ingrediente] of [[/garbanzos (?:previamente |ya )?cocidos/i,/de garbanzos cocidos y escurridos/i],[/lentejas (?:previamente |ya )?cocidas/i,/de lentejas cocidas y escurridas/i],[/porotos (?:previamente |ya )?cocidos/i,/de porotos cocidos y escurridos/i]]){
   if(patron.test(pasos))assert.ok(receta.ingredientes.some(i=>ingrediente.test(i)),receta.titulo);
  }
 }
});


test("La crema de zanahoria y coco especifica leche de coco",()=>{
 const receta=RECETAS_LOTE_13.find(r=>r.titulo==="Crema de zanahoria y coco");
 assert.ok(receta);
 assert.ok(receta.ingredientes.some(i=>/150 ml de leche de coco/i.test(i)));
});


test("Horneados críticos detallan tiempo orientativo y cocción completa",()=>{
 const casos=[
  [RECETAS_LOTE_3,"Hamburguesas de garbanzos al horno",/200 °C durante 20 a 25 minutos/],
  [RECETAS_LOTE_3,"Pastel de papas con lentejas",/190 °C durante 15 a 20 minutos/],
  [RECETAS_LOTE_4,"Huevos al horno sobre espinacas",/190 °C durante 12 a 18 minutos/],
  [RECETAS_LOTE_5,"Budín de zapallo y huevo",/180 °C durante 25 a 35 minutos/]
 ];
 for(const [lote,titulo,patron] of casos){const receta=lote.find(r=>r.titulo===titulo);assert.ok(receta,titulo);assert.ok(receta.pasos.some(p=>patron.test(p)),titulo)}
});

test("Platos de varias cocciones no conservan duraciones globales subestimadas",()=>{
 const casos=[
  [RECETAS_LOTE_3,"Pastel de papas con lentejas",65],
  [RECETAS_LOTE_3,"Zapallo relleno de garbanzos",50],
  [RECETAS_LOTE_3,"Arroz caldoso con lentejas y tomate",50],
  [RECETAS_LOTE_4,"Pastel de arroz con pollo",55],
  [RECETAS_LOTE_4,"Papas rellenas de espinaca y queso",65],
  [RECETAS_LOTE_4,"Papas al horno con pollo desmenuzado",65],
  [RECETAS_LOTE_4,"Zapallo al horno con lentejas especiadas",55],
  [RECETAS_LOTE_5,"Papas rellenas de lentejas",65],
  [RECETAS_LOTE_5,"Pollo estofado con lentejas",55],
  [RECETAS_LOTE_5,"Pasta al horno con pollo y tomate",50],
  [RECETAS_LOTE_5,"Tortilla de lentejas y cebolla",50],
  [RECETAS_LOTE_5,"Lentejas con arroz y espinaca",55]
 ];
 for(const [lote,titulo,minutos] of casos){
  const receta=lote.find(r=>r.titulo===titulo);
  assert.ok(receta,titulo);
  assert.ok(Number.parseInt(receta.tiempoCoccion,10)>=minutos,
    `${titulo}: revisar tiempo de cocción de varias etapas`);
 }
});

test("Lote 18: títulos, ingredientes y técnicas de cocción son coherentes",()=>{
 const buscar=titulo=>RECETAS_LOTE_18.find(r=>r.titulo===titulo);
 const quinoa=buscar("Ensalada de quinoa con zanahoria asada");
 assert.ok(quinoa?.pasos.some(p=>/hornéala a 200 °C durante 20 a 25 minutos/i.test(p)));
 const arroz=buscar("Pollo con champiñones y arroz integral");
 assert.ok(arroz?.ingredientes.some(i=>/150 g de arroz integral/i.test(i)));
 assert.ok(arroz?.pasos.some(p=>/cuece el arroz integral/i.test(p)));
 assert.ok(Number.parseInt(arroz.tiempoCoccion,10)>=45);
 const acelga=buscar("Tortilla de acelga y queso");
 assert.ok(acelga?.pasos.some(p=>/pica las hojas/i.test(p)));
 assert.ok(!acelga?.pasos.some(p=>/pícalas hojas/i.test(p)));
 const pasta=buscar("Pasta con tomate asado y ricota");
 assert.ok(pasta?.pasos.some(p=>/ásalo a 200 °C durante 15 a 20 minutos/i.test(p)));
 assert.ok(pasta?.pasos.some(p=>/mezcla la pasta escurrida con el tomate asado/i.test(p)));
});
