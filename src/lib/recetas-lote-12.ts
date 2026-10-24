/** Lote 12: 20 preparaciones con tiempos diferenciados y cantidades para dos personas. */
import type { Receta } from "./recipes.functions";
const FICHAS=[
  {
    "titulo": "Ensalada de quinoa con palta y choclo",
    "ids": [
      "quinoa",
      "palta",
      "choclo",
      "tomate"
    ],
    "pasos": [
      "Lava la quinoa y cuécela en agua hasta que esté tierna.",
      "Escurre el choclo cocido y deja enfriar ambos ingredientes.",
      "Corta la palta y el tomate en cubos medianos.",
      "Mezcla suavemente y sirve de inmediato."
    ],
    "prep": 10,
    "coc": 18
  },
  {
    "titulo": "Bowl de arroz con atún y pepino",
    "ids": [
      "arroz",
      "atun",
      "pepino",
      "palta"
    ],
    "pasos": [
      "Cuece el arroz y enfríalo rápidamente si se servirá frío.",
      "Lava y corta el pepino en medias lunas.",
      "Escurre el atún y corta la palta en cubos.",
      "Arma dos porciones con arroz, atún y verduras."
    ],
    "prep": 10,
    "coc": 20
  },
  {
    "titulo": "Ensalada de pasta con aceitunas y queso",
    "ids": [
      "pasta",
      "aceituna",
      "queso",
      "tomate"
    ],
    "pasos": [
      "Cuece la pasta al dente y enfríala rápidamente.",
      "Escurre las aceitunas y corta el queso en cubos.",
      "Lava el tomate y córtalo en trozos pequeños.",
      "Mezcla todos los ingredientes y conserva refrigerado."
    ],
    "prep": 10,
    "coc": 12
  },
  {
    "titulo": "Crema de zapallo con coco",
    "ids": [
      "zapallo",
      "leche",
      "coco",
      "cebolla"
    ],
    "pasos": [
      "Pela el zapallo y córtalo en cubos uniformes.",
      "Sofríe cebolla picada hasta que esté transparente.",
      "Añade zapallo y agua y cocina hasta que esté tierno.",
      "Tritura, incorpora leche de coco y calienta sin hervir fuerte."
    ],
    "prep": 12,
    "coc": 25
  },
  {
    "titulo": "Pescado al vapor con jengibre",
    "ids": [
      "pescado",
      "jengibre",
      "limon",
      "zanahoria"
    ],
    "pasos": [
      "Corta la zanahoria en tiras delgadas y ralla el jengibre.",
      "Coloca las verduras y el pescado en una vaporera.",
      "Cuece con tapa hasta que el pescado alcance 63 °C.",
      "Rocía con limón y sirve inmediatamente."
    ],
    "prep": 12,
    "coc": 15
  },
  {
    "titulo": "Pollo al horno con mostaza",
    "ids": [
      "pollo",
      "mostaza",
      "papa",
      "zanahoria"
    ],
    "pasos": [
      "Precalienta el horno a 200 °C y corta las papas en gajos.",
      "Mezcla mostaza con un poco de agua y unta el pollo.",
      "Distribuye pollo, papas y zanahoria en una fuente.",
      "Hornea hasta que el pollo alcance 74 °C y las verduras estén tiernas."
    ],
    "prep": 15,
    "coc": 45
  },
  {
    "titulo": "Ensalada tibia de lentejas y zapallo",
    "ids": [
      "lenteja",
      "zapallo",
      "cebolla",
      "perejil"
    ],
    "pasos": [
      "Cuece las lentejas hasta que estén tiernas y escúrrelas.",
      "Corta el zapallo en cubos y hornéalo hasta dorar.",
      "Sofríe cebolla cortada en pluma.",
      "Mezcla todo con perejil picado y sirve tibio."
    ],
    "prep": 15,
    "coc": 35
  },
  {
    "titulo": "Huevos al horno con espinaca",
    "ids": [
      "huevo",
      "espinaca",
      "queso",
      "tomate"
    ],
    "pasos": [
      "Lava la espinaca y saltéala hasta reducir su volumen.",
      "Reparte espinaca y tomate picado en dos fuentes pequeñas.",
      "Agrega un huevo por fuente y cubre con queso.",
      "Hornea a 180 °C hasta que los huevos estén completamente cuajados."
    ],
    "prep": 10,
    "coc": 18
  },
  {
    "titulo": "Papas rústicas con salsa de yogur",
    "ids": [
      "papa",
      "yogur",
      "ajo",
      "limon"
    ],
    "pasos": [
      "Lava las papas y córtalas en gajos con cáscara.",
      "Hornéalas a 210 °C hasta que estén tiernas y doradas.",
      "Mezcla yogur natural con ajo picado y jugo de limón.",
      "Sirve las papas calientes con la salsa fría."
    ],
    "prep": 10,
    "coc": 35
  },
  {
    "titulo": "Salteado de champiñones y arvejas",
    "ids": [
      "champinon",
      "arveja",
      "ajo",
      "arroz"
    ],
    "pasos": [
      "Cuece el arroz y mantenlo caliente.",
      "Lamina los champiñones y pica el ajo.",
      "Saltea champiñones y arvejas hasta que estén tiernos.",
      "Sirve las verduras sobre el arroz recién cocido."
    ],
    "prep": 10,
    "coc": 20
  },
  {
    "titulo": "Tortitas de zapallo y avena",
    "ids": [
      "zapallo",
      "avena",
      "huevo",
      "queso"
    ],
    "pasos": [
      "Cuece el zapallo y aplástalo hasta obtener un puré espeso.",
      "Mezcla con avena, huevo y queso rallado.",
      "Forma tortitas pequeñas sobre una bandeja aceitada.",
      "Hornea a 200 °C hasta que estén firmes y el huevo completamente cocido."
    ],
    "prep": 15,
    "coc": 25
  },
  {
    "titulo": "Tostadas con hummus y tomate",
    "ids": [
      "pan",
      "garbanzo",
      "tahini",
      "tomate"
    ],
    "pasos": [
      "Cuece los garbanzos hasta que estén muy blandos y escúrrelos.",
      "Tritura los garbanzos con tahini y agua hasta formar una crema.",
      "Tuesta las rebanadas de pan por ambos lados.",
      "Unta con hummus y cubre con tomate fresco picado."
    ],
    "prep": 12,
    "coc": 15
  },
  {
    "titulo": "Pasta con salsa de zanahoria",
    "ids": [
      "pasta",
      "zanahoria",
      "leche",
      "queso"
    ],
    "pasos": [
      "Cuece la pasta en abundante agua hirviendo.",
      "Hierve la zanahoria cortada en rodajas hasta que esté blanda.",
      "Tritura la zanahoria con leche caliente y queso.",
      "Mezcla la salsa con la pasta escurrida y sirve."
    ],
    "prep": 10,
    "coc": 25
  },
  {
    "titulo": "Arroz con coliflor y cúrcuma",
    "ids": [
      "arroz",
      "coliflor",
      "cebolla",
      "curcuma"
    ],
    "pasos": [
      "Corta la coliflor en ramilletes pequeños y lávala.",
      "Sofríe cebolla picada y añade cúrcuma al gusto.",
      "Agrega arroz, coliflor y agua caliente.",
      "Cocina tapado hasta que el arroz y la coliflor estén tiernos."
    ],
    "prep": 12,
    "coc": 25
  },
  {
    "titulo": "Sopa de garbanzos y acelga",
    "ids": [
      "garbanzo",
      "acelga",
      "zanahoria",
      "cebolla"
    ],
    "pasos": [
      "Sofríe cebolla y zanahoria picadas en una olla.",
      "Añade garbanzos previamente cocidos y agua suficiente.",
      "Lava la acelga y córtala en tiras.",
      "Incorpora la acelga y cocina hasta que esté tierna."
    ],
    "prep": 12,
    "coc": 20
  },
  {
    "titulo": "Tacos de pescado y repollo",
    "ids": [
      "tortilla",
      "pescado",
      "repollo",
      "yogur"
    ],
    "pasos": [
      "Corta el repollo en tiras finas y mézclalo con yogur.",
      "Cocina el pescado en sartén hasta alcanzar 63 °C.",
      "Calienta las tortillas brevemente sin quemarlas.",
      "Rellena con pescado desmenuzado y ensalada de repollo."
    ],
    "prep": 15,
    "coc": 15
  },
  {
    "titulo": "Pollo con salsa de champiñones",
    "ids": [
      "pollo",
      "champinon",
      "leche",
      "ajo"
    ],
    "pasos": [
      "Dora los filetes de pollo en una sartén caliente.",
      "Añade champiñones laminados y ajo picado.",
      "Incorpora leche y cocina a fuego suave hasta reducir.",
      "Comprueba que el pollo alcance 74 °C antes de servir."
    ],
    "prep": 10,
    "coc": 25
  },
  {
    "titulo": "Arroz al limón con brócoli",
    "ids": [
      "arroz",
      "limon",
      "brocoli",
      "ajo"
    ],
    "pasos": [
      "Cuece el arroz hasta que esté tierno.",
      "Separa el brócoli en ramilletes y cocínalo al vapor.",
      "Saltea ajo picado en una sartén con un poco de aceite.",
      "Mezcla arroz y brócoli y añade jugo de limón."
    ],
    "prep": 10,
    "coc": 20
  },
  {
    "titulo": "Ensalada de betarraga y naranja",
    "ids": [
      "betarraga",
      "naranja",
      "queso",
      "lechuga"
    ],
    "pasos": [
      "Cuece las betarragas hasta que estén tiernas y deja enfriar.",
      "Pela las naranjas y córtalas en gajos sin semillas.",
      "Lava la lechuga y corta las betarragas en cubos.",
      "Mezcla con queso desmenuzado y sirve."
    ],
    "prep": 12,
    "coc": 35
  },
  {
    "titulo": "Puré de zapallo y garbanzos",
    "ids": [
      "zapallo",
      "garbanzo",
      "leche",
      "ajo"
    ],
    "pasos": [
      "Cuece el zapallo hasta que esté muy tierno.",
      "Calienta garbanzos previamente cocidos y escurridos.",
      "Tritura ambos ingredientes con ajo cocido y un poco de leche.",
      "Calienta suavemente hasta obtener un puré homogéneo."
    ],
    "prep": 10,
    "coc": 25
  }
] as const;
const CANTIDADES:Record<string,string>={"quinoa":"150 g","palta":"1 unidad","choclo":"200 g","tomate":"200 g","arroz":"150 g","atun":"140 g","pepino":"1 unidad","pasta":"180 g","aceituna":"60 g","queso":"80 g","zapallo":"300 g","leche":"150 ml","coco":"150 ml","cebolla":"100 g","pescado":"300 g","jengibre":"10 g","limon":"1 unidad","zanahoria":"180 g","pollo":"300 g","mostaza":"2 cucharadas","papa":"350 g","lenteja":"180 g","perejil":"1 cucharada","huevo":"2 unidades","espinaca":"160 g","yogur":"150 g","ajo":"2 dientes","champinon":"200 g","arveja":"180 g","avena":"100 g","pan":"4 rebanadas","garbanzo":"200 g","tahini":"40 g","coliflor":"300 g","curcuma":"1 cucharadita","acelga":"250 g","tortilla":"4 unidades","repollo":"200 g","brocoli":"250 g","betarraga":"2 unidades","naranja":"2 unidades","lechuga":"100 g"};
export const RECETAS_LOTE_12:Receta[]=FICHAS.map((f,i)=>({id:`lote-12-${i+1}`,titulo:f.titulo,descripcion:"Preparación para dos personas con cantidades orientativas.",tiempoPreparacion:`${f.prep} min`,tiempoCoccion:`${f.coc} min`,porciones:"2 personas",dificultad:"Fácil",ingredientes:f.ids.map(id=>`${CANTIDADES[id]} de ${id}`),pasos:[...f.pasos],costoAproximado:"Medio",preferencia:"Catálogo editorial sin IA",ingredientesCoincidentes:[],ingredientesFaltantes:[],porcentajeCoincidencia:0}));
