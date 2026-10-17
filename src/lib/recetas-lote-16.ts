/** Lote 16: 25 recetas con ingredientes cuantificados y tiempos propios. */
import type { Receta } from "./recipes.functions";
const FICHAS=[
  {
    "titulo": "Crema de choclo y zanahoria",
    "ids": [
      "choclo",
      "zanahoria",
      "cebolla",
      "leche"
    ],
    "pasos": [
      "Sofríe cebolla picada hasta que esté transparente.",
      "Añade zanahoria cortada en cubos y agua hasta cubrir.",
      "Cuando esté tierna, agrega el choclo cocido.",
      "Tritura con leche y calienta suavemente antes de servir."
    ],
    "prep": 12,
    "coc": 25
  },
  {
    "titulo": "Ensalada de porotos con pepino",
    "ids": [
      "poroto",
      "pepino",
      "tomate",
      "limon"
    ],
    "pasos": [
      "Cuece los porotos previamente remojados hasta que estén tiernos.",
      "Enfría rápidamente los porotos cocidos.",
      "Lava y corta pepino y tomate en cubos.",
      "Mezcla todo con jugo de limón y sirve."
    ],
    "prep": 12,
    "coc": 0
  },
  {
    "titulo": "Pasta con brócoli y nueces",
    "ids": [
      "pasta",
      "brocoli",
      "nuez",
      "ajo"
    ],
    "pasos": [
      "Cuece la pasta en agua hirviendo hasta que esté al dente.",
      "Cocina el brócoli al vapor hasta que esté tierno.",
      "Saltea ajo picado y agrega nueces troceadas.",
      "Mezcla todo con la pasta caliente."
    ],
    "prep": 10,
    "coc": 18
  },
  {
    "titulo": "Pollo con arroz y zapallo",
    "ids": [
      "pollo",
      "arroz",
      "zapallo",
      "cebolla"
    ],
    "pasos": [
      "Dora el pollo en trozos con cebolla picada.",
      "Añade zapallo en cubos y un poco de agua.",
      "Cuece el arroz por separado hasta que esté tierno.",
      "Sirve el pollo cuando alcance 74 °C acompañado de arroz."
    ],
    "prep": 12,
    "coc": 30
  },
  {
    "titulo": "Tortilla de zapallito y avena",
    "ids": [
      "zapallito",
      "huevo",
      "avena",
      "queso"
    ],
    "pasos": [
      "Ralla el zapallito y exprime el exceso de agua.",
      "Mezcla con avena, huevo y queso rallado.",
      "Calienta una sartén antiadherente y vierte la mezcla.",
      "Cocina por ambos lados hasta que el huevo esté completamente cuajado."
    ],
    "prep": 12,
    "coc": 18
  },
  {
    "titulo": "Ensalada de betarraga con garbanzos",
    "ids": [
      "betarraga",
      "garbanzo",
      "perejil",
      "limon"
    ],
    "pasos": [
      "Cuece las betarragas hasta que estén tiernas.",
      "Utiliza garbanzos previamente cocidos y escurridos.",
      "Corta las betarragas y pica el perejil.",
      "Mezcla con garbanzos y aliña con limón."
    ],
    "prep": 12,
    "coc": 35
  },
  {
    "titulo": "Arroz con champiñones y tofu",
    "ids": [
      "arroz",
      "champinon",
      "tofu",
      "ajo"
    ],
    "pasos": [
      "Cuece el arroz en agua hasta que esté tierno.",
      "Corta el tofu en cubos y dóralo en sartén.",
      "Añade champiñones laminados y ajo picado.",
      "Mezcla el salteado con el arroz y sirve caliente."
    ],
    "prep": 12,
    "coc": 20
  },
  {
    "titulo": "Pescado con puré de zapallo",
    "ids": [
      "pescado",
      "zapallo",
      "papa",
      "limon"
    ],
    "pasos": [
      "Cuece zapallo y papa hasta que estén tiernos.",
      "Machaca las verduras hasta formar un puré suave.",
      "Hornea el pescado a 190 °C hasta que alcance 63 °C.",
      "Sirve el pescado con puré y jugo de limón."
    ],
    "prep": 12,
    "coc": 25
  },
  {
    "titulo": "Cuscús con pollo y zanahoria",
    "ids": [
      "cuscus",
      "pollo",
      "zanahoria",
      "perejil"
    ],
    "pasos": [
      "Hidrata el cuscús según las instrucciones del envase.",
      "Corta el pollo en cubos y dóralo en sartén.",
      "Agrega zanahoria rallada y cocina hasta que el pollo alcance 74 °C.",
      "Mezcla con cuscús y perejil picado."
    ],
    "prep": 12,
    "coc": 20
  },
  {
    "titulo": "Ensalada de espinaca y naranja",
    "ids": [
      "espinaca",
      "naranja",
      "queso",
      "nuez"
    ],
    "pasos": [
      "Lava y seca las hojas de espinaca.",
      "Pela las naranjas y separa los gajos.",
      "Corta el queso en cubos y trocea las nueces.",
      "Mezcla todos los ingredientes y sirve de inmediato."
    ],
    "prep": 12,
    "coc": 0
  },
  {
    "titulo": "Guiso de lentejas con coliflor",
    "ids": [
      "lenteja",
      "coliflor",
      "tomate",
      "cebolla"
    ],
    "pasos": [
      "Sofríe cebolla picada y añade tomate troceado.",
      "Incorpora lentejas lavadas y agua suficiente.",
      "Cuando estén casi tiernas, agrega coliflor en ramilletes.",
      "Cuece hasta que las lentejas y la coliflor estén blandas."
    ],
    "prep": 12,
    "coc": 40
  },
  {
    "titulo": "Papas rellenas de espinaca",
    "ids": [
      "papa",
      "espinaca",
      "queso",
      "cebolla"
    ],
    "pasos": [
      "Hornea las papas enteras hasta que estén tiernas.",
      "Sofríe cebolla y espinaca picadas.",
      "Abre las papas y retira parte de la pulpa.",
      "Rellena con espinaca y queso y gratina hasta dorar."
    ],
    "prep": 15,
    "coc": 50
  },
  {
    "titulo": "Sopa de arroz con verduras",
    "ids": [
      "arroz",
      "zanahoria",
      "arveja",
      "cebolla"
    ],
    "pasos": [
      "Sofríe cebolla picada en una olla.",
      "Añade zanahoria en cubos y arroz lavado.",
      "Cubre con agua y cuece hasta que el arroz esté tierno.",
      "Incorpora arvejas y termina la cocción antes de servir."
    ],
    "prep": 12,
    "coc": 25
  },
  {
    "titulo": "Tacos de garbanzos especiados",
    "ids": [
      "tortilla",
      "garbanzo",
      "tomate",
      "repollo"
    ],
    "pasos": [
      "Utiliza garbanzos ya cocidos y escurridos.",
      "Saltéalos con especias suaves hasta que estén calientes.",
      "Lava y pica tomate y repollo.",
      "Calienta tortillas y rellena con garbanzos y verduras."
    ],
    "prep": 12,
    "coc": 15
  },
  {
    "titulo": "Ensalada de quinoa y manzana",
    "ids": [
      "quinoa",
      "manzana",
      "pepino",
      "perejil"
    ],
    "pasos": [
      "Lava la quinoa y cuécela hasta que esté tierna.",
      "Enfría rápidamente la quinoa cocida.",
      "Lava y corta manzana y pepino en cubos.",
      "Mezcla con perejil picado y sirve."
    ],
    "prep": 12,
    "coc": 20
  },
  {
    "titulo": "Omelette de champiñones y albahaca",
    "ids": [
      "huevo",
      "champinon",
      "albahaca",
      "queso"
    ],
    "pasos": [
      "Lamina los champiñones y saltéalos hasta que pierdan humedad.",
      "Bate los huevos en un recipiente.",
      "Vierte el huevo en sartén y agrega champiñones y queso.",
      "Añade albahaca y cocina hasta que el huevo esté cuajado."
    ],
    "prep": 10,
    "coc": 12
  },
  {
    "titulo": "Pasta con salsa de arvejas",
    "ids": [
      "pasta",
      "arveja",
      "leche",
      "ajo"
    ],
    "pasos": [
      "Cuece la pasta hasta que esté al dente.",
      "Cuece las arvejas hasta que estén tiernas.",
      "Tritura arvejas con leche y ajo cocido.",
      "Calienta la salsa y mezcla con la pasta escurrida."
    ],
    "prep": 10,
    "coc": 20
  },
  {
    "titulo": "Pollo con repollo al limón",
    "ids": [
      "pollo",
      "repollo",
      "limon",
      "zanahoria"
    ],
    "pasos": [
      "Corta el pollo en tiras y la zanahoria en bastones.",
      "Dora el pollo en una sartén amplia.",
      "Añade repollo cortado fino y zanahoria y cocina tapado.",
      "Comprueba que el pollo alcance 74 °C y añade limón."
    ],
    "prep": 12,
    "coc": 20
  },
  {
    "titulo": "Ensalada tibia de papa y arvejas",
    "ids": [
      "papa",
      "arveja",
      "huevo",
      "perejil"
    ],
    "pasos": [
      "Cuece las papas cortadas en cubos hasta que estén tiernas.",
      "Cuece las arvejas por separado.",
      "Hierve los huevos hasta que estén firmes.",
      "Mezcla con perejil picado y sirve tibio."
    ],
    "prep": 12,
    "coc": 25
  },
  {
    "titulo": "Arroz con berenjena y pimentón",
    "ids": [
      "arroz",
      "berenjena",
      "pimenton",
      "cebolla"
    ],
    "pasos": [
      "Cuece el arroz hasta que esté tierno.",
      "Corta berenjena y pimentón en cubos pequeños.",
      "Sofríe cebolla y agrega las verduras hasta ablandar.",
      "Mezcla el salteado con el arroz y sirve caliente."
    ],
    "prep": 12,
    "coc": 25
  },
  {
    "titulo": "Crema de coliflor y zanahoria",
    "ids": [
      "coliflor",
      "zanahoria",
      "cebolla",
      "leche"
    ],
    "pasos": [
      "Corta la coliflor en ramilletes y la zanahoria en rodajas.",
      "Sofríe cebolla picada en una olla.",
      "Añade las verduras y agua y cuece hasta ablandar.",
      "Tritura con leche y calienta antes de servir."
    ],
    "prep": 12,
    "coc": 25
  },
  {
    "titulo": "Pescado al horno con zanahoria y ajo",
    "ids": [
      "pescado",
      "zanahoria",
      "ajo",
      "limon"
    ],
    "pasos": [
      "Precalienta el horno a 190 °C.",
      "Corta zanahoria en láminas finas y colócala en una fuente.",
      "Agrega pescado, ajo picado y limón.",
      "Hornea hasta que el pescado alcance 63 °C."
    ],
    "prep": 12,
    "coc": 25
  },
  {
    "titulo": "Ensalada de garbanzos y espinaca",
    "ids": [
      "garbanzo",
      "espinaca",
      "pepino",
      "tomate"
    ],
    "pasos": [
      "Utiliza garbanzos ya cocidos, escurridos y fríos.",
      "Lava y seca las hojas de espinaca.",
      "Lava y corta pepino y tomate en cubos.",
      "Mezcla los ingredientes y sirve fresco."
    ],
    "prep": 12,
    "coc": 0
  },
  {
    "titulo": "Panqueques de avena y manzana",
    "ids": [
      "avena",
      "manzana",
      "huevo",
      "leche"
    ],
    "pasos": [
      "Ralla la manzana lavada y reserva.",
      "Mezcla avena, huevo y leche hasta obtener una masa espesa.",
      "Incorpora la manzana rallada y revuelve.",
      "Cocina pequeñas porciones por ambos lados hasta que el huevo cuaje."
    ],
    "prep": 12,
    "coc": 15
  },
  {
    "titulo": "Bowl de arroz con salmón y pepino",
    "ids": [
      "arroz",
      "salmon",
      "pepino",
      "palta"
    ],
    "pasos": [
      "Cuece el arroz hasta que esté tierno.",
      "Hornea el salmón hasta que alcance 63 °C.",
      "Lava el pepino y corta la palta en cubos.",
      "Sirve el arroz con salmón cocido y verduras frescas."
    ],
    "prep": 12,
    "coc": 25
  }
] as const;
const CANTIDADES:Record<string,string>={"choclo":"200 g","zanahoria":"180 g","cebolla":"100 g","leche":"180 ml","poroto":"200 g","pepino":"1 unidad","tomate":"220 g","limon":"1 unidad","pasta":"180 g","brocoli":"250 g","nuez":"50 g","ajo":"2 dientes","pollo":"300 g","arroz":"150 g","zapallo":"300 g","zapallito":"2 unidades","huevo":"2 unidades","avena":"100 g","queso":"80 g","betarraga":"2 unidades","garbanzo":"200 g","perejil":"1 cucharada","champinon":"200 g","tofu":"250 g","pescado":"300 g","papa":"350 g","cuscus":"150 g","naranja":"2 unidades","espinaca":"160 g","lenteja":"180 g","coliflor":"300 g","arveja":"180 g","tortilla":"4 unidades","repollo":"250 g","quinoa":"150 g","manzana":"1 unidad","albahaca":"8 hojas","berenjena":"1 unidad","pimenton":"1 unidad","salmon":"300 g","palta":"1 unidad"};
export const RECETAS_LOTE_16:Receta[]=FICHAS.map((f,i)=>({id:`lote-16-${i+1}`,titulo:f.titulo,descripcion:"Preparación para dos personas; cantidades orientativas.",tiempoPreparacion:`${f.prep} min`,tiempoCoccion:`${f.coc} min`,porciones:"2 personas",dificultad:"Fácil",ingredientes:f.ids.map(id=>`${CANTIDADES[id]} de ${id}`),pasos:[...f.pasos],costoAproximado:"Medio",preferencia:"Catálogo editorial sin IA",ingredientesCoincidentes:[],ingredientesFaltantes:[],porcentajeCoincidencia:0}));
