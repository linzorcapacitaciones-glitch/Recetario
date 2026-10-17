/**
 * Buscador gratuito y real, sin llamadas de red ni tokens.
 * Catálogo editorial pequeño: ampliar y revisar antes del lanzamiento.
 */
import type { Receta } from "./recipes.functions";
import { RECETAS_DEMO } from "./recetas-demo.ts";
import { RECETAS_ADICIONALES } from "./recetas-adicionales.ts";
import { RECETAS_LOTE_2 } from "./recetas-lote-2.ts";
import { RECETAS_LOTE_3 } from "./recetas-lote-3.ts";
import { RECETAS_LOTE_4 } from "./recetas-lote-4.ts";
import { RECETAS_LOTE_5 } from "./recetas-lote-5.ts";
import { RECETAS_LOTE_6 } from "./recetas-lote-6.ts";
import { RECETAS_LOTE_7 } from "./recetas-lote-7.ts";
import { RECETAS_LOTE_8 } from "./recetas-lote-8.ts";
import { RECETAS_LOTE_9 } from "./recetas-lote-9.ts";
import { RECETAS_LOTE_10 } from "./recetas-lote-10.ts";
import { RECETAS_LOTE_11 } from "./recetas-lote-11.ts";
import { CATALOGO, PRODUCTOS, type IngredienteId } from "./planificador-semanal.ts";
import type { Preferencias } from "./preferencias";

