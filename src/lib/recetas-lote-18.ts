/** Lote 18: 25 recetas para el catálogo local. */
import type { Receta } from "./recipes.functions";
const FICHAS=[
  {
    "titulo": "Ensalada de quinoa con zanahoria asada",
    "ids": [
      "quinoa",
      "zanahoria",
      "limon",
      "perejil"
    ],
    "prep": 12,
    "coc": 30,
    "pasos": [
      "Enjuaga y cuece la quinoa en agua hasta que esté tierna.",
      "Pela y corta la zanahoria; saltéala hasta que esté tierna.",
      "Aliña con jugo de limón al terminar.",
      "Añade perejil picado justo antes de servir."
]
  },
  {
    "titulo": "Pollo con champiñones y arroz integral",
    "ids": [
      "pollo",
      "champinon",
      "arroz",
      "cebolla"
    ],
    "prep": 12,
    "coc": 35,
    "pasos": [
      "Dora el pollo y cocina hasta que alcance 74 °C en el centro.",
      "Lamina y saltea los champiñones hasta que pierdan su agua.",
      "Cuece el arroz en agua hasta que esté tierno.",
      "Pica y sofríe la cebolla hasta que esté transparente."
]
  },
  {
    "titulo": "Crema de zapallo y jengibre",
    "ids": [
      "zapallo",
      "jengibre",
      "papa",
      "leche"
    ],
    "prep": 12,
    "coc": 25,
    "pasos": [
      "Pela y corta el zapallo y las papas en cubos similares.",
      "Cuece ambas verduras en agua suficiente hasta que estén completamente tiernas.",
      "Incorpora el jengibre rallado y tritura con parte del líquido de cocción hasta obtener una crema.",
      "Añade la leche, calienta suavemente sin hervir y ajusta la textura antes de servir."
]
  },
  {
    "titulo": "Tortilla de acelga y queso",
    "ids": [
      "acelga",
      "huevo",
      "queso",
      "cebolla"
    ],
    "prep": 12,
    "coc": 18,
    "pasos": [
      "Lava la acelga, pícalas hojas y escúrrelas bien.",
      "Sofríe la cebolla picada y agrega la acelga hasta que se ablande y pierda humedad.",
      "Bate los huevos, mezcla con las verduras tibias y el queso desmenuzado.",
      "Vierte en una sartén antiadherente y cocina por ambos lados hasta que el centro quede cuajado."
]
  },
  {
    "titulo": "Pescado con papas y tomate al horno",
    "ids": [
      "pescado",
      "papa",
      "tomate",
      "ajo"
    ],
    "prep": 12,
    "coc": 35,
    "pasos": [
      "Hornea el pescado a 190 °C hasta que alcance 63 °C.",
      "Corta las papas en cubos y cuécelas hasta que estén tiernas.",
      "Lava y corta el tomate en cubos.",
      "Pica el ajo y saltéalo brevemente sin quemarlo."
]
  },
  {
    "titulo": "Ensalada de lentejas con pepino y menta",
    "ids": [
      "lenteja",
      "pepino",
      "menta",
      "limon"
    ],
    "prep": 12,
    "coc": 25,
    "pasos": [
      "Enjuaga y cuece las lentejas hasta que estén tiernas.",
      "Lava y corta el pepino en cubos.",
      "Pica la menta fresca y añádela al final.",
      "Aliña con jugo de limón al terminar."
]
  },
  {
    "titulo": "Pasta con tomate asado y ricota",
    "ids": [
      "pasta",
      "tomate",
      "ricota",
      "albahaca"
    ],
    "prep": 12,
    "coc": 25,
    "pasos": [
      "Cuece la pasta en agua hirviendo hasta que esté al dente.",
      "Lava y corta el tomate en cubos.",
      "Incorpora la ricota al final para mantener su textura.",
      "Añade albahaca fresca picada antes de servir."
]
  },
  {
    "titulo": "Arroz con berenjena y tofu al ajo",
    "ids": [
      "arroz",
      "berenjena",
      "tofu",
      "ajo"
    ],
    "prep": 12,
    "coc": 25,
    "pasos": [
      "Cuece el arroz en agua hasta que esté tierno.",
      "Corta la berenjena y hornéala a 200 °C hasta que esté tierna.",
      "Corta el tofu y dóralo en una sartén.",
      "Pica el ajo y saltéalo brevemente sin quemarlo."
]
  },
  {
    "titulo": "Pollo con arvejas y zanahoria",
    "ids": [
      "pollo",
      "arveja",
      "zanahoria",
      "cebolla"
    ],
    "prep": 12,
    "coc": 25,
    "pasos": [
      "Dora el pollo y cocina hasta que alcance 74 °C en el centro.",
      "Cuece las arvejas hasta que estén tiernas.",
      "Pela y corta la zanahoria; saltéala hasta que esté tierna.",
      "Pica y sofríe la cebolla hasta que esté transparente."
]
  },
  {
    "titulo": "Cuscús con garbanzos y limón",
    "ids": [
      "cuscus",
      "garbanzo",
      "limon",
      "perejil"
    ],
    "prep": 10,
    "coc": 15,
    "pasos": [
      "Hidrata el cuscús con agua caliente según el envase.",
      "Usa garbanzos previamente cocidos y escurridos.",
      "Aliña con jugo de limón al terminar.",
      "Añade perejil picado justo antes de servir."
]
  },
  {
    "titulo": "Ensalada de repollo con palta y choclo",
    "ids": [
      "repollo",
      "palta",
      "choclo",
      "tomate"
    ],
    "prep": 12,
    "coc": 12,
    "pasos": [
      "Lava y corta el repollo en tiras finas.",
      "Pela y corta la palta justo antes de servir.",
      "Cuece el choclo hasta que esté tierno.",
      "Lava y corta el tomate en cubos."
]
  },
  {
    "titulo": "Papas rellenas de brócoli y queso",
    "ids": [
      "papa",
      "brocoli",
      "queso",
      "leche"
    ],
    "prep": 15,
    "coc": 50,
    "pasos": [
      "Lava las papas, cuécelas enteras con piel hasta que estén tiernas y deja entibiar.",
      "Corta cada papa a lo largo y retira parte del centro, dejando una pared firme.",
      "Cuece el brócoli al vapor, pícalo y mézclalo con la pulpa de papa y un poco de leche.",
      "Rellena las papas, cubre con queso y gratina a 200 °C hasta que se dore."
]
  },
  {
    "titulo": "Omelette de tomate y albahaca",
    "ids": [
      "huevo",
      "tomate",
      "albahaca",
      "queso"
    ],
    "prep": 10,
    "coc": 12,
    "pasos": [
      "Bate los huevos y cuájalos completamente en una sartén.",
      "Lava y corta el tomate en cubos.",
      "Añade albahaca fresca picada antes de servir.",
      "Agrega el queso y calienta hasta que se funda."
]
  },
  {
    "titulo": "Sopa de lentejas con zapallo",
    "ids": [
      "lenteja",
      "zapallo",
      "cebolla",
      "zanahoria"
    ],
    "prep": 12,
    "coc": 40,
    "pasos": [
      "Enjuaga y cuece las lentejas hasta que estén tiernas.",
      "Corta el zapallo en cubos y hornéalo a 200 °C hasta que esté tierno.",
      "Pica y sofríe la cebolla hasta que esté transparente.",
      "Pela y corta la zanahoria; saltéala hasta que esté tierna."
]
  },
  {
    "titulo": "Ensalada de arroz con atún y pepino",
    "ids": [
      "arroz",
      "atun",
      "pepino",
      "limon"
    ],
    "prep": 12,
    "coc": 20,
    "pasos": [
      "Cuece el arroz en agua hasta que esté tierno.",
      "Escurre el atún en conserva antes de incorporarlo a la preparación.",
      "Lava y corta el pepino en cubos.",
      "Aliña con jugo de limón al terminar."
]
  },
  {
    "titulo": "Salmón con coliflor y limón",
    "ids": [
      "salmon",
      "coliflor",
      "limon",
      "ajo"
    ],
    "prep": 12,
    "coc": 25,
    "pasos": [
      "Hornea el salmón a 190 °C hasta que alcance 63 °C.",
      "Cocina la coliflor al vapor hasta que esté tierna.",
      "Aliña con jugo de limón al terminar.",
      "Pica el ajo y saltéalo brevemente sin quemarlo."
]
  },
  {
    "titulo": "Tacos de porotos negros y palta",
    "ids": [
      "tortilla",
      "poroto",
      "palta",
      "tomate"
    ],
    "prep": 12,
    "coc": 15,
    "pasos": [
      "Calienta las tortillas por ambos lados.",
      "Usa porotos previamente cocidos y escurridos.",
      "Pela y corta la palta justo antes de servir.",
      "Lava y corta el tomate en cubos."
]
  },
  {
    "titulo": "Crema de zanahoria y papa con perejil",
    "ids": [
      "zanahoria",
      "papa",
      "perejil",
      "leche"
    ],
    "prep": 12,
    "coc": 25,
    "pasos": [
      "Pela y corta la zanahoria; saltéala hasta que esté tierna.",
      "Corta las papas en cubos y cuécelas hasta que estén tiernas.",
      "Añade perejil picado justo antes de servir.",
      "Agrega la leche y calienta suavemente sin hervir."
]
  },
  {
    "titulo": "Fideos con champiñones y arvejas",
    "ids": [
      "pasta",
      "champinon",
      "arveja",
      "ajo"
    ],
    "prep": 10,
    "coc": 18,
    "pasos": [
      "Cuece la pasta en agua hirviendo hasta que esté al dente.",
      "Lamina y saltea los champiñones hasta que pierdan su agua.",
      "Cuece las arvejas hasta que estén tiernas.",
      "Pica el ajo y saltéalo brevemente sin quemarlo."
]
  },
  {
    "titulo": "Quinoa con espinaca y huevo duro",
    "ids": [
      "quinoa",
      "espinaca",
      "huevo",
      "limon"
    ],
    "prep": 12,
    "coc": 20,
    "pasos": [
      "Enjuaga y cuece la quinoa en agua hasta que esté tierna.",
      "Lava y saltea la espinaca brevemente.",
      "Bate los huevos y cuájalos completamente en una sartén.",
      "Aliña con jugo de limón al terminar."
]
  },
  {
    "titulo": "Berenjenas gratinadas con tomate",
    "ids": [
      "berenjena",
      "tomate",
      "queso",
      "albahaca"
    ],
    "prep": 12,
    "coc": 35,
    "pasos": [
      "Corta la berenjena y hornéala a 200 °C hasta que esté tierna.",
      "Lava y corta el tomate en cubos.",
      "Agrega el queso y calienta hasta que se funda.",
      "Añade albahaca fresca picada antes de servir."
]
  },
  {
    "titulo": "Pollo con puré de arvejas",
    "ids": [
      "pollo",
      "arveja",
      "papa",
      "leche"
    ],
    "prep": 12,
    "coc": 25,
    "pasos": [
      "Dora el pollo y cocina hasta que alcance 74 °C en el centro.",
      "Cuece las arvejas hasta que estén tiernas.",
      "Corta las papas en cubos y cuécelas hasta que estén tiernas.",
      "Agrega la leche y calienta suavemente sin hervir."
]
  },
  {
    "titulo": "Ensalada tibia de garbanzos y betarraga",
    "ids": [
      "garbanzo",
      "betarraga",
      "perejil",
      "limon"
    ],
    "prep": 12,
    "coc": 35,
    "pasos": [
      "Usa garbanzos previamente cocidos y escurridos.",
      "Cuece la betarraga hasta que esté tierna y córtala en cubos.",
      "Añade perejil picado justo antes de servir.",
      "Aliña con jugo de limón al terminar."
]
  },
  {
    "titulo": "Arroz con choclo y pimentón salteado",
    "ids": [
      "arroz",
      "choclo",
      "pimenton",
      "cebolla"
    ],
    "prep": 12,
    "coc": 25,
    "pasos": [
      "Cuece el arroz en agua hasta que esté tierno.",
      "Cuece el choclo hasta que esté tierno.",
      "Corta el pimentón y ásalo a 200 °C hasta que esté tierno.",
      "Pica y sofríe la cebolla hasta que esté transparente."
]
  },
  {
    "titulo": "Tostadas de champiñones y palta",
    "ids": [
      "pan",
      "champinon",
      "palta",
      "ajo"
    ],
    "prep": 10,
    "coc": 15,
    "pasos": [
      "Tuesta el pan hasta que esté dorado.",
      "Lamina y saltea los champiñones hasta que pierdan su agua.",
      "Pela y corta la palta justo antes de servir.",
      "Pica el ajo y saltéalo brevemente sin quemarlo."
]
  }
] as const;
const CANTIDADES:Record<string,string>={"quinoa":"150 g","zanahoria":"180 g","limon":"1 unidad","perejil":"1 cucharada","pollo":"300 g","champinon":"200 g","arroz":"150 g","cebolla":"100 g","zapallo":"300 g","jengibre":"10 g","papa":"350 g","leche":"180 ml","acelga":"160 g","huevo":"2 unidades","queso":"80 g","pescado":"300 g","tomate":"220 g","ajo":"2 dientes","lenteja":"180 g","pepino":"1 unidad","menta":"6 hojas","pasta":"180 g","ricota":"120 g","albahaca":"8 hojas","berenjena":"1 unidad","tofu":"250 g","arveja":"180 g","cuscus":"150 g","garbanzo":"200 g","repollo":"250 g","palta":"1 unidad","choclo":"200 g","brocoli":"250 g","atun":"140 g","salmon":"300 g","coliflor":"300 g","tortilla":"4 unidades","poroto":"200 g","espinaca":"160 g","betarraga":"2 unidades","pimenton":"1 unidad","pan":"4 rebanadas"};
export const RECETAS_LOTE_18:Receta[]=FICHAS.map((f,i)=>({id:`lote-18-${i+1}`,titulo:f.titulo,descripcion:"Preparación para dos personas; cantidades orientativas.",tiempoPreparacion:`${f.prep} min`,tiempoCoccion:`${f.coc} min`,porciones:"2 personas",dificultad:"Fácil",ingredientes:f.ids.map(id=>{
 const cantidad=CANTIDADES[id];
 if(id==="coco")return cantidad;
 if(id==="garbanzo")return `${cantidad} de garbanzos cocidos y escurridos`;
 if(id==="poroto")return `${cantidad} de porotos cocidos y escurridos`;
 const nombres:Record<string,string>={huevo:"huevos",champinon:"champiñones",atun:"atún",limon:"limón",pimenton:"pimentón",brocoli:"brócoli",salmon:"salmón",cuscus:"cuscús",tortilla:"tortillas",papa:"papas",nuez:"nueces",arveja:"arvejas",espinaca:"espinaca",lenteja:"lentejas",puerro:"puerro",zapallito:"zapallitos",pera:"pera",naranja:"naranjas",aceituna:"aceitunas"};
 return `${cantidad} de ${nombres[id]||id}`;
}),pasos:[...f.pasos],costoAproximado:"Medio",preferencia:"Catálogo editorial sin IA",ingredientesCoincidentes:[],ingredientesFaltantes:[],porcentajeCoincidencia:0}));
