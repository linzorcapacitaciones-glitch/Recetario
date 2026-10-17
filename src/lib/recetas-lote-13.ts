/** Lote 13: 25 preparaciones variadas con tiempos específicos. */
import type { Receta } from "./recipes.functions";
const FICHAS=[
  {
    "titulo": "Sopa de zapallo italiano y albahaca",
    "ids": [
      "zapallito",
      "cebolla",
      "papa",
      "albahaca"
    ],
    "pasos": [
      "Sofríe cebolla picada en una olla.",
      "Agrega zapallito y papa cortados en cubos con agua suficiente.",
      "Cuece hasta que las verduras estén blandas.",
      "Incorpora albahaca y tritura hasta obtener una sopa suave."
    ],
    "prep": 10,
    "coc": 25
  },
  {
    "titulo": "Ensalada de arroz con huevo y arvejas",
    "ids": [
      "arroz",
      "huevo",
      "arveja",
      "zanahoria"
    ],
    "pasos": [
      "Cuece el arroz y enfríalo rápidamente.",
      "Hierve los huevos hasta que estén firmes.",
      "Cuece arvejas y zanahoria en cubitos.",
      "Mezcla todos los ingredientes y sirve frío o tibio."
    ],
    "prep": 12,
    "coc": 20
  },
  {
    "titulo": "Tortilla de papas y pimentón",
    "ids": [
      "papa",
      "huevo",
      "pimenton",
      "cebolla"
    ],
    "pasos": [
      "Corta las papas en láminas y cocínalas hasta que estén tiernas.",
      "Sofríe cebolla y pimentón en tiras.",
      "Mezcla las verduras con huevos batidos.",
      "Cuaja la tortilla por ambos lados hasta que el centro esté bien cocido."
    ],
    "prep": 15,
    "coc": 30
  },
  {
    "titulo": "Salmón con puré de arvejas",
    "ids": [
      "salmon",
      "arveja",
      "papa",
      "limon"
    ],
    "pasos": [
      "Cuece las arvejas y la papa hasta que estén tiernas.",
      "Tritura ambas verduras hasta lograr un puré espeso.",
      "Cocina el salmón al horno a 190 °C hasta alcanzar 63 °C.",
      "Sirve el pescado con puré y jugo de limón."
    ],
    "prep": 12,
    "coc": 25
  },
  {
    "titulo": "Pasta con salsa de betarraga",
    "ids": [
      "pasta",
      "betarraga",
      "yogur",
      "ajo"
    ],
    "pasos": [
      "Cuece la betarraga hasta que esté tierna y deja entibiar.",
      "Cuece la pasta al dente.",
      "Tritura la betarraga con yogur y ajo cocido.",
      "Mezcla con la pasta caliente y sirve de inmediato."
    ],
    "prep": 12,
    "coc": 35
  },
  {
    "titulo": "Pollo con zapallo y romero",
    "ids": [
      "pollo",
      "zapallo",
      "romero",
      "cebolla"
    ],
    "pasos": [
      "Precalienta el horno a 200 °C.",
      "Corta el zapallo y la cebolla en gajos y distribuye en una fuente.",
      "Añade el pollo y espolvorea romero.",
      "Hornea hasta que el pollo alcance 74 °C y el zapallo esté tierno."
    ],
    "prep": 12,
    "coc": 45
  },
  {
    "titulo": "Cuscús con betarraga y queso",
    "ids": [
      "cuscus",
      "betarraga",
      "queso",
      "perejil"
    ],
    "pasos": [
      "Cuece la betarraga hasta que esté tierna y córtala en cubos.",
      "Hidrata el cuscús siguiendo las instrucciones del envase.",
      "Desmenuza el queso y pica el perejil.",
      "Mezcla todo y sirve tibio."
    ],
    "prep": 12,
    "coc": 35
  },
  {
    "titulo": "Ensalada de repollo morado y manzana",
    "ids": [
      "repollo",
      "manzana",
      "zanahoria",
      "limon"
    ],
    "pasos": [
      "Lava y corta el repollo morado en tiras muy finas.",
      "Lava la manzana y córtala en bastones delgados.",
      "Ralla la zanahoria pelada.",
      "Mezcla y aliña con jugo de limón."
    ],
    "prep": 15,
    "coc": 0
  },
  {
    "titulo": "Hamburguesas de garbanzos y zanahoria",
    "ids": [
      "garbanzo",
      "zanahoria",
      "huevo",
      "avena"
    ],
    "pasos": [
      "Cuece los garbanzos hasta que estén blandos y escúrrelos.",
      "Machácalos con zanahoria rallada y avena.",
      "Añade huevo batido y forma hamburguesas.",
      "Cocina por ambos lados hasta que el huevo esté completamente cuajado."
    ],
    "prep": 15,
    "coc": 20
  },
  {
    "titulo": "Arroz con lentejas y cebolla dorada",
    "ids": [
      "arroz",
      "lenteja",
      "cebolla",
      "ajo"
    ],
    "pasos": [
      "Cuece las lentejas hasta que estén tiernas.",
      "Cuece el arroz por separado.",
      "Corta la cebolla en pluma y dórala lentamente con ajo.",
      "Mezcla arroz y lentejas y cubre con cebolla dorada."
    ],
    "prep": 12,
    "coc": 35
  },
  {
    "titulo": "Pescado con costra de avena",
    "ids": [
      "pescado",
      "avena",
      "huevo",
      "limon"
    ],
    "pasos": [
      "Precalienta el horno a 200 °C.",
      "Bate el huevo y cubre los filetes de pescado con una capa fina.",
      "Presiona avena sobre los filetes para formar una costra.",
      "Hornea hasta que el pescado alcance 63 °C y sirve con limón."
    ],
    "prep": 12,
    "coc": 20
  },
  {
    "titulo": "Berenjena salteada con tofu",
    "ids": [
      "berenjena",
      "tofu",
      "ajo",
      "pimenton"
    ],
    "pasos": [
      "Corta la berenjena en cubos pequeños y el tofu en dados.",
      "Dora el tofu en una sartén y reserva.",
      "Saltea berenjena y pimentón con ajo hasta ablandar.",
      "Reincorpora el tofu y mezcla antes de servir."
    ],
    "prep": 12,
    "coc": 20
  },
  {
    "titulo": "Ensalada de choclo con porotos",
    "ids": [
      "choclo",
      "poroto",
      "tomate",
      "perejil"
    ],
    "pasos": [
      "Cuece los porotos hasta que estén completamente tiernos.",
      "Cuece el choclo y enfría ambos ingredientes rápidamente.",
      "Lava y pica el tomate y el perejil.",
      "Mezcla todo y aliña al gusto."
    ],
    "prep": 12,
    "coc": 25
  },
  {
    "titulo": "Fideos con brócoli y limón",
    "ids": [
      "pasta",
      "brocoli",
      "ajo",
      "limon"
    ],
    "pasos": [
      "Cuece la pasta hasta que esté al dente.",
      "Cocina el brócoli al vapor hasta que esté tierno.",
      "Saltea ajo picado con un poco de aceite.",
      "Mezcla pasta y brócoli y termina con limón."
    ],
    "prep": 10,
    "coc": 15
  },
  {
    "titulo": "Panqueques salados de espinaca",
    "ids": [
      "harina",
      "huevo",
      "leche",
      "espinaca"
    ],
    "pasos": [
      "Lava y pica la espinaca y saltéala brevemente.",
      "Mezcla harina, huevo y leche hasta obtener una masa fluida.",
      "Incorpora la espinaca cocida y mezcla.",
      "Cocina panqueques delgados por ambos lados hasta que estén completamente cuajados."
    ],
    "prep": 15,
    "coc": 20
  },
  {
    "titulo": "Papas cocidas con pebre de palta",
    "ids": [
      "papa",
      "palta",
      "tomate",
      "cebolla"
    ],
    "pasos": [
      "Cuece las papas con cáscara hasta que estén tiernas.",
      "Lava y corta el tomate y la cebolla muy finos.",
      "Aplasta la palta y mezcla con tomate y cebolla.",
      "Sirve las papas calientes con el pebre de palta."
    ],
    "prep": 12,
    "coc": 25
  },
  {
    "titulo": "Crema de zanahoria y coco",
    "ids": [
      "zanahoria",
      "coco",
      "cebolla",
      "jengibre"
    ],
    "pasos": [
      "Pela y corta las zanahorias en rodajas.",
      "Sofríe cebolla con jengibre rallado.",
      "Añade zanahoria y agua y cocina hasta que esté tierna.",
      "Tritura e incorpora leche de coco antes de servir."
    ],
    "prep": 12,
    "coc": 25
  },
  {
    "titulo": "Quinoa con champiñones al ajillo",
    "ids": [
      "quinoa",
      "champinon",
      "ajo",
      "perejil"
    ],
    "pasos": [
      "Enjuaga y cuece la quinoa hasta que esté tierna.",
      "Lamina los champiñones y pica el ajo.",
      "Saltea los champiñones con ajo hasta evaporar su líquido.",
      "Mezcla con la quinoa y termina con perejil."
    ],
    "prep": 10,
    "coc": 20
  },
  {
    "titulo": "Pollo en salsa de tomate y aceitunas",
    "ids": [
      "pollo",
      "tomate",
      "aceituna",
      "cebolla"
    ],
    "pasos": [
      "Dora el pollo en una sartén amplia.",
      "Sofríe cebolla y agrega tomate troceado.",
      "Incorpora aceitunas sin carozo y vuelve a añadir el pollo.",
      "Cocina tapado hasta que el pollo alcance 74 °C."
    ],
    "prep": 12,
    "coc": 30
  },
  {
    "titulo": "Bowl de quinoa con huevo y espinaca",
    "ids": [
      "quinoa",
      "huevo",
      "espinaca",
      "zanahoria"
    ],
    "pasos": [
      "Enjuaga la quinoa y cuécela hasta que esté tierna.",
      "Saltea espinaca lavada y zanahoria rallada.",
      "Cuece los huevos hasta que estén firmes.",
      "Reparte la quinoa en recipientes y cubre con verduras y huevo."
    ],
    "prep": 12,
    "coc": 20
  },
  {
    "titulo": "Guiso de garbanzos y coliflor",
    "ids": [
      "garbanzo",
      "coliflor",
      "tomate",
      "cebolla"
    ],
    "pasos": [
      "Sofríe cebolla picada en una olla.",
      "Agrega tomate troceado y coliflor en ramilletes.",
      "Añade agua y cocina hasta que la coliflor esté tierna.",
      "Incorpora garbanzos previamente cocidos y calienta todo."
    ],
    "prep": 12,
    "coc": 25
  },
  {
    "titulo": "Arroz con champiñones y espinaca",
    "ids": [
      "arroz",
      "champinon",
      "espinaca",
      "cebolla"
    ],
    "pasos": [
      "Sofríe cebolla y champiñones laminados.",
      "Agrega el arroz y revuelve brevemente.",
      "Añade agua caliente y cocina hasta que el arroz esté tierno.",
      "Incorpora espinaca picada y mezcla hasta que se ablande."
    ],
    "prep": 12,
    "coc": 25
  },
  {
    "titulo": "Ensalada de papas con yogur y pepino",
    "ids": [
      "papa",
      "yogur",
      "pepino",
      "perejil"
    ],
    "pasos": [
      "Cuece las papas en cubos hasta que estén tiernas.",
      "Enfría rápidamente las papas cocidas.",
      "Lava y corta el pepino en cubos pequeños.",
      "Mezcla con yogur y perejil y conserva refrigerado."
    ],
    "prep": 12,
    "coc": 20
  },
  {
    "titulo": "Omelette de queso y tomate",
    "ids": [
      "huevo",
      "queso",
      "tomate",
      "albahaca"
    ],
    "pasos": [
      "Lava y corta el tomate en cubos pequeños.",
      "Bate los huevos en un recipiente.",
      "Vierte en una sartén y añade queso, tomate y albahaca.",
      "Dobla y cocina hasta que el huevo esté completamente cuajado."
    ],
    "prep": 8,
    "coc": 10
  },
  {
    "titulo": "Tostadas con champiñones y queso",
    "ids": [
      "pan",
      "champinon",
      "queso",
      "ajo"
    ],
    "pasos": [
      "Lamina los champiñones y pica el ajo.",
      "Saltea los champiñones hasta que pierdan humedad.",
      "Tuesta el pan y distribuye encima los champiñones.",
      "Cubre con queso y gratina hasta que se derrita."
    ],
    "prep": 10,
    "coc": 12
  }
] as const;
const CANTIDADES:Record<string,string>={"zapallito":"2 unidades","cebolla":"100 g","papa":"350 g","albahaca":"8 hojas","arroz":"150 g","huevo":"2 unidades","arveja":"180 g","zanahoria":"180 g","pimenton":"1 unidad","salmon":"300 g","limon":"1 unidad","pasta":"180 g","betarraga":"2 unidades","yogur":"150 g","ajo":"2 dientes","pollo":"300 g","zapallo":"300 g","romero":"1 cucharadita","cuscus":"150 g","queso":"80 g","perejil":"1 cucharada","repollo":"250 g","manzana":"1 unidad","garbanzo":"200 g","avena":"100 g","lenteja":"180 g","pescado":"300 g","berenjena":"1 unidad","tofu":"250 g","choclo":"200 g","poroto":"200 g","tomate":"220 g","brocoli":"250 g","harina":"150 g","leche":"200 ml","espinaca":"160 g","palta":"1 unidad","coco":"150 ml","jengibre":"10 g","quinoa":"150 g","champinon":"200 g","aceituna":"60 g","coliflor":"300 g","pepino":"1 unidad","pan":"4 rebanadas"};
export const RECETAS_LOTE_13:Receta[]=FICHAS.map((f,i)=>({id:`lote-13-${i+1}`,titulo:f.titulo,descripcion:"Preparación para dos personas; cantidades orientativas.",tiempoPreparacion:`${f.prep} min`,tiempoCoccion:`${f.coc} min`,porciones:"2 personas",dificultad:"Fácil",ingredientes:f.ids.map(id=>`${CANTIDADES[id]} de ${id}`),pasos:[...f.pasos],costoAproximado:"Medio",preferencia:"Catálogo editorial sin IA",ingredientesCoincidentes:[],ingredientesFaltantes:[],porcentajeCoincidencia:0}));
