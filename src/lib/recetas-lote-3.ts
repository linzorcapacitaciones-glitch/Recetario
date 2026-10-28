/** Lote de recetas con instrucciones específicas. Cantidades orientativas para dos personas. */
import type { Receta } from "./recipes.functions";
const DATOS = [
  {
    "titulo": "Charquicán de verduras con huevo",
    "ids": [
      "papa",
      "zapallo",
      "zanahoria",
      "cebolla",
      "huevo"
    ],
    "pasos": [
      "Pela y corta las papas, el zapallo y la zanahoria en cubos pequeños.",
      "Sofríe la cebolla picada; incorpora las verduras y cubre apenas con agua.",
      "Cocina tapado hasta que las verduras estén blandas y aplasta parte de la mezcla.",
      "Sirve con huevos preparados a la plancha hasta que estén bien cocidos."
    ]
  },
  {
    "titulo": "Pastel de papas con lentejas",
    "ids": [
      "papa",
      "lenteja",
      "cebolla",
      "zanahoria"
    ],
    "pasos": [
      "Cuece las lentejas hasta que estén tiernas y escúrrelas.",
      "Sofríe cebolla y zanahoria; mezcla con las lentejas cocidas.",
      "Hierve las papas, escúrrelas y prepara un puré con un poco de agua de cocción.",
      "Coloca las lentejas en una fuente, cubre con puré y hornea a 190 °C durante 15 a 20 minutos, hasta dorar."
    ]
  },
  {
    "titulo": "Tomaticán de huevo",
    "ids": [
      "tomate",
      "cebolla",
      "huevo"
    ],
    "pasos": [
      "Lava y pica los tomates y la cebolla.",
      "Sofríe la cebolla hasta que esté transparente.",
      "Agrega el tomate y cocina hasta formar una salsa espesa.",
      "Incorpora los huevos batidos y revuelve hasta que estén completamente cuajados."
    ]
  },
  {
    "titulo": "Sopa de pollo con fideos y zanahoria",
    "ids": [
      "pollo",
      "pasta",
      "zanahoria",
      "cebolla"
    ],
    "pasos": [
      "Cuece el pollo en agua con cebolla hasta que esté completamente cocido, a 74 °C en el centro.",
      "Retira el pollo, desmenúzalo y vuelve a incorporarlo al caldo.",
      "Agrega zanahoria cortada fina y cocina hasta ablandar.",
      "Añade los fideos y hierve el tiempo indicado en el envase."
    ]
  },
  {
    "titulo": "Hamburguesas de garbanzos al horno",
    "ids": [
      "garbanzo",
      "cebolla",
      "huevo",
      "zanahoria"
    ],
    "pasos": [
      "Usa garbanzos completamente cocidos y bien escurridos.",
      "Machácalos y mezcla con cebolla y zanahoria ralladas y huevo batido.",
      "Forma hamburguesas compactas y distribúyelas en una bandeja aceitada.",
      "Hornea a 200 °C durante 20 a 25 minutos, hasta dorar y comprobar que el huevo esté completamente cuajado."
    ]
  },
  {
    "titulo": "Ensalada tibia de papas y atún",
    "ids": [
      "papa",
      "atun",
      "tomate",
      "cebolla"
    ],
    "pasos": [
      "Lava las papas y cuécelas hasta que estén tiernas.",
      "Escúrrelas, deja entibiar y corta en cubos.",
      "Lava y pica el tomate y la cebolla; escurre el atún de conserva.",
      "Mezcla todo y sirve inmediatamente; refrigera las sobras."
    ]
  },
  {
    "titulo": "Guiso de arroz con espinaca y huevo",
    "ids": [
      "arroz",
      "espinaca",
      "huevo",
      "cebolla"
    ],
    "pasos": [
      "Cuece el arroz hasta que esté tierno.",
      "Lava la espinaca y sofríe la cebolla picada.",
      "Agrega la espinaca y cocina hasta que pierda volumen.",
      "Incorpora el arroz y los huevos batidos; remueve hasta que cuajen completamente."
    ]
  },
  {
    "titulo": "Zapallo relleno de garbanzos",
    "ids": [
      "zapallo",
      "garbanzo",
      "tomate",
      "cebolla"
    ],
    "pasos": [
      "Corta el zapallo en mitades y retira las semillas.",
      "Hornea a 200 °C hasta que la pulpa esté tierna.",
      "Sofríe cebolla y tomate; incorpora garbanzos previamente cocidos.",
      "Rellena las mitades de zapallo y hornea diez minutos más."
    ]
  },
  {
    "titulo": "Croquetas de atún y papas",
    "ids": [
      "atun",
      "papa",
      "huevo",
      "cebolla"
    ],
    "pasos": [
      "Cuece las papas y aplástalas hasta obtener un puré firme.",
      "Escurre el atún y mézclalo con el puré y cebolla finamente picada.",
      "Incorpora huevo batido y forma croquetas pequeñas.",
      "Dóralas en sartén por ambos lados hasta que el huevo esté completamente cocido."
    ]
  },
  {
    "titulo": "Frittata de zapallo y queso",
    "ids": [
      "zapallo",
      "huevo",
      "queso",
      "cebolla"
    ],
    "pasos": [
      "Corta el zapallo en cubos pequeños y cuécelo hasta que esté tierno.",
      "Sofríe la cebolla y agrega el zapallo escurrido.",
      "Bate los huevos, añade queso rallado y vierte la mezcla sobre las verduras.",
      "Cocina a fuego suave, tapado, hasta que el centro esté completamente cuajado."
    ]
  },
  {
    "titulo": "Arroz caldoso con lentejas y tomate",
    "ids": [
      "arroz",
      "lenteja",
      "tomate",
      "cebolla"
    ],
    "pasos": [
      "Cuece las lentejas en agua hasta que estén casi tiernas.",
      "Sofríe la cebolla y el tomate picados en una olla aparte.",
      "Incorpora el sofrito, el arroz y agua suficiente a las lentejas.",
      "Cocina hasta que el arroz esté tierno y quede un caldo ligero."
    ]
  },
  {
    "titulo": "Pollo al jugo con puré de zanahorias",
    "ids": [
      "pollo",
      "zanahoria",
      "cebolla",
      "papa"
    ],
    "pasos": [
      "Dora el pollo en una olla y añade cebolla picada y un poco de agua.",
      "Cocina tapado hasta que el pollo alcance 74 °C en el centro.",
      "Hierve las zanahorias y papas peladas hasta ablandar.",
      "Escurre y tritura las verduras; sirve con el pollo y su jugo."
    ]
  },
  {
    "titulo": "Pasta gratinada con espinaca",
    "ids": [
      "pasta",
      "espinaca",
      "queso",
      "tomate"
    ],
    "pasos": [
      "Cuece la pasta según el tiempo indicado en el envase.",
      "Lava y saltea la espinaca; mezcla con tomate picado.",
      "Combina la pasta con las verduras en una fuente apta para horno.",
      "Cubre con queso y gratina a 200 °C hasta fundir y dorar."
    ]
  },
  {
    "titulo": "Ensalada de garbanzos con huevo duro",
    "ids": [
      "garbanzo",
      "huevo",
      "tomate",
      "cebolla"
    ],
    "pasos": [
      "Cuece los huevos en agua hirviendo hasta que las yemas estén firmes.",
      "Usa garbanzos cocidos y escurridos.",
      "Lava y corta el tomate y la cebolla en cubos pequeños.",
      "Pela y corta los huevos; mezcla todo y sirve frío."
    ]
  },
  {
    "titulo": "Tortitas de zapallo y papa",
    "ids": [
      "zapallo",
      "huevo",
      "papa",
      "queso"
    ],
    "pasos": [
      "Cuece el zapallo y la papa hasta que estén tiernos.",
      "Escurre muy bien y aplasta hasta formar un puré espeso.",
      "Agrega huevo batido y queso rallado; forma tortitas pequeñas.",
      "Cocina en sartén antiadherente por ambos lados hasta que estén doradas y el huevo cuajado."
    ]
  }
] as const;
const CANTIDADES: Record<string,string> = {"arroz":"150 g","zanahoria":"180 g","papa":"350 g","cebolla":"100 g","lenteja":"180 g","tomate":"220 g","huevo":"3 unidades","espinaca":"160 g","queso":"80 g","zapallo":"350 g","atun":"140 g","garbanzo":"200 g","pasta":"180 g","pollo":"300 g"};
export const RECETAS_LOTE_3: Receta[] = DATOS.map((f,i)=>({
 id:`lote-3-${i+1}`,titulo:f.titulo,
 descripcion:"Preparación casera para dos personas, con cantidades orientativas.",
 tiempoPreparacion:"15 min",tiempoCoccion:"35 min",porciones:"2 personas",dificultad:"Fácil",
 ingredientes:f.ids.map(id=>id==="garbanzo" ? "200 g de garbanzos cocidos y escurridos" : `${CANTIDADES[id]} de ${id}`),pasos:[...f.pasos],
 costoAproximado:"Medio",preferencia:"Catálogo editorial sin IA",
 ingredientesCoincidentes:[],ingredientesFaltantes:[],porcentajeCoincidencia:0
}));
