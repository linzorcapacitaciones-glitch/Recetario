import test from "node:test";
import assert from "node:assert/strict";
import { RECETAS_LOTE_2 } from "../src/lib/recetas-lote-2.ts";

const revisadas = [
  ["Arroz con salsa de queso", 25, /queso se funda/i],
  ["Tortilla de zanahoria", 20, /mézclalos con la zanahoria/i],
  ["Omelette de espinaca", 12, /agrega la espinaca/i],
  ["Frittata de zapallo", 25, /mézclalos con el zapallo/i],
  ["Huevos gratinados con queso", 20, /hornea aproximadamente/i],
];

test("Cinco recetas corregidas tienen técnica y tiempo de cocción explícitos", () => {
  for (const [titulo, minutos, tecnica] of revisadas) {
    const receta = RECETAS_LOTE_2.find(r => r.titulo === titulo);
    assert.ok(receta, titulo);
    assert.equal(Number.parseInt(receta.tiempoCoccion, 10), minutos, titulo);
    assert.ok(receta.pasos.some(p => tecnica.test(p)), titulo);
    assert.ok(receta.pasos.length >= 4, titulo);
    assert.ok(receta.ingredientes.length >= 2, titulo);
  }
});

test("Las preparaciones de huevo corregidas indican cocción completa", () => {
  for (const [titulo] of revisadas.slice(1)) {
    const receta = RECETAS_LOTE_2.find(r => r.titulo === titulo);
    assert.ok(receta.pasos.some(p => /huevo.*completamente cuajado/i.test(p)), titulo);
  }
});

const correccionesNuevas = [
  ["Papas con salsa de queso", 20, /queso se funda/i],
  ["Pasta con salsa de queso", 15, /forme una salsa/i],
  ["Lentejas con salsa de queso", 35, /lentejas secas/i],
  ["Garbanzos con salsa de queso", 10, /queso al agua caliente/i],
  ["Huevos revueltos con tomate", 10, /tomate durante 2 minutos/i],
  ["Huevos encebollados", 12, /cebolla.*durante 5 a 8 minutos/i],
  ["Arroz con huevo a la sartén", 25, /huevos batidos/i],
  ["Tortilla de papas en cubos", 25, /mézclalos con las papas cocidas/i],
  ["Revuelto de pollo y huevo", 20, /74 °C/i],
];

test("Nueve recetas adicionales tienen instrucciones concretas y tiempos diferenciados", () => {
  for (const [titulo, minutos, tecnica] of correccionesNuevas) {
    const receta = RECETAS_LOTE_2.find(r => r.titulo === titulo);
    assert.ok(receta, titulo);
    assert.equal(Number.parseInt(receta.tiempoCoccion, 10), minutos, titulo);
    assert.ok(receta.pasos.some(p => tecnica.test(p)), titulo);
    assert.equal(receta.pasos.length, 4, titulo);
    assert.ok(receta.pasos.every(p => !/tritúralo si corresponde|saltea el acompañamiento|ingrediente principal ya cocido/i.test(p)), titulo);
  }
});

test("Todas las recetas del lote 2 con garbanzos indican que ya están cocidos", () => {
  const conGarbanzos = RECETAS_LOTE_2.filter(r => r.ingredientes.some(i => /garbanzos/i.test(i)));
  assert.equal(conGarbanzos.length, 11);
  for (const receta of conGarbanzos) {
    assert.ok(receta.ingredientes.some(i => /garbanzos cocidos y escurridos/i.test(i)), receta.titulo);
    assert.ok(receta.pasos.every(p => !/cuece las legumbres previamente remojadas/i.test(p)), receta.titulo);
  }
});

test("Los cinco platos con queso no sugieren triturar el queso para formar una salsa", () => {
  const conQueso = RECETAS_LOTE_2.filter(r => /con salsa de queso/i.test(r.titulo));
  assert.equal(conQueso.length, 5);
  for (const receta of conQueso) {
    assert.ok(receta.pasos.some(p => /queso se funda|queso al agua caliente/i.test(p)), receta.titulo);
    assert.ok(receta.pasos.every(p => !/tritúralo si corresponde/i.test(p)), receta.titulo);
  }
});


