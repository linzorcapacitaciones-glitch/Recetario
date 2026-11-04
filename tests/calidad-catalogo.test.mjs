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
  for(const [patron,ingrediente] of [[/garbanzos (?:previamente |ya )?cocidos/i,/de garbanzos cocidos y escurridos/i],[/lentejas (?:previamente |ya )?cocidas/i,/de lentejas cocidas y escurridas/i],[/porotos (?:previamente |ya )?cocidos/i,/de porotos(?: negros)? cocidos y escurridos/i]]){
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

test("Lote 19: las técnicas y el montaje corresponden al plato anunciado",()=>{
 const buscar=t=>RECETAS_LOTE_19.find(r=>r.titulo===t);
 const hamburguesas=buscar("Hamburguesas de garbanzos con betarraga");
 assert.ok(hamburguesas?.pasos.some(p=>/forma hamburguesas compactas/i.test(p)));
 assert.ok(hamburguesas?.pasos.some(p=>/cocina las hamburguesas/i.test(p)));
 const sopa=buscar("Sopa de choclo con pollo y perejil");
 assert.ok(sopa?.pasos.some(p=>/devuélvelo al caldo/i.test(p)));
 const crema=buscar("Crema de zanahoria y jengibre con coco");
 assert.ok(crema?.pasos.some(p=>/tritura la zanahoria cocida/i.test(p)));
 const zapallitos=buscar("Zapallitos rellenos de lentejas");
 assert.ok(zapallitos?.pasos.some(p=>/rellena las mitades/i.test(p)));
 const tacos=buscar("Tacos de tofu con pimentón y palta");
 assert.ok(tacos?.pasos.some(p=>/rellena las tortillas/i.test(p)));
 const omelette=buscar("Omelette de acelga y tomate");
 assert.ok(omelette?.pasos.some(p=>/dobla y cocina hasta que el huevo esté completamente cuajado/i.test(p)));
 const berenjena=buscar("Berenjena al horno con garbanzos y yogur");
 assert.ok(berenjena?.pasos.some(p=>/sirve la berenjena asada con los garbanzos/i.test(p)));
 const pasta=buscar("Pasta con arvejas y ricota al limón");
 assert.ok(pasta?.pasos.some(p=>/mezcla la pasta escurrida con las arvejas cocidas/i.test(p)));
});

test("Lote 18: crema, sopa, omelette y ensaladas ejecutan su técnica",()=>{
 const buscar=t=>RECETAS_LOTE_18.find(r=>r.titulo===t);
 const crema=buscar("Crema de zanahoria y papa con perejil");
 assert.ok(crema?.pasos.some(p=>/tritura las verduras/i.test(p)));
 const sopa=buscar("Sopa de lentejas con zapallo");
 assert.ok(sopa?.pasos.some(p=>/ajusta el caldo/i.test(p)));
 const huevo=buscar("Quinoa con espinaca y huevo duro");
 assert.ok(huevo?.pasos.some(p=>/cuece los huevos en agua hirviendo/i.test(p)));
 assert.ok(!huevo?.pasos.some(p=>/bate los huevos/i.test(p)));
 const pimenton=buscar("Arroz con choclo y pimentón salteado");
 assert.ok(pimenton?.pasos.some(p=>/saltéalo en sartén/i.test(p)));
 const tacos=buscar("Tacos de porotos negros y palta");
 assert.ok(tacos?.pasos.some(p=>/rellena las tortillas calientes/i.test(p)));
 const pure=buscar("Pollo con puré de arvejas");
 assert.ok(pure?.pasos.some(p=>/machaca las arvejas y las papas cocidas/i.test(p)));
 const berenjenas=buscar("Berenjenas gratinadas con tomate");
 assert.ok(berenjenas?.pasos.some(p=>/gratina en el horno/i.test(p)));
 const omelette=buscar("Omelette de tomate y albahaca");
 assert.ok(omelette?.pasos.some(p=>/dobla el omelette/i.test(p)));
});

test("Dos platos con tofu, champiñones y arroz tienen técnicas diferentes",()=>{
 const salteado=RECETAS_LOTE_11.find(r=>r.titulo==="Salteado de tofu y champiñones");
 const arroz=RECETAS_LOTE_16.find(r=>r.titulo==="Arroz con champiñones y tofu");
 assert.ok(salteado && arroz);
 assert.match(salteado.pasos.join(" "),/sobre el arroz/i);
 assert.match(arroz.pasos.join(" "),/arroz crudo/i);
 assert.match(arroz.pasos.join(" "),/tapa y cocina a fuego bajo durante 15 a 20 minutos/i);
 assert.ok(Number.parseInt(arroz.tiempoCoccion,10)>=30);
});

test("Las pizzas incluyen levadura, fermentación y tiempo de horno verificable",()=>{
 for(const titulo of ["Pizza casera de verduras","Pizza de champiñones y espinaca"]){
  const receta=RECETAS_LOTE_11.find(r=>r.titulo===titulo);
  assert.ok(receta,titulo);
  assert.ok(receta.ingredientes.some(i=>/5 g de levadura/i.test(i)),titulo);
  assert.ok(receta.pasos.some(p=>/fermentar.*45 minutos/i.test(p)),titulo);
  assert.ok(receta.pasos.some(p=>/220 °C durante 15 a 20 minutos/i.test(p)),titulo);
  assert.ok(Number.parseInt(receta.tiempoPreparacion,10)>=60,titulo);
 }
});

test("Lote 8: tiempos de horno y legumbres precocidas coherentes",()=>{
 const buscar=t=>RECETAS_LOTE_8.find(r=>r.titulo===t);
 const porotos=buscar("Porotos con verduras asadas");
 assert.ok(porotos?.ingredientes.some(i=>/porotos cocidos y escurridos/i.test(i)));
 assert.ok(porotos?.pasos.some(p=>/20 a 25 minutos/i.test(p)));
 const papas=buscar("Papas asadas con atún y yogur");
 assert.ok(papas?.pasos.some(p=>/45 a 55 minutos/i.test(p)));
 assert.ok(Number.parseInt(papas.tiempoCoccion,10)>=55);
 const pollo=buscar("Pollo al horno con brócoli");
 assert.ok(pollo?.pasos.some(p=>/25 a 35 minutos/i.test(p)));
 assert.ok(pollo?.pasos.some(p=>/74 °C/i.test(p)));
});

test("Cremas de zanahoria y omelettes similares tienen ingredientes o técnicas diferenciadas",()=>{
 const crema=RECETAS_LOTE_13.find(r=>r.titulo==="Crema de zanahoria y coco");
 const cremaJengibre=RECETAS_LOTE_19.find(r=>r.titulo==="Crema de zanahoria y jengibre con coco");
 assert.ok(crema && cremaJengibre);
 assert.ok(crema.pasos.some(p=>/ásalas a 200 °C durante 25 a 30 minutos/i.test(p)));
 assert.ok(!crema.ingredientes.some(i=>/jengibre/i.test(i)));
 assert.ok(cremaJengibre.ingredientes.some(i=>/jengibre/i.test(i)));
 assert.ok(Number.parseInt(crema.tiempoCoccion,10)>=40);
 const omelette=RECETAS_LOTE_13.find(r=>r.titulo==="Omelette de queso y tomate");
 const omeletteAlbahaca=RECETAS_LOTE_18.find(r=>r.titulo==="Omelette de tomate y albahaca");
 assert.ok(omelette && omeletteAlbahaca);
 assert.ok(!omelette.ingredientes.some(i=>/albahaca/i.test(i)));
 assert.ok(omeletteAlbahaca.ingredientes.some(i=>/albahaca/i.test(i)));
});

test("Legumbres rápidas no exigen remojo y cocción de grano seco",()=>{
 const casos=[
  [RECETAS_LOTE_6,"Porotos negros guisados con pimentón",/porotos negros cocidos y escurridos/],
  [RECETAS_LOTE_7,"Ensalada de porotos con choclo",/porotos cocidos y escurridos/],
  [RECETAS_LOTE_7,"Porotos con zapallo y arroz",/porotos cocidos y escurridos/],
  [RECETAS_LOTE_10,"Arroz con porotos negros",/porotos negros cocidos y escurridos/],
  [RECETAS_LOTE_17,"Tostadas con hummus y palta",/garbanzos cocidos y escurridos/]
 ];
 for(const [lote,titulo,ingrediente] of casos){
  const receta=lote.find(r=>r.titulo===titulo);
  assert.ok(receta,titulo);
  assert.ok(receta.ingredientes.some(i=>ingrediente.test(i)),titulo);
  assert.ok(receta.pasos.every(p=>!/cuece (?:los )?(?:porotos|garbanzos) (?:previamente )?remojados/i.test(p)),titulo);
 }
 const ensalada=RECETAS_LOTE_7.find(r=>r.titulo==="Ensalada de porotos con choclo");
 assert.ok(Number.parseInt(ensalada.tiempoCoccion,10)>=10);
 const mazamorra=RECETAS_LOTE_10.find(r=>r.titulo==="Porotos granados con mazamorra");
 assert.ok(mazamorra.ingredientes.some(i=>/porotos granados frescos/.test(i)));
 assert.ok(Number.parseInt(mazamorra.tiempoCoccion,10)>=55);
});

test("Veinte recetas adicionales tienen tiempos diferenciados y legumbres listas para uso",()=>{
 assert.equal(RECETAS_ADICIONALES.length,20);
 assert.ok(new Set(RECETAS_ADICIONALES.map(r=>r.tiempoCoccion)).size>=8);
 const porTitulo=t=>RECETAS_ADICIONALES.find(r=>r.titulo===t);
 for(const titulo of ["Ensalada de lentejas y tomate","Tomates rellenos de atún y garbanzos"]){
  assert.equal(porTitulo(titulo)?.tiempoCoccion,"0 min",titulo);
 }
 for(const titulo of ["Ensalada de lentejas y tomate","Croquetas de lentejas y papa"]){
  const receta=porTitulo(titulo);assert.ok(receta?.ingredientes.some(i=>/de lentejas cocidas y escurridas/i.test(i)),titulo);
 }
 for(const titulo of ["Garbanzos guisados con zapallo","Ensalada tibia de garbanzos y espinaca","Tomates rellenos de atún y garbanzos","Tortilla de garbanzos y espinaca"]){
  const receta=porTitulo(titulo);assert.ok(receta?.ingredientes.some(i=>/de garbanzos cocidos y escurridos/i.test(i)),titulo);
 }
});


test("Salteados con tomate del lote 2 incorporan la cebolla declarada",()=>{
 for(const titulo of ["Pasta salteada con tomate","Lentejas salteadas con tomate","Garbanzos salteados con tomate"]){
  const receta=RECETAS_LOTE_2.find(r=>r.titulo===titulo);
  assert.ok(receta,titulo);
  assert.ok(receta.ingredientes.some(i=>/cebolla/i.test(i)),titulo);
  assert.ok(receta.pasos.some(p=>/cebolla/i.test(p)),titulo);
 }
});


test("Horneados de lotes 9 y 10 tienen duraciones coherentes",()=>{
 const casos=[
  [RECETAS_LOTE_9,"Lasaña de verduras",35,/190 °C durante 30 a 35 minutos/],
  [RECETAS_LOTE_9,"Betarragas asadas con yogur",45,/200 °C durante 35 a 45 minutos/],
  [RECETAS_LOTE_10,"Sopaipillas al horno con zapallo",40,/200 °C durante 15 a 20 minutos/],
  [RECETAS_LOTE_10,"Empanaditas de queso al horno",25,/200 °C durante 18 a 22 minutos/],
  [RECETAS_LOTE_10,"Papas al romero con pollo",45,/74 °C en el centro/]
 ];
 for(const [lote,titulo,tiempo,patron] of casos){
  const receta=lote.find(r=>r.titulo===titulo);
  assert.ok(receta,titulo);
  assert.ok(Number.parseInt(receta.tiempoCoccion,10)>=tiempo,titulo);
  assert.ok(receta.pasos.some(p=>patron.test(p)),titulo);
 }
 const lasana=RECETAS_LOTE_9.find(r=>r.titulo==="Lasaña de verduras");
 assert.ok(lasana.ingredientes.some(i=>/láminas de lasaña precocidas/.test(i)));
});


test("Dos arroces de zapallo usan técnicas culinarias diferenciadas",()=>{
 const meloso=RECETAS_LOTE_4.find(r=>r.titulo==="Arroz meloso de zapallo");
 const asado=RECETAS_LOTE_10.find(r=>r.titulo==="Arroz cremoso con zapallo asado");
 assert.ok(meloso&&asado);
 assert.ok(meloso.pasos.some(p=>/agua caliente gradualmente/.test(p)));
 assert.ok(asado.pasos.some(p=>/ásalos a 200 °C durante 25 a 30 minutos/.test(p)));
 assert.ok(Number.parseInt(asado.tiempoCoccion,10)>=40);
});


test("Horneados revisados declaran duración orientativa y técnica completa", () => {
 const casos = [
  [RECETAS_LOTE_9, "Frittata de brócoli y queso", /180 °C durante 15 a 20 minutos/],
  [RECETAS_LOTE_10, "Budín de brócoli y zanahoria", /180 °C durante 25 a 30 minutos/],
  [RECETAS_LOTE_11, "Tofu al horno con brócoli", /200 °C durante 20 a 25 minutos/],
  [RECETAS_LOTE_17, "Berenjena asada con yogur", /200 °C durante 30 a 35 minutos/],
 ];
 for (const [lote, titulo, expresion] of casos) {
  const receta = lote.find(r => r.titulo === titulo);
  assert.ok(receta, titulo);
  assert.ok(receta.pasos.some(p => expresion.test(p)), titulo);
 }
 const berenjena = RECETAS_LOTE_17.find(r => r.titulo === "Berenjena asada con yogur");
 assert.ok(berenjena?.pasos.some(p => /ajo sin pelar.*15 a 20 minutos/.test(p)));
 assert.ok(berenjena?.pasos.some(p => /ajo asado, pelado y machacado/.test(p)));
 assert.ok(Number.parseInt(berenjena.tiempoCoccion, 10) >= 35);
});
