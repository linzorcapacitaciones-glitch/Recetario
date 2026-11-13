import test from 'node:test';
import assert from 'node:assert/strict';
import {extraerIngredientes, extraerDeDescripcion} from '../src/lib/buscador-gratis.ts';
test('Los ingredientes compuestos no duplican componentes',()=>{
 assert.deepEqual(extraerIngredientes('leche de coco'),['coco']);
 assert.deepEqual(extraerIngredientes('carne molida'),['carne molida']);
 assert.deepEqual(extraerIngredientes('atún en lata'),['atun']);
});

test('La clasificación de fichas no confunde leche de coco con leche láctea',()=>{
 assert.deepEqual(extraerDeDescripcion(['180 ml de leche de coco', '200 g de zanahoria']),['coco','zanahoria']);
 assert.deepEqual(extraerDeDescripcion(['250 g de carne molida', '1 unidad de tomate']),['carne molida','tomate']);
 assert.deepEqual(extraerDeDescripcion(['200 g de leche', '180 ml de leche de coco']),['leche','coco']);
});