const arrozRevisado = [
  ["Arroz salteado con tomate", 25, /saltea la cebolla/i],
  ["Arroz guisado con cebolla", 25, /arroz seco/i],
  ["Arroz al horno con zanahoria", 30, /hornea a 190 °C durante 10 minutos/i],
  ["Arroz cremoso con espinaca", 25, /textura cremosa/i],
  ["Arroz salteado con zapallo", 30, /cubos de zapallo/i],
];

test("Cinco preparaciones de arroz tienen técnicas específicas y tiempos realistas", () => {
  for (const [titulo, minutos, tecnica] of arrozRevisado) {
    const receta = RECETAS_LOTE_2.find(r => r.titulo === titulo);
    assert.ok(receta, titulo);
    assert.equal(Number.parseInt(receta.tiempoCoccion, 10), minutos, titulo);
    assert.equal(receta.pasos.length, 4, titulo);
    assert.ok(receta.pasos.some(p => tecnica.test(p)), titulo);
    assert.ok(receta.pasos.every(p => !/saltea el acompañamiento|ingrediente principal ya cocido|tritúralo si corresponde/i.test(p)), titulo);
  }
});


const nuevosPlatosRevisados = [
  ["Arroz salteado con pollo", 25, /74 °C/],
  ["Arroz guisado con atún", 25, /atún escurrido/],
  ["Arroz al horno con garbanzos", 35, /garbanzos previamente cocidos/],
  ["Papas salteadas con tomate", 25, /saltea la cebolla/i],
  ["Papas guisadas con cebolla", 25, /sofríela en una olla/],
];

test("Cinco recetas adicionales tienen técnicas específicas, tiempos y seguridad", () => {
  for (const [titulo, minutos, tecnica] of nuevosPlatosRevisados) {
    const receta = RECETAS_LOTE_2.find(r => r.titulo === titulo);
    assert.ok(receta, titulo);
    assert.equal(Number.parseInt(receta.tiempoCoccion, 10), minutos, titulo);
    assert.equal(receta.pasos.length, 4, titulo);
    assert.ok(receta.pasos.some(p => tecnica.test(p)), titulo);
    assert.ok(receta.pasos.every(p => !/saltea el acompañamiento|ingrediente principal ya cocido|tritúralo si corresponde/i.test(p)), titulo);
  }
});

const papasRevisadas = [
  ["Papas al horno con zanahoria", /hornea a 190 °C durante 15 minutos/i],
  ["Papas cremosas con espinaca", /machaca las papas/i],
  ["Papas salteadas con zapallo", /saltea los cubos de zapallo/i],
  ["Papas salteadas con pollo", /74 °C/],
  ["Papas guisadas con atún", /atún a las papas cocidas/i],
];

test("Cinco recetas con papas explican técnicas, tiempos y cocción segura", () => {
  for (const [titulo, tecnica] of papasRevisadas) {
    const receta = RECETAS_LOTE_2.find(r => r.titulo === titulo);
    assert.ok(receta, titulo);
    assert.equal(receta.pasos.length, 4, titulo);
    assert.ok(receta.pasos.some(p => tecnica.test(p)), titulo);
    assert.ok(receta.pasos.every(p => !/saltea el acompañamiento|ingrediente principal ya cocido|tritúralo si corresponde|cocina el acompañamiento/i.test(p)), titulo);
  }
});

test("Lote 2: tiempos ajustados para preparaciones rápidas y lentejas cocidas", () => {
 const minutos = new Map([
  ["Pasta guisada con atún", 20],
  ["Pasta salteada con pollo", 25],
  ["Lentejas salteadas con tomate", 10],
  ["Lentejas al horno con huevo", 20],
  ["Garbanzos guisados con cebolla", 15],
  ["Garbanzos al horno con zanahoria", 25],
  ["Papas al horno con lentejas", 30],
 ]);
 for (const [titulo, esperado] of minutos) {
  const receta = RECETAS_LOTE_2.find(r => r.titulo === titulo);
  assert.ok(receta, titulo);
  assert.equal(Number.parseInt(receta.tiempoCoccion, 10), esperado, titulo);
 }
 for (const receta of RECETAS_LOTE_2) {
  if (/lentejas/i.test(receta.titulo) || receta.ingredientes.some(i => /lenteja/i.test(i))) {
   assert.ok(receta.ingredientes.filter(i => /lenteja/i.test(i)).every(i => /cocidas y escurridas/i.test(i)), receta.titulo);
  }
 }
});
