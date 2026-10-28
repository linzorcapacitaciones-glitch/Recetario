/** Lote 7: 25 recetas de pescado, carnes, desayunos y legumbres. Cantidades orientativas. */
import type { Receta } from "./recipes.functions";
const FICHAS=[
  {
    "titulo": "Pescado al papillote con zanahoria",
    "ids": [
      "pescado",
      "zanahoria",
      "cebolla",
      "limon"
    ],
    "pasos": [
      "Precalienta el horno a 190 °C.",
      "Corta la zanahoria y la cebolla en tiras finas y colócalas sobre papel de horno.",
      "Pon el pescado encima, añade limón y cierra el paquete dejando espacio para el vapor.",
      "Hornea hasta que el pescado alcance 63 °C en el centro."
    ]
  },
  {
    "titulo": "Merluza en salsa de tomate",
    "ids": [
      "merluza",
      "tomate",
      "cebolla",
      "ajo"
    ],
    "pasos": [
      "Sofríe cebolla y ajo picados en una sartén amplia.",
      "Agrega tomates troceados y cocina hasta obtener una salsa.",
      "Coloca los filetes de merluza sobre la salsa y tapa.",
      "Cocina a fuego suave hasta que el pescado alcance 63 °C."
    ]
  },
  {
    "titulo": "Salmón al horno con zapallo",
    "ids": [
      "salmon",
      "zapallo",
      "limon",
      "ajo"
    ],
    "pasos": [
      "Corta el zapallo en cubos y hornéalo a 200 °C durante 15 minutos.",
      "Añade el salmón a la fuente y condimenta con ajo y limón.",
      "Continúa horneando hasta que el pescado alcance 63 °C.",
      "Sirve el salmón acompañado de zapallo asado."
    ]
  },
  {
    "titulo": "Arroz con pescado y pimentón",
    "ids": [
      "arroz",
      "pescado",
      "pimenton",
      "cebolla"
    ],
    "pasos": [
      "Cuece el arroz hasta que esté tierno.",
      "Sofríe cebolla y pimentón cortados en cubos pequeños.",
      "Añade el pescado en trozos y cocina hasta alcanzar 63 °C.",
      "Incorpora el arroz y mezcla con cuidado antes de servir."
    ]
  },
  {
    "titulo": "Ensalada de atún y palta",
    "ids": [
      "atun",
      "palta",
      "tomate",
      "lechuga"
    ],
    "pasos": [
      "Lava la lechuga y el tomate y córtalos.",
      "Pela la palta y córtala en cubos.",
      "Escurre el atún en conserva y desmenúzalo.",
      "Mezcla todos los ingredientes y sirve inmediatamente."
    ]
  },
  {
    "titulo": "Carne guisada con papas",
    "ids": [
      "carne",
      "papa",
      "zanahoria",
      "cebolla"
    ],
    "pasos": [
      "Corta la carne en cubos y dórala en una olla.",
      "Añade cebolla y zanahoria picadas y sofríe unos minutos.",
      "Agrega agua y cocina tapado hasta que la carne comience a ablandar.",
      "Incorpora papas en cubos y continúa hasta que todo esté tierno."
    ]
  },
  {
    "titulo": "Albóndigas de carne con tomate",
    "ids": [
      "carne",
      "tomate",
      "huevo",
      "cebolla"
    ],
    "pasos": [
      "Mezcla carne molida con huevo batido y cebolla muy picada.",
      "Forma albóndigas de tamaño uniforme.",
      "Sofríe el tomate troceado hasta formar una salsa.",
      "Cocina las albóndigas en la salsa hasta alcanzar 71 °C en el centro."
    ]
  },
  {
    "titulo": "Pimentones rellenos de arroz y carne",
    "ids": [
      "pimenton",
      "arroz",
      "carne",
      "tomate"
    ],
    "pasos": [
      "Cuece el arroz hasta que esté tierno.",
      "Cocina la carne molida completamente hasta 71 °C y mézclala con tomate.",
      "Corta los pimentones por la mitad y retira las semillas.",
      "Rellena y hornea a 190 °C hasta que los pimentones estén blandos."
    ]
  },
  {
    "titulo": "Carne salteada con brócoli",
    "ids": [
      "carne",
      "brocoli",
      "ajo",
      "arroz"
    ],
    "pasos": [
      "Cuece el arroz y reserva caliente.",
      "Cocina el brócoli al vapor hasta que esté tierno pero firme.",
      "Saltea tiras finas de carne con ajo hasta su cocción deseada segura.",
      "Agrega el brócoli, mezcla y sirve sobre el arroz."
    ]
  },
  {
    "titulo": "Pastel de carne y puré de papas",
    "ids": [
      "carne",
      "papa",
      "cebolla",
      "zanahoria"
    ],
    "pasos": [
      "Hierve las papas hasta que estén blandas y prepara un puré.",
      "Cocina la carne molida con cebolla y zanahoria hasta alcanzar 71 °C.",
      "Extiende la carne en una fuente apta para horno.",
      "Cubre con puré y hornea a 200 °C hasta dorar."
    ]
  },
  {
    "titulo": "Pollo con champiñones al sartén",
    "ids": [
      "pollo",
      "champinon",
      "cebolla",
      "leche"
    ],
    "pasos": [
      "Corta el pollo en trozos y dóralo en una sartén.",
      "Agrega cebolla y champiñones laminados y cocina hasta evaporar su líquido.",
      "Añade un poco de leche y deja reducir a fuego suave.",
      "Comprueba que el pollo alcance 74 °C antes de servir."
    ]
  },
  {
    "titulo": "Pollo al limón con ajo",
    "ids": [
      "pollo",
      "limon",
      "ajo",
      "papa"
    ],
    "pasos": [
      "Corta las papas en gajos y hornéalas a 200 °C hasta dorar.",
      "Dora el pollo en sartén con un poco de aceite.",
      "Añade ajo picado y jugo de limón con un poco de agua.",
      "Cocina tapado hasta que el pollo alcance 74 °C y sirve con las papas."
    ]
  },
  {
    "titulo": "Pollo al horno con pimentones",
    "ids": [
      "pollo",
      "pimenton",
      "cebolla",
      "tomate"
    ],
    "pasos": [
      "Precalienta el horno a 200 °C.",
      "Coloca el pollo en una fuente con pimentones, cebolla y tomate troceados.",
      "Agrega aceite y condimentos al gusto.",
      "Hornea hasta que el pollo alcance 74 °C en el centro."
    ]
  },
  {
    "titulo": "Brochetas de pollo y verduras",
    "ids": [
      "pollo",
      "pimenton",
      "cebolla",
      "zapallo"
    ],
    "pasos": [
      "Corta el pollo y las verduras en trozos similares.",
      "Ensarta en brochetas alternando pollo, cebolla, pimentón y zapallo.",
      "Cocina en horno a 200 °C girando las brochetas a mitad del tiempo.",
      "Comprueba que todos los trozos de pollo alcancen 74 °C."
    ]
  },
  {
    "titulo": "Ensalada tibia de pollo y choclo",
    "ids": [
      "pollo",
      "choclo",
      "lechuga",
      "tomate"
    ],
    "pasos": [
      "Cuece el choclo hasta que esté tierno.",
      "Cocina el pollo hasta alcanzar 74 °C y córtalo en tiras.",
      "Lava y corta la lechuga y el tomate.",
      "Mezcla las verduras con el choclo y añade el pollo tibio justo antes de servir."
    ]
  },
  {
    "titulo": "Avena nocturna con yogur y manzana",
    "ids": [
      "avena",
      "yogur",
      "manzana",
      "leche"
    ],
    "pasos": [
      "Mezcla avena con yogur y un poco de leche en un recipiente limpio.",
      "Lava y ralla la manzana.",
      "Incorpora la manzana y mezcla bien.",
      "Tapa y refrigera toda la noche; consume manteniendo la cadena de frío."
    ]
  },
  {
    "titulo": "Panqueques de avena con manzana",
    "ids": [
      "avena",
      "manzana",
      "huevo",
      "leche"
    ],
    "pasos": [
      "Ralla la manzana lavada.",
      "Mezcla avena, huevo y leche hasta obtener una masa espesa.",
      "Agrega la manzana rallada y deja reposar unos minutos.",
      "Cocina porciones pequeñas en sartén por ambos lados hasta cuajar completamente."
    ]
  },
  {
    "titulo": "Yogur con frutas y avena tostada",
    "ids": [
      "yogur",
      "platano",
      "manzana",
      "avena"
    ],
    "pasos": [
      "Tuesta la avena en una sartén seca, removiendo hasta que esté dorada.",
      "Lava y corta la manzana y pela el plátano.",
      "Reparte el yogur en dos recipientes.",
      "Añade las frutas y la avena tostada justo antes de servir."
    ]
  },
  {
    "titulo": "Compota de manzana casera",
    "ids": [
      "manzana",
      "limon",
      "avena"
    ],
    "pasos": [
      "Lava y pela las manzanas; retira las semillas.",
      "Corta la fruta en cubos y coloca en una olla con un poco de agua.",
      "Cocina tapado hasta que esté muy blanda y añade unas gotas de limón.",
      "Aplasta la manzana y sirve tibia con avena tostada."
    ]
  },
  {
    "titulo": "Tostadas francesas con plátano",
    "ids": [
      "pan",
      "huevo",
      "leche",
      "platano"
    ],
    "pasos": [
      "Bate el huevo con leche en un recipiente ancho.",
      "Remoja brevemente las rebanadas de pan en la mezcla.",
      "Cocina el pan en sartén por ambos lados hasta que el huevo esté bien cuajado.",
      "Sirve con plátano pelado y cortado en rodajas."
    ]
  },
  {
    "titulo": "Ensalada de porotos con choclo",
    "ids": [
      "poroto",
      "choclo",
      "tomate",
      "cebolla"
    ],
    "pasos": [
      "Cuece los porotos remojados hasta que estén completamente tiernos.",
      "Cuece el choclo y deja enfriar ambos ingredientes.",
      "Lava y corta tomate y cebolla.",
      "Mezcla las legumbres con las verduras y sirve con aliño al gusto."
    ]
  },
  {
    "titulo": "Porotos con zapallo y arroz",
    "ids": [
      "poroto",
      "zapallo",
      "arroz",
      "cebolla"
    ],
    "pasos": [
      "Cuece los porotos previamente remojados hasta que estén tiernos.",
      "Sofríe la cebolla y añade zapallo en cubos.",
      "Incorpora los porotos con parte de su caldo y el arroz.",
      "Cocina hasta que el arroz y el zapallo estén blandos."
    ]
  },
  {
    "titulo": "Garbanzos con brócoli y limón",
    "ids": [
      "garbanzo",
      "brocoli",
      "limon",
      "ajo"
    ],
    "pasos": [
      "Cuece el brócoli al vapor hasta que esté tierno.",
      "Calienta garbanzos previamente cocidos en una sartén.",
      "Añade ajo picado y saltea brevemente.",
      "Incorpora el brócoli, rocía con limón y sirve."
    ]
  },
  {
    "titulo": "Hamburguesas de porotos negros",
    "ids": [
      "poroto",
      "huevo",
      "cebolla",
      "avena"
    ],
    "pasos": [
      "Cuece completamente los porotos negros y escúrrelos muy bien.",
      "Machácalos con avena y cebolla finamente picada.",
      "Añade huevo batido y forma hamburguesas compactas.",
      "Cocina por ambos lados hasta que estén doradas y el huevo bien cocido."
    ]
  },
  {
    "titulo": "Ensalada de lentejas y pepino",
    "ids": [
      "lenteja",
      "pepino",
      "tomate",
      "limon"
    ],
    "pasos": [
      "Cuece las lentejas hasta que estén tiernas y enfríalas rápidamente.",
      "Lava y corta el pepino y el tomate.",
      "Mezcla las lentejas escurridas con las verduras.",
      "Aliña con jugo de limón y sirve fría."
    ]
  }
] as const;
const CANTIDADES:Record<string,string>={"pescado":"300 g","zanahoria":"180 g","cebolla":"100 g","limon":"1 unidad","merluza":"300 g","tomate":"220 g","ajo":"2 dientes","salmon":"300 g","zapallo":"350 g","arroz":"150 g","pimenton":"1 unidad","atun":"140 g","palta":"1 unidad","lechuga":"150 g","carne":"300 g","papa":"350 g","huevo":"2 unidades","brocoli":"250 g","pollo":"300 g","champinon":"200 g","leche":"250 ml","choclo":"200 g","avena":"100 g","yogur":"200 g","manzana":"2 unidades","platano":"2 unidades","pan":"4 rebanadas","poroto":"200 g","garbanzo":"200 g","lenteja":"180 g","pepino":"1 unidad"};
const TIEMPOS_COCCION:Record<string,number>={};
export const RECETAS_LOTE_7:Receta[]=FICHAS.map((f,i)=>({id:`lote-7-${i+1}`,titulo:f.titulo,descripcion:"Receta para dos personas con cantidades orientativas.",tiempoPreparacion:"15 min",tiempoCoccion:`${TIEMPOS_COCCION[f.titulo]??( /ensalada|tostada|sandwich|sándwich|ceviche/i.test(f.titulo)?0:/sopa|guiso|cazuela|porotos|lentejas|estofado|pastel/i.test(f.titulo)?45:35)} min`,porciones:"2 personas",dificultad:"Fácil",ingredientes:f.ids.map(id=>{const pasos=f.pasos.join(" ");if(id==="garbanzo"&&/garbanzos (?:previamente |ya )?cocidos/i.test(pasos))return `${CANTIDADES[id]} de garbanzos cocidos y escurridos`;if(id==="lenteja"&&/lentejas (?:previamente |ya )?cocidas/i.test(pasos))return `${CANTIDADES[id]} de lentejas cocidas y escurridas`;if(id==="poroto"&&/porotos (?:previamente |ya )?cocidos/i.test(pasos))return `${CANTIDADES[id]} de porotos cocidos y escurridos`;return `${CANTIDADES[id]} de ${id}`}),pasos:[...f.pasos],costoAproximado:"Medio",preferencia:"Catálogo editorial sin IA",ingredientesCoincidentes:[],ingredientesFaltantes:[],porcentajeCoincidencia:0}));
