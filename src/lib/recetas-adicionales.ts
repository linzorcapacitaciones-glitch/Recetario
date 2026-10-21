/** Lote editorial adicional. Cantidades orientativas para dos personas; revisar antes de comercializar. */
import type { Receta } from "./recipes.functions";
type Ficha = { titulo: string; ids: string[]; pasos: string[] };
const DATOS: Ficha[] = [
  {
    "titulo": "Sopa de verduras con arroz",
    "ids": [
      "arroz",
      "zanahoria",
      "papa",
      "cebolla"
    ],
    "pasos": [
      "Sofríe la cebolla picada.",
      "Agrega papa y zanahoria en cubos y cubre con agua.",
      "Añade arroz y cocina hasta que esté tierno.",
      "Ajusta la sazón y sirve caliente."
    ]
  },
  {
    "titulo": "Ensalada de lentejas y tomate",
    "ids": [
      "lenteja",
      "tomate",
      "cebolla"
    ],
    "pasos": [
      "Cuece las lentejas hasta que estén tiernas y escúrrelas.",
      "Lava y corta tomate y cebolla.",
      "Mezcla con las lentejas ya frías.",
      "Aliña y sirve."
    ]
  },
  {
    "titulo": "Revuelto de espinacas y queso",
    "ids": [
      "huevo",
      "espinaca",
      "queso"
    ],
    "pasos": [
      "Lava y saltea la espinaca.",
      "Bate los huevos en un recipiente.",
      "Añade los huevos y revuelve a fuego medio hasta cuajar.",
      "Incorpora el queso y sirve caliente."
    ]
  },
  {
    "titulo": "Puré de papas y zapallo",
    "ids": [
      "papa",
      "zapallo",
      "queso"
    ],
    "pasos": [
      "Pela y corta papas y zapallo.",
      "Hierve ambos hasta que estén blandos.",
      "Escurre y aplasta hasta obtener un puré.",
      "Añade queso y mezcla a fuego suave."
    ]
  },
  {
    "titulo": "Arroz con atún y zanahoria",
    "ids": [
      "arroz",
      "atun",
      "zanahoria"
    ],
    "pasos": [
      "Cuece el arroz en agua.",
      "Lava y ralla la zanahoria.",
      "Saltea la zanahoria y agrega el atún escurrido.",
      "Incorpora el arroz y calienta bien."
    ]
  },
  {
    "titulo": "Garbanzos guisados con zapallo",
    "ids": [
      "garbanzo",
      "zapallo",
      "cebolla"
    ],
    "pasos": [
      "Usa garbanzos cocidos o cuece los secos tras remojarlos.",
      "Sofríe la cebolla picada.",
      "Agrega zapallo en cubos y agua; cocina hasta ablandar.",
      "Incorpora los garbanzos y hierve unos minutos."
    ]
  },
  {
    "titulo": "Pasta con salsa de zapallo y queso",
    "ids": [
      "pasta",
      "zapallo",
      "queso"
    ],
    "pasos": [
      "Cuece la pasta según el envase.",
      "Hierve el zapallo hasta que esté blando.",
      "Tritura el zapallo con un poco de agua de cocción.",
      "Mezcla con la pasta y añade queso."
    ]
  },
  {
    "titulo": "Tortilla de zanahoria y cebolla",
    "ids": [
      "huevo",
      "zanahoria",
      "cebolla"
    ],
    "pasos": [
      "Ralla la zanahoria y pica la cebolla.",
      "Saltea ambas verduras hasta ablandar.",
      "Añade los huevos batidos.",
      "Cocina por ambos lados hasta cuajar completamente."
    ]
  },
  {
    "titulo": "Ensalada tibia de garbanzos y espinaca",
    "ids": [
      "garbanzo",
      "espinaca",
      "tomate"
    ],
    "pasos": [
      "Utiliza garbanzos previamente cocidos.",
      "Lava y saltea la espinaca.",
      "Lava y corta el tomate.",
      "Mezcla los ingredientes y sirve tibio."
    ]
  },
  {
    "titulo": "Pollo guisado con zapallo",
    "ids": [
      "pollo",
      "zapallo",
      "cebolla"
    ],
    "pasos": [
      "Pica la cebolla y corta el zapallo.",
      "Dora el pollo en una olla.",
      "Añade cebolla, zapallo y un poco de agua.",
      "Cocina hasta que el pollo alcance 74 °C en el centro."
    ]
  },
  {
    "titulo": "Papas salteadas con huevo y queso",
    "ids": [
      "papa",
      "huevo",
      "queso"
    ],
    "pasos": [
      "Cuece las papas en cubos hasta ablandar.",
      "Escúrrelas y dóralas en sartén.",
      "Añade los huevos batidos y cocina completamente.",
      "Agrega queso y sirve."
    ]
  },
  {
    "titulo": "Arroz con espinaca y queso",
    "ids": [
      "arroz",
      "espinaca",
      "queso"
    ],
    "pasos": [
      "Cuece el arroz.",
      "Lava y corta la espinaca.",
      "Saltea la espinaca y mezcla con el arroz.",
      "Añade queso y calienta hasta fundir."
    ]
  },
  {
    "titulo": "Sopa de lentejas y zanahoria",
    "ids": [
      "lenteja",
      "zanahoria",
      "cebolla"
    ],
    "pasos": [
      "Lava las lentejas y pica las verduras.",
      "Sofríe la cebolla.",
      "Agrega lentejas, zanahoria y agua.",
      "Cuece hasta que las lentejas estén tiernas."
    ]
  },
  {
    "titulo": "Fideos con pollo y espinaca",
    "ids": [
      "pasta",
      "pollo",
      "espinaca"
    ],
    "pasos": [
      "Cuece la pasta según el envase.",
      "Corta y cocina el pollo completamente hasta 74 °C.",
      "Lava y saltea la espinaca.",
      "Mezcla los tres ingredientes y sirve caliente."
    ]
  },
  {
    "titulo": "Tomates rellenos de atún y garbanzos",
    "ids": [
      "tomate",
      "atun",
      "garbanzo"
    ],
    "pasos": [
      "Lava los tomates y retira la pulpa.",
      "Escurre el atún y los garbanzos cocidos.",
      "Mezcla el relleno con la pulpa picada.",
      "Rellena los tomates y sirve fresco."
    ]
  },
  {
    "titulo": "Croquetas de lentejas y papa",
    "ids": [
      "lenteja",
      "papa",
      "huevo"
    ],
    "pasos": [
      "Cuece las lentejas y papas hasta ablandar.",
      "Aplasta ambas y mezcla con huevo.",
      "Forma pequeñas croquetas.",
      "Cocina por ambos lados hasta que el huevo esté completamente cuajado."
    ]
  },
  {
    "titulo": "Arroz con zapallo y cebolla",
    "ids": [
      "arroz",
      "zapallo",
      "cebolla"
    ],
    "pasos": [
      "Pica la cebolla y el zapallo.",
      "Sofríe la cebolla.",
      "Agrega arroz, zapallo y agua suficiente.",
      "Cocina hasta que el arroz y el zapallo estén tiernos."
    ]
  },
  {
    "titulo": "Ensalada de pasta con atún y tomate",
    "ids": [
      "pasta",
      "atun",
      "tomate"
    ],
    "pasos": [
      "Cuece la pasta y enfría rápidamente.",
      "Lava y corta el tomate.",
      "Escurre el atún.",
      "Mezcla todo y conserva refrigerado hasta servir."
    ]
  },
  {
    "titulo": "Pollo con zanahoria y queso",
    "ids": [
      "pollo",
      "zanahoria",
      "queso"
    ],
    "pasos": [
      "Corta el pollo y ralla la zanahoria.",
      "Cocina el pollo en sartén hasta 74 °C.",
      "Añade la zanahoria y cocina hasta ablandar.",
      "Agrega queso y deja fundir."
    ]
  },
  {
    "titulo": "Tortilla de garbanzos y espinaca",
    "ids": [
      "huevo",
      "garbanzo",
      "espinaca"
    ],
    "pasos": [
      "Escurre los garbanzos previamente cocidos.",
      "Lava y saltea la espinaca.",
      "Mezcla con los huevos batidos y garbanzos.",
      "Cuaja la tortilla completamente por ambos lados."
    ]
  }
];
const cantidades: Record<string,string> = { arroz:"150 g",zanahoria:"160 g",papa:"300 g",cebolla:"100 g",lenteja:"170 g",tomate:"220 g",huevo:"3 unidades",espinaca:"150 g",queso:"70 g",zapallo:"300 g",atun:"140 g",garbanzo:"190 g",pasta:"180 g",pollo:"260 g" };
export const RECETAS_ADICIONALES: Receta[] = DATOS.map((f,i)=>({
 id:`ampliacion-${i+1}`,titulo:f.titulo,
 descripcion:"Preparación casera con ingredientes comunes, para dos personas.",
 tiempoPreparacion:"15 min",tiempoCoccion:"30 min",porciones:"2 personas",dificultad:"Fácil",
 ingredientes:f.ids.map(id=>`${cantidades[id]} de ${id}`),pasos:f.pasos,
 costoAproximado:"Medio",preferencia:"Catálogo editorial sin IA",
 ingredientesCoincidentes:[],ingredientesFaltantes:[],porcentajeCoincidencia:0
}));
