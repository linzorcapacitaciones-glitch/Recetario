import test from 'node:test';
import assert from 'node:assert/strict';
import { interpretarTexto, combinarPreferencias, etiquetaIntencion, etiquetaTiempo } from '../src/lib/preferencias.ts';
import { disponibilidad, porcentaje } from '../src/lib/coincidencia.ts';

test('Reconoce personas, tiempo e intención', () => {
  const v = interpretarTexto('pollo y arroz para 4 personas en 30 minutos, algo saludable');
  assert.equal(v.personas, '3-4');
  assert.equal(v.tiempo, '30');
  assert.equal(v.intencion, 'saludable');
});
test('Admite acentos, intención romántica y número de personas', () => {
  const v = interpretarTexto('Cena romántica para 2 personas');
  assert.equal(v.personas, '2');
  assert.equal(v.intencion, 'romantica');
});
test('Respeta filtros elegidos', () => {
  const v = combinarPreferencias({ tiempo: '60', personas: '1' }, 'para 4 personas, rápido');
  assert.equal(v.tiempo, '60');
  assert.equal(v.personas, '1');
  assert.equal(v.intencion, 'rapido');
});
test('Etiquetas legibles', () => {
  assert.equal(etiquetaIntencion('familia'), 'Para la familia');
  assert.equal(etiquetaTiempo('15'), '15 minutos');
});
test('Receta disponible', () => assert.equal(disponibilidad({ ingredientesFaltantes: [] }).nivel, 'verde'));
test('Receta con un ingrediente faltante', () => assert.equal(disponibilidad({ ingredientesFaltantes: ['huevo'] }).nivel, 'amarillo'));
test('Receta con varios faltantes', () => assert.equal(disponibilidad({ ingredientesFaltantes: ['huevo', 'aceite'] }).nivel, 'naranja'));
test('Porcentaje entre cero y cien', () => {
  assert.equal(porcentaje({ porcentajeCoincidencia: 101 }), 100);
  assert.equal(porcentaje({ porcentajeCoincidencia: -4 }), 0);
  assert.equal(porcentaje({ porcentajeCoincidencia: 62.7 }), 63);
});
