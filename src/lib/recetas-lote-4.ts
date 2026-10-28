/** Lote 4: 20 preparaciones específicas para dos personas. Revisión editorial final pendiente. */
import type { Receta } from "./recipes.functions";
const FICHAS = [
  {
    "titulo": "Cazuela de pollo casera",
    "ids": [
      "pollo",
      "papa",
      "zapallo",
      "zanahoria",
      "arroz"
    ],
    "pasos": [
      "Coloca el pollo en una olla con agua suficiente y lleva a hervor.",
      "Retira la espuma, agrega zanahoria y cocina a fuego suave.",
      "Añade papas y zapallo troceados y continúa la cocción.",
      "Incorpora el arroz y cocina hasta que esté tierno y el pollo alcance 74 °C."
    ]
  },
  {
    "titulo": "Porotos sin riendas de garbanzos",
    "ids": [
      "garbanzo",
      "zapallo",
      "cebolla",
      "pasta"
    ],
    "pasos": [
      "Utiliza garbanzos remojados y completamente cocidos.",
      "Sofríe cebolla picada con aceite y añade zapallo en cubos.",
      "Agrega garbanzos, su caldo y cocina hasta que el zapallo se ablande.",
      "Incorpora los fideos y hierve hasta que estén cocidos."
    ]
  },
  {
    "titulo": "Pastel de arroz con pollo",
    "ids": [
      "arroz",
      "pollo",
      "cebolla",
      "queso"
    ],
    "pasos": [
      "Cuece el arroz en agua hasta que esté tierno.",
      "Cocina el pollo completamente a 74 °C y desmenúzalo.",
      "Sofríe la cebolla y mézclala con el pollo y el arroz.",
      "Pasa a una fuente, cubre con queso y hornea a 190 °C hasta gratinar."
    ]
  },
  {
    "titulo": "Papas rellenas de espinaca y queso",
    "ids": [
      "papa",
      "espinaca",
      "queso",
      "cebolla"
    ],
    "pasos": [
      "Hornea las papas enteras y lavadas a 200 °C hasta que estén blandas.",
      "Saltea cebolla picada y espinaca lavada hasta evaporar su líquido.",
      "Abre las papas, retira parte de la pulpa y mezcla con el salteado.",
      "Rellena, agrega queso y hornea hasta que se derrita."
    ]
  },
  {
    "titulo": "Tortilla de fideos y verduras",
    "ids": [
      "pasta",
      "huevo",
      "zanahoria",
      "cebolla"
    ],
    "pasos": [
      "Cuece la pasta, escúrrela y deja entibiar.",
      "Saltea cebolla y zanahoria rallada hasta que estén tiernas.",
      "Mezcla los fideos con las verduras y huevos batidos.",
      "Cuaja la tortilla en sartén por ambos lados hasta cocinar el huevo completamente."
    ]
  },
  {
    "titulo": "Sopa crema de zanahoria y papa",
    "ids": [
      "zanahoria",
      "papa",
      "cebolla",
      "queso"
    ],
    "pasos": [
      "Sofríe la cebolla picada en una olla.",
      "Añade zanahorias y papas peladas y troceadas.",
      "Cubre con agua y hierve hasta que las verduras estén muy blandas.",
      "Tritura hasta lograr una crema y sirve con queso rallado."
    ]
  },
  {
    "titulo": "Pollo salteado con garbanzos",
    "ids": [
      "pollo",
      "garbanzo",
      "tomate",
      "cebolla"
    ],
    "pasos": [
      "Corta el pollo en tiras y cocina en sartén hasta alcanzar 74 °C.",
      "Agrega cebolla picada y cocina hasta ablandar.",
      "Incorpora tomate picado y deja reducir su jugo.",
      "Añade garbanzos previamente cocidos y calienta completamente."
    ]
  },
  {
    "titulo": "Arroz meloso de zapallo",
    "ids": [
      "arroz",
      "zapallo",
      "cebolla",
      "queso"
    ],
    "pasos": [
      "Sofríe cebolla picada en una olla.",
      "Agrega zapallo en cubos pequeños y cocina con un poco de agua.",
      "Incorpora arroz y agua caliente gradualmente, removiendo con frecuencia.",
      "Cuando el arroz esté tierno y cremoso, añade queso y sirve."
    ]
  },
  {
    "titulo": "Lentejas con papas y espinacas",
    "ids": [
      "lenteja",
      "papa",
      "espinaca",
      "cebolla"
    ],
    "pasos": [
      "Lava las lentejas y cuécelas en agua hasta que comiencen a ablandar.",
      "Añade papas en cubos y cebolla picada.",
      "Continúa la cocción hasta que las papas y lentejas estén tiernas.",
      "Incorpora espinaca lavada y cocina unos minutos antes de servir."
    ]
  },
  {
    "titulo": "Pasta con salsa de tomate asado",
    "ids": [
      "pasta",
      "tomate",
      "cebolla",
      "queso"
    ],
    "pasos": [
      "Corta tomates y cebolla, distribúyelos en una bandeja aceitada.",
      "Hornea a 200 °C hasta que las verduras estén blandas y doradas.",
      "Tritura las verduras asadas para obtener una salsa.",
      "Cuece la pasta, mezcla con la salsa caliente y termina con queso."
    ]
  },
  {
    "titulo": "Huevos al horno sobre espinacas",
    "ids": [
      "huevo",
      "espinaca",
      "tomate",
      "queso"
    ],
    "pasos": [
      "Lava y saltea la espinaca hasta que pierda volumen.",
      "Coloca la espinaca y tomate picado en una fuente individual.",
      "Casca los huevos encima y agrega un poco de queso.",
      "Hornea a 190 °C hasta que las claras y las yemas estén bien cuajadas."
    ]
  },
  {
    "titulo": "Garbanzos crocantes con ensalada de tomate",
    "ids": [
      "garbanzo",
      "tomate",
      "cebolla",
      "zanahoria"
    ],
    "pasos": [
      "Escurre y seca muy bien garbanzos previamente cocidos.",
      "Distribúyelos con aceite en una bandeja y hornea a 200 °C hasta dorar.",
      "Lava y corta tomate, cebolla y zanahoria en trozos pequeños.",
      "Sirve los garbanzos tibios sobre la ensalada recién preparada."
    ]
  },
  {
    "titulo": "Budín salado de arroz y espinaca",
    "ids": [
      "arroz",
      "espinaca",
      "huevo",
      "queso"
    ],
    "pasos": [
      "Cuece el arroz y déjalo entibiar.",
      "Lava y saltea la espinaca; escurre el exceso de líquido.",
      "Mezcla arroz, espinaca, huevos batidos y queso rallado.",
      "Hornea en una fuente a 180 °C hasta que el centro esté firme y el huevo cocido."
    ]
  },
  {
    "titulo": "Papas al horno con pollo desmenuzado",
    "ids": [
      "papa",
      "pollo",
      "tomate",
      "queso"
    ],
    "pasos": [
      "Lava las papas y ásalas a 200 °C hasta que estén tiernas.",
      "Cuece completamente el pollo hasta alcanzar 74 °C y desmenúzalo.",
      "Mezcla el pollo con tomate picado y cocina unos minutos.",
      "Abre las papas, rellena con pollo y cubre con queso antes de gratinar."
    ]
  },
  {
    "titulo": "Ensalada de pasta con huevo y espinaca",
    "ids": [
      "pasta",
      "huevo",
      "espinaca",
      "tomate"
    ],
    "pasos": [
      "Cuece la pasta, escúrrela y enfríala rápidamente.",
      "Hierve los huevos hasta que estén firmes y déjalos enfriar.",
      "Lava la espinaca y el tomate y córtalos.",
      "Mezcla con pasta y huevo picado; sirve inmediatamente o mantén refrigerado."
    ]
  },
  {
    "titulo": "Zapallo al horno con lentejas especiadas",
    "ids": [
      "zapallo",
      "lenteja",
      "cebolla",
      "tomate"
    ],
    "pasos": [
      "Corta el zapallo en gajos y hornéalo a 200 °C hasta que esté tierno.",
      "Cuece las lentejas en agua hasta ablandar y escúrrelas.",
      "Sofríe cebolla y tomate picados y añade las lentejas cocidas.",
      "Sirve el salteado sobre el zapallo asado y sazona al gusto."
    ]
  },
  {
    "titulo": "Croquetas de espinaca y papa",
    "ids": [
      "espinaca",
      "papa",
      "huevo",
      "queso"
    ],
    "pasos": [
      "Hierve las papas hasta que estén blandas y aplástalas.",
      "Saltea la espinaca, escúrrela y pícala finamente.",
      "Mezcla puré, espinaca, huevo y queso y forma croquetas.",
      "Cocina por ambos lados en sartén hasta dorar y cuajar el huevo."
    ]
  },
  {
    "titulo": "Arroz con atún y zapallo asado",
    "ids": [
      "arroz",
      "atun",
      "zapallo",
      "cebolla"
    ],
    "pasos": [
      "Asa el zapallo en cubos a 200 °C hasta que esté blando.",
      "Cuece el arroz en agua hasta que esté tierno.",
      "Sofríe la cebolla y añade el atún de conserva escurrido.",
      "Incorpora el arroz y el zapallo y calienta antes de servir."
    ]
  },
  {
    "titulo": "Pasta con garbanzos y espinaca",
    "ids": [
      "pasta",
      "garbanzo",
      "espinaca",
      "tomate"
    ],
    "pasos": [
      "Cuece la pasta según el tiempo del envase.",
      "Saltea tomate picado hasta formar una salsa ligera.",
      "Agrega garbanzos previamente cocidos y espinaca lavada.",
      "Incorpora la pasta escurrida a la sartén con los garbanzos, la espinaca y el tomate; saltea 3 minutos hasta que esté bien caliente."
    ]
  },
  {
    "titulo": "Puré mixto con huevo duro y tomate",
    "ids": [
      "papa",
      "zapallo",
      "huevo",
      "tomate"
    ],
    "pasos": [
      "Pela y corta las papas y el zapallo y hiérvelos hasta ablandar.",
      "Cuece los huevos hasta que estén firmes.",
      "Escurre las verduras y aplástalas hasta obtener un puré.",
      "Sirve con huevo cortado y tomate fresco lavado y picado."
    ]
  }
] as const;
const CANTIDADES:Record<string,string> = {"arroz":"150 g","zanahoria":"180 g","papa":"350 g","cebolla":"100 g","lenteja":"180 g","tomate":"220 g","huevo":"3 unidades","espinaca":"160 g","queso":"80 g","zapallo":"350 g","atun":"140 g","garbanzo":"200 g","pasta":"180 g","pollo":"300 g"};
export const RECETAS_LOTE_4: Receta[] = FICHAS.map((f,i)=>({id:`lote-4-${i+1}`,titulo:f.titulo,descripcion:"Preparación casera para dos personas con cantidades orientativas.",tiempoPreparacion:"15 min",tiempoCoccion:"40 min",porciones:"2 personas",dificultad:"Fácil",ingredientes:f.ids.map(id=>{const pasos=f.pasos.join(" ");if(id==="garbanzo"&&/garbanzos (?:previamente |ya )?cocidos/i.test(pasos))return `${CANTIDADES[id]} de garbanzos cocidos y escurridos`;if(id==="lenteja"&&/lentejas (?:previamente |ya )?cocidas/i.test(pasos))return `${CANTIDADES[id]} de lentejas cocidas y escurridas`;if(id==="poroto"&&/porotos (?:previamente |ya )?cocidos/i.test(pasos))return `${CANTIDADES[id]} de porotos cocidos y escurridos`;return `${CANTIDADES[id]} de ${id}`}),pasos:[...f.pasos],costoAproximado:"Medio",preferencia:"Catálogo editorial sin IA",ingredientesCoincidentes:[],ingredientesFaltantes:[],porcentajeCoincidencia:0}));
