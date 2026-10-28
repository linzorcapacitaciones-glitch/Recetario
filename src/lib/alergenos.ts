/** Avisos orientativos, sujetos a etiquetas y contaminación cruzada. */
export function detectarAlergenos(ingredientes: string[]) {
 const texto=ingredientes.join(" | ").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");
 const sinCoco=texto.replace(/leche de coco/g,"");
 const confirmados:string[]=[];const verificar:string[]=[];
 const add=(arr:string[],label:string)=>{if(!arr.includes(label))arr.push(label)};
 if(/\b(leche|queso|yogur|yogurt|mantequilla|crema de leche)\b/.test(sinCoco))add(confirmados,"Leche y derivados");
 if(/\b(huevo|huevos)\b/.test(texto))add(confirmados,"Huevo");
 if(/\b(pescado|atun|salmon|merluza|sardina)\b/.test(texto))add(confirmados,"Pescado");
 if(/\b(camaron|camarones|langostino|langostinos)\b/.test(texto))add(confirmados,"Crustáceos");
 if(/\b(mani|cacahuate)\b/.test(texto))add(confirmados,"Maní");
 if(/\b(nuez|nueces|almendra|almendras|avellana|avellanas)\b/.test(texto))add(confirmados,"Frutos secos");
 if(/\b(tofu|soya|soja)\b/.test(texto))add(confirmados,"Soya");
 if(/\b(sesamo|ajonjoli|tahini)\b/.test(texto))add(confirmados,"Sésamo");
 if(/\b(harina de trigo|trigo|cuscus|semola)\b/.test(texto))add(confirmados,"Trigo (gluten)");
 if(/\b(pasta|pan|tortilla|avena|harina)\b/.test(texto))add(verificar,"Gluten: revisar etiqueta");
 return {confirmados,verificar};
}
