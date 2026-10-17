/** Lote 11: 30 recetas de inspiración internacional. */
import type { Receta } from "./recipes.functions";
const FICHAS=[
  {
    "titulo": "Pasta primavera con verduras",
    "ids": [
      "pasta",
      "zapallito",
      "zanahoria",
      "arveja"
    ],
    "pasos": [
      "Cuece la pasta en agua hirviendo hasta que esté al dente.",
      "Corta el zapallito y la zanahoria en bastones delgados.",
      "Saltea las verduras y agrega las arvejas hasta que estén tiernas.",
      "Mezcla con la pasta escurrida y sirve caliente."
    ]
  },
  {
    "titulo": "Espaguetis con salsa de berenjena",
    "ids": [
      "pasta",
      "berenjena",
      "tomate",
      "cebolla"
    ],
    "pasos": [
      "Cuece los espaguetis según las indicaciones del envase.",
      "Corta la berenjena en cubos y sofríela con cebolla.",
      "Añade tomate picado y cocina hasta obtener una salsa espesa.",
      "Mezcla la pasta con la salsa y sirve."
    ]
  },
  {
    "titulo": "Pasta con atún y aceitunas",
    "ids": [
      "pasta",
      "atun",
      "aceituna",
      "tomate"
    ],
    "pasos": [
      "Cuece la pasta en abundante agua hasta que esté tierna.",
      "Pica el tomate y las aceitunas sin carozo.",
      "Calienta el tomate en sartén e incorpora el atún escurrido.",
      "Mezcla con la pasta y termina con las aceitunas."
    ]
  },
  {
    "titulo": "Ñoquis de papa con tomate",
    "ids": [
      "papa",
      "harina",
      "huevo",
      "tomate"
    ],
    "pasos": [
      "Hierve las papas y haz un puré seco.",
      "Mezcla con harina y huevo hasta formar una masa suave.",
      "Forma cilindros, corta pequeños ñoquis y hiérvelos hasta que floten.",
      "Sirve con tomate cocido en forma de salsa."
    ]
  },
  {
    "titulo": "Pizza casera de verduras",
    "ids": [
      "harina",
      "tomate",
      "queso",
      "pimenton"
    ],
    "pasos": [
      "Mezcla harina con agua, una pizca de sal y levadura y deja reposar la masa.",
      "Estira la masa sobre una bandeja ligeramente aceitada.",
      "Cubre con tomate, queso y pimentón cortado fino.",
      "Hornea a 220 °C hasta que la base esté cocida y el queso dorado."
    ]
  },
  {
    "titulo": "Pizza de champiñones y espinaca",
    "ids": [
      "harina",
      "champinon",
      "espinaca",
      "queso"
    ],
    "pasos": [
      "Prepara una masa con harina, agua, levadura y sal y deja fermentar.",
      "Estira la masa y distribuye queso rallado.",
      "Agrega champiñones laminados y espinaca lavada.",
      "Hornea a 220 °C hasta que la masa esté cocida y los bordes dorados."
    ]
  },
  {
    "titulo": "Arroz frito con verduras",
    "ids": [
      "arroz",
      "huevo",
      "zanahoria",
      "arveja"
    ],
    "pasos": [
      "Cuece el arroz y enfríalo rápidamente si no se utiliza de inmediato.",
      "Saltea zanahoria y arvejas hasta que estén tiernas.",
      "Añade huevo batido y revuelve hasta que cuaje.",
      "Incorpora el arroz y calienta todo completamente antes de servir."
    ]
  },
  {
    "titulo": "Arroz salteado con tofu",
    "ids": [
      "arroz",
      "tofu",
      "pimenton",
      "cebolla"
    ],
    "pasos": [
      "Cuece el arroz hasta que esté tierno.",
      "Corta el tofu en cubos y dóralo en una sartén.",
      "Agrega cebolla y pimentón picados y saltea hasta ablandar.",
      "Incorpora el arroz, mezcla y sirve caliente."
    ]
  },
  {
    "titulo": "Tofu al horno con brócoli",
    "ids": [
      "tofu",
      "brocoli",
      "ajo",
      "limon"
    ],
    "pasos": [
      "Precalienta el horno a 200 °C y corta el tofu en cubos.",
      "Separa el brócoli en ramilletes y mezcla con ajo y limón.",
      "Distribuye tofu y brócoli sobre una bandeja.",
      "Hornea hasta que el tofu esté dorado y el brócoli tierno."
    ]
  },
  {
    "titulo": "Curry suave de garbanzos",
    "ids": [
      "garbanzo",
      "tomate",
      "cebolla",
      "leche"
    ],
    "pasos": [
      "Sofríe cebolla picada con curry en polvo al gusto.",
      "Agrega tomate troceado y cocina hasta ablandar.",
      "Incorpora garbanzos previamente cocidos y un poco de leche.",
      "Cocina a fuego suave hasta espesar y sirve."
    ]
  },
  {
    "titulo": "Curry de pollo con arroz",
    "ids": [
      "pollo",
      "arroz",
      "cebolla",
      "leche"
    ],
    "pasos": [
      "Cuece el arroz y reserva caliente.",
      "Dora el pollo en trozos con cebolla picada.",
      "Agrega curry suave y leche y cocina a fuego bajo.",
      "Verifica que el pollo alcance 74 °C y sirve con arroz."
    ]
  },
  {
    "titulo": "Dhal de lentejas rojas",
    "ids": [
      "lenteja",
      "tomate",
      "cebolla",
      "jengibre"
    ],
    "pasos": [
      "Enjuaga las lentejas rojas y escúrrelas.",
      "Sofríe cebolla y jengibre rallado en una olla.",
      "Añade tomate, lentejas y agua suficiente para cubrir.",
      "Cocina removiendo hasta que las lentejas estén blandas y cremosas."
    ]
  },
  {
    "titulo": "Ensalada griega sencilla",
    "ids": [
      "pepino",
      "tomate",
      "queso",
      "aceituna"
    ],
    "pasos": [
      "Lava y corta el pepino y el tomate en trozos medianos.",
      "Corta el queso en cubos y escurre las aceitunas.",
      "Combina los ingredientes en un recipiente amplio.",
      "Aliña con aceite y condimentos justo antes de servir."
    ]
  },
  {
    "titulo": "Hummus de garbanzos",
    "ids": [
      "garbanzo",
      "limon",
      "ajo",
      "tahini"
    ],
    "pasos": [
      "Cuece los garbanzos hasta que estén muy tiernos y escúrrelos.",
      "Tritura los garbanzos con ajo, limón y tahini.",
      "Agrega agua fría poco a poco hasta obtener una crema suave.",
      "Sirve en un recipiente y conserva refrigerado."
    ]
  },
  {
    "titulo": "Falafel al horno",
    "ids": [
      "garbanzo",
      "cebolla",
      "ajo",
      "perejil"
    ],
    "pasos": [
      "Remoja garbanzos secos durante la noche y escúrrelos sin cocer.",
      "Tritura con cebolla, ajo y perejil hasta obtener una pasta gruesa.",
      "Forma bolitas pequeñas y colócalas sobre una bandeja aceitada.",
      "Hornea a 200 °C hasta que estén doradas y completamente cocidas."
    ]
  },
  {
    "titulo": "Tabulé de cuscús",
    "ids": [
      "cuscus",
      "tomate",
      "pepino",
      "perejil"
    ],
    "pasos": [
      "Hidrata el cuscús con agua caliente según el envase.",
      "Lava y pica tomate, pepino y perejil muy finos.",
      "Esponja el cuscús con un tenedor y deja enfriar.",
      "Mezcla con las verduras y aliña con limón y aceite."
    ]
  },
  {
    "titulo": "Shakshuka con pimentón",
    "ids": [
      "huevo",
      "tomate",
      "pimenton",
      "cebolla"
    ],
    "pasos": [
      "Sofríe cebolla y pimentón en una sartén amplia.",
      "Añade tomate picado y cocina hasta espesar.",
      "Forma huecos en la salsa y casca los huevos.",
      "Tapa y cocina hasta que las claras y yemas estén completamente cuajadas."
    ]
  },
  {
    "titulo": "Tacos de pollo y palta",
    "ids": [
      "pollo",
      "tortilla",
      "palta",
      "tomate"
    ],
    "pasos": [
      "Cocina el pollo en tiras hasta alcanzar 74 °C.",
      "Lava y corta el tomate y pela la palta.",
      "Calienta las tortillas en sartén sin quemarlas.",
      "Rellena con pollo, tomate y palta y sirve inmediatamente."
    ]
  },
  {
    "titulo": "Tacos de porotos negros",
    "ids": [
      "poroto",
      "tortilla",
      "tomate",
      "lechuga"
    ],
    "pasos": [
      "Cuece los porotos negros hasta que estén completamente tiernos.",
      "Calienta las tortillas en una sartén.",
      "Lava y pica el tomate y la lechuga.",
      "Rellena las tortillas con porotos y verduras frescas."
    ]
  },
  {
    "titulo": "Quesadillas de champiñones",
    "ids": [
      "tortilla",
      "champinon",
      "queso",
      "cebolla"
    ],
    "pasos": [
      "Sofríe cebolla y champiñones laminados hasta que estén tiernos.",
      "Distribuye queso y champiñones sobre una mitad de cada tortilla.",
      "Dobla las tortillas y colócalas en sartén caliente.",
      "Dora por ambos lados hasta que el queso esté derretido."
    ]
  },
  {
    "titulo": "Burritos de arroz y porotos",
    "ids": [
      "tortilla",
      "arroz",
      "poroto",
      "pimenton"
    ],
    "pasos": [
      "Cuece el arroz y los porotos por separado hasta que estén tiernos.",
      "Sofríe el pimentón cortado en tiras.",
      "Calienta las tortillas brevemente para que sean flexibles.",
      "Rellena con arroz, porotos y pimentón y enrolla firmemente."
    ]
  },
  {
    "titulo": "Sopa mexicana de tomate y maíz",
    "ids": [
      "tomate",
      "choclo",
      "cebolla",
      "ajo"
    ],
    "pasos": [
      "Sofríe cebolla y ajo picados en una olla.",
      "Añade tomate troceado y cocina hasta que se ablande.",
      "Agrega agua y cocina a fuego medio durante quince minutos.",
      "Incorpora choclo cocido y sirve bien caliente."
    ]
  },
  {
    "titulo": "Ensalada de couscous con pollo",
    "ids": [
      "cuscus",
      "pollo",
      "pepino",
      "limon"
    ],
    "pasos": [
      "Hidrata el cuscús según las instrucciones del envase.",
      "Cocina el pollo completamente hasta alcanzar 74 °C.",
      "Lava y corta el pepino en cubos pequeños.",
      "Mezcla con el cuscús y el pollo, y aliña con limón."
    ]
  },
  {
    "titulo": "Pescado mediterráneo con aceitunas",
    "ids": [
      "pescado",
      "tomate",
      "aceituna",
      "limon"
    ],
    "pasos": [
      "Precalienta el horno a 190 °C y coloca el pescado en una fuente.",
      "Añade tomate troceado y aceitunas sin carozo.",
      "Rocía con limón y hornea hasta que el pescado alcance 63 °C.",
      "Sirve con los jugos de cocción."
    ]
  },
  {
    "titulo": "Berenjenas a la parmesana",
    "ids": [
      "berenjena",
      "tomate",
      "queso",
      "ajo"
    ],
    "pasos": [
      "Corta las berenjenas en láminas y hornéalas hasta ablandar.",
      "Prepara una salsa con tomate y ajo picado.",
      "Alterna capas de berenjena, salsa y queso en una fuente.",
      "Gratina a 200 °C hasta que el queso esté dorado y burbujeante."
    ]
  },
  {
    "titulo": "Ensalada de pasta al pesto",
    "ids": [
      "pasta",
      "albahaca",
      "queso",
      "tomate"
    ],
    "pasos": [
      "Cuece la pasta y enfríala rápidamente.",
      "Tritura albahaca con queso, aceite y un poco de agua.",
      "Lava y corta los tomates en mitades.",
      "Mezcla la pasta con el pesto y los tomates."
    ]
  },
  {
    "titulo": "Sopa de pollo con jengibre",
    "ids": [
      "pollo",
      "jengibre",
      "zanahoria",
      "cebolla"
    ],
    "pasos": [
      "Hierve agua con cebolla y zanahoria en rodajas.",
      "Añade el pollo y cocina hasta que alcance 74 °C.",
      "Retira el pollo, desmenúzalo y vuelve a la olla.",
      "Incorpora jengibre rallado y sirve la sopa caliente."
    ]
  },
  {
    "titulo": "Salteado de tofu y champiñones",
    "ids": [
      "tofu",
      "champinon",
      "ajo",
      "arroz"
    ],
    "pasos": [
      "Cuece el arroz hasta que esté tierno.",
      "Corta el tofu en cubos y dóralo en sartén.",
      "Añade champiñones laminados y ajo picado y saltea.",
      "Sirve la mezcla caliente sobre el arroz."
    ]
  },
  {
    "titulo": "Ensalada tibia de quinoa y tofu",
    "ids": [
      "quinoa",
      "tofu",
      "zanahoria",
      "espinaca"
    ],
    "pasos": [
      "Lava y cuece la quinoa hasta que esté tierna.",
      "Dora el tofu cortado en cubos en una sartén.",
      "Saltea zanahoria rallada y espinaca lavada.",
      "Combina con la quinoa y sirve tibio."
    ]
  },
  {
    "titulo": "Pasta cremosa con coliflor",
    "ids": [
      "pasta",
      "coliflor",
      "leche",
      "ajo"
    ],
    "pasos": [
      "Cuece la pasta hasta que esté al dente.",
      "Hierve la coliflor hasta que esté muy tierna.",
      "Tritura la coliflor con leche y ajo cocido hasta formar una crema.",
      "Calienta la salsa y mezcla con la pasta escurrida."
    ]
  }
] as const;
const CANTIDADES:Record<string,string>={"pasta":"180 g","zapallito":"2 unidades","zanahoria":"180 g","arveja":"180 g","berenjena":"1 unidad","tomate":"250 g","cebolla":"100 g","atun":"140 g","aceituna":"60 g","papa":"350 g","harina":"200 g","huevo":"2 unidades","queso":"100 g","pimenton":"1 unidad","champinon":"200 g","espinaca":"160 g","arroz":"150 g","tofu":"250 g","brocoli":"250 g","ajo":"2 dientes","limon":"1 unidad","garbanzo":"200 g","leche":"180 ml","pollo":"300 g","lenteja":"180 g","jengibre":"10 g","pepino":"1 unidad","tahini":"40 g","perejil":"1 cucharada","cuscus":"150 g","palta":"1 unidad","tortilla":"4 unidades","poroto":"200 g","lechuga":"100 g","choclo":"200 g","pescado":"300 g","albahaca":"8 hojas","quinoa":"150 g","coliflor":"300 g"};
const TIEMPOS_COCCION:Record<string,number>={};
export const RECETAS_LOTE_11:Receta[]=FICHAS.map((f,i)=>({id:`lote-11-${i+1}`,titulo:f.titulo,descripcion:"Preparación para dos personas; cantidades orientativas.",tiempoPreparacion:"15 min",tiempoCoccion:`${TIEMPOS_COCCION[f.titulo]??( /ensalada|tostada|sandwich|sándwich|ceviche/i.test(f.titulo)?0:/sopa|guiso|cazuela|porotos|lentejas|estofado|pastel/i.test(f.titulo)?45:35)} min`,porciones:"2 personas",dificultad:"Fácil",ingredientes:f.ids.map(id=>`${CANTIDADES[id]} de ${id}`),pasos:[...f.pasos],costoAproximado:"Medio",preferencia:"Catálogo editorial sin IA",ingredientesCoincidentes:[],ingredientesFaltantes:[],porcentajeCoincidencia:0}));
