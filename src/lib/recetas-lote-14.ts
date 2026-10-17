/** Lote 14: 25 recetas con cantidades y tiempos diferenciados. */
import type { Receta } from "./recipes.functions";
const FICHAS=[
  {
    "titulo": "Pasta con espinaca y ricota",
    "ids": [
      "pasta",
      "espinaca",
      "ricota",
      "ajo"
    ],
    "pasos": [
      "Cuece la pasta hasta que esté al dente.",
      "Saltea espinaca lavada con ajo picado.",
      "Mezcla la ricota con un poco de agua de cocción.",
      "Integra la pasta con la salsa y sirve caliente."
    ],
    "prep": 10,
    "coc": 15
  },
  {
    "titulo": "Arroz con calabacín y limón",
    "ids": [
      "arroz",
      "zapallito",
      "limon",
      "cebolla"
    ],
    "pasos": [
      "Sofríe cebolla picada hasta que esté transparente.",
      "Agrega arroz y zapallito en cubos pequeños.",
      "Incorpora agua caliente y cocina tapado hasta ablandar.",
      "Termina con jugo de limón antes de servir."
    ],
    "prep": 10,
    "coc": 25
  },
  {
    "titulo": "Pollo con miel y mostaza",
    "ids": [
      "pollo",
      "miel",
      "mostaza",
      "zanahoria"
    ],
    "pasos": [
      "Mezcla miel y mostaza para formar una salsa.",
      "Corta la zanahoria en bastones y colócala en una fuente.",
      "Unta el pollo con la salsa y hornea a 200 °C.",
      "Retira cuando el pollo alcance 74 °C y la zanahoria esté tierna."
    ],
    "prep": 12,
    "coc": 35
  },
  {
    "titulo": "Crema de champiñones y puerro",
    "ids": [
      "champinon",
      "puerro",
      "papa",
      "leche"
    ],
    "pasos": [
      "Lava el puerro y córtalo en rodajas finas.",
      "Sofríe puerro y champiñones laminados.",
      "Añade papa en cubos y agua y cuece hasta ablandar.",
      "Tritura con leche y calienta antes de servir."
    ],
    "prep": 12,
    "coc": 25
  },
  {
    "titulo": "Ensalada de garbanzos y mango",
    "ids": [
      "garbanzo",
      "mango",
      "pepino",
      "limon"
    ],
    "pasos": [
      "Cuece los garbanzos hasta que estén tiernos y deja enfriar.",
      "Pela y corta el mango en cubos.",
      "Lava el pepino y córtalo en trozos pequeños.",
      "Mezcla todo con jugo de limón y sirve frío."
    ],
    "prep": 12,
    "coc": 0
  },
  {
    "titulo": "Tortilla de champiñones y puerro",
    "ids": [
      "huevo",
      "champinon",
      "puerro",
      "queso"
    ],
    "pasos": [
      "Lava y corta el puerro en rodajas finas.",
      "Saltea el puerro con champiñones hasta que pierdan humedad.",
      "Bate los huevos y añade el queso rallado.",
      "Vierte sobre las verduras y cocina hasta que el huevo cuaje completamente."
    ],
    "prep": 12,
    "coc": 15
  },
  {
    "titulo": "Salmón con costra de sésamo",
    "ids": [
      "salmon",
      "sesamo",
      "limon",
      "brocoli"
    ],
    "pasos": [
      "Precalienta el horno a 190 °C.",
      "Cubre el salmón con semillas de sésamo y colócalo en una fuente.",
      "Hornea hasta que el pescado alcance 63 °C.",
      "Sirve con brócoli al vapor y jugo de limón."
    ],
    "prep": 10,
    "coc": 20
  },
  {
    "titulo": "Sopa de tomate y albahaca",
    "ids": [
      "tomate",
      "albahaca",
      "cebolla",
      "ajo"
    ],
    "pasos": [
      "Sofríe cebolla y ajo picados en una olla.",
      "Añade tomate troceado y agua suficiente.",
      "Cocina hasta que el tomate se ablande.",
      "Agrega albahaca, tritura y sirve caliente."
    ],
    "prep": 10,
    "coc": 25
  },
  {
    "titulo": "Quinoa con zapallo y semillas",
    "ids": [
      "quinoa",
      "zapallo",
      "sesamo",
      "perejil"
    ],
    "pasos": [
      "Lava la quinoa y cuécela hasta que esté tierna.",
      "Corta el zapallo en cubos y hornéalo hasta dorar.",
      "Tuesta brevemente el sésamo en una sartén seca.",
      "Mezcla quinoa, zapallo, semillas y perejil."
    ],
    "prep": 12,
    "coc": 30
  },
  {
    "titulo": "Papas gratinadas con puerro",
    "ids": [
      "papa",
      "puerro",
      "leche",
      "queso"
    ],
    "pasos": [
      "Corta las papas en láminas finas y lava el puerro.",
      "Distribuye las papas y el puerro en una fuente.",
      "Vierte leche y cubre con queso rallado.",
      "Hornea a 190 °C hasta que las papas estén tiernas y doradas."
    ],
    "prep": 15,
    "coc": 45
  },
  {
    "titulo": "Bowl de arroz con tofu y mango",
    "ids": [
      "arroz",
      "tofu",
      "mango",
      "pepino"
    ],
    "pasos": [
      "Cuece el arroz y mantenlo caliente.",
      "Corta el tofu en cubos y dóralo en una sartén.",
      "Pela el mango y lava el pepino antes de cortarlos.",
      "Sirve el arroz con tofu y frutas y verduras frescas."
    ],
    "prep": 12,
    "coc": 20
  },
  {
    "titulo": "Ensalada de lentejas y pimentón asado",
    "ids": [
      "lenteja",
      "pimenton",
      "cebolla",
      "limon"
    ],
    "pasos": [
      "Cuece las lentejas hasta que estén tiernas.",
      "Hornea el pimentón hasta ablandarlo y córtalo en tiras.",
      "Pica cebolla muy fina y mezcla con las lentejas.",
      "Añade pimentón y limón y sirve tibio."
    ],
    "prep": 12,
    "coc": 30
  },
  {
    "titulo": "Pollo con crema de puerro",
    "ids": [
      "pollo",
      "puerro",
      "leche",
      "papa"
    ],
    "pasos": [
      "Dora el pollo en una sartén amplia.",
      "Lava y corta el puerro en rodajas y agrégalo.",
      "Añade leche y cocina suavemente con tapa.",
      "Verifica que el pollo alcance 74 °C y acompaña con papas cocidas."
    ],
    "prep": 12,
    "coc": 30
  },
  {
    "titulo": "Fideos con atún y limón",
    "ids": [
      "pasta",
      "atun",
      "limon",
      "perejil"
    ],
    "pasos": [
      "Cuece los fideos hasta que estén al dente.",
      "Escurre el atún y desmenúzalo con un tenedor.",
      "Mezcla la pasta caliente con el atún y un poco de agua de cocción.",
      "Añade limón y perejil picado antes de servir."
    ],
    "prep": 8,
    "coc": 15
  },
  {
    "titulo": "Ensalada de pepino con yogur y menta",
    "ids": [
      "pepino",
      "yogur",
      "menta",
      "limon"
    ],
    "pasos": [
      "Lava y corta el pepino en rodajas delgadas.",
      "Pica finamente las hojas de menta.",
      "Mezcla yogur natural con jugo de limón.",
      "Incorpora pepino y menta y refrigera hasta servir."
    ],
    "prep": 10,
    "coc": 0
  },
  {
    "titulo": "Hamburguesas de porotos negros",
    "ids": [
      "poroto",
      "avena",
      "cebolla",
      "huevo"
    ],
    "pasos": [
      "Cuece los porotos negros hasta que estén tiernos y escúrrelos.",
      "Machaca los porotos y mezcla con avena y cebolla sofrita.",
      "Añade huevo batido y forma hamburguesas compactas.",
      "Cocina por ambos lados hasta que el huevo esté completamente cuajado."
    ],
    "prep": 15,
    "coc": 20
  },
  {
    "titulo": "Cuscús con champiñones y espinaca",
    "ids": [
      "cuscus",
      "champinon",
      "espinaca",
      "ajo"
    ],
    "pasos": [
      "Hidrata el cuscús según las instrucciones del envase.",
      "Lamina los champiñones y saltéalos con ajo.",
      "Añade espinaca y cocina hasta que reduzca su volumen.",
      "Mezcla las verduras con el cuscús y sirve."
    ],
    "prep": 10,
    "coc": 15
  },
  {
    "titulo": "Pescado al horno con puerro",
    "ids": [
      "pescado",
      "puerro",
      "tomate",
      "limon"
    ],
    "pasos": [
      "Lava el puerro y córtalo en rodajas finas.",
      "Coloca el pescado sobre una cama de puerro y tomate.",
      "Rocía con limón y cubre la fuente con papel de horno.",
      "Hornea a 190 °C hasta que el pescado alcance 63 °C."
    ],
    "prep": 12,
    "coc": 25
  },
  {
    "titulo": "Crema de arvejas y puerro",
    "ids": [
      "arveja",
      "puerro",
      "papa",
      "leche"
    ],
    "pasos": [
      "Lava y corta el puerro y la papa en cubos.",
      "Sofríe el puerro y añade papa y agua.",
      "Cuando la papa esté casi tierna, agrega arvejas.",
      "Tritura con leche y calienta suavemente antes de servir."
    ],
    "prep": 12,
    "coc": 25
  },
  {
    "titulo": "Tacos de tofu con repollo",
    "ids": [
      "tortilla",
      "tofu",
      "repollo",
      "tomate"
    ],
    "pasos": [
      "Corta el tofu en cubos y dóralo en sartén.",
      "Lava el repollo y córtalo en tiras muy finas.",
      "Pica el tomate y calienta las tortillas.",
      "Rellena con tofu, repollo y tomate y sirve."
    ],
    "prep": 12,
    "coc": 15
  },
  {
    "titulo": "Ensalada tibia de quinoa y champiñones",
    "ids": [
      "quinoa",
      "champinon",
      "zanahoria",
      "limon"
    ],
    "pasos": [
      "Cuece la quinoa previamente enjuagada hasta que esté tierna.",
      "Lamina los champiñones y ralla la zanahoria.",
      "Saltea las verduras hasta que estén cocidas.",
      "Mezcla con la quinoa y aliña con limón."
    ],
    "prep": 12,
    "coc": 20
  },
  {
    "titulo": "Omelette de espinaca y ricota",
    "ids": [
      "huevo",
      "espinaca",
      "ricota",
      "cebolla"
    ],
    "pasos": [
      "Sofríe cebolla picada y espinaca lavada.",
      "Bate los huevos y viértelos en una sartén.",
      "Distribuye la ricota y las verduras sobre una mitad.",
      "Dobla y cocina hasta que el huevo esté completamente cuajado."
    ],
    "prep": 10,
    "coc": 12
  },
  {
    "titulo": "Puré de coliflor con ajo asado",
    "ids": [
      "coliflor",
      "ajo",
      "leche",
      "queso"
    ],
    "pasos": [
      "Hornea los dientes de ajo envueltos hasta que estén tiernos.",
      "Cuece la coliflor al vapor hasta que esté muy blanda.",
      "Tritura la coliflor con ajo asado y leche caliente.",
      "Agrega queso y sirve el puré caliente."
    ],
    "prep": 12,
    "coc": 30
  },
  {
    "titulo": "Arroz con berenjena y garbanzos",
    "ids": [
      "arroz",
      "berenjena",
      "garbanzo",
      "tomate"
    ],
    "pasos": [
      "Cuece el arroz hasta que esté tierno.",
      "Corta la berenjena en cubos y saltéala hasta dorar.",
      "Agrega tomate picado y garbanzos previamente cocidos.",
      "Mezcla con el arroz y calienta todo antes de servir."
    ],
    "prep": 12,
    "coc": 25
  },
  {
    "titulo": "Ensalada de betarraga y mango",
    "ids": [
      "betarraga",
      "mango",
      "lechuga",
      "limon"
    ],
    "pasos": [
      "Cuece la betarraga hasta que esté tierna y deja enfriar.",
      "Pela y corta el mango en cubos.",
      "Lava la lechuga y corta la betarraga.",
      "Mezcla los ingredientes y aliña con limón."
    ],
    "prep": 12,
    "coc": 35
  }
] as const;
const CANTIDADES:Record<string,string>={"pasta":"180 g","espinaca":"160 g","ricota":"120 g","ajo":"2 dientes","arroz":"150 g","zapallito":"2 unidades","limon":"1 unidad","cebolla":"100 g","pollo":"300 g","miel":"2 cucharadas","mostaza":"2 cucharadas","zanahoria":"180 g","champinon":"200 g","puerro":"1 unidad","papa":"350 g","leche":"180 ml","garbanzo":"200 g","mango":"1 unidad","pepino":"1 unidad","huevo":"2 unidades","queso":"80 g","salmon":"300 g","sesamo":"2 cucharadas","brocoli":"250 g","tomate":"220 g","albahaca":"8 hojas","quinoa":"150 g","zapallo":"300 g","perejil":"1 cucharada","tofu":"250 g","lenteja":"180 g","pimenton":"1 unidad","atun":"140 g","yogur":"150 g","menta":"6 hojas","poroto":"200 g","avena":"100 g","cuscus":"150 g","pescado":"300 g","arveja":"180 g","tortilla":"4 unidades","repollo":"250 g","coliflor":"300 g","berenjena":"1 unidad","betarraga":"2 unidades","lechuga":"100 g"};
export const RECETAS_LOTE_14:Receta[]=FICHAS.map((f,i)=>({id:`lote-14-${i+1}`,titulo:f.titulo,descripcion:"Preparación para dos personas con cantidades orientativas.",tiempoPreparacion:`${f.prep} min`,tiempoCoccion:`${f.coc} min`,porciones:"2 personas",dificultad:"Fácil",ingredientes:f.ids.map(id=>`${CANTIDADES[id]} de ${id}`),pasos:[...f.pasos],costoAproximado:"Medio",preferencia:"Catálogo editorial sin IA",ingredientesCoincidentes:[],ingredientesFaltantes:[],porcentajeCoincidencia:0}));
