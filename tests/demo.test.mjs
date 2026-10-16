import test from 'node:test';
import assert from 'node:assert/strict';
import { RECETAS_DEMO } from '../src/lib/recetas-demo.ts';

test('Demo sin API: exactamente diez recetas distintas', () => {
  assert.equal(RECETAS_DEMO.length, 10);
  assert.equal(new Set(RECETAS_DEMO.map(r => r.titulo)).size, 10);
  assert.equal(new Set(RECETAS_DEMO.map(r => r.id)).size, 10);
});
test('Demo: todas incluyen ingredientes, pasos, porciones y tiempo', () => {
  for (const r of RECETAS_DEMO) {
    assert.ok(r.titulo && r.descripcion && r.porciones);
    assert.ok(r.tiempoPreparacion && r.tiempoCoccion);
    assert.ok(r.ingredientes.length >= 3);
    assert.ok(r.pasos.length >= 4);
    assert.ok(r.pasos.every(p => p.length > 15));
    assert.ok(r.porcentajeCoincidencia >= 0 && r.porcentajeCoincidencia <= 100);
  }
});
test('Demo: mejor receta y faltante identificados', () => {
  assert.equal(RECETAS_DEMO.filter(r => r.mejorOpcion).length, 1);
  assert.deepEqual(RECETAS_DEMO.at(-1).ingredientesFaltantes, ['queso']);
});