type Ficha = { receta: Receta; claves: string[]; minutos: number; categoria: string; coste: number };
const pasos: Record<string, string[]> = {
  pollo_arroz: ["Lava las verduras y corta la cebolla y el tomate.", "Cuece el arroz en agua hasta que esté tierno.", "Cocina completamente el pollo en una sartén; incorpora cebolla y tomate.", "Sirve el pollo con su salsa sobre el arroz."],
  tortilla_papa: ["Pela las papas y córtalas en láminas finas.", "Cocina las papas y la cebolla en una sartén con un poco de aceite hasta que estén tiernas.", "Bate los huevos e incorpora las papas cocidas.", "Cuaja la tortilla por ambos lados hasta que el huevo esté bien cocido."],
  pasta_atun: ["Cuece la pasta en agua hasta que quede al dente.", "Lava y pica el tomate; saltéalo unos minutos.", "Escurre el atún en conserva y añádelo a la salsa.", "Mezcla la pasta con la salsa y sirve caliente."],
  guiso_lentejas: ["Lava las lentejas y prepara la cebolla y la zanahoria picadas.", "Cuece las lentejas en abundante agua hasta que estén tiernas, siguiendo el tiempo del envase.", "Incorpora las verduras y cocina hasta que se ablanden.", "Cuece el arroz por separado y sírvelo con el guiso."],
  garbanzos_espinaca: ["Si usas garbanzos secos, remójalos y cuécelos por completo; los de conserva solo requieren escurrirse.", "Lava las espinacas y pica la cebolla.", "Sofríe la cebolla, añade los garbanzos cocidos y saltea.", "Incorpora las espinacas y cocina hasta que se ablanden."],
  pollo_horno: ["Precalienta el horno a 200 °C.", "Lava y corta papas y zanahorias en trozos medianos.", "Distribuye las verduras y el pollo en una bandeja con aceite y condimentos.", "Hornea hasta que el pollo esté completamente cocido, verificando una temperatura interna segura de 74 °C."],
  arroz_huevo: ["Cuece el arroz y enfríalo rápidamente si lo reservarás para más tarde.", "Lava y ralla la zanahoria; saltéala en una sartén.", "Añade los huevos batidos y revuelve hasta cuajarlos.", "Incorpora el arroz y calienta todo hasta que esté bien caliente."],
  pasta_espinaca: ["Cuece la pasta en agua hirviendo.", "Lava las espinacas y saltéalas brevemente.", "Escurre la pasta, reservando un poco de agua de cocción.", "Mezcla la pasta, las espinacas y el queso hasta integrar."],
  tortilla_espinaca: ["Lava las espinacas y el tomate; córtalos.", "Saltea las espinacas y el tomate hasta reducir su humedad.", "Bate los huevos y agrégalos a la sartén.", "Cocina la tortilla por ambos lados hasta que el huevo cuaje completamente."],
  zapallo_lentejas: ["Lava y trocea el zapallo y la cebolla.", "Cuece las lentejas según las instrucciones del envase.", "Hierve el zapallo y la cebolla hasta que estén tiernos.", "Tritura las verduras con parte del caldo y mezcla con las lentejas cocidas."],
  ensalada_garbanzos: ["Usa garbanzos ya cocidos y escurridos; si son secos, remójalos y cuécelos primero.", "Lava y corta el tomate.", "Escurre el atún y mézclalo con los garbanzos.", "Agrega tomate, aliña al gusto y sirve."],
  croquetas_pollo: ["Cuece completamente el pollo y desmenúzalo; cuece también el arroz.", "Mezcla el arroz con pollo y huevo batido.", "Forma pequeñas croquetas compactas.", "Dóralas por ambos lados hasta que el huevo esté completamente cocido."],
  papas_atun: ["Lava las papas y cuécelas hasta que estén tiernas.", "Pica la cebolla y saltéala; mezcla con el atún escurrido.", "Parte las papas, ahueca ligeramente y rellena con la mezcla.", "Calienta unos minutos y sirve."],
  fideos_pollo: ["Cuece los fideos hasta que estén al dente.", "Corta el pollo en trozos pequeños y cocínalo completamente.", "Ralla la zanahoria y saltéala con el pollo.", "Añade los fideos y mezcla hasta que estén bien calientes."],
  arroz_garbanzos: ["Cuece el arroz y reserva.", "Usa garbanzos cocidos o de conserva, bien escurridos.", "Cocina el tomate picado en una sartén hasta formar una salsa.", "Incorpora los garbanzos y mezcla con el arroz."],
  huevos_papas: ["Pela las papas, córtalas en cubos y cuécelas hasta que estén tiernas.", "Lava y pica el tomate; cocínalo en una sartén.", "Incorpora las papas y casca los huevos encima.", "Cocina tapado hasta que los huevos estén bien cocidos."],
  zapallo_pasta: ["Cuece la pasta en abundante agua.", "Corta el zapallo en cubos y cocínalo hasta que esté tierno.", "Saltea la cebolla picada con un poco de aceite.", "Mezcla pasta, zapallo y cebolla, añadiendo un poco del agua de cocción."],
  pollo_queso: ["Corta el pollo en filetes delgados y cocina por ambos lados.", "Lava y pica el tomate; incorpóralo a la sartén.", "Verifica que el pollo alcance 74 °C en el centro.", "Agrega el queso y calienta hasta que se derrita."],
};
const minEstimados: Record<string, number> = {
  pollo_arroz: 35, tortilla_papa: 30, pasta_atun: 20, guiso_lentejas: 50,
  garbanzos_espinaca: 20, pollo_horno: 55, arroz_huevo: 25, pasta_espinaca: 20,
  tortilla_espinaca: 20, zapallo_lentejas: 50, ensalada_garbanzos: 15,
  croquetas_pollo: 30, papas_atun: 35, fideos_pollo: 25, arroz_garbanzos: 25,
  huevos_papas: 30, zapallo_pasta: 30, pollo_queso: 25,
};
const clavesExtras: Record<string, string> = {
  "huevos": "huevo", "tomates": "tomate", "papas": "papa", "patatas": "papa",
  "zanahorias": "zanahoria", "cebollas": "cebolla", "lentejas": "lenteja",
  "garbanzos": "garbanzo", "fideos": "pasta", "tallarines": "pasta",
  "atun en lata": "atun", "espinacas": "espinaca", "calabaza": "zapallo",
  "pescados": "pescado", "merluzas": "merluza", "salmones": "salmon", "brócoli": "brocoli", "brocolis": "brocoli",
  "champiñones": "champinon", "champinones": "champinon", "pimentones": "pimenton", "pimientos": "pimenton",
  "manzanas": "manzana", "platanos": "platano", "plátanos": "platano", "avena en hojuelas": "avena",
  "aceitunas": "aceituna", "tortillas": "tortilla", "tofus": "tofu",
  "acelgas": "acelga", "albahacas": "albahaca", "romeros": "romero",
  "zapallitos": "zapallito", "zapallitos italianos": "zapallito", "berenjenas": "berenjena", "arvejas": "arveja", "betarragas": "betarraga", "remolacha": "betarraga", "coliflores": "coliflor", "quínua": "quinoa",
  "porotos negros": "poroto", "frijoles": "poroto", "porotos": "poroto", "leche de vaca": "leche",
};
export function normalizar(s: string) {
  return s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
}
const OTROS_INGREDIENTES = new Set(["merluza","salmon","pescado","brocoli","champinon","pimenton","manzana","platano","avena","poroto","leche","yogur","limon","pepino","lechuga","carne","carne molida","harina","pan","palta","choclo","maiz","mantequilla","ajo","perejil","quinoa","cuscus","berenjena","zapallito","coliflor","betarraga","repollo","arveja","menta","acelga","jengibre","romero","albahaca","polenta","aceituna","tofu","tahini","tortilla"]);
function idIngrediente(s: string): string | undefined {
  const n=normalizar(s);
  const id=(clavesExtras[n] || n) as IngredienteId;
  return id in PRODUCTOS || OTROS_INGREDIENTES.has(id) ? id : undefined;
}
export function extraerIngredientes(texto: string): string[] {
  const limpio=normalizar(texto)
    .replace(/\b(?:tengo|disponibles?|en casa|en mi alacena|ingredientes?|para cocinar|y tambien)\b/g, " ");
  // Reconoce listas separadas por comas, espacios o conjunciones, conservando alias de varias palabras.
  const tokens=limpio.replace(/[,;\n+]+/g," ").split(/\s+/).filter(Boolean);
  const encontrados=new Set<string>();
  for(let i=0;i<tokens.length;i++) {
    const compuesto=i+2<tokens.length?tokens.slice(i,i+3).join(" "):"";
    const doble=i+1<tokens.length?tokens.slice(i,i+2).join(" "):"";
    const id=(compuesto&&idIngrediente(compuesto))||(doble&&idIngrediente(doble))||idIngrediente(tokens[i]);
    if(id) encontrados.add(id);
  }
  return [...encontrados];
}

