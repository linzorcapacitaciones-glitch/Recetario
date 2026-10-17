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
const recetas=[...RECETAS_DEMO,...RECETAS_ADICIONALES,...RECETAS_LOTE_2,...RECETAS_LOTE_3,...RECETAS_LOTE_4,...RECETAS_LOTE_5,...RECETAS_LOTE_6,...RECETAS_LOTE_7,...RECETAS_LOTE_8,...RECETAS_LOTE_9,...RECETAS_LOTE_10,...RECETAS_LOTE_11,...RECETAS_LOTE_12,...RECETAS_LOTE_13,...RECETAS_LOTE_14,...RECETAS_LOTE_15,...RECETAS_LOTE_16,...RECETAS_LOTE_17];
const normalizar=s=>s.toLowerCase().normalize("NFD").replace(/[^a-z0-9 ]/g," ").replace(/ +/g," ").trim();
test("El catálogo ampliado no contiene títulos repetidos entre lotes",()=>{
 const vistos=new Map();const duplicados=[];
 for(const r of recetas){const clave=normalizar(r.titulo);if(vistos.has(clave))duplicados.push([vistos.get(clave),r.titulo]);else vistos.set(clave,r.titulo)}
 assert.deepEqual(duplicados,[]);
});
test("Todas las fichas tienen ingredientes y pasos completos",()=>{
 for(const r of recetas){assert.ok(r.titulo?.trim(),r.id);assert.ok(r.ingredientes.length>=2,r.titulo);assert.ok(r.pasos.length>=4,r.titulo);assert.ok(r.pasos.every(p=>p.trim().length>=8),r.titulo);assert.ok(r.ingredientes.filter(x=>/[0-9]|media|medio/.test(x)).length>=2,r.titulo)}
});
