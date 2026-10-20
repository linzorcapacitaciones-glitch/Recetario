/** Lote 15: 25 preparaciones nuevas con tiempos y cantidades orientativas. */
import type { Receta } from "./recipes.functions";
const FICHAS=[
  {
    "titulo": "Ensalada de lentejas con pera",
    "ids": [
      "lenteja",
      "pera",
      "espinaca",
      "limon"
    ],
    "pasos": [
      "Cuece las lentejas hasta que estén tiernas y enfríalas rápidamente.",
      "Lava la pera y córtala en cubos pequeños.",
      "Lava y seca las hojas de espinaca.",
      "Mezcla los ingredientes con jugo de limón."
    ],
    "prep": 12,
    "coc": 25
  },
  {
    "titulo": "Pasta con zapallo asado",
    "ids": [
      "pasta",
      "zapallo",
      "ajo",
      "queso"
    ],
    "pasos": [
      "Corta el zapallo en cubos y hornéalo a 200 °C hasta ablandar.",
      "Cuece la pasta hasta que esté al dente.",
      "Machaca el zapallo con ajo asado y agua de cocción.",
      "Mezcla la salsa con la pasta y termina con queso."
    ],
    "prep": 12,
    "coc": 30
  },
  {
    "titulo": "Arroz con pollo y arvejas al limón",
    "ids": [
      "arroz",
      "pollo",
      "arveja",
      "limon"
    ],
    "pasos": [
      "Cuece el arroz en agua suficiente hasta que esté tierno.",
      "Corta el pollo en cubos y dóralo en una sartén.",
      "Agrega las arvejas y cocina hasta que el pollo alcance 74 °C.",
      "Mezcla con el arroz y termina con limón."
    ],
    "prep": 12,
    "coc": 25
  },
  {
    "titulo": "Tortilla de betarraga y queso",
    "ids": [
      "betarraga",
      "huevo",
      "queso",
      "cebolla"
    ],
    "pasos": [
      "Cuece la betarraga hasta que esté tierna y rállala.",
      "Sofríe cebolla picada y deja entibiar.",
      "Bate los huevos y mezcla con betarraga, cebolla y queso.",
      "Cuaja la tortilla por ambos lados hasta que el huevo esté completamente cocido."
    ],
    "prep": 15,
    "coc": 35
  },
  {
    "titulo": "Crema de brócoli y papa con leche",
    "ids": [
      "brocoli",
      "papa",
      "cebolla",
      "leche"
    ],
    "pasos": [
      "Lava el brócoli y corta la papa en cubos.",
      "Sofríe cebolla picada hasta que esté transparente.",
      "Añade las verduras y agua y cocina hasta ablandar.",
      "Tritura con leche y calienta suavemente antes de servir."
    ],
    "prep": 12,
    "coc": 25
  },
  {
    "titulo": "Cuscús con berenjena asada",
    "ids": [
      "cuscus",
      "berenjena",
      "tomate",
      "perejil"
    ],
    "pasos": [
      "Corta la berenjena en cubos y hornéala a 200 °C hasta dorar.",
      "Hidrata el cuscús siguiendo las instrucciones del envase.",
      "Lava y corta el tomate en cubos.",
      "Mezcla con la berenjena y perejil picado."
    ],
    "prep": 12,
    "coc": 30
  },
  {
    "titulo": "Ensalada de porotos y palta",
    "ids": [
      "poroto",
      "palta",
      "tomate",
      "cebolla"
    ],
    "pasos": [
      "Usa porotos ya cocidos, enjuagados y escurridos; mantenlos refrigerados hasta servir.",
      "Lava el tomate y pica la cebolla finamente.",
      "Pela la palta y córtala en cubos.",
      "Mezcla todos los ingredientes y sirve de inmediato."
    ],
    "prep": 12,
    "coc": 0
  },
  {
    "titulo": "Pollo con puré de coliflor",
    "ids": [
      "pollo",
      "coliflor",
      "ajo",
      "leche"
    ],
    "pasos": [
      "Cuece la coliflor al vapor hasta que esté muy tierna.",
      "Tritura con leche y ajo cocido hasta formar un puré.",
      "Dora el pollo en una sartén y termina la cocción con tapa.",
      "Sirve cuando el pollo alcance 74 °C."
    ],
    "prep": 12,
    "coc": 25
  },
  {
    "titulo": "Sopa de tomate y zanahoria asados",
    "ids": [
      "tomate",
      "zanahoria",
      "cebolla",
      "ajo"
    ],
    "pasos": [
      "Corta el tomate y la zanahoria en trozos grandes.",
      "Hornea con cebolla y ajo a 200 °C hasta ablandar.",
      "Traslada las verduras a una olla con agua caliente.",
      "Tritura y calienta hasta obtener una sopa uniforme."
    ],
    "prep": 15,
    "coc": 35
  },
  {
    "titulo": "Ensalada de quinoa con pera y nueces",
    "ids": [
      "quinoa",
      "pera",
      "nuez",
      "lechuga"
    ],
    "pasos": [
      "Enjuaga la quinoa y cuécela hasta que esté tierna.",
      "Enfría rápidamente la quinoa si la servirás fría.",
      "Lava y corta la pera y la lechuga.",
      "Mezcla con nueces troceadas y sirve."
    ],
    "prep": 12,
    "coc": 20
  },
  {
    "titulo": "Salmón con papas y perejil",
    "ids": [
      "salmon",
      "papa",
      "perejil",
      "limon"
    ],
    "pasos": [
      "Corta las papas en cubos y hiérvelas hasta que estén tiernas.",
      "Coloca el salmón en una fuente para horno.",
      "Hornea a 190 °C hasta que el pescado alcance 63 °C.",
      "Sirve con papas, perejil y jugo de limón."
    ],
    "prep": 12,
    "coc": 25
  },
  {
    "titulo": "Hamburguesas de quinoa y zanahoria",
    "ids": [
      "quinoa",
      "zanahoria",
      "huevo",
      "avena"
    ],
    "pasos": [
      "Cuece la quinoa hasta que esté tierna y deja entibiar.",
      "Mezcla con zanahoria rallada y avena.",
      "Añade huevo batido y forma hamburguesas compactas.",
      "Cocina por ambos lados hasta que el huevo esté completamente cuajado."
    ],
    "prep": 15,
    "coc": 20
  },
  {
    "titulo": "Ensalada de repollo con pera y yogur",
    "ids": [
      "repollo",
      "pera",
      "yogur",
      "limon"
    ],
    "pasos": [
      "Lava y corta el repollo en tiras muy finas.",
      "Lava la pera y córtala en bastones.",
      "Mezcla yogur natural con jugo de limón.",
      "Incorpora el repollo y la pera y refrigera hasta servir."
    ],
    "prep": 12,
    "coc": 0
  },
  {
    "titulo": "Pasta con atún y brócoli",
    "ids": [
      "pasta",
      "atun",
      "brocoli",
      "ajo"
    ],
    "pasos": [
      "Cuece la pasta en abundante agua hasta que esté al dente.",
      "Cocina el brócoli al vapor hasta que esté tierno.",
      "Saltea ajo picado e incorpora el atún escurrido.",
      "Mezcla con pasta y brócoli y sirve caliente."
    ],
    "prep": 10,
    "coc": 18
  },
  {
    "titulo": "Tacos de pollo y choclo",
    "ids": [
      "tortilla",
      "pollo",
      "choclo",
      "tomate"
    ],
    "pasos": [
      "Cocina el pollo en tiras hasta alcanzar 74 °C.",
      "Cuece el choclo y lava el tomate.",
      "Calienta las tortillas en una sartén.",
      "Rellena con pollo, choclo y tomate picado."
    ],
    "prep": 12,
    "coc": 20
  },
  {
    "titulo": "Arroz con champiñones y arvejas",
    "ids": [
      "arroz",
      "champinon",
      "arveja",
      "cebolla"
    ],
    "pasos": [
      "Sofríe cebolla picada y champiñones laminados.",
      "Añade el arroz y mezcla brevemente.",
      "Incorpora agua caliente y cocina tapado.",
      "Agrega arvejas y termina la cocción hasta que todo esté tierno."
    ],
    "prep": 12,
    "coc": 25
  },
  {
    "titulo": "Sopa de zapallo y lentejas rojas",
    "ids": [
      "zapallo",
      "lenteja",
      "cebolla",
      "jengibre"
    ],
    "pasos": [
      "Sofríe cebolla picada y jengibre rallado.",
      "Añade zapallo en cubos y lentejas rojas lavadas.",
      "Cubre con agua y cocina hasta que ambos ingredientes estén tiernos.",
      "Tritura parcialmente y sirve caliente."
    ],
    "prep": 12,
    "coc": 30
  },
  {
    "titulo": "Pescado con salsa de tomate y albahaca",
    "ids": [
      "pescado",
      "tomate",
      "albahaca",
      "ajo"
    ],
    "pasos": [
      "Sofríe ajo picado y tomate troceado hasta formar una salsa.",
      "Coloca el pescado sobre la salsa en una sartén amplia.",
      "Cocina con tapa hasta que el pescado alcance 63 °C.",
      "Añade albahaca picada y sirve de inmediato."
    ],
    "prep": 12,
    "coc": 20
  },
  {
    "titulo": "Omelette de arvejas y queso",
    "ids": [
      "huevo",
      "arveja",
      "queso",
      "cebolla"
    ],
    "pasos": [
      "Cuece las arvejas hasta que estén tiernas.",
      "Sofríe cebolla picada y reserva.",
      "Bate los huevos y agrega arvejas, cebolla y queso.",
      "Cocina en sartén hasta que el huevo esté completamente cuajado."
    ],
    "prep": 10,
    "coc": 15
  },
  {
    "titulo": "Ensalada tibia de garbanzos y zanahoria",
    "ids": [
      "garbanzo",
      "zanahoria",
      "espinaca",
      "limon"
    ],
    "pasos": [
      "Utiliza garbanzos previamente cocidos y escurridos.",
      "Corta la zanahoria en bastones y hornéala hasta dorar.",
      "Lava la espinaca y mézclala con los garbanzos tibios.",
      "Agrega zanahoria y aliña con limón."
    ],
    "prep": 12,
    "coc": 30
  },
  {
    "titulo": "Puré de papas y brócoli",
    "ids": [
      "papa",
      "brocoli",
      "leche",
      "queso"
    ],
    "pasos": [
      "Cuece las papas peladas hasta que estén tiernas.",
      "Cocina el brócoli al vapor y escúrrelo bien.",
      "Machaca ambas verduras con leche caliente.",
      "Agrega queso rallado y sirve caliente."
    ],
    "prep": 12,
    "coc": 25
  },
  {
    "titulo": "Tostadas con palta y huevo duro",
    "ids": [
      "pan",
      "palta",
      "huevo",
      "tomate"
    ],
    "pasos": [
      "Hierve los huevos hasta que las claras y yemas estén firmes.",
      "Tuesta las rebanadas de pan por ambos lados.",
      "Machaca la palta y corta el tomate en cubos.",
      "Unta el pan y añade rodajas de huevo y tomate."
    ],
    "prep": 10,
    "coc": 12
  },
  {
    "titulo": "Berenjenas rellenas de quinoa",
    "ids": [
      "berenjena",
      "quinoa",
      "tomate",
      "queso"
    ],
    "pasos": [
      "Corta las berenjenas a lo largo y hornéalas hasta ablandar.",
      "Cuece la quinoa previamente enjuagada.",
      "Retira parte de la pulpa y mézclala con quinoa y tomate.",
      "Rellena las berenjenas, cubre con queso y gratina."
    ],
    "prep": 18,
    "coc": 40
  },
  {
    "titulo": "Pollo salteado con repollo y zanahoria",
    "ids": [
      "pollo",
      "repollo",
      "zanahoria",
      "ajo"
    ],
    "pasos": [
      "Corta el pollo en tiras y el repollo en juliana.",
      "Dora el pollo en una sartén con ajo.",
      "Añade zanahoria y repollo y cocina hasta que estén tiernos.",
      "Verifica que el pollo alcance 74 °C antes de servir."
    ],
    "prep": 12,
    "coc": 20
  },
  {
    "titulo": "Ensalada de pepino, choclo y queso",
    "ids": [
      "pepino",
      "choclo",
      "queso",
      "perejil"
    ],
    "pasos": [
      "Cuece el choclo hasta que esté tierno y enfría rápidamente.",
      "Lava y corta el pepino en cubos pequeños.",
      "Corta el queso y pica el perejil.",
      "Mezcla todos los ingredientes y sirve frío."
    ],
    "prep": 10,
    "coc": 12
  }
] as const;
const CANTIDADES:Record<string,string>={"lenteja":"180 g","pera":"1 unidad","espinaca":"160 g","limon":"1 unidad","pasta":"180 g","zapallo":"300 g","ajo":"2 dientes","queso":"80 g","arroz":"150 g","pollo":"300 g","arveja":"180 g","betarraga":"2 unidades","huevo":"2 unidades","cebolla":"100 g","brocoli":"250 g","papa":"350 g","leche":"180 ml","cuscus":"150 g","berenjena":"1 unidad","tomate":"220 g","perejil":"1 cucharada","poroto":"200 g","palta":"1 unidad","coliflor":"300 g","zanahoria":"180 g","quinoa":"150 g","nuez":"50 g","lechuga":"100 g","salmon":"300 g","avena":"100 g","repollo":"250 g","yogur":"150 g","atun":"140 g","tortilla":"4 unidades","choclo":"200 g","champinon":"200 g","jengibre":"10 g","pescado":"300 g","albahaca":"8 hojas","garbanzo":"200 g","pan":"4 rebanadas","pepino":"1 unidad"};
export const RECETAS_LOTE_15:Receta[]=FICHAS.map((f,i)=>({id:`lote-15-${i+1}`,titulo:f.titulo,descripcion:"Preparación para dos personas; cantidades orientativas.",tiempoPreparacion:`${f.prep} min`,tiempoCoccion:`${f.coc} min`,porciones:"2 personas",dificultad:"Fácil",ingredientes:f.ids.map(id=>`${CANTIDADES[id]} de ${id}`),pasos:[...f.pasos],costoAproximado:"Medio",preferencia:"Catálogo editorial sin IA",ingredientesCoincidentes:[],ingredientesFaltantes:[],porcentajeCoincidencia:0}));
