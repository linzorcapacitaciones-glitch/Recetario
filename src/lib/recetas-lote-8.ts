/** Lote 8: 20 recetas adicionales con procedimientos específicos. */
import type { Receta } from "./recipes.functions";
const FICHAS=[
  {
    "titulo": "Pescado al horno con choclo",
    "ids": [
      "pescado",
      "choclo",
      "tomate",
      "limon"
    ],
    "pasos": [
      "Precalienta el horno a 190 °C y coloca el pescado en una fuente.",
      "Agrega tomate cortado y jugo de limón.",
      "Hornea hasta que el centro del pescado alcance 63 °C.",
      "Sirve con choclo previamente cocido y caliente."
    ]
  },
  {
    "titulo": "Merluza con puré de zanahoria",
    "ids": [
      "merluza",
      "zanahoria",
      "papa",
      "limon"
    ],
    "pasos": [
      "Hierve las zanahorias y papas hasta que estén blandas.",
      "Escurre y aplasta las verduras hasta formar un puré.",
      "Cocina la merluza en sartén con jugo de limón.",
      "Sirve cuando el pescado alcance 63 °C en el centro."
    ]
  },
  {
    "titulo": "Salmón con ensalada de pepino",
    "ids": [
      "salmon",
      "pepino",
      "yogur",
      "limon"
    ],
    "pasos": [
      "Lava y corta el pepino en rodajas finas.",
      "Mezcla yogur natural con jugo de limón y aliña el pepino.",
      "Cocina el salmón a la plancha por ambos lados.",
      "Verifica que alcance 63 °C en el centro y sirve con la ensalada."
    ]
  },
  {
    "titulo": "Arroz caldoso con merluza",
    "ids": [
      "arroz",
      "merluza",
      "tomate",
      "cebolla"
    ],
    "pasos": [
      "Sofríe la cebolla y el tomate picados.",
      "Añade arroz y agua caliente suficiente para una textura caldosa.",
      "Cuando el arroz esté casi tierno, incorpora la merluza en trozos.",
      "Cocina hasta que el pescado alcance 63 °C y sirve de inmediato."
    ]
  },
  {
    "titulo": "Papas asadas con atún y yogur",
    "ids": [
      "papa",
      "atun",
      "yogur",
      "limon"
    ],
    "pasos": [
      "Hornea las papas lavadas a 200 °C hasta que estén tiernas.",
      "Mezcla yogur natural con unas gotas de limón.",
      "Escurre el atún de conserva y desmenúzalo.",
      "Abre las papas y rellénalas con atún y salsa de yogur."
    ]
  },
  {
    "titulo": "Carne con champiñones y arroz",
    "ids": [
      "carne",
      "champinon",
      "arroz",
      "cebolla"
    ],
    "pasos": [
      "Cuece el arroz hasta que esté tierno.",
      "Dora tiras de carne en una sartén caliente.",
      "Añade cebolla y champiñones laminados y cocina hasta que se ablanden.",
      "Sirve el salteado de carne y verduras sobre el arroz."
    ]
  },
  {
    "titulo": "Pastel de choclo con carne",
    "ids": [
      "choclo",
      "carne",
      "cebolla",
      "huevo"
    ],
    "pasos": [
      "Cuece el choclo y tritúralo hasta formar una pasta espesa.",
      "Sofríe cebolla y carne molida hasta que la carne alcance 71 °C.",
      "Cuece el huevo hasta que esté firme y córtalo en trozos.",
      "Coloca la carne y el huevo en una fuente, cubre con choclo y hornea a 200 °C hasta dorar."
    ]
  },
  {
    "titulo": "Carne al jugo con zapallo",
    "ids": [
      "carne",
      "zapallo",
      "cebolla",
      "zanahoria"
    ],
    "pasos": [
      "Dora los trozos de carne en una olla.",
      "Agrega cebolla y zanahoria picadas y rehoga unos minutos.",
      "Añade agua, tapa y cocina a fuego suave hasta ablandar la carne.",
      "Incorpora zapallo en cubos y continúa hasta que esté tierno."
    ]
  },
  {
    "titulo": "Hamburguesas caseras con ensalada",
    "ids": [
      "carne",
      "huevo",
      "lechuga",
      "tomate"
    ],
    "pasos": [
      "Mezcla carne molida con huevo batido y condimentos.",
      "Forma hamburguesas de grosor uniforme.",
      "Cocina en sartén hasta que el centro alcance 71 °C.",
      "Sirve con lechuga y tomate previamente lavados."
    ]
  },
  {
    "titulo": "Carne salteada con pimentón y papas",
    "ids": [
      "carne",
      "pimenton",
      "papa",
      "ajo"
    ],
    "pasos": [
      "Hierve las papas hasta que estén tiernas y córtalas en cubos.",
      "Dora las papas en una sartén con un poco de aceite.",
      "Saltea aparte la carne en tiras con ajo y pimentón.",
      "Mezcla las preparaciones y sirve caliente."
    ]
  },
  {
    "titulo": "Pollo al horno con brócoli",
    "ids": [
      "pollo",
      "brocoli",
      "papa",
      "ajo"
    ],
    "pasos": [
      "Precalienta el horno a 200 °C y corta las papas en gajos.",
      "Hornea el pollo y las papas con ajo picado.",
      "Cocina el brócoli al vapor hasta que esté tierno.",
      "Comprueba que el pollo alcance 74 °C y sirve con el brócoli."
    ]
  },
  {
    "titulo": "Pollo con salsa de yogur y limón",
    "ids": [
      "pollo",
      "yogur",
      "limon",
      "arroz"
    ],
    "pasos": [
      "Cuece el arroz en agua durante 15 a 20 minutos hasta que esté tierno; resérvalo caliente mientras cocinas el pollo.",
      "Cocina el pollo en sartén hasta alcanzar 74 °C.",
      "Mezcla yogur natural con limón y condimentos en un recipiente.",
      "Sirve el pollo caliente con arroz y añade la salsa fría al final."
    ]
  },
  {
    "titulo": "Pollo salteado con choclo",
    "ids": [
      "pollo",
      "choclo",
      "cebolla",
      "pimenton"
    ],
    "pasos": [
      "Cuece el choclo hasta que esté tierno.",
      "Corta el pollo en cubos y saltéalo en una sartén.",
      "Añade cebolla y pimentón picados y cocina hasta ablandar.",
      "Incorpora el choclo y verifica que el pollo alcance 74 °C."
    ]
  },
  {
    "titulo": "Ensalada de pasta con pollo y pepino",
    "ids": [
      "pasta",
      "pollo",
      "pepino",
      "yogur"
    ],
    "pasos": [
      "Cuece la pasta y enfríala rápidamente.",
      "Cocina el pollo hasta alcanzar 74 °C y córtalo en cubos.",
      "Lava y corta el pepino y mezcla con yogur natural.",
      "Combina todo y sirve inmediatamente o conserva refrigerado."
    ]
  },
  {
    "titulo": "Tortilla de pollo y espinaca",
    "ids": [
      "pollo",
      "huevo",
      "espinaca",
      "cebolla"
    ],
    "pasos": [
      "Cocina completamente el pollo hasta alcanzar 74 °C y desmenúzalo.",
      "Sofríe cebolla y espinaca lavada hasta que pierdan humedad.",
      "Mezcla pollo y verduras con huevos batidos.",
      "Cuaja en sartén por ambos lados hasta cocinar el huevo completamente."
    ]
  },
  {
    "titulo": "Avena horneada con plátano",
    "ids": [
      "avena",
      "platano",
      "leche",
      "huevo"
    ],
    "pasos": [
      "Aplasta el plátano y mézclalo con la avena.",
      "Añade leche y huevo batido hasta integrar.",
      "Vierte en una fuente pequeña apta para horno.",
      "Hornea a 180 °C hasta que el centro esté firme y el huevo cocido."
    ]
  },
  {
    "titulo": "Panqueques de manzana y avena",
    "ids": [
      "manzana",
      "avena",
      "huevo",
      "yogur"
    ],
    "pasos": [
      "Ralla la manzana lavada y mézclala con avena.",
      "Añade huevo y yogur hasta obtener una masa espesa.",
      "Coloca porciones en una sartén antiadherente caliente.",
      "Cocina por ambos lados hasta que el centro esté completamente cuajado."
    ]
  },
  {
    "titulo": "Sándwich de huevo con palta",
    "ids": [
      "pan",
      "huevo",
      "palta",
      "tomate"
    ],
    "pasos": [
      "Cuece los huevos hasta que estén firmes y deja enfriar.",
      "Pela y aplasta la palta con un tenedor.",
      "Lava y corta el tomate en rodajas.",
      "Arma el sándwich con pan, palta, huevo y tomate."
    ]
  },
  {
    "titulo": "Porotos con verduras asadas",
    "ids": [
      "poroto",
      "zapallo",
      "pimenton",
      "cebolla"
    ],
    "pasos": [
      "Cuece los porotos previamente remojados hasta que estén tiernos.",
      "Corta zapallo, pimentón y cebolla en cubos.",
      "Hornea las verduras a 200 °C hasta que estén doradas.",
      "Mezcla las verduras con los porotos calientes y sirve."
    ]
  },
  {
    "titulo": "Garbanzos con salsa de yogur",
    "ids": [
      "garbanzo",
      "yogur",
      "pepino",
      "limon"
    ],
    "pasos": [
      "Calienta garbanzos previamente cocidos en una sartén.",
      "Lava y ralla el pepino y escurre parte de su líquido.",
      "Mezcla yogur con pepino y jugo de limón.",
      "Sirve los garbanzos tibios acompañados de la salsa fresca."
    ]
  }
] as const;
const CANTIDADES:Record<string,string>={"pescado":"300 g","choclo":"200 g","tomate":"220 g","limon":"1 unidad","merluza":"300 g","zanahoria":"180 g","papa":"350 g","salmon":"300 g","pepino":"1 unidad","yogur":"200 g","arroz":"150 g","cebolla":"100 g","atun":"140 g","carne":"300 g","champinon":"200 g","huevo":"2 unidades","zapallo":"350 g","lechuga":"150 g","pimenton":"1 unidad","ajo":"2 dientes","pollo":"300 g","brocoli":"250 g","pasta":"180 g","espinaca":"160 g","avena":"100 g","platano":"2 unidades","leche":"250 ml","manzana":"2 unidades","pan":"4 rebanadas","palta":"1 unidad","poroto":"200 g","garbanzo":"200 g"};
const TIEMPOS_COCCION:Record<string,number>={};
export const RECETAS_LOTE_8:Receta[]=FICHAS.map((f,i)=>({id:`lote-8-${i+1}`,titulo:f.titulo,descripcion:"Preparación casera para dos personas; cantidades orientativas.",tiempoPreparacion:"15 min",tiempoCoccion:`${TIEMPOS_COCCION[f.titulo]??( /ensalada|tostada|sandwich|sándwich|ceviche/i.test(f.titulo)?0:/sopa|guiso|cazuela|porotos|lentejas|estofado|pastel/i.test(f.titulo)?45:30)} min`,porciones:"2 personas",dificultad:"Fácil",ingredientes:f.ids.map(id=>`${CANTIDADES[id]} de ${id}`),pasos:[...f.pasos],costoAproximado:"Medio",preferencia:"Catálogo editorial sin IA",ingredientesCoincidentes:[],ingredientesFaltantes:[],porcentajeCoincidencia:0}));
