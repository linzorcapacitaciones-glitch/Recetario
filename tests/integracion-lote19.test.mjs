import test from "node:test";
import assert from "node:assert/strict";
import {RECETAS_LOTE_19} from "../src/lib/recetas-lote-19.ts";
test("Cuatro platos revisados explican cómo reunir los ingredientes",()=>{
 const titulos=[
  "Guiso de garbanzos con acelga y tomate",
  "Ensalada de betarraga con pera y nueces",
  "Pescado con arroz y espinaca",
  "Arroz con lentejas y zanahoria salteada"
 ];
 for(const titulo of titulos){
  const receta=RECETAS_LOTE_19.find(r=>r.titulo===titulo);
  assert.ok(receta,titulo);
  assert.match(receta.pasos.at(-1),/mezcla|incorpora|sirve/i,titulo);
 }
});
