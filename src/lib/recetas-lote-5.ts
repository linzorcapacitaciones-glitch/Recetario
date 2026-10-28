/** Lote 5: 25 recetas con pasos propios y cantidades orientativas para dos personas. */
import type { Receta } from "./recipes.functions";
const FICHAS=[
  {
    "titulo": "Arroz frito con huevo y zanahoria",
    "ids": [
      "arroz",
      "huevo",
      "zanahoria",
      "cebolla"
    ],
    "pasos": [
      "Cuece el arroz y enfríalo rápidamente si no lo usarás de inmediato.",
      "Saltea cebolla y zanahoria rallada hasta ablandar.",
      "Agrega huevos batidos y revuelve hasta cuajarlos.",
      "Incorpora el arroz y saltea hasta que todo esté muy caliente."
    ]
  },
  {
    "titulo": "Garbanzos al tomate con queso",
    "ids": [
      "garbanzo",
      "tomate",
      "cebolla",
      "queso"
    ],
    "pasos": [
      "Escurre los garbanzos previamente cocidos.",
      "Sofríe la cebolla y agrega tomates picados.",
      "Cocina hasta formar una salsa y añade los garbanzos.",
      "Cubre con queso y calienta hasta que se funda."
    ]
  },
  {
    "titulo": "Papas doradas con espinacas",
    "ids": [
      "papa",
      "espinaca",
      "cebolla",
      "queso"
    ],
    "pasos": [
      "Hierve las papas con piel hasta que estén tiernas.",
      "Escúrrelas, córtalas en gajos y dóralas en sartén.",
      "Añade cebolla picada y espinaca lavada.",
      "Cocina hasta que la espinaca se ablande y termina con queso."
    ]
  },
  {
    "titulo": "Pollo estofado con lentejas",
    "ids": [
      "pollo",
      "lenteja",
      "zanahoria",
      "cebolla"
    ],
    "pasos": [
      "Cuece las lentejas en agua hasta que estén casi tiernas.",
      "Dora el pollo en una olla con un poco de aceite.",
      "Agrega cebolla y zanahoria picadas y parte del caldo de lentejas.",
      "Añade las lentejas y cocina hasta que el pollo alcance 74 °C."
    ]
  },
  {
    "titulo": "Zapallo gratinado con espinaca",
    "ids": [
      "zapallo",
      "espinaca",
      "queso",
      "cebolla"
    ],
    "pasos": [
      "Asa el zapallo cortado en rodajas a 200 °C hasta que esté tierno.",
      "Sofríe cebolla y espinaca hasta que pierdan humedad.",
      "Distribuye las verduras sobre el zapallo en una fuente.",
      "Cubre con queso y gratina hasta dorar."
    ]
  },
  {
    "titulo": "Pasta con crema de zanahoria",
    "ids": [
      "pasta",
      "zanahoria",
      "cebolla",
      "queso"
    ],
    "pasos": [
      "Hierve la zanahoria en rodajas hasta que esté blanda.",
      "Sofríe la cebolla y tritúrala con zanahoria y agua de cocción.",
      "Cuece la pasta siguiendo las instrucciones del envase.",
      "Mezcla con la salsa caliente y agrega queso rallado."
    ]
  },
  {
    "titulo": "Tortilla de arroz y tomate",
    "ids": [
      "arroz",
      "huevo",
      "tomate",
      "cebolla"
    ],
    "pasos": [
      "Cuece el arroz y déjalo entibiar.",
      "Sofríe cebolla y tomate picados hasta evaporar parte del líquido.",
      "Bate los huevos y mézclalos con arroz y verduras.",
      "Cuaja la tortilla por ambos lados hasta que el huevo esté bien cocido."
    ]
  },
  {
    "titulo": "Ensalada de lentejas con huevo",
    "ids": [
      "lenteja",
      "huevo",
      "tomate",
      "zanahoria"
    ],
    "pasos": [
      "Cuece las lentejas hasta que estén tiernas y escúrrelas.",
      "Hierve los huevos hasta que estén completamente cocidos.",
      "Lava el tomate y ralla la zanahoria.",
      "Mezcla las lentejas frías con verduras y huevo troceado."
    ]
  },
  {
    "titulo": "Pollo al horno con tomate y queso",
    "ids": [
      "pollo",
      "tomate",
      "queso",
      "cebolla"
    ],
    "pasos": [
      "Precalienta el horno a 200 °C.",
      "Coloca el pollo en una fuente con cebolla y tomate picados.",
      "Hornea hasta que el pollo alcance 74 °C en su parte más gruesa.",
      "Agrega queso y devuelve al horno hasta fundir."
    ]
  },
  {
    "titulo": "Crema de zapallo con garbanzos tostados",
    "ids": [
      "zapallo",
      "garbanzo",
      "cebolla",
      "zanahoria"
    ],
    "pasos": [
      "Hierve zapallo, zanahoria y cebolla hasta que estén tiernos.",
      "Tritura las verduras con parte del agua de cocción.",
      "Escurre y seca garbanzos previamente cocidos.",
      "Tuesta los garbanzos en sartén y sírvelos sobre la crema."
    ]
  },
  {
    "titulo": "Fideos con atún y espinaca",
    "ids": [
      "pasta",
      "atun",
      "espinaca",
      "tomate"
    ],
    "pasos": [
      "Cuece la pasta en agua y escúrrela.",
      "Saltea el tomate picado hasta que suelte jugo.",
      "Agrega espinaca lavada y cocina hasta ablandar.",
      "Incorpora atún escurrido y pasta; calienta y sirve."
    ]
  },
  {
    "titulo": "Papas rellenas de lentejas",
    "ids": [
      "papa",
      "lenteja",
      "cebolla",
      "tomate"
    ],
    "pasos": [
      "Hornea las papas lavadas hasta que estén tiernas.",
      "Cuece las lentejas por separado hasta ablandar.",
      "Sofríe cebolla y tomate; mezcla con las lentejas escurridas.",
      "Abre las papas, ahueca un poco y rellena con el guiso."
    ]
  },
  {
    "titulo": "Sopa de tomate y arroz",
    "ids": [
      "tomate",
      "arroz",
      "cebolla",
      "zanahoria"
    ],
    "pasos": [
      "Sofríe la cebolla y la zanahoria picadas.",
      "Añade tomates troceados y cocina hasta que se deshagan.",
      "Agrega agua y arroz lavado.",
      "Hierve hasta que el arroz esté tierno y sirve caliente."
    ]
  },
  {
    "titulo": "Croquetas de garbanzos y zanahoria",
    "ids": [
      "garbanzo",
      "zanahoria",
      "huevo",
      "cebolla"
    ],
    "pasos": [
      "Machaca garbanzos completamente cocidos y escurridos.",
      "Ralla la zanahoria y pica la cebolla muy fina.",
      "Mezcla con huevo batido y forma croquetas.",
      "Cocina en sartén por ambos lados hasta dorar y cuajar el huevo."
    ]
  },
  {
    "titulo": "Arroz con pollo y zapallo",
    "ids": [
      "arroz",
      "pollo",
      "zapallo",
      "cebolla"
    ],
    "pasos": [
      "Dora el pollo troceado en una olla.",
      "Agrega cebolla y zapallo en cubos y rehoga unos minutos.",
      "Incorpora arroz y agua suficiente para cocerlo.",
      "Cocina tapado hasta que el arroz esté tierno y el pollo alcance 74 °C."
    ]
  },
  {
    "titulo": "Ensalada tibia de zapallo y queso",
    "ids": [
      "zapallo",
      "queso",
      "espinaca",
      "tomate"
    ],
    "pasos": [
      "Asa el zapallo en cubos a 200 °C hasta que esté tierno.",
      "Lava la espinaca y el tomate y córtalos.",
      "Deja entibiar el zapallo y combínalo con las verduras.",
      "Agrega queso en cubos y sirve inmediatamente."
    ]
  },
  {
    "titulo": "Tortilla de lentejas y cebolla",
    "ids": [
      "lenteja",
      "huevo",
      "cebolla",
      "zanahoria"
    ],
    "pasos": [
      "Cuece las lentejas hasta que estén tiernas y escúrrelas bien.",
      "Sofríe cebolla y zanahoria rallada.",
      "Mezcla las lentejas con verduras y huevos batidos.",
      "Cuaja por ambos lados a fuego medio hasta cocinar el huevo."
    ]
  },
  {
    "titulo": "Pasta al horno con pollo y tomate",
    "ids": [
      "pasta",
      "pollo",
      "tomate",
      "queso"
    ],
    "pasos": [
      "Cuece la pasta hasta que quede ligeramente firme.",
      "Cocina el pollo completamente hasta alcanzar 74 °C y córtalo.",
      "Mezcla la pasta con pollo y tomates picados en una fuente.",
      "Cubre con queso y hornea a 190 °C hasta gratinar."
    ]
  },
  {
    "titulo": "Arroz con garbanzos y zanahoria",
    "ids": [
      "arroz",
      "garbanzo",
      "zanahoria",
      "cebolla"
    ],
    "pasos": [
      "Cuece el arroz y reserva.",
      "Sofríe cebolla y zanahoria rallada hasta ablandar.",
      "Agrega garbanzos previamente cocidos y calienta.",
      "Añade el arroz ya cocido a la sartén con los garbanzos y las verduras; saltea 3 a 4 minutos hasta que todo esté caliente."
    ]
  },
  {
    "titulo": "Huevos revueltos con zapallo y cebolla",
    "ids": [
      "huevo",
      "zapallo",
      "cebolla",
      "queso"
    ],
    "pasos": [
      "Cuece el zapallo en cubos hasta que esté blando y escúrrelo.",
      "Sofríe la cebolla y añade el zapallo.",
      "Bate los huevos y viértelos sobre las verduras.",
      "Revuelve hasta que el huevo esté completamente cuajado y agrega queso."
    ]
  },
  {
    "titulo": "Sopa de espinaca con papas",
    "ids": [
      "espinaca",
      "papa",
      "cebolla",
      "zanahoria"
    ],
    "pasos": [
      "Sofríe cebolla y zanahoria picadas en una olla.",
      "Agrega papas en cubos y cubre con agua.",
      "Hierve hasta que las papas estén tiernas.",
      "Añade espinaca lavada, cocina unos minutos y sirve."
    ]
  },
  {
    "titulo": "Pollo con salsa de zanahoria",
    "ids": [
      "pollo",
      "zanahoria",
      "cebolla",
      "arroz"
    ],
    "pasos": [
      "Enjuaga el arroz y cuécelo en agua durante 15 a 20 minutos, hasta que esté tierno; mantenlo tapado mientras preparas el pollo.",
      "Dora el pollo y continúa cocinando hasta alcanzar 74 °C.",
      "Hierve zanahoria y cebolla en poca agua hasta ablandar.",
      "Tritura las verduras, vierte la salsa sobre el pollo y sirve con arroz."
    ]
  },
  {
    "titulo": "Papas salteadas con garbanzos",
    "ids": [
      "papa",
      "garbanzo",
      "cebolla",
      "tomate"
    ],
    "pasos": [
      "Hierve las papas hasta que estén tiernas y córtalas en cubos.",
      "Sofríe cebolla y tomate picados en sartén.",
      "Agrega garbanzos cocidos y calienta completamente.",
      "Incorpora las papas y saltea hasta dorar ligeramente."
    ]
  },
  {
    "titulo": "Budín de zapallo y huevo",
    "ids": [
      "zapallo",
      "huevo",
      "queso",
      "cebolla"
    ],
    "pasos": [
      "Hierve el zapallo hasta que esté blando y escúrrelo muy bien.",
      "Sofríe cebolla picada y mezcla con el puré de zapallo.",
      "Añade huevos batidos y queso rallado.",
      "Hornea a 180 °C hasta que el centro esté firme y bien cocido."
    ]
  },
  {
    "titulo": "Lentejas con arroz y espinaca",
    "ids": [
      "lenteja",
      "arroz",
      "espinaca",
      "cebolla"
    ],
    "pasos": [
      "Cuece las lentejas hasta que estén casi tiernas.",
      "Agrega el arroz y suficiente agua para completar la cocción.",
      "Sofríe cebolla y espinaca lavada por separado.",
      "Mezcla el sofrito con las lentejas y el arroz antes de servir."
    ]
  }
] as const;
const CANTIDADES:Record<string,string>={"arroz":"150 g","zanahoria":"180 g","papa":"350 g","cebolla":"100 g","lenteja":"180 g","tomate":"220 g","huevo":"3 unidades","espinaca":"160 g","queso":"80 g","zapallo":"350 g","atun":"140 g","garbanzo":"200 g","pasta":"180 g","pollo":"300 g"};
export const RECETAS_LOTE_5:Receta[]=FICHAS.map((f,i)=>({id:`lote-5-${i+1}`,titulo:f.titulo,descripcion:"Receta casera para dos personas con cantidades orientativas.",tiempoPreparacion:"15 min",tiempoCoccion:"35 min",porciones:"2 personas",dificultad:"Fácil",ingredientes:f.ids.map(id=>`${CANTIDADES[id]} de ${id}`),pasos:[...f.pasos],costoAproximado:"Medio",preferencia:"Catálogo editorial sin IA",ingredientesCoincidentes:[],ingredientesFaltantes:[],porcentajeCoincidencia:0}));
