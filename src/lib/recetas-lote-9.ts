/** Lote 9: 25 recetas vegetarianas, verduras y legumbres. */
import type { Receta } from "./recipes.functions";
const FICHAS=[
  {
    "titulo": "Quinoa con verduras asadas",
    "ids": [
      "quinoa",
      "zapallo",
      "zanahoria",
      "pimenton"
    ],
    "pasos": [
      "Lava la quinoa bajo agua corriente y cuécela según las indicaciones del envase.",
      "Corta el zapallo, la zanahoria y el pimentón en cubos parejos.",
      "Hornea las verduras a 200 °C hasta que estén tiernas y doradas.",
      "Mezcla las verduras con la quinoa caliente y sirve."
    ]
  },
  {
    "titulo": "Ensalada de quinoa con pepino",
    "ids": [
      "quinoa",
      "pepino",
      "tomate",
      "limon"
    ],
    "pasos": [
      "Cuece la quinoa en agua y déjala enfriar rápidamente.",
      "Lava el pepino y el tomate y córtalos en cubos pequeños.",
      "Mezcla la quinoa fría con las verduras.",
      "Aliña con jugo de limón y sirve fresca."
    ]
  },
  {
    "titulo": "Cuscús con garbanzos y zanahoria",
    "ids": [
      "cuscus",
      "garbanzo",
      "zanahoria",
      "cebolla"
    ],
    "pasos": [
      "Hidrata el cuscús con agua caliente según el envase.",
      "Cuece o calienta los garbanzos previamente cocidos.",
      "Sofríe la cebolla y la zanahoria rallada hasta que estén tiernas.",
      "Mezcla todo con un tenedor y sirve caliente."
    ]
  },
  {
    "titulo": "Berenjenas rellenas de arroz",
    "ids": [
      "berenjena",
      "arroz",
      "tomate",
      "queso"
    ],
    "pasos": [
      "Parte las berenjenas a lo largo y hornéalas a 200 °C hasta ablandar.",
      "Cuece el arroz y mezcla con tomate picado.",
      "Retira parte de la pulpa de berenjena y mézclala con el arroz.",
      "Rellena las mitades, cubre con queso y gratina hasta dorar."
    ]
  },
  {
    "titulo": "Zapallitos italianos salteados con huevo",
    "ids": [
      "zapallito",
      "huevo",
      "cebolla",
      "tomate"
    ],
    "pasos": [
      "Lava y corta los zapallitos italianos en cubos pequeños.",
      "Sofríe la cebolla y agrega el zapallito hasta que pierda humedad.",
      "Incorpora el tomate picado y cocina unos minutos.",
      "Añade los huevos batidos y revuelve hasta que estén completamente cuajados."
    ]
  },
  {
    "titulo": "Crema de coliflor y papa",
    "ids": [
      "coliflor",
      "papa",
      "cebolla",
      "leche"
    ],
    "pasos": [
      "Lava la coliflor y sepárala en ramilletes.",
      "Cuece coliflor, papa y cebolla en agua hasta que estén tiernas.",
      "Tritura con parte del líquido de cocción hasta lograr una crema.",
      "Agrega leche y calienta suavemente antes de servir."
    ]
  },
  {
    "titulo": "Coliflor al horno con queso",
    "ids": [
      "coliflor",
      "queso",
      "ajo",
      "limon"
    ],
    "pasos": [
      "Precalienta el horno a 200 °C y separa la coliflor en ramilletes.",
      "Mezcla con ajo picado, unas gotas de limón y un poco de aceite.",
      "Hornea hasta que la coliflor esté tierna y ligeramente dorada.",
      "Añade queso rallado y gratina unos minutos."
    ]
  },
  {
    "titulo": "Brócoli con salsa de queso",
    "ids": [
      "brocoli",
      "queso",
      "leche",
      "ajo"
    ],
    "pasos": [
      "Cuece el brócoli al vapor hasta que esté tierno pero firme.",
      "Calienta la leche con ajo picado en una olla pequeña.",
      "Agrega queso rallado y remueve a fuego bajo hasta integrar.",
      "Vierte la salsa sobre el brócoli y sirve caliente."
    ]
  },
  {
    "titulo": "Sopa de verduras con fideos",
    "ids": [
      "pasta",
      "zanahoria",
      "zapallito",
      "cebolla"
    ],
    "pasos": [
      "Corta zanahoria, zapallito y cebolla en cubos pequeños.",
      "Sofríe brevemente la cebolla en una olla.",
      "Añade agua y las verduras y cocina hasta que estén casi tiernas.",
      "Incorpora los fideos y continúa hasta que estén cocidos."
    ]
  },
  {
    "titulo": "Tallarines con berenjena y tomate",
    "ids": [
      "pasta",
      "berenjena",
      "tomate",
      "ajo"
    ],
    "pasos": [
      "Cuece los tallarines en agua hirviendo hasta que estén al dente.",
      "Corta la berenjena en cubos y saltéala con ajo.",
      "Agrega tomate picado y cocina hasta formar una salsa espesa.",
      "Mezcla los tallarines escurridos con la salsa y sirve."
    ]
  },
  {
    "titulo": "Lasaña de verduras",
    "ids": [
      "pasta",
      "zapallito",
      "tomate",
      "queso"
    ],
    "pasos": [
      "Corta el zapallito en láminas finas y cocínalo brevemente.",
      "Prepara una salsa con tomate picado y un poco de agua.",
      "Alterna capas de láminas de pasta para lasaña, salsa, zapallito y queso.",
      "Hornea siguiendo el tiempo indicado para la pasta hasta que esté completamente tierna."
    ]
  },
  {
    "titulo": "Risotto de champiñones",
    "ids": [
      "arroz",
      "champinon",
      "cebolla",
      "queso"
    ],
    "pasos": [
      "Sofríe cebolla picada y champiñones laminados.",
      "Añade arroz y remueve durante un minuto.",
      "Incorpora agua o caldo caliente en pequeñas porciones, removiendo frecuentemente.",
      "Cuando el arroz esté cremoso y tierno, agrega queso y sirve."
    ]
  },
  {
    "titulo": "Arroz con choclo y pimentón",
    "ids": [
      "arroz",
      "choclo",
      "pimenton",
      "cebolla"
    ],
    "pasos": [
      "Sofríe cebolla y pimentón cortados en cubos.",
      "Agrega el arroz y revuelve hasta impregnarlo con el sofrito.",
      "Incorpora agua caliente y cocina tapado hasta que esté tierno.",
      "Añade choclo previamente cocido, mezcla y sirve."
    ]
  },
  {
    "titulo": "Puré mixto de papa y coliflor",
    "ids": [
      "papa",
      "coliflor",
      "leche",
      "ajo"
    ],
    "pasos": [
      "Pela y corta las papas en cubos parejos.",
      "Cuece las papas y la coliflor hasta que estén blandas.",
      "Escurre y aplasta con un prensapapas.",
      "Agrega leche tibia y ajo cocido, mezcla y sirve."
    ]
  },
  {
    "titulo": "Tortilla de zapallito italiano",
    "ids": [
      "zapallito",
      "huevo",
      "cebolla",
      "queso"
    ],
    "pasos": [
      "Ralla el zapallito y escurre el exceso de líquido.",
      "Sofríe la cebolla hasta que esté transparente.",
      "Mezcla con huevo batido, zapallito y queso rallado.",
      "Cocina la tortilla por ambos lados hasta que el huevo esté completamente cuajado."
    ]
  },
  {
    "titulo": "Guiso de berenjena y garbanzos",
    "ids": [
      "berenjena",
      "garbanzo",
      "tomate",
      "cebolla"
    ],
    "pasos": [
      "Corta la berenjena en cubos y sofríela con cebolla.",
      "Agrega tomate picado y un poco de agua.",
      "Incorpora garbanzos previamente cocidos y escurridos.",
      "Cocina a fuego suave hasta que la berenjena esté tierna."
    ]
  },
  {
    "titulo": "Ensalada de remolacha y huevo",
    "ids": [
      "betarraga",
      "huevo",
      "lechuga",
      "limon"
    ],
    "pasos": [
      "Cuece la betarraga hasta que esté tierna y deja enfriar.",
      "Cuece los huevos hasta que estén firmes.",
      "Lava la lechuga y corta la betarraga y los huevos.",
      "Combina todo y aliña con limón al servir."
    ]
  },
  {
    "titulo": "Betarragas asadas con yogur",
    "ids": [
      "betarraga",
      "yogur",
      "ajo",
      "limon"
    ],
    "pasos": [
      "Lava y pela las betarragas y córtalas en gajos.",
      "Hornea a 200 °C hasta que estén tiernas.",
      "Mezcla yogur natural con ajo muy picado y jugo de limón.",
      "Sirve las betarragas tibias con la salsa fresca."
    ]
  },
  {
    "titulo": "Ensalada de repollo y zanahoria",
    "ids": [
      "repollo",
      "zanahoria",
      "yogur",
      "limon"
    ],
    "pasos": [
      "Lava el repollo y córtalo en tiras muy finas.",
      "Pela y ralla la zanahoria.",
      "Mezcla yogur natural con jugo de limón.",
      "Integra las verduras con el aliño y conserva refrigerado hasta servir."
    ]
  },
  {
    "titulo": "Salteado de repollo con carne",
    "ids": [
      "repollo",
      "carne",
      "cebolla",
      "zanahoria"
    ],
    "pasos": [
      "Corta el repollo en tiras y ralla la zanahoria.",
      "Sofríe cebolla picada en una sartén amplia.",
      "Agrega la carne molida y cocina hasta alcanzar 71 °C.",
      "Incorpora repollo y zanahoria y saltea hasta ablandar."
    ]
  },
  {
    "titulo": "Crema de arvejas con menta",
    "ids": [
      "arveja",
      "papa",
      "cebolla",
      "menta"
    ],
    "pasos": [
      "Sofríe cebolla picada en una olla.",
      "Añade papa en cubos y agua hasta cubrir.",
      "Cuando la papa esté casi tierna, incorpora las arvejas.",
      "Cocina hasta ablandar, agrega menta y tritura hasta obtener una crema."
    ]
  },
  {
    "titulo": "Arroz con arvejas y zanahoria",
    "ids": [
      "arroz",
      "arveja",
      "zanahoria",
      "cebolla"
    ],
    "pasos": [
      "Sofríe cebolla y zanahoria cortadas en cubos pequeños.",
      "Agrega el arroz y mezcla durante un minuto.",
      "Incorpora agua y cocina tapado a fuego bajo.",
      "Añade arvejas y termina la cocción hasta que todo esté tierno."
    ]
  },
  {
    "titulo": "Hamburguesas de lentejas y avena",
    "ids": [
      "lenteja",
      "avena",
      "huevo",
      "cebolla"
    ],
    "pasos": [
      "Cuece las lentejas hasta que estén blandas y escúrrelas bien.",
      "Machácalas con cebolla sofrita y avena.",
      "Agrega huevo batido y forma hamburguesas compactas.",
      "Dóralas por ambos lados hasta que el huevo esté completamente cocido."
    ]
  },
  {
    "titulo": "Ensalada tibia de arvejas y papas",
    "ids": [
      "arveja",
      "papa",
      "huevo",
      "perejil"
    ],
    "pasos": [
      "Cuece las papas en cubos hasta que estén tiernas.",
      "Cuece las arvejas y escúrrelas.",
      "Hierve los huevos hasta que estén firmes y córtalos.",
      "Mezcla los ingredientes tibios y añade perejil picado."
    ]
  },
  {
    "titulo": "Frittata de brócoli y queso",
    "ids": [
      "brocoli",
      "huevo",
      "queso",
      "cebolla"
    ],
    "pasos": [
      "Cuece brevemente el brócoli al vapor.",
      "Sofríe cebolla picada en una sartén apta para horno.",
      "Añade brócoli, huevos batidos y queso rallado.",
      "Termina la cocción en horno a 180 °C hasta que el centro esté completamente cuajado."
    ]
  }
] as const;
const CANTIDADES:Record<string,string>={"quinoa":"150 g","zapallo":"300 g","zanahoria":"180 g","pimenton":"1 unidad","pepino":"1 unidad","tomate":"200 g","limon":"1 unidad","cuscus":"150 g","garbanzo":"200 g","cebolla":"100 g","berenjena":"1 unidad","arroz":"150 g","queso":"80 g","zapallito":"2 unidades","huevo":"2 unidades","coliflor":"300 g","papa":"300 g","leche":"150 ml","ajo":"2 dientes","brocoli":"250 g","pasta":"180 g","champinon":"180 g","choclo":"180 g","betarraga":"2 unidades","lechuga":"100 g","yogur":"150 g","repollo":"250 g","carne":"250 g","arveja":"200 g","menta":"6 hojas","avena":"80 g","lenteja":"180 g","perejil":"1 cucharada"};
export const RECETAS_LOTE_9:Receta[]=FICHAS.map((f,i)=>({id:`lote-9-${i+1}`,titulo:f.titulo,descripcion:"Preparación para dos personas; cantidades orientativas.",tiempoPreparacion:"15 min",tiempoCoccion:"30 min",porciones:"2 personas",dificultad:"Fácil",ingredientes:f.ids.map(id=>`${CANTIDADES[id]} de ${id}`),pasos:[...f.pasos],costoAproximado:"Medio",preferencia:"Catálogo editorial sin IA",ingredientesCoincidentes:[],ingredientesFaltantes:[],porcentajeCoincidencia:0}));
