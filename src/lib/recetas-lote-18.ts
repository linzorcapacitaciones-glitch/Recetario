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
      "Cuece la quinoa previamente enjuagada hasta que esté tierna.",
      "Prepara zanahoria y córtalo en porciones adecuadas para dos personas.",
      "Incorpora limon y mezcla con los ingredientes cocidos.",
      "Termina con perejil y sirve a la temperatura adecuada."
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
      "Cocina el pollo hasta que alcance 74 °C en su centro.",
      "Prepara champinon y córtalo en porciones adecuadas para dos personas.",
      "Incorpora arroz y mezcla con los ingredientes cocidos.",
      "Termina con cebolla y sirve a la temperatura adecuada."
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
      "Corta el zapallo en cubos y cuécelo hasta que esté tierno.",
      "Prepara jengibre y córtalo en porciones adecuadas para dos personas.",
      "Incorpora papa y mezcla con los ingredientes cocidos.",
      "Termina con leche y sirve a la temperatura adecuada."
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
      "Lava la acelga y saltéala hasta que pierda volumen.",
      "Prepara huevo y córtalo en porciones adecuadas para dos personas.",
      "Incorpora queso y mezcla con los ingredientes cocidos.",
      "Termina con cebolla y sirve a la temperatura adecuada."
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
      "Hornea el pescado hasta que alcance 63 °C en su centro.",
      "Prepara papa y córtalo en porciones adecuadas para dos personas.",
      "Incorpora tomate y mezcla con los ingredientes cocidos.",
      "Termina con ajo y sirve a la temperatura adecuada."
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
      "Cuece las lentejas hasta que estén tiernas.",
      "Prepara pepino y córtalo en porciones adecuadas para dos personas.",
      "Incorpora menta y mezcla con los ingredientes cocidos.",
      "Termina con limon y sirve a la temperatura adecuada."
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
      "Cuece la pasta hasta que esté al dente.",
      "Prepara tomate y córtalo en porciones adecuadas para dos personas.",
      "Incorpora ricota y mezcla con los ingredientes cocidos.",
      "Termina con albahaca y sirve a la temperatura adecuada."
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
      "Cuece el arroz hasta que esté tierno.",
      "Prepara berenjena y córtalo en porciones adecuadas para dos personas.",
      "Incorpora tofu y mezcla con los ingredientes cocidos.",
      "Termina con ajo y sirve a la temperatura adecuada."
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
      "Cocina el pollo hasta que alcance 74 °C en su centro.",
      "Prepara arveja y córtalo en porciones adecuadas para dos personas.",
      "Incorpora zanahoria y mezcla con los ingredientes cocidos.",
      "Termina con cebolla y sirve a la temperatura adecuada."
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
      "Hidrata el cuscús siguiendo las instrucciones del envase.",
      "Prepara garbanzo y córtalo en porciones adecuadas para dos personas.",
      "Incorpora limon y mezcla con los ingredientes cocidos.",
      "Termina con perejil y sirve a la temperatura adecuada."
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
      "Prepara palta y córtalo en porciones adecuadas para dos personas.",
      "Incorpora choclo y mezcla con los ingredientes cocidos.",
      "Termina con tomate y sirve a la temperatura adecuada."
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
      "Cuece las papas hasta que estén tiernas.",
      "Prepara brocoli y córtalo en porciones adecuadas para dos personas.",
      "Incorpora queso y mezcla con los ingredientes cocidos.",
      "Termina con leche y sirve a la temperatura adecuada."
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
      "Cuece o cuaja los huevos hasta que estén completamente cocidos.",
      "Prepara tomate y córtalo en porciones adecuadas para dos personas.",
      "Incorpora albahaca y mezcla con los ingredientes cocidos.",
      "Termina con queso y sirve a la temperatura adecuada."
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
      "Cuece las lentejas hasta que estén tiernas.",
      "Prepara zapallo y córtalo en porciones adecuadas para dos personas.",
      "Incorpora cebolla y mezcla con los ingredientes cocidos.",
      "Termina con zanahoria y sirve a la temperatura adecuada."
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
      "Cuece el arroz hasta que esté tierno.",
      "Prepara atun y córtalo en porciones adecuadas para dos personas.",
      "Incorpora pepino y mezcla con los ingredientes cocidos.",
      "Termina con limon y sirve a la temperatura adecuada."
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
      "Hornea el salmón hasta que alcance 63 °C.",
      "Prepara coliflor y córtalo en porciones adecuadas para dos personas.",
      "Incorpora limon y mezcla con los ingredientes cocidos.",
      "Termina con ajo y sirve a la temperatura adecuada."
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
      "Calienta las tortillas en una sartén.",
      "Prepara poroto y córtalo en porciones adecuadas para dos personas.",
      "Incorpora palta y mezcla con los ingredientes cocidos.",
      "Termina con tomate y sirve a la temperatura adecuada."
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
      "Cuece la zanahoria hasta que esté tierna.",
      "Prepara papa y córtalo en porciones adecuadas para dos personas.",
      "Incorpora perejil y mezcla con los ingredientes cocidos.",
      "Termina con leche y sirve a la temperatura adecuada."
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
      "Cuece la pasta hasta que esté al dente.",
      "Prepara champinon y córtalo en porciones adecuadas para dos personas.",
      "Incorpora arveja y mezcla con los ingredientes cocidos.",
      "Termina con ajo y sirve a la temperatura adecuada."
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
      "Cuece la quinoa previamente enjuagada hasta que esté tierna.",
      "Prepara espinaca y córtalo en porciones adecuadas para dos personas.",
      "Incorpora huevo y mezcla con los ingredientes cocidos.",
      "Termina con limon y sirve a la temperatura adecuada."
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
      "Hornea la berenjena hasta que esté blanda.",
      "Prepara tomate y córtalo en porciones adecuadas para dos personas.",
      "Incorpora queso y mezcla con los ingredientes cocidos.",
      "Termina con albahaca y sirve a la temperatura adecuada."
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
      "Cocina el pollo hasta que alcance 74 °C en su centro.",
      "Prepara arveja y córtalo en porciones adecuadas para dos personas.",
      "Incorpora papa y mezcla con los ingredientes cocidos.",
      "Termina con leche y sirve a la temperatura adecuada."
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
      "Utiliza garbanzos previamente cocidos y escurridos.",
      "Prepara betarraga y córtalo en porciones adecuadas para dos personas.",
      "Incorpora perejil y mezcla con los ingredientes cocidos.",
      "Termina con limon y sirve a la temperatura adecuada."
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
      "Cuece el arroz hasta que esté tierno.",
      "Prepara choclo y córtalo en porciones adecuadas para dos personas.",
      "Incorpora pimenton y mezcla con los ingredientes cocidos.",
      "Termina con cebolla y sirve a la temperatura adecuada."
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
      "Tuesta el pan por ambos lados.",
      "Prepara champinon y córtalo en porciones adecuadas para dos personas.",
      "Incorpora palta y mezcla con los ingredientes cocidos.",
      "Termina con ajo y sirve a la temperatura adecuada."
    ]
  }
] as const;
const CANTIDADES:Record<string,string>={"quinoa":"150 g","zanahoria":"180 g","limon":"1 unidad","perejil":"1 cucharada","pollo":"300 g","champinon":"200 g","arroz":"150 g","cebolla":"100 g","zapallo":"300 g","jengibre":"10 g","papa":"350 g","leche":"180 ml","acelga":"160 g","huevo":"2 unidades","queso":"80 g","pescado":"300 g","tomate":"220 g","ajo":"2 dientes","lenteja":"180 g","pepino":"1 unidad","menta":"6 hojas","pasta":"180 g","ricota":"120 g","albahaca":"8 hojas","berenjena":"1 unidad","tofu":"250 g","arveja":"180 g","cuscus":"150 g","garbanzo":"200 g","repollo":"250 g","palta":"1 unidad","choclo":"200 g","brocoli":"250 g","atun":"140 g","salmon":"300 g","coliflor":"300 g","tortilla":"4 unidades","poroto":"200 g","espinaca":"160 g","betarraga":"2 unidades","pimenton":"1 unidad","pan":"4 rebanadas"};
export const RECETAS_LOTE_18:Receta[]=FICHAS.map((f,i)=>({id:`lote-18-${i+1}`,titulo:f.titulo,descripcion:"Preparación para dos personas; cantidades orientativas.",tiempoPreparacion:`${f.prep} min`,tiempoCoccion:`${f.coc} min`,porciones:"2 personas",dificultad:"Fácil",ingredientes:f.ids.map(id=>`${CANTIDADES[id]} de ${id}`),pasos:[...f.pasos],costoAproximado:"Medio",preferencia:"Catálogo editorial sin IA",ingredientesCoincidentes:[],ingredientesFaltantes:[],porcentajeCoincidencia:0}));
