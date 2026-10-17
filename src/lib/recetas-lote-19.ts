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
      "Usa garbanzos ya cocidos y escurridos.",
      "Lava, corta y cocina acelga según su textura hasta que esté tierno.",
      "Incorpora tomate y mezcla cuidadosamente los ingredientes.",
      "Termina con cebolla y sirve la preparación para dos personas."
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
      "Cuece la pasta hasta que esté al dente.",
      "Lava, corta y cocina pimenton según su textura hasta que esté tierno.",
      "Incorpora ajo y mezcla cuidadosamente los ingredientes.",
      "Termina con queso y sirve la preparación para dos personas."
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
      "Dora el pollo y cocina hasta que alcance 74 °C.",
      "Lava, corta y cocina quinoa según su textura hasta que esté tierno.",
      "Incorpora brocoli y mezcla cuidadosamente los ingredientes.",
      "Termina con limon y sirve la preparación para dos personas."
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
      "Cuece la betarraga hasta que esté tierna.",
      "Lava, corta y cocina pera según su textura hasta que esté tierno.",
      "Incorpora nuez y mezcla cuidadosamente los ingredientes.",
      "Termina con lechuga y sirve la preparación para dos personas."
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
      "Pela y corta la zanahoria en trozos pequeños.",
      "Lava, corta y cocina puerro según su textura hasta que esté tierno.",
      "Incorpora huevo y mezcla cuidadosamente los ingredientes.",
      "Termina con queso y sirve la preparación para dos personas."
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
      "Cocina el pescado hasta que alcance 63 °C.",
      "Lava, corta y cocina arroz según su textura hasta que esté tierno.",
      "Incorpora espinaca y mezcla cuidadosamente los ingredientes.",
      "Termina con ajo y sirve la preparación para dos personas."
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
      "Lava la coliflor y sepárala en ramilletes.",
      "Lava, corta y cocina papa según su textura hasta que esté tierno.",
      "Incorpora cebolla y mezcla cuidadosamente los ingredientes.",
      "Termina con romero y sirve la preparación para dos personas."
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
      "Hidrata el cuscús según las instrucciones del envase.",
      "Lava, corta y cocina zapallo según su textura hasta que esté tierno.",
      "Incorpora garbanzo y mezcla cuidadosamente los ingredientes.",
      "Termina con perejil y sirve la preparación para dos personas."
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
      "Lava, corta y cocina naranja según su textura hasta que esté tierno.",
      "Incorpora repollo y mezcla cuidadosamente los ingredientes.",
      "Termina con limon y sirve la preparación para dos personas."
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
      "Cuece o asa las papas hasta que estén tiernas.",
      "Lava, corta y cocina champinon según su textura hasta que esté tierno.",
      "Incorpora ricota y mezcla cuidadosamente los ingredientes.",
      "Termina con ajo y sirve la preparación para dos personas."
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
      "Cuece el arroz hasta que esté tierno.",
      "Lava, corta y cocina lenteja según su textura hasta que esté tierno.",
      "Incorpora zanahoria y mezcla cuidadosamente los ingredientes.",
      "Termina con cebolla y sirve la preparación para dos personas."
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
      "Lava, corta y cocina acelga según su textura hasta que esté tierno.",
      "Incorpora tomate y mezcla cuidadosamente los ingredientes.",
      "Termina con queso y sirve la preparación para dos personas."
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
      "Dora el pollo y cocina hasta que alcance 74 °C.",
      "Lava, corta y cocina romero según su textura hasta que esté tierno.",
      "Incorpora papa y mezcla cuidadosamente los ingredientes.",
      "Termina con zanahoria y sirve la preparación para dos personas."
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
      "Enjuaga y cuece la quinoa hasta que esté tierna.",
      "Lava, corta y cocina mango según su textura hasta que esté tierno.",
      "Incorpora pepino y mezcla cuidadosamente los ingredientes.",
      "Termina con menta y sirve la preparación para dos personas."
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
      "Cuece la pasta hasta que esté al dente.",
      "Lava, corta y cocina arveja según su textura hasta que esté tierno.",
      "Incorpora ricota y mezcla cuidadosamente los ingredientes.",
      "Termina con limon y sirve la preparación para dos personas."
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
      "Cocina el pescado hasta que alcance 63 °C.",
      "Lava, corta y cocina tomate según su textura hasta que esté tierno.",
      "Incorpora aceituna y mezcla cuidadosamente los ingredientes.",
      "Termina con ajo y sirve la preparación para dos personas."
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
      "Usa garbanzos ya cocidos y escurridos.",
      "Lava, corta y cocina betarraga según su textura hasta que esté tierno.",
      "Incorpora avena y mezcla cuidadosamente los ingredientes.",
      "Termina con huevo y sirve la preparación para dos personas."
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
      "Pela y corta la zanahoria en trozos pequeños.",
      "Lava, corta y cocina jengibre según su textura hasta que esté tierno.",
      "Incorpora coco y mezcla cuidadosamente los ingredientes.",
      "Termina con cebolla y sirve la preparación para dos personas."
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
      "Calienta las tortillas en una sartén.",
      "Lava, corta y cocina tofu según su textura hasta que esté tierno.",
      "Incorpora pimenton y mezcla cuidadosamente los ingredientes.",
      "Termina con palta y sirve la preparación para dos personas."
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
      "Cuece el arroz hasta que esté tierno.",
      "Lava, corta y cocina brocoli según su textura hasta que esté tierno.",
      "Incorpora zanahoria y mezcla cuidadosamente los ingredientes.",
      "Termina con limon y sirve la preparación para dos personas."
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
      "Parte los zapallitos por la mitad y hornéalos hasta ablandar.",
      "Lava, corta y cocina lenteja según su textura hasta que esté tierno.",
      "Incorpora tomate y mezcla cuidadosamente los ingredientes.",
      "Termina con queso y sirve la preparación para dos personas."
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
      "Lava, corta y cocina pollo según su textura hasta que esté tierno.",
      "Incorpora papa y mezcla cuidadosamente los ingredientes.",
      "Termina con perejil y sirve la preparación para dos personas."
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
      "Corta la berenjena por la mitad y hornéala hasta ablandar.",
      "Lava, corta y cocina garbanzo según su textura hasta que esté tierno.",
      "Incorpora yogur y mezcla cuidadosamente los ingredientes.",
      "Termina con ajo y sirve la preparación para dos personas."
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
      "Tuesta el pan por ambos lados.",
      "Lava, corta y cocina huevo según su textura hasta que esté tierno.",
      "Incorpora espinaca y mezcla cuidadosamente los ingredientes.",
      "Termina con tomate y sirve la preparación para dos personas."
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
      "Enjuaga y cuece la quinoa hasta que esté tierna.",
      "Lava, corta y cocina salmon según su textura hasta que esté tierno.",
      "Incorpora arveja y mezcla cuidadosamente los ingredientes.",
      "Termina con limon y sirve la preparación para dos personas."
    ]
  }
] as const;
const CANTIDADES:Record<string,string>={"garbanzo":"200 g","acelga":"160 g","tomate":"220 g","cebolla":"100 g","pasta":"180 g","pimenton":"1 unidad","ajo":"2 dientes","queso":"80 g","pollo":"300 g","quinoa":"150 g","brocoli":"250 g","limon":"1 unidad","betarraga":"2 unidades","pera":"1 unidad","nuez":"50 g","lechuga":"100 g","zanahoria":"180 g","puerro":"1 unidad","huevo":"2 unidades","pescado":"300 g","arroz":"150 g","espinaca":"160 g","coliflor":"300 g","papa":"350 g","romero":"1 ramita","cuscus":"150 g","zapallo":"300 g","perejil":"1 cucharada","poroto":"200 g","naranja":"2 unidades","repollo":"250 g","champinon":"200 g","ricota":"120 g","lenteja":"180 g","mango":"1 unidad","pepino":"1 unidad","menta":"6 hojas","arveja":"180 g","aceituna":"60 g","avena":"100 g","jengibre":"10 g","coco":"180 ml de leche de coco","tortilla":"4 unidades","tofu":"250 g","palta":"1 unidad","zapallito":"2 unidades","choclo":"200 g","berenjena":"1 unidad","yogur":"150 g","pan":"4 rebanadas","salmon":"300 g"};
export const RECETAS_LOTE_19:Receta[]=FICHAS.map((f,i)=>({id:`lote-19-${i+1}`,titulo:f.titulo,descripcion:"Preparación para dos personas; cantidades orientativas.",tiempoPreparacion:`${f.prep} min`,tiempoCoccion:`${f.coc} min`,porciones:"2 personas",dificultad:"Fácil",ingredientes:f.ids.map(id=>id==="coco"?CANTIDADES[id]:`${CANTIDADES[id]} de ${id}`),pasos:[...f.pasos],costoAproximado:"Medio",preferencia:"Catálogo editorial sin IA",ingredientesCoincidentes:[],ingredientesFaltantes:[],porcentajeCoincidencia:0}));
