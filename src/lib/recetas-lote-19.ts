/** Lote 19: 25 recetas finales del objetivo inicial. */
import type { Receta } from "./recipes.functions";
const FICHAS=[
  {
    "titulo": "Guiso de garbanzos con acelga y tomate",
    "ids": [
      "garbanzo",
      "acelga",
      "tomate",
      "cebolla"
    ],
    "prep": 15,
    "coc": 30,
    "pasos": [
      "Usa garbanzos previamente cocidos y escurridos.",
      "Lava y saltea la acelga hasta que se ablande.",
      "Lava y corta el tomate en cubos.",
      "Sofríe la cebolla picada, añade el tomate y cocina 5 minutos; incorpora los garbanzos cocidos y la acelga salteada, agrega un poco de agua y deja hervir suavemente 10 minutos."
]
  },
  {
    "titulo": "Pasta con salsa de pimentón asado",
    "ids": [
      "pasta",
      "pimenton",
      "ajo",
      "queso"
    ],
    "prep": 12,
    "coc": 30,
    "pasos": [
      "Asa el pimentón a 200 °C hasta que esté tierno; retira las semillas y la piel si se desprende fácilmente.",
      "Cuece la pasta en agua con sal hasta que esté al dente y reserva media taza del agua de cocción.",
      "Saltea el ajo picado brevemente, añade el pimentón asado y tritura con un poco del agua reservada hasta obtener una salsa.",
      "Mezcla la pasta con la salsa, incorpora el queso fuera del fuego y ajusta la textura con más agua de cocción si hace falta."
]
  },
  {
    "titulo": "Pollo con quinoa y brócoli al limón",
    "ids": [
      "pollo",
      "quinoa",
      "brocoli",
      "limon"
    ],
    "prep": 12,
    "coc": 25,
    "pasos": [
      "Dora el pollo y cocina hasta que alcance 74 °C en el centro.",
      "Enjuaga y cuece la quinoa en agua hasta que esté tierna.",
      "Cuece el brócoli al vapor hasta que esté tierno.",
      "Sirve el pollo cocido junto a la quinoa y el brócoli, y aliña con jugo de limón."
]
  },
  {
    "titulo": "Ensalada de betarraga con pera y nueces",
    "ids": [
      "betarraga",
      "pera",
      "nuez",
      "lechuga"
    ],
    "prep": 12,
    "coc": 35,
    "pasos": [
      "Cuece la betarraga hasta que esté tierna y córtala en cubos.",
      "Lava y corta la pera en cubos.",
      "Trocea las nueces y añádelas al final.",
      "Lava, seca y trocea la lechuga; mezcla con la betarraga y la pera, incorpora las nueces y sirve la ensalada."
]
  },
  {
    "titulo": "Tortilla de zanahoria y puerro",
    "ids": [
      "zanahoria",
      "puerro",
      "huevo",
      "queso"
    ],
    "prep": 12,
    "coc": 18,
    "pasos": [
      "Pela y ralla la zanahoria; lava el puerro y córtalo en rodajas finas.",
      "Saltea la zanahoria y el puerro juntos hasta que estén tiernos y pierdan el exceso de humedad.",
      "Bate los huevos, mezcla con las verduras tibias y agrega el queso rallado.",
      "Vierte la mezcla en una sartén antiadherente y cocina por ambos lados hasta que el centro esté completamente cuajado."
]
  },
  {
    "titulo": "Pescado con arroz y espinaca",
    "ids": [
      "pescado",
      "arroz",
      "espinaca",
      "ajo"
    ],
    "prep": 12,
    "coc": 25,
    "pasos": [
      "Hornea el pescado a 190 °C hasta que alcance 63 °C.",
      "Cuece el arroz en agua hasta que esté tierno.",
      "Lava y saltea la espinaca brevemente.",
      "Pica el ajo y saltéalo con la espinaca sin quemarlo; sirve las verduras junto al arroz cocido y el pescado horneado."
]
  },
  {
    "titulo": "Crema de coliflor con romero",
    "ids": [
      "coliflor",
      "papa",
      "cebolla",
      "romero"
    ],
    "prep": 12,
    "coc": 25,
    "pasos": [
      "Lava y trocea la coliflor y las papas en piezas de tamaño similar.",
      "Sofríe la cebolla picada en una olla; agrega la coliflor, las papas y agua suficiente para cubrir parcialmente.",
      "Añade una ramita de romero y cuece hasta que las verduras estén tiernas; retira la rama antes de triturar.",
      "Tritura las verduras con parte del líquido de cocción hasta obtener una crema homogénea y ajusta la consistencia antes de servir."
]
  },
  {
    "titulo": "Cuscús con zapallo y garbanzos",
    "ids": [
      "cuscus",
      "zapallo",
      "garbanzo",
      "perejil"
    ],
    "prep": 12,
    "coc": 30,
    "pasos": [
      "Hidrata el cuscús con agua caliente según el envase.",
      "Corta el zapallo en cubos y hornéalo a 200 °C hasta que esté tierno.",
      "Usa garbanzos previamente cocidos y escurridos.",
      "Mezcla el cuscús hidratado con el zapallo asado y los garbanzos cocidos; agrega perejil picado y sirve."
]
  },
  {
    "titulo": "Ensalada de porotos con naranja y repollo",
    "ids": [
      "poroto",
      "naranja",
      "repollo",
      "limon"
    ],
    "prep": 12,
    "coc": 0,
    "pasos": [
      "Usa porotos previamente cocidos y escurridos.",
      "Pela la naranja y separa los gajos.",
      "Lava y corta el repollo en tiras finas.",
      "Mezcla los porotos con los gajos de naranja y el repollo cortado; aliña con jugo de limón y sirve."
]
  },
  {
    "titulo": "Papas asadas con champiñones y ricota",
    "ids": [
      "papa",
      "champinon",
      "ricota",
      "ajo"
    ],
    "prep": 15,
    "coc": 45,
    "pasos": [
      "Lava y corta las papas en cubos uniformes; mézclalas con aceite y distribúyelas en una bandeja.",
      "Hornea las papas a 200 °C durante 30–40 minutos, girándolas a mitad de cocción, hasta que estén doradas y tiernas.",
      "Saltea los champiñones laminados con el ajo picado hasta que pierdan su agua y se doren ligeramente.",
      "Sirve las papas asadas con los champiñones y añade la ricota al final, fuera del fuego."
]
  },
  {
    "titulo": "Arroz con lentejas y zanahoria salteada",
    "ids": [
      "arroz",
      "lenteja",
      "zanahoria",
      "cebolla"
    ],
    "prep": 12,
    "coc": 30,
    "pasos": [
      "Cuece el arroz en agua hasta que esté tierno.",
      "Enjuaga y cuece las lentejas hasta que estén tiernas.",
      "Pela y corta la zanahoria; saltéala hasta que esté tierna.",
      "Sofríe la cebolla picada, incorpora las lentejas cocidas y la zanahoria salteada, mezcla con el arroz y calienta todo antes de servir."
]
  },
  {
    "titulo": "Omelette de acelga y tomate",
    "ids": [
      "huevo",
      "acelga",
      "tomate",
      "queso"
    ],
    "prep": 10,
    "coc": 15,
    "pasos": [
      "Bate los huevos en un bol y reserva mientras preparas el relleno.",
      "Lava y saltea la acelga hasta que se ablande y pierda el exceso de humedad.",
      "Agrega el tomate en cubos a la acelga, saltea brevemente y reserva el relleno.",
      "Vierte los huevos batidos en una sartén; cuando empiecen a cuajar, añade el relleno y el queso, dobla y cocina hasta que el huevo esté completamente cuajado."
]
  },
  {
    "titulo": "Pollo al romero con papas y zanahoria",
    "ids": [
      "pollo",
      "romero",
      "papa",
      "zanahoria"
    ],
    "prep": 15,
    "coc": 40,
    "pasos": [
      "Dora el pollo y cocina hasta que alcance 74 °C en el centro.",
      "Agrega romero durante la cocción y retira la rama antes de servir.",
      "Corta las papas en cubos y cuécelas hasta que estén tiernas.",
      "Pela y corta la zanahoria; saltéala hasta que esté tierna y sirve con las papas y el pollo al romero."
]
  },
  {
    "titulo": "Ensalada de quinoa con mango y pepino",
    "ids": [
      "quinoa",
      "mango",
      "pepino",
      "menta"
    ],
    "prep": 12,
    "coc": 20,
    "pasos": [
      "Enjuaga y cuece la quinoa en agua hasta que esté tierna.",
      "Pela y corta el mango en cubos.",
      "Lava y corta el pepino en cubos.",
      "Deja enfriar la quinoa; mézclala con mango y pepino y añade la menta fresca picada al final."
]
  },
  {
    "titulo": "Pasta con arvejas y ricota al limón",
    "ids": [
      "pasta",
      "arveja",
      "ricota",
      "limon"
    ],
    "prep": 10,
    "coc": 18,
    "pasos": [
      "Cuece la pasta en agua hirviendo hasta que esté al dente.",
      "Cuece las arvejas hasta que estén tiernas.",
      "Mezcla la pasta escurrida con las arvejas cocidas e incorpora la ricota fuera del fuego.",
      "Aliña la pasta con jugo de limón, mezcla suavemente y sirve."
]
  },
  {
    "titulo": "Pescado al tomate con aceitunas",
    "ids": [
      "pescado",
      "tomate",
      "aceituna",
      "ajo"
    ],
    "prep": 12,
    "coc": 25,
    "pasos": [
      "Hornea el pescado a 190 °C hasta que alcance 63 °C.",
      "Lava y corta el tomate en cubos; cocínalo en sartén con el ajo picado hasta formar una salsa.",
      "Incorpora aceitunas sin carozo a la salsa de tomate y calienta brevemente.",
      "Sirve el pescado horneado cubierto con la salsa de tomate, ajo y aceitunas."
]
  },
  {
    "titulo": "Hamburguesas de garbanzos con betarraga",
    "ids": [
      "garbanzo",
      "betarraga",
      "avena",
      "huevo"
    ],
    "prep": 15,
    "coc": 20,
    "pasos": [
      "Usa garbanzos previamente cocidos y escurridos.",
      "Cuece la betarraga hasta que esté tierna y córtala en cubos.",
      "Machaca los garbanzos y mezcla con betarraga, avena y huevos batidos; forma hamburguesas compactas.",
      "Cocina las hamburguesas en sartén por ambos lados hasta que estén doradas y el huevo completamente cocido."
]
  },
  {
    "titulo": "Crema de zanahoria y jengibre con coco",
    "ids": [
      "zanahoria",
      "jengibre",
      "coco",
      "cebolla"
    ],
    "prep": 12,
    "coc": 25,
    "pasos": [
      "Pela y corta la zanahoria en rodajas finas.",
      "Pica la cebolla y sofríela junto al jengibre rallado hasta que esté transparente.",
      "Agrega la zanahoria y agua suficiente para cubrirla; cuece hasta que esté tierna.",
      "Tritura la zanahoria cocida con su caldo, incorpora la leche de coco y calienta suavemente antes de servir."
]
  },
  {
    "titulo": "Tacos de tofu con pimentón y palta",
    "ids": [
      "tortilla",
      "tofu",
      "pimenton",
      "palta"
    ],
    "prep": 12,
    "coc": 18,
    "pasos": [
      "Calienta las tortillas por ambos lados.",
      "Corta el tofu y dóralo en una sartén.",
      "Corta el pimentón y ásalo a 200 °C hasta que esté tierno.",
      "Pela y corta la palta; rellena las tortillas calientes con tofu dorado, pimentón asado y palta, y sirve."
]
  },
  {
    "titulo": "Ensalada tibia de arroz con brócoli",
    "ids": [
      "arroz",
      "brocoli",
      "zanahoria",
      "limon"
    ],
    "prep": 12,
    "coc": 25,
    "pasos": [
      "Cuece el arroz en agua hasta que esté tierno.",
      "Cuece el brócoli al vapor hasta que esté tierno.",
      "Pela y corta la zanahoria; saltéala hasta que esté tierna.",
      "Mezcla el arroz cocido con brócoli y zanahoria tibios; aliña con jugo de limón y sirve."
]
  },
  {
    "titulo": "Zapallitos rellenos de lentejas",
    "ids": [
      "zapallito",
      "lenteja",
      "tomate",
      "queso"
    ],
    "prep": 15,
    "coc": 35,
    "pasos": [
      "Corta los zapallitos por la mitad, ahuécalos y hornéalos hasta que estén tiernos.",
      "Enjuaga y cuece las lentejas hasta que estén tiernas.",
      "Sofríe el tomate picado, mézclalo con las lentejas cocidas y rellena las mitades de zapallito.",
      "Cubre los zapallitos rellenos con queso y gratina hasta que se funda; sirve caliente."
]
  },
  {
    "titulo": "Sopa de choclo con pollo y perejil",
    "ids": [
      "choclo",
      "pollo",
      "papa",
      "perejil"
    ],
    "prep": 12,
    "coc": 30,
    "pasos": [
      "Pon el pollo en una olla con agua suficiente y lleva a hervor.",
      "Agrega las papas en cubos y el choclo; cocina a fuego suave hasta que las verduras estén tiernas.",
      "Comprueba que el pollo alcance 74 °C en el centro, retíralo, desmenúzalo y devuélvelo al caldo.",
      "Ajusta el caldo de la sopa y añade perejil picado justo antes de servir."
]
  },
  {
    "titulo": "Berenjena al horno con garbanzos y yogur",
    "ids": [
      "berenjena",
      "garbanzo",
      "yogur",
      "ajo"
    ],
    "prep": 15,
    "coc": 35,
    "pasos": [
      "Corta la berenjena en cubos y hornéala a 200 °C durante 25 a 30 minutos, hasta que esté tierna.",
      "Usa garbanzos previamente cocidos y escurridos.",
      "Saltea el ajo picado brevemente e incorpora los garbanzos cocidos para calentarlos.",
      "Sirve la berenjena asada con los garbanzos al ajo y añade el yogur frío al final, fuera del fuego."
]
  },
  {
    "titulo": "Tostadas de huevo con espinaca y tomate",
    "ids": [
      "pan",
      "huevo",
      "espinaca",
      "tomate"
    ],
    "prep": 10,
    "coc": 12,
    "pasos": [
      "Tuesta el pan hasta que esté dorado.",
      "Bate los huevos y cuájalos completamente en una sartén.",
      "Lava y saltea la espinaca brevemente.",
      "Lava y corta el tomate en cubos; sirve los huevos y la espinaca sobre las tostadas y termina con el tomate."
]
  },
  {
    "titulo": "Quinoa con salmón y arvejas",
    "ids": [
      "quinoa",
      "salmon",
      "arveja",
      "limon"
    ],
    "prep": 12,
    "coc": 25,
    "pasos": [
      "Enjuaga y cuece la quinoa en agua hasta que esté tierna.",
      "Hornea el salmón a 190 °C hasta que alcance 63 °C.",
      "Cuece las arvejas hasta que estén tiernas.",
      "Sirve el salmón bien cocido sobre la quinoa con las arvejas y aliña con jugo de limón."
]
  }
] as const;
const CANTIDADES:Record<string,string>={"garbanzo":"200 g","acelga":"160 g","tomate":"220 g","cebolla":"100 g","pasta":"180 g","pimenton":"1 unidad","ajo":"2 dientes","queso":"80 g","pollo":"300 g","quinoa":"150 g","brocoli":"250 g","limon":"1 unidad","betarraga":"2 unidades","pera":"1 unidad","nuez":"50 g","lechuga":"100 g","zanahoria":"180 g","puerro":"1 unidad","huevo":"2 unidades","pescado":"300 g","arroz":"150 g","espinaca":"160 g","coliflor":"300 g","papa":"350 g","romero":"1 ramita","cuscus":"150 g","zapallo":"300 g","perejil":"1 cucharada","poroto":"200 g","naranja":"2 unidades","repollo":"250 g","champinon":"200 g","ricota":"120 g","lenteja":"180 g","mango":"1 unidad","pepino":"1 unidad","menta":"6 hojas","arveja":"180 g","aceituna":"60 g","avena":"100 g","jengibre":"10 g","coco":"180 ml de leche de coco","tortilla":"4 unidades","tofu":"250 g","palta":"1 unidad","zapallito":"2 unidades","choclo":"200 g","berenjena":"1 unidad","yogur":"150 g","pan":"4 rebanadas","salmon":"300 g"};
export const RECETAS_LOTE_19:Receta[]=FICHAS.map((f,i)=>({id:`lote-19-${i+1}`,titulo:f.titulo,descripcion:"Preparación para dos personas; cantidades orientativas.",tiempoPreparacion:`${f.prep} min`,tiempoCoccion:`${f.coc} min`,porciones:"2 personas",dificultad:"Fácil",ingredientes:f.ids.map(id=>{
 const cantidad=CANTIDADES[id];
 if(id==="coco")return cantidad;
 if(id==="garbanzo")return `${cantidad} de garbanzos cocidos y escurridos`;
 if(id==="poroto")return `${cantidad} de porotos cocidos y escurridos`;
 const nombres:Record<string,string>={huevo:"huevos",champinon:"champiñones",atun:"atún",limon:"limón",pimenton:"pimentón",brocoli:"brócoli",salmon:"salmón",cuscus:"cuscús",tortilla:"tortillas",papa:"papas",nuez:"nueces",arveja:"arvejas",espinaca:"espinaca",lenteja:"lentejas",puerro:"puerro",zapallito:"zapallitos",pera:"pera",naranja:"naranjas",aceituna:"aceitunas"};
 return `${cantidad} de ${nombres[id]||id}`;
}),pasos:[...f.pasos],costoAproximado:"Medio",preferencia:"Catálogo editorial sin IA",ingredientesCoincidentes:[],ingredientesFaltantes:[],porcentajeCoincidencia:0}));
