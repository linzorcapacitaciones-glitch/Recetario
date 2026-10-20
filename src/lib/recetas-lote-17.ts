/** Lote 17: 25 recetas con tiempos diferenciados. */
import type { Receta } from "./recipes.functions";
const FICHAS=[
  {
    "titulo": "Crema de arvejas y menta",
    "ids": [
      "arveja",
      "papa",
      "cebolla",
      "menta"
    ],
    "pasos": [
      "Sofríe cebolla picada en una olla.",
      "Añade papa en cubos y agua y cocina hasta ablandar.",
      "Incorpora arvejas y cuece hasta que estén tiernas.",
      "Agrega menta y tritura hasta obtener una crema suave."
    ],
    "prep": 12,
    "coc": 25
  },
  {
    "titulo": "Ensalada de quinoa con tomate asado",
    "ids": [
      "quinoa",
      "tomate",
      "ajo",
      "albahaca"
    ],
    "pasos": [
      "Enjuaga la quinoa y cuécela hasta que esté tierna.",
      "Corta el tomate y hornéalo con ajo a 190 °C.",
      "Deja entibiar los tomates asados.",
      "Mezcla con quinoa y albahaca picada."
    ],
    "prep": 12,
    "coc": 25
  },
  {
    "titulo": "Pollo con puré de zanahoria",
    "ids": [
      "pollo",
      "zanahoria",
      "papa",
      "leche"
    ],
    "pasos": [
      "Cuece zanahoria y papa hasta que estén blandas.",
      "Tritura las verduras con leche caliente.",
      "Dora el pollo en una sartén y termina la cocción tapado.",
      "Sirve cuando el pollo alcance 74 °C."
    ],
    "prep": 12,
    "coc": 30
  },
  {
    "titulo": "Pasta con salsa de coliflor y limón",
    "ids": [
      "pasta",
      "coliflor",
      "limon",
      "ajo"
    ],
    "pasos": [
      "Cuece la pasta hasta que esté al dente.",
      "Cuece la coliflor al vapor hasta que esté muy tierna.",
      "Tritura la coliflor con ajo cocido y jugo de limón.",
      "Mezcla la salsa con la pasta y sirve caliente."
    ],
    "prep": 10,
    "coc": 20
  },
  {
    "titulo": "Tortilla de choclo y cebolla",
    "ids": [
      "choclo",
      "huevo",
      "cebolla",
      "queso"
    ],
    "pasos": [
      "Cuece el choclo y escúrrelo.",
      "Sofríe cebolla picada hasta ablandar.",
      "Bate los huevos y mezcla con choclo, cebolla y queso.",
      "Cuaja la tortilla por ambos lados hasta que el huevo esté cocido."
    ],
    "prep": 12,
    "coc": 18
  },
  {
    "titulo": "Pescado con quinoa y perejil",
    "ids": [
      "pescado",
      "quinoa",
      "perejil",
      "limon"
    ],
    "pasos": [
      "Enjuaga y cuece la quinoa hasta que esté tierna.",
      "Coloca el pescado en una fuente para horno.",
      "Hornea a 190 °C hasta que alcance 63 °C.",
      "Sirve con quinoa, perejil picado y limón."
    ],
    "prep": 12,
    "coc": 25
  },
  {
    "titulo": "Ensalada de garbanzos y pera",
    "ids": [
      "garbanzo",
      "pera",
      "pepino",
      "limon"
    ],
    "pasos": [
      "Utiliza garbanzos previamente cocidos y escurridos.",
      "Enfría rápidamente los garbanzos cocidos.",
      "Lava y corta pera y pepino en cubos.",
      "Mezcla todo con jugo de limón y sirve."
    ],
    "prep": 12,
    "coc": 0
  },
  {
    "titulo": "Arroz con tofu y arvejas",
    "ids": [
      "arroz",
      "tofu",
      "arveja",
      "ajo"
    ],
    "pasos": [
      "Cuece el arroz hasta que esté tierno.",
      "Corta el tofu en cubos y dóralo en sartén.",
      "Añade ajo picado y arvejas hasta que estén tiernas.",
      "Mezcla con arroz y sirve caliente."
    ],
    "prep": 10,
    "coc": 25
  },
  {
    "titulo": "Berenjena asada con yogur",
    "ids": [
      "berenjena",
      "yogur",
      "ajo",
      "perejil"
    ],
    "pasos": [
      "Corta la berenjena por la mitad y haz cortes en la pulpa.",
      "Hornea a 200 °C hasta que esté completamente tierna.",
      "Mezcla yogur natural con ajo cocido y perejil.",
      "Sirve la berenjena tibia con salsa de yogur."
    ],
    "prep": 12,
    "coc": 35
  },
  {
    "titulo": "Sopa de pollo con choclo",
    "ids": [
      "pollo",
      "choclo",
      "zanahoria",
      "cebolla"
    ],
    "pasos": [
      "Sofríe cebolla picada y añade zanahoria en cubos.",
      "Agrega agua y el pollo en trozos.",
      "Cuece hasta que el pollo alcance 74 °C.",
      "Incorpora choclo cocido y calienta antes de servir."
    ],
    "prep": 12,
    "coc": 30
  },
  {
    "titulo": "Hamburguesas de lentejas y betarraga",
    "ids": [
      "lenteja",
      "betarraga",
      "huevo",
      "avena"
    ],
    "pasos": [
      "Cuece lentejas y betarragas hasta que estén tiernas.",
      "Machaca las lentejas y ralla la betarraga cocida.",
      "Mezcla con avena y huevo batido y forma hamburguesas.",
      "Cocina por ambos lados hasta que el huevo esté completamente cuajado."
    ],
    "prep": 15,
    "coc": 25
  },
  {
    "titulo": "Ensalada de papa y salmón",
    "ids": [
      "papa",
      "salmon",
      "pepino",
      "limon"
    ],
    "pasos": [
      "Cuece las papas en cubos hasta que estén tiernas.",
      "Hornea el salmón hasta que alcance 63 °C.",
      "Lava el pepino y córtalo en rodajas.",
      "Mezcla las papas tibias con salmón, pepino y limón."
    ],
    "prep": 12,
    "coc": 25
  },
  {
    "titulo": "Pasta con espinaca y nueces",
    "ids": [
      "pasta",
      "espinaca",
      "nuez",
      "ajo"
    ],
    "pasos": [
      "Cuece la pasta hasta que esté al dente.",
      "Lava y saltea la espinaca con ajo picado.",
      "Trocea las nueces y tuéstalas brevemente.",
      "Mezcla la pasta con espinaca y nueces."
    ],
    "prep": 10,
    "coc": 15
  },
  {
    "titulo": "Cuscús con pollo y brócoli",
    "ids": [
      "cuscus",
      "pollo",
      "brocoli",
      "limon"
    ],
    "pasos": [
      "Hidrata el cuscús siguiendo las instrucciones del envase.",
      "Cocina el brócoli al vapor hasta que esté tierno.",
      "Dora el pollo en cubos hasta que alcance 74 °C.",
      "Mezcla con cuscús, brócoli y jugo de limón."
    ],
    "prep": 12,
    "coc": 20
  },
  {
    "titulo": "Ensalada de betarraga y choclo",
    "ids": [
      "betarraga",
      "choclo",
      "lechuga",
      "queso"
    ],
    "pasos": [
      "Cuece las betarragas hasta que estén tiernas.",
      "Cuece el choclo y deja enfriar ambos ingredientes.",
      "Lava la lechuga y corta la betarraga en cubos.",
      "Mezcla con choclo y queso desmenuzado."
    ],
    "prep": 12,
    "coc": 35
  },
  {
    "titulo": "Arroz con tomate y aceitunas",
    "ids": [
      "arroz",
      "tomate",
      "aceituna",
      "cebolla"
    ],
    "pasos": [
      "Sofríe cebolla picada en una olla.",
      "Añade arroz y tomate troceado y mezcla.",
      "Agrega agua caliente y cocina tapado hasta que esté tierno.",
      "Incorpora aceitunas sin carozo antes de servir."
    ],
    "prep": 10,
    "coc": 25
  },
  {
    "titulo": "Tacos de porotos con zapallo",
    "ids": [
      "tortilla",
      "poroto",
      "zapallo",
      "tomate"
    ],
    "pasos": [
      "Utiliza porotos ya cocidos y escurridos.",
      "Corta el zapallo en cubos y hornéalo hasta dorar.",
      "Lava y corta el tomate y calienta las tortillas.",
      "Rellena con porotos, zapallo y tomate."
    ],
    "prep": 12,
    "coc": 30
  },
  {
    "titulo": "Crema de papa y puerro con perejil",
    "ids": [
      "papa",
      "puerro",
      "perejil",
      "leche"
    ],
    "pasos": [
      "Lava el puerro y córtalo en rodajas finas.",
      "Sofríe el puerro y añade papa en cubos.",
      "Cubre con agua y cuece hasta que la papa esté tierna.",
      "Tritura con leche y termina con perejil."
    ],
    "prep": 12,
    "coc": 25
  },
  {
    "titulo": "Omelette de brócoli y queso",
    "ids": [
      "huevo",
      "brocoli",
      "queso",
      "cebolla"
    ],
    "pasos": [
      "Cuece el brócoli al vapor hasta que esté tierno.",
      "Sofríe cebolla picada y deja entibiar.",
      "Bate los huevos y añade brócoli y queso.",
      "Cocina en sartén hasta que el huevo esté completamente cuajado."
    ],
    "prep": 10,
    "coc": 15
  },
  {
    "titulo": "Pescado con ensalada de quinoa y pepino",
    "ids": [
      "pescado",
      "quinoa",
      "pepino",
      "limon"
    ],
    "pasos": [
      "Cuece la quinoa previamente enjuagada hasta que esté tierna.",
      "Hornea el pescado hasta que alcance 63 °C.",
      "Lava y corta el pepino en cubos.",
      "Sirve el pescado con quinoa, pepino y limón."
    ],
    "prep": 12,
    "coc": 25
  },
  {
    "titulo": "Ensalada de repollo con naranja",
    "ids": [
      "repollo",
      "naranja",
      "zanahoria",
      "perejil"
    ],
    "pasos": [
      "Lava y corta el repollo en tiras finas.",
      "Pela las naranjas y corta los gajos en trozos.",
      "Ralla la zanahoria y pica el perejil.",
      "Mezcla todos los ingredientes y sirve fresca."
    ],
    "prep": 12,
    "coc": 0
  },
  {
    "titulo": "Pollo al ajo con champiñones",
    "ids": [
      "pollo",
      "ajo",
      "champinon",
      "papa"
    ],
    "pasos": [
      "Corta las papas en cubos y cuécelas hasta que estén tiernas.",
      "Dora el pollo en una sartén con ajo picado.",
      "Agrega champiñones laminados y cocina con tapa.",
      "Verifica que el pollo alcance 74 °C y sirve con papas."
    ],
    "prep": 12,
    "coc": 25
  },
  {
    "titulo": "Tostadas con hummus y palta",
    "ids": [
      "pan",
      "garbanzo",
      "palta",
      "limon"
    ],
    "pasos": [
      "Cuece garbanzos remojados hasta que estén muy tiernos.",
      "Tritura los garbanzos con limón y agua hasta formar una crema.",
      "Tuesta el pan y corta la palta en láminas.",
      "Unta el hummus y distribuye la palta sobre las tostadas."
    ],
    "prep": 12,
    "coc": 15
  },
  {
    "titulo": "Quinoa con coliflor y zanahoria",
    "ids": [
      "quinoa",
      "coliflor",
      "zanahoria",
      "ajo"
    ],
    "pasos": [
      "Enjuaga y cuece la quinoa hasta que esté tierna.",
      "Corta la coliflor y la zanahoria en trozos pequeños.",
      "Saltea las verduras con ajo hasta que estén cocidas.",
      "Mezcla con la quinoa y sirve tibio."
    ],
    "prep": 12,
    "coc": 25
  },
  {
    "titulo": "Ensalada tibia de arroz y champiñones",
    "ids": [
      "arroz",
      "champinon",
      "espinaca",
      "limon"
    ],
    "pasos": [
      "Cuece el arroz hasta que esté tierno.",
      "Lamina los champiñones y saltéalos hasta dorar.",
      "Agrega espinaca lavada y cocina hasta que se ablande.",
      "Mezcla con arroz y termina con jugo de limón."
    ],
    "prep": 10,
    "coc": 25
  }
] as const;
const CANTIDADES:Record<string,string>={"arveja":"180 g","papa":"350 g","cebolla":"100 g","menta":"6 hojas","quinoa":"150 g","tomate":"220 g","ajo":"2 dientes","albahaca":"8 hojas","pollo":"300 g","zanahoria":"180 g","leche":"180 ml","pasta":"180 g","coliflor":"300 g","limon":"1 unidad","choclo":"200 g","huevo":"2 unidades","queso":"80 g","pescado":"300 g","perejil":"1 cucharada","garbanzo":"200 g","pera":"1 unidad","pepino":"1 unidad","arroz":"150 g","tofu":"250 g","berenjena":"1 unidad","yogur":"150 g","lenteja":"180 g","betarraga":"2 unidades","avena":"100 g","salmon":"300 g","espinaca":"160 g","nuez":"50 g","cuscus":"150 g","brocoli":"250 g","lechuga":"100 g","aceituna":"60 g","tortilla":"4 unidades","poroto":"200 g","zapallo":"300 g","puerro":"1 unidad","repollo":"250 g","naranja":"2 unidades","champinon":"200 g","pan":"4 rebanadas","palta":"1 unidad"};
export const RECETAS_LOTE_17:Receta[]=FICHAS.map((f,i)=>({id:`lote-17-${i+1}`,titulo:f.titulo,descripcion:"Preparación para dos personas con cantidades orientativas.",tiempoPreparacion:`${f.prep} min`,tiempoCoccion:`${f.coc} min`,porciones:"2 personas",dificultad:"Fácil",ingredientes:f.ids.map(id=>`${CANTIDADES[id]} de ${id}`),pasos:[...f.pasos],costoAproximado:"Medio",preferencia:"Catálogo editorial sin IA",ingredientesCoincidentes:[],ingredientesFaltantes:[],porcentajeCoincidencia:0}));
