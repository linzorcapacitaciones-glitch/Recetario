/** Lote 6: 15 recetas con ingredientes ampliados, revisión editorial pendiente. */
import type { Receta } from "./recipes.functions";
const FICHAS=[
  {
    "titulo": "Merluza al horno con limón y papas",
    "ids": [
      "merluza",
      "papa",
      "limon",
      "ajo"
    ],
    "pasos": [
      "Precalienta el horno a 190 °C y corta las papas en rodajas finas.",
      "Hornea las papas con aceite durante 20 minutos.",
      "Coloca encima los filetes de merluza con ajo y jugo de limón.",
      "Hornea hasta que el pescado esté opaco y alcance 63 °C en el centro."
    ]
  },
  {
    "titulo": "Salmón con brócoli y arroz",
    "ids": [
      "salmon",
      "brocoli",
      "arroz",
      "limon"
    ],
    "pasos": [
      "Cuece el arroz hasta que esté tierno.",
      "Corta el brócoli en ramilletes y cocínalo al vapor hasta que esté suave.",
      "Sazona el salmón con limón y cocínalo en sartén.",
      "Verifica que el pescado alcance 63 °C y sirve con arroz y brócoli."
    ]
  },
  {
    "titulo": "Crema de brócoli y papa",
    "ids": [
      "brocoli",
      "papa",
      "cebolla",
      "leche"
    ],
    "pasos": [
      "Sofríe la cebolla picada en una olla.",
      "Añade papas en cubos y cubre con agua; cocina hasta ablandar.",
      "Agrega brócoli y hierve hasta que esté tierno.",
      "Tritura con un poco de leche y calienta suavemente antes de servir."
    ]
  },
  {
    "titulo": "Champiñones salteados con ajo y perejil",
    "ids": [
      "champinon",
      "ajo",
      "perejil",
      "pan"
    ],
    "pasos": [
      "Limpia los champiñones y córtalos en láminas.",
      "Calienta aceite en sartén y dora el ajo picado sin quemarlo.",
      "Agrega los champiñones y cocina hasta evaporar su líquido.",
      "Añade perejil picado y sirve sobre pan tostado."
    ]
  },
  {
    "titulo": "Ensalada de pepino y yogur",
    "ids": [
      "pepino",
      "yogur",
      "limon",
      "ajo"
    ],
    "pasos": [
      "Lava el pepino y córtalo en rodajas finas.",
      "Mezcla yogur natural con unas gotas de limón.",
      "Agrega ajo muy finamente picado al yogur.",
      "Une el pepino con el aliño y refrigera hasta servir."
    ]
  },
  {
    "titulo": "Porotos negros guisados con pimentón",
    "ids": [
      "poroto",
      "pimenton",
      "cebolla",
      "tomate"
    ],
    "pasos": [
      "Remoja los porotos secos y cuécelos completamente; si son de conserva, escúrrelos.",
      "Sofríe cebolla y pimentón picados.",
      "Agrega tomate y cocina hasta formar una salsa.",
      "Incorpora los porotos cocidos y cocina a fuego suave diez minutos."
    ]
  },
  {
    "titulo": "Tostadas de palta y huevo",
    "ids": [
      "pan",
      "palta",
      "huevo",
      "limon"
    ],
    "pasos": [
      "Tuesta las rebanadas de pan hasta que estén doradas.",
      "Pela la palta y aplástala con jugo de limón.",
      "Cuece los huevos hasta que estén completamente cocidos.",
      "Unta la palta sobre el pan y coloca encima el huevo en rodajas."
    ]
  },
  {
    "titulo": "Avena cocida con manzana y canela",
    "ids": [
      "avena",
      "manzana",
      "leche"
    ],
    "pasos": [
      "Lava la manzana y córtala en cubos pequeños.",
      "Calienta leche con la avena en una olla, removiendo.",
      "Añade la manzana y una pizca de canela.",
      "Cocina hasta que la avena esté cremosa y la fruta blanda."
    ]
  },
  {
    "titulo": "Batido de plátano y yogur",
    "ids": [
      "platano",
      "yogur",
      "leche"
    ],
    "pasos": [
      "Pela el plátano y córtalo en trozos.",
      "Coloca el plátano en la licuadora con yogur natural.",
      "Añade leche poco a poco hasta obtener la textura deseada.",
      "Licúa hasta homogeneizar y sirve de inmediato."
    ]
  },
  {
    "titulo": "Ensalada de choclo y tomate",
    "ids": [
      "choclo",
      "tomate",
      "pepino",
      "limon"
    ],
    "pasos": [
      "Cuece el choclo hasta que esté tierno y deja enfriar rápidamente.",
      "Lava el tomate y el pepino.",
      "Corta las verduras en cubos y desgrana el choclo.",
      "Mezcla y aliña con jugo de limón antes de servir."
    ]
  },
  {
    "titulo": "Carne molida con pimentón y arroz",
    "ids": [
      "carne",
      "pimenton",
      "arroz",
      "cebolla"
    ],
    "pasos": [
      "Cuece el arroz en agua hasta que esté tierno.",
      "Sofríe la cebolla y el pimentón cortados en cubos.",
      "Agrega la carne molida y cocínala completamente hasta alcanzar 71 °C.",
      "Sirve la carne con verduras sobre el arroz caliente."
    ]
  },
  {
    "titulo": "Tortitas de avena y plátano",
    "ids": [
      "avena",
      "platano",
      "huevo",
      "leche"
    ],
    "pasos": [
      "Aplasta el plátano maduro en un recipiente.",
      "Agrega avena, huevo y un poco de leche y mezcla.",
      "Vierte porciones pequeñas en sartén antiadherente.",
      "Cocina por ambos lados hasta que el centro esté firme y el huevo bien cocido."
    ]
  },
  {
    "titulo": "Pasta con champiñones y espinaca",
    "ids": [
      "pasta",
      "champinon",
      "espinaca",
      "ajo"
    ],
    "pasos": [
      "Cuece la pasta siguiendo las indicaciones del envase.",
      "Saltea ajo picado y champiñones hasta que pierdan humedad.",
      "Añade espinaca lavada y cocina hasta que se ablande.",
      "Mezcla con la pasta y un poco de agua de cocción."
    ]
  },
  {
    "titulo": "Ensalada de pollo con lechuga y palta",
    "ids": [
      "pollo",
      "lechuga",
      "palta",
      "tomate"
    ],
    "pasos": [
      "Cocina el pollo completamente hasta alcanzar 74 °C y deja entibiar.",
      "Lava la lechuga y el tomate y córtalos.",
      "Pela y corta la palta justo antes de servir.",
      "Mezcla el pollo troceado con las verduras y sirve inmediatamente."
    ]
  },
  {
    "titulo": "Pescado a la plancha con ensalada fresca",
    "ids": [
      "pescado",
      "lechuga",
      "pepino",
      "limon"
    ],
    "pasos": [
      "Lava y corta la lechuga y el pepino.",
      "Aliña las verduras con jugo de limón y aceite.",
      "Calienta una sartén y cocina los filetes de pescado por ambos lados.",
      "Comprueba que el pescado alcance 63 °C en el centro y sirve con la ensalada."
    ]
  }
] as const;
const CANTIDADES:Record<string,string>={"merluza":"300 g","papa":"350 g","limon":"1 unidad","ajo":"2 dientes","salmon":"300 g","brocoli":"250 g","arroz":"150 g","cebolla":"100 g","leche":"250 ml","champinon":"200 g","perejil":"15 g","pan":"4 rebanadas","pepino":"1 unidad","yogur":"200 g","poroto":"200 g","pimenton":"1 unidad","tomate":"200 g","palta":"1 unidad","huevo":"2 unidades","avena":"100 g","manzana":"1 unidad","platano":"2 unidades","choclo":"200 g","carne":"300 g","pasta":"180 g","espinaca":"160 g","pollo":"300 g","lechuga":"150 g","pescado":"300 g"};
const TIEMPOS_COCCION:Record<string,number>={};
export const RECETAS_LOTE_6:Receta[]=FICHAS.map((f,i)=>({id:`lote-6-${i+1}`,titulo:f.titulo,descripcion:"Preparación para dos personas con cantidades orientativas.",tiempoPreparacion:"15 min",tiempoCoccion:`${TIEMPOS_COCCION[f.titulo]??( /ensalada|tostada|sandwich|sándwich|ceviche/i.test(f.titulo)?0:/sopa|guiso|cazuela|porotos|lentejas|estofado|pastel/i.test(f.titulo)?45:30)} min`,porciones:"2 personas",dificultad:"Fácil",ingredientes:f.ids.map(id=>`${CANTIDADES[id]} de ${id}`),pasos:[...f.pasos],costoAproximado:"Medio",preferencia:"Catálogo editorial sin IA",ingredientesCoincidentes:[],ingredientesFaltantes:[],porcentajeCoincidencia:0}));