const porId = (id: string) => PRODUCTOS[id as IngredienteId]?.nombre ?? id;
const extraerDeDescripcion = (ingredientes: string[]) => {
  const ids=new Set<string>();
  for(const linea of ingredientes) {
    const texto=normalizar(linea);
    for(const id of [...Object.keys(PRODUCTOS),...OTROS_INGREDIENTES]) {
      if(new RegExp(`\\b${id}\\b`).test(texto) ||
        Object.entries(clavesExtras).some(([alias,destino])=>destino===id && new RegExp(`\\b${alias}\\b`).test(texto))) ids.add(id);
    }
  }
  return [...ids];
};
const fichasNuevas: Ficha[] = CATALOGO.map(plato => {
  const ids=plato.ingredientes.map(([id])=>id);
  const coste=Math.round(plato.ingredientes.reduce((a,[id,q])=>a+q*PRODUCTOS[id].precio,0));
  const minutos=minEstimados[plato.id] ?? 35;
  return {
    claves: ids, minutos, categoria:plato.categoria, coste,
    receta:{
      id:`catalogo-${plato.id}`,titulo:plato.titulo,
      descripcion:"Receta del catálogo de Alacena, calculada con ingredientes de referencia para dos personas.",
      tiempoPreparacion:"10 min",tiempoCoccion:`${Math.max(5,minutos-10)} min`,
      porciones:"2 personas",dificultad:"Fácil",
      ingredientes:plato.ingredientes.map(([id,q])=>`${q} ${PRODUCTOS[id].unidad==="g"?"g":"unidades"} de ${porId(id)}`),
      pasos:pasos[plato.id] || [], preferencia:"Catálogo gratuito sin IA",
      costoAproximado:coste<1800?"Bajo":coste<3500?"Medio":"Alto",
      ingredientesCoincidentes:[],ingredientesFaltantes:[],porcentajeCoincidencia:0,
    }
  };
});
const fichasDemo: Ficha[]=[...RECETAS_DEMO,...RECETAS_ADICIONALES,...RECETAS_LOTE_2,...RECETAS_LOTE_3,...RECETAS_LOTE_4,...RECETAS_LOTE_5,...RECETAS_LOTE_6,...RECETAS_LOTE_7,...RECETAS_LOTE_8,...RECETAS_LOTE_9,...RECETAS_LOTE_10,...RECETAS_LOTE_11].map(r=>{
  const ids=extraerDeDescripcion(r.ingredientes);
  return {receta:r,claves:ids,minutos:Number(r.tiempoPreparacion.replace(/\D/g,""))+Number(r.tiempoCoccion.replace(/\D/g,"")),
    categoria:"casera",coste:r.costoAproximado==="Bajo"?1600:2900};
});
const sinDuplicados=new Map<string,Ficha>();
for(const ficha of [...fichasDemo,...fichasNuevas]) {
  const clave=normalizar(ficha.receta.titulo);
  if(!sinDuplicados.has(clave))sinDuplicados.set(clave,ficha);
}
export const TOTAL_RECETAS_CATALOGO=sinDuplicados.size;
export type ResultadoBusqueda={
  recetas:Receta[]; ingredientesReconocidos:string[]; ignorados:string[];
  totalCatalogo:number; totalCoincidentes:number;
};
export function buscarRecetasGratis(texto:string, preferencias:Preferencias={}):ResultadoBusqueda {
  const ingredientes=extraerIngredientes(texto);
  const conocidos=new Set(ingredientes);
  const piezas=normalizar(texto).split(/[,;\n]+|\s+y\s+|\s+\+\s+/).map(s=>s.trim()).filter(Boolean);
  const ignorados=piezas.filter(p=>!extraerIngredientes(p).length);
  const tiempoMax=preferencias.tiempo&&preferencias.tiempo!=="libre"?Number(preferencias.tiempo):Infinity;
  const orden=[...sinDuplicados.values()].map(ficha=>{
    const coincidentes=ficha.claves.filter(id=>conocidos.has(id));
    const faltantes=ficha.claves.filter(id=>!conocidos.has(id));
    const pct=ficha.claves.length?Math.round(100*coincidentes.length/ficha.claves.length):0;
    const ajuste=preferencias.intencion==="economico"?-ficha.coste/150:
      preferencias.intencion==="saludable"&&["legumbres","pescado"].includes(ficha.categoria)?16:
      preferencias.intencion==="familia"&&ficha.categoria==="pollo"?10:0;
    return {ficha,coincidentes,faltantes,pct,
      puntaje:coincidentes.length*30-faltantes.length*13+ajuste};
  }).filter(x=>x.coincidentes.length>0 && x.ficha.minutos<=tiempoMax)
    .sort((a,b)=>b.puntaje-a.puntaje||b.pct-a.pct||a.ficha.minutos-b.ficha.minutos);
  return {
    ingredientesReconocidos:ingredientes.map(id=>porId(id)),
    ignorados,
    totalCatalogo:TOTAL_RECETAS_CATALOGO,
    totalCoincidentes:orden.length,
    recetas:orden.slice(0,10).map(({ficha,coincidentes,faltantes,pct},i)=>({
      ...ficha.receta,mejorOpcion:i===0,
      ingredientesCoincidentes:coincidentes.map(porId),
      ingredientesFaltantes:faltantes.map(porId),
      porcentajeCoincidencia:pct,
      preferencia:preferencias.intencion?"Selección según ingredientes y preferencias · sin IA":"Selección según ingredientes · sin IA",
    }))
  };
}
