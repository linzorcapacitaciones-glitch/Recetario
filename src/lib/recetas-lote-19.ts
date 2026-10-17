/** Lote 19: 25 recetas finales del objetivo inicial. */
import type { Receta } from "./recipes.functions";
const FICHAS=[
  {
    "titulo": "Guiso de garbanzos con acelga y tomate",
    "ids": [
      "garbanzo",
      "acelga",
      "tomate",
      "cebolla"
    ],
    "prep": 15,
    "coc": 30,
    "pasos": [
      "Usa garbanzos previamente cocidos y escurridos.",
      "Lava y saltea la acelga hasta que se ablande.",
      "Lava y corta el tomate en cubos.",
      "Pica y sofríe la cebolla hasta que esté transparente."
]
  },
  {
    "titulo": "Pasta con salsa de pimentón asado",
    "ids": [
      "pasta",
      "pimenton",
      "ajo",
      "queso"
    ],
    "prep": 12,
    "coc": 30,
    "pasos": [
      "Cuece la pasta en agua hirviendo hasta que esté al dente.",
      "Corta el pimentón y ásalo a 200 °C hasta que esté tierno.",
      "Pica el ajo y saltéalo brevemente sin quemarlo.",
      "Agrega el queso y calienta hasta que se funda."
]
  },
  {
    "titulo": "Pollo con quinoa y brócoli al limón",
    "ids": [
      "pollo",
      "quinoa",
      "brocoli",
      "limon"
    ],
    "prep": 12,
    "coc": 25,
    "pasos": [
      "Dora el pollo y cocina hasta que alcance 74 °C en el centro.",
      "Enjuaga y cuece la quinoa en agua hasta que esté tierna.",
      "Cuece el brócoli al vapor hasta que esté tierno.",
      "Aliña con jugo de limón al terminar."
]
  },
  {
    "titulo": "Ensalada de betarraga con pera y nueces",
    "ids": [
      "betarraga",
      "pera",
      "nuez",
      "lechuga"
    ],
    "prep": 12,
    "coc": 35,
    "pasos": [
      "Cuece la betarraga hasta que esté tierna y córtala en cubos.",
      "Lava y corta la pera en cubos.",
      "Trocea las nueces y añádelas al final.",
      "Lava, seca y trocea la lechuga."
]
  },
  {
    "titulo": "Tortilla de zanahoria y puerro",
    "ids": [
      "zanahoria",
      "puerro",
      "huevo",
      "queso"
    ],
    "prep": 12,
    "coc": 18,
    "pasos": [
      "Pela y corta la zanahoria; saltéala hasta que esté tierna.",
      "Lava y saltea el puerro en rodajas hasta que se ablande.",
      "Bate los huevos y cuájalos completamente en una sartén.",
      "Agrega el queso y calienta hasta que se funda."
]
  },
  {
    "titulo": "Pescado con arroz y espinaca",
    "ids": [
      "pescado",
      "arroz",
      "espinaca",
      "ajo"
    ],
    "prep": 12,
    "coc": 25,
    "pasos": [
      "Hornea el pescado a 190 °C hasta que alcance 63 °C.",
      "Cuece el arroz en agua hasta que esté tierno.",
      "Lava y saltea la espinaca brevemente.",
      "Pica el ajo y saltéalo brevemente sin quemarlo."
]
  },
  {
    "titulo": "Crema de coliflor con romero",
    "ids": [
      "coliflor",
      "papa",
      "cebolla",
      "romero"
    ],
    "prep": 12,
    "coc": 25,
    "pasos": [
      "Cocina la coliflor al vapor hasta que esté tierna.",
      "Corta las papas en cubos y cuécelas hasta que estén tiernas.",
      "Pica y sofríe la cebolla hasta que esté transparente.",
      "Agrega romero durante la cocción y retira la rama antes de servir."
]
  },
  {
    "titulo": "Cuscús con zapallo y garbanzos",
    "ids": [
      "cuscus",
      "zapallo",
      "garbanzo",
      "perejil"
    ],
    "prep": 12,
    "coc": 30,
    "pasos": [
      "Hidrata el cuscús con agua caliente según el envase.",
      "Corta el zapallo en cubos y hornéalo a 200 °C hasta que esté tierno.",
      "Usa garbanzos previamente cocidos y escurridos.",
      "Añade perejil picado justo antes de servir."
]
  },
  {
    "titulo": "Ensalada de porotos con naranja y repollo",
    "ids": [
      "poroto",
      "naranja",
      "repollo",
      "limon"
    ],
    "prep": 12,
    "coc": 0,
    "pasos": [
      "Usa porotos previamente cocidos y escurridos.",
      "Pela la naranja y separa los gajos.",
      "Lava y corta el repollo en tiras finas.",
      "Aliña con jugo de limón al terminar."
]
  },
  {
    "titulo": "Papas asadas con champiñones y ricota",
    "ids": [
      "papa",
      "champinon",
      "ricota",
      "ajo"
    ],
    "prep": 15,
    "coc": 45,
    "pasos": [
      "Corta las papas en cubos y cuécelas hasta que estén tiernas.",
      "Lamina y saltea los champiñones hasta que pierdan su agua.",
      "Incorpora la ricota al final para mantener su textura.",
      "Pica el ajo y saltéalo brevemente sin quemarlo."
]
  },
  {
    "titulo": "Arroz con lentejas y zanahoria salteada",
    "ids": [
      "arroz",
      "lenteja",
      "zanahoria",
      "cebolla"
    ],
    "prep": 12,
    "coc": 30,
    "pasos": [
      "Cuece el arroz en agua hasta que esté tierno.",
      "Enjuaga y cuece las lentejas hasta que estén tiernas.",
      "Pela y corta la zanahoria; saltéala hasta que esté tierna.",
      "Pica y sofríe la cebolla hasta que esté transparente."
]
  },
  {
    "titulo": "Omelette de acelga y tomate",
    "ids": [
      "huevo",
      "acelga",
      "tomate",
      "queso"
    ],
    "prep": 10,
    "coc": 15,
    "pasos": [
      "Bate los huevos y cuájalos completamente en una sartén.",
      "Lava y saltea la acelga hasta que se ablande.",
      "Lava y corta el tomate en cubos.",
      "Agrega el queso y calienta hasta que se funda."
]
  },
  {
    "titulo": "Pollo al romero con papas y zanahoria",
    "ids": [
      "pollo",
      "romero",
      "papa",
      "zanahoria"
    ],
    "prep": 15,
    "coc": 40,
    "pasos": [
      "Dora el pollo y cocina hasta que alcance 74 °C en el centro.",
      "Agrega romero durante la cocción y retira la rama antes de servir.",
      "Corta las papas en cubos y cuécelas hasta que estén tiernas.",
      "Pela y corta la zanahoria; saltéala hasta que esté tierna."
]
  },
  {
    "titulo": "Ensalada de quinoa con mango y pepino",
    "ids": [
      "quinoa",
      "mango",
      "pepino",
      "menta"
    ],
    "prep": 12,
    "coc": 20,
    "pasos": [
      "Enjuaga y cuece la quinoa en agua hasta que esté tierna.",
      "Pela y corta el mango en cubos.",
      "Lava y corta el pepino en cubos.",
      "Pica la menta fresca y añádela al final."
]
  },
  {
    "titulo": "Pasta con arvejas y ricota al limón",
    "ids": [
      "pasta",
      "arveja",
      "ricota",
      "limon"
    ],
    "prep": 10,
    "coc": 18,
    "pasos": [
      "Cuece la pasta en agua hirviendo hasta que esté al dente.",
      "Cuece las arvejas hasta que estén tiernas.",
      "Incorpora la ricota al final para mantener su textura.",
      "Aliña con jugo de limón al terminar."
]
  },
  {
    "titulo": "Pescado al tomate con aceitunas",
    "ids": [
      "pescado",
      "tomate",
      "aceituna",
      "ajo"
    ],
    "prep": 12,
    "coc": 25,
    "pasos": [
      "Hornea el pescado a 190 °C hasta que alcance 63 °C.",
      "Lava y corta el tomate en cubos.",
      "Incorpora aceitunas sin carozo al final.",
      "Pica el ajo y saltéalo brevemente sin quemarlo."
]
  },
  {
    "titulo": "Hamburguesas de garbanzos con betarraga",
    "ids": [
      "garbanzo",
      "betarraga",
      "avena",
      "huevo"
    ],
    "prep": 15,
    "coc": 20,
    "pasos": [
      "Usa garbanzos previamente cocidos y escurridos.",
      "Cuece la betarraga hasta que esté tierna y córtala en cubos.",
      "Incorpora la avena para dar consistencia a la mezcla.",
      "Bate los huevos y cuájalos completamente en una sartén."
]
  },
  {
    "titulo": "Crema de zanahoria y jengibre con coco",
    "ids": [
      "zanahoria",
      "jengibre",
      "coco",
      "cebolla"
    ],
    "prep": 12,
    "coc": 25,
    "pasos": [
      "Pela y corta la zanahoria; saltéala hasta que esté tierna.",
      "Ralla el jengibre fresco.",
      "Agrega la leche de coco y calienta a fuego bajo.",
      "Pica y sofríe la cebolla hasta que esté transparente."
]
  },
  {
    "titulo": "Tacos de tofu con pimentón y palta",
    "ids": [
      "tortilla",
      "tofu",
      "pimenton",
      "palta"
    ],
    "prep": 12,
    "coc": 18,
    "pasos": [
      "Calienta las tortillas por ambos lados.",
      "Corta el tofu y dóralo en una sartén.",
      "Corta el pimentón y ásalo a 200 °C hasta que esté tierno.",
      "Pela y corta la palta justo antes de servir."
]
  },
  {
    "titulo": "Ensalada tibia de arroz con brócoli",
    "ids": [
      "arroz",
      "brocoli",
      "zanahoria",
      "limon"
    ],
    "prep": 12,
    "coc": 25,
    "pasos": [
      "Cuece el arroz en agua hasta que esté tierno.",
      "Cuece el brócoli al vapor hasta que esté tierno.",
      "Pela y corta la zanahoria; saltéala hasta que esté tierna.",
      "Aliña con jugo de limón al terminar."
]
  },
  {
    "titulo": "Zapallitos rellenos de lentejas",
    "ids": [
      "zapallito",
      "lenteja",
      "tomate",
      "queso"
    ],
    "prep": 15,
    "coc": 35,
    "pasos": [
      "Corta los zapallitos por la mitad, ahuécalos y hornéalos hasta que estén tiernos.",
      "Enjuaga y cuece las lentejas hasta que estén tiernas.",
      "Lava y corta el tomate en cubos.",
      "Agrega el queso y calienta hasta que se funda."
]
  },
  {
    "titulo": "Sopa de choclo con pollo y perejil",
    "ids": [
      "choclo",
      "pollo",
      "papa",
      "perejil"
    ],
    "prep": 12,
    "coc": 30,
    "pasos": [
      "Cuece el choclo hasta que esté tierno.",
      "Dora el pollo y cocina hasta que alcance 74 °C en el centro.",
      "Corta las papas en cubos y cuécelas hasta que estén tiernas.",
      "Añade perejil picado justo antes de servir."
]
  },
  {
    "titulo": "Berenjena al horno con garbanzos y yogur",
    "ids": [
      "berenjena",
      "garbanzo",
      "yogur",
      "ajo"
    ],
    "prep": 15,
    "coc": 35,
    "pasos": [
      "Corta la berenjena y hornéala a 200 °C hasta que esté tierna.",
      "Usa garbanzos previamente cocidos y escurridos.",
      "Mezcla el yogur fuera del fuego.",
      "Pica el ajo y saltéalo brevemente sin quemarlo."
]
  },
  {
    "titulo": "Tostadas de huevo con espinaca y tomate",
    "ids": [
      "pan",
      "huevo",
      "espinaca",
      "tomate"
    ],
    "prep": 10,
    "coc": 12,
    "pasos": [
      "Tuesta el pan hasta que esté dorado.",
      "Bate los huevos y cuájalos completamente en una sartén.",
      "Lava y saltea la espinaca brevemente.",
      "Lava y corta el tomate en cubos."
]
  },
  {
    "titulo": "Quinoa con salmón y arvejas",
    "ids": [
      "quinoa",
      "salmon",
      "arveja",
      "limon"
    ],
    "prep": 12,
    "coc": 25,
    "pasos": [
      "Enjuaga y cuece la quinoa en agua hasta que esté tierna.",
      "Hornea el salmón a 190 °C hasta que alcance 63 °C.",
      "Cuece las arvejas hasta que estén tiernas.",
      "Aliña con jugo de limón al terminar."
]
  }
] as const;
const CANTIDADES:Record<string,string>={"garbanzo":"200 g","acelga":"160 g","tomate":"220 g","cebolla":"100 g","pasta":"180 g","pimenton":"1 unidad","ajo":"2 dientes","queso":"80 g","pollo":"300 g","quinoa":"150 g","brocoli":"250 g","limon":"1 unidad","betarraga":"2 unidades","pera":"1 unidad","nuez":"50 g","lechuga":"100 g","zanahoria":"180 g","puerro":"1 unidad","huevo":"2 unidades","pescado":"300 g","arroz":"150 g","espinaca":"160 g","coliflor":"300 g","papa":"350 g","romero":"1 ramita","cuscus":"150 g","zapallo":"300 g","perejil":"1 cucharada","poroto":"200 g","naranja":"2 unidades","repollo":"250 g","champinon":"200 g","ricota":"120 g","lenteja":"180 g","mango":"1 unidad","pepino":"1 unidad","menta":"6 hojas","arveja":"180 g","aceituna":"60 g","avena":"100 g","jengibre":"10 g","coco":"180 ml de leche de coco","tortilla":"4 unidades","tofu":"250 g","palta":"1 unidad","zapallito":"2 unidades","choclo":"200 g","berenjena":"1 unidad","yogur":"150 g","pan":"4 rebanadas","salmon":"300 g"};
export const RECETAS_LOTE_19:Receta[]=FICHAS.map((f,i)=>({id:`lote-19-${i+1}`,titulo:f.titulo,descripcion:"Preparación para dos personas; cantidades orientativas.",tiempoPreparacion:`${f.prep} min`,tiempoCoccion:`${f.coc} min`,porciones:"2 personas",dificultad:"Fácil",ingredientes:f.ids.map(id=>{
 const cantidad=CANTIDADES[id];
 if(id==="coco")return cantidad;
 if(id==="garbanzo")return `${cantidad} de garbanzos cocidos y escurridos`;
 if(id==="poroto")return `${cantidad} de porotos cocidos y escurridos`;
 const nombres:Record<string,string>={huevo:"huevos",champinon:"champiñones",atun:"atún",limon:"limón",pimenton:"pimentón",brocoli:"brócoli",salmon:"salmón",cuscus:"cuscús",tortilla:"tortillas",papa:"papas",nuez:"nueces",arveja:"arvejas",espinaca:"espinaca",lenteja:"lentejas",puerro:"puerro",zapallito:"zapallitos",pera:"pera",naranja:"naranjas",aceituna:"aceitunas"};
 return `${cantidad} de ${nombres[id]||id}`;
}),pasos:[...f.pasos],costoAproximado:"Medio",preferencia:"Catálogo editorial sin IA",ingredientesCoincidentes:[],ingredientesFaltantes:[],porcentajeCoincidencia:0}));
