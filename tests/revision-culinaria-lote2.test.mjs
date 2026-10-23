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
