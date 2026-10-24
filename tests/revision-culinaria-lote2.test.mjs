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
