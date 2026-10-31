import test from 'node:test';
import assert from 'node:assert/strict';
import {extraerIngredientes} from '../src/lib/buscador-gratis.ts';
test('Los ingredientes compuestos no duplican componentes',()=>{
 assert.deepEqual(extraerIngredientes('leche de coco'),['coco']);
 assert.deepEqual(extraerIngredientes('carne molida'),['carne molida']);
 assert.deepEqual(extraerIngredientes('atún en lata'),['atun']);
});
