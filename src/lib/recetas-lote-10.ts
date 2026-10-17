/** Lote 10: 30 preparaciones chilenas y de cocina cotidiana. */
import type { Receta } from "./recipes.functions";
const FICHAS=[
  {
    "titulo": "Cazuela de vacuno con zapallo",
    "ids": [
      "carne",
      "zapallo",
      "papa",
      "choclo",
      "zanahoria"
    ],
    "pasos": [
      "Dora la carne en una olla y cubre con agua.",
      "Cocina a fuego suave hasta que comience a ablandarse.",
      "Añade papa, zapallo, choclo y zanahoria en trozos grandes.",
      "Continúa hasta que la carne y las verduras estén tiernas; sirve con caldo."
    ]
  },
  {
    "titulo": "Carbonada casera",
    "ids": [
      "carne",
      "papa",
      "zapallo",
      "zanahoria",
      "arveja"
    ],
    "pasos": [
      "Dora la carne cortada en cubos pequeños.",
      "Añade papa, zapallo y zanahoria en cubitos.",
      "Cubre con agua y cocina a fuego medio hasta ablandar.",
      "Incorpora las arvejas al final y sirve con abundante caldo."
    ]
  },
  {
    "titulo": "Charquicán con huevo",
    "ids": [
      "papa",
      "zapallo",
      "zanahoria",
      "choclo",
      "huevo"
    ],
    "pasos": [
      "Cuece papa, zapallo y zanahoria en cubos hasta ablandar.",
      "Agrega choclo cocido y aplasta parcialmente las verduras.",
      "Calienta la mezcla removiendo hasta que quede espesa.",
      "Fríe o cuece los huevos hasta cuajar y sirve uno sobre cada porción."
    ]
  },
  {
    "titulo": "Tomaticán de verano",
    "ids": [
      "tomate",
      "choclo",
      "cebolla",
      "huevo"
    ],
    "pasos": [
      "Sofríe cebolla picada hasta que esté transparente.",
      "Agrega tomate troceado y cocina hasta que suelte jugo.",
      "Incorpora choclo cocido y calienta unos minutos.",
      "Añade huevos batidos y revuelve hasta que estén completamente cuajados."
    ]
  },
  {
    "titulo": "Porotos granados con mazamorra",
    "ids": [
      "poroto",
      "choclo",
      "zapallo",
      "cebolla"
    ],
    "pasos": [
      "Cuece porotos frescos o previamente remojados hasta que estén tiernos.",
      "Sofríe cebolla y agrega zapallo cortado en cubos.",
      "Tritura parte del choclo con un poco de agua.",
      "Mezcla todo y cocina a fuego suave hasta espesar, removiendo para evitar que se pegue."
    ]
  },
  {
    "titulo": "Pastel de papas con pollo",
    "ids": [
      "papa",
      "pollo",
      "cebolla",
      "huevo"
    ],
    "pasos": [
      "Cuece las papas y aplástalas hasta formar un puré.",
      "Cocina el pollo hasta alcanzar 74 °C y desmenúzalo.",
      "Sofríe cebolla y mezcla con el pollo y huevo duro picado.",
      "Coloca el relleno en una fuente, cubre con puré y hornea hasta dorar."
    ]
  },
  {
    "titulo": "Papas rellenas con carne",
    "ids": [
      "papa",
      "carne",
      "cebolla",
      "huevo"
    ],
    "pasos": [
      "Hierve las papas hasta que estén tiernas y prepara un puré firme.",
      "Sofríe la cebolla y cocina la carne molida hasta 71 °C.",
      "Cuece el huevo y pícalo para incorporarlo al relleno.",
      "Forma papas rellenas con la mezcla y dóralas en horno hasta que estén calientes."
    ]
  },
  {
    "titulo": "Sopaipillas al horno con zapallo",
    "ids": [
      "harina",
      "zapallo",
      "mantequilla",
      "leche"
    ],
    "pasos": [
      "Cuece el zapallo hasta que esté tierno y haz un puré.",
      "Mezcla harina con puré de zapallo y mantequilla hasta formar una masa.",
      "Agrega leche poco a poco, amasa y corta discos.",
      "Hornea a 200 °C hasta que estén cocidos y ligeramente dorados."
    ]
  },
  {
    "titulo": "Empanaditas de queso al horno",
    "ids": [
      "harina",
      "queso",
      "mantequilla",
      "leche"
    ],
    "pasos": [
      "Mezcla harina con mantequilla y leche hasta formar una masa manejable.",
      "Estira la masa y corta círculos del mismo tamaño.",
      "Coloca queso rallado en el centro y sella los bordes.",
      "Hornea a 200 °C hasta que la masa esté cocida y dorada."
    ]
  },
  {
    "titulo": "Humitas en olla",
    "ids": [
      "choclo",
      "cebolla",
      "leche",
      "albahaca"
    ],
    "pasos": [
      "Desgrana el choclo y tritúralo con un poco de leche.",
      "Sofríe cebolla picada y añade albahaca fresca.",
      "Incorpora el choclo molido y cocina a fuego bajo.",
      "Revuelve constantemente hasta que la mezcla esté espesa y completamente cocida."
    ]
  },
  {
    "titulo": "Pollo arvejado chileno",
    "ids": [
      "pollo",
      "arveja",
      "zanahoria",
      "cebolla"
    ],
    "pasos": [
      "Dora el pollo en una olla con un poco de aceite.",
      "Añade cebolla y zanahoria cortadas en cubos.",
      "Agrega agua, tapa y cocina hasta que el pollo alcance 74 °C.",
      "Incorpora arvejas y termina la cocción hasta que estén tiernas."
    ]
  },
  {
    "titulo": "Pescado a la chilena",
    "ids": [
      "pescado",
      "tomate",
      "cebolla",
      "limon"
    ],
    "pasos": [
      "Corta la cebolla en pluma y el tomate en cubos.",
      "Sofríe la cebolla hasta que se ablande y añade tomate.",
      "Cocina el pescado a la plancha con unas gotas de limón.",
      "Verifica que alcance 63 °C y sirve cubierto con las verduras."
    ]
  },
  {
    "titulo": "Ensalada chilena con huevo duro",
    "ids": [
      "tomate",
      "cebolla",
      "huevo",
      "perejil"
    ],
    "pasos": [
      "Lava los tomates y córtalos en gajos.",
      "Corta la cebolla en pluma y enjuágala si deseas suavizarla.",
      "Cuece los huevos hasta que estén firmes y córtalos.",
      "Mezcla todo y termina con perejil picado."
    ]
  },
  {
    "titulo": "Pebre con tostadas caseras",
    "ids": [
      "tomate",
      "cebolla",
      "ajo",
      "perejil",
      "pan"
    ],
    "pasos": [
      "Lava y corta el tomate en cubos muy pequeños.",
      "Pica cebolla, ajo y perejil finamente.",
      "Mezcla las verduras y aliña al gusto.",
      "Tuesta rebanadas de pan y sirve junto al pebre fresco."
    ]
  },
  {
    "titulo": "Tortilla de acelga",
    "ids": [
      "acelga",
      "huevo",
      "cebolla",
      "harina"
    ],
    "pasos": [
      "Lava la acelga y retira los tallos más gruesos.",
      "Pica y cocina la acelga hasta que esté tierna; escurre muy bien.",
      "Sofríe cebolla y mezcla con acelga, huevo y una cucharada de harina.",
      "Cuaja la tortilla en sartén por ambos lados hasta cocinar completamente el huevo."
    ]
  },
  {
    "titulo": "Acelga salteada con garbanzos",
    "ids": [
      "acelga",
      "garbanzo",
      "ajo",
      "limon"
    ],
    "pasos": [
      "Lava y corta la acelga en tiras.",
      "Saltea ajo picado y añade los tallos de acelga primero.",
      "Incorpora las hojas y garbanzos previamente cocidos.",
      "Cocina hasta que la acelga esté tierna y termina con limón."
    ]
  },
  {
    "titulo": "Crema de zanahoria y jengibre",
    "ids": [
      "zanahoria",
      "papa",
      "cebolla",
      "jengibre"
    ],
    "pasos": [
      "Pela y corta zanahoria, papa y cebolla en cubos.",
      "Sofríe la cebolla y agrega las verduras con agua suficiente.",
      "Cuece hasta que estén completamente tiernas.",
      "Añade jengibre rallado y tritura hasta obtener una crema."
    ]
  },
  {
    "titulo": "Pollo al jengibre con arroz",
    "ids": [
      "pollo",
      "jengibre",
      "arroz",
      "zanahoria"
    ],
    "pasos": [
      "Cuece el arroz hasta que esté tierno.",
      "Ralla el jengibre y corta la zanahoria en tiras finas.",
      "Saltea el pollo con jengibre y zanahoria en una sartén.",
      "Comprueba que el pollo alcance 74 °C y sirve sobre el arroz."
    ]
  },
  {
    "titulo": "Arroz con porotos negros",
    "ids": [
      "arroz",
      "poroto",
      "pimenton",
      "cebolla"
    ],
    "pasos": [
      "Cuece los porotos negros previamente remojados hasta ablandar.",
      "Sofríe cebolla y pimentón picados.",
      "Cuece el arroz por separado hasta que esté tierno.",
      "Mezcla arroz, porotos y sofrito y calienta antes de servir."
    ]
  },
  {
    "titulo": "Papas al romero con pollo",
    "ids": [
      "papa",
      "romero",
      "pollo",
      "ajo"
    ],
    "pasos": [
      "Corta las papas en gajos y mézclalas con romero y ajo.",
      "Distribúyelas en una fuente con el pollo.",
      "Hornea a 200 °C y voltea los ingredientes a mitad del tiempo.",
      "Retira cuando las papas estén tiernas y el pollo alcance 74 °C."
    ]
  },
  {
    "titulo": "Tallarines al pesto de espinaca",
    "ids": [
      "pasta",
      "espinaca",
      "ajo",
      "queso"
    ],
    "pasos": [
      "Cuece la pasta en agua hirviendo hasta que esté al dente.",
      "Lava la espinaca y escáldala brevemente.",
      "Tritura espinaca, ajo, queso y un poco de agua de cocción.",
      "Mezcla la salsa con la pasta escurrida y sirve."
    ]
  },
  {
    "titulo": "Arroz cremoso con zapallo",
    "ids": [
      "arroz",
      "zapallo",
      "cebolla",
      "queso"
    ],
    "pasos": [
      "Cuece el zapallo en cubos hasta que esté tierno.",
      "Sofríe cebolla picada y agrega el arroz.",
      "Añade agua caliente poco a poco y remueve durante la cocción.",
      "Incorpora el zapallo aplastado y el queso hasta lograr una textura cremosa."
    ]
  },
  {
    "titulo": "Ensalada de garbanzos y betarraga",
    "ids": [
      "garbanzo",
      "betarraga",
      "pepino",
      "limon"
    ],
    "pasos": [
      "Cuece la betarraga hasta que esté tierna y deja enfriar.",
      "Cuece o escurre garbanzos previamente cocidos.",
      "Lava y corta el pepino y la betarraga en cubos.",
      "Mezcla con los garbanzos y aliña con limón."
    ]
  },
  {
    "titulo": "Tortitas de choclo y avena",
    "ids": [
      "choclo",
      "avena",
      "huevo",
      "cebolla"
    ],
    "pasos": [
      "Cuece el choclo y deja escurrir.",
      "Tritura una parte del choclo con avena y huevo batido.",
      "Incorpora cebolla picada y el resto de los granos.",
      "Forma tortitas y cocínalas por ambos lados hasta que el huevo cuaje."
    ]
  },
  {
    "titulo": "Budín de brócoli y zanahoria",
    "ids": [
      "brocoli",
      "zanahoria",
      "huevo",
      "queso"
    ],
    "pasos": [
      "Cuece el brócoli al vapor y ralla la zanahoria.",
      "Bate los huevos y mezcla con las verduras y queso rallado.",
      "Vierte en una fuente pequeña ligeramente aceitada.",
      "Hornea a 180 °C hasta que el centro esté firme y completamente cocido."
    ]
  },
  {
    "titulo": "Polenta cremosa con champiñones",
    "ids": [
      "polenta",
      "champinon",
      "cebolla",
      "queso"
    ],
    "pasos": [
      "Calienta agua en una olla y agrega la polenta en forma de lluvia.",
      "Revuelve y cocina según el tiempo indicado en el envase.",
      "Saltea cebolla y champiñones laminados hasta dorar.",
      "Incorpora queso a la polenta y sirve cubierta con los champiñones."
    ]
  },
  {
    "titulo": "Sopa de lentejas con acelga",
    "ids": [
      "lenteja",
      "acelga",
      "zanahoria",
      "cebolla"
    ],
    "pasos": [
      "Cuece las lentejas en agua siguiendo las indicaciones del envase.",
      "Sofríe cebolla y zanahoria en cubos.",
      "Agrega el sofrito a las lentejas y cocina hasta ablandar.",
      "Incorpora acelga lavada y cortada y termina la cocción."
    ]
  },
  {
    "titulo": "Puré de arvejas con huevo",
    "ids": [
      "arveja",
      "papa",
      "huevo",
      "leche"
    ],
    "pasos": [
      "Cuece las arvejas y la papa hasta que estén tiernas.",
      "Escurre y tritura con un poco de leche caliente.",
      "Cuece los huevos hasta que estén firmes.",
      "Sirve el puré caliente acompañado de huevo cortado."
    ]
  },
  {
    "titulo": "Cuscús con pollo y limón",
    "ids": [
      "cuscus",
      "pollo",
      "limon",
      "pimenton"
    ],
    "pasos": [
      "Hidrata el cuscús siguiendo las instrucciones del envase.",
      "Corta el pollo y el pimentón en cubos pequeños.",
      "Saltea ambos hasta que el pollo alcance 74 °C.",
      "Mezcla con el cuscús y añade jugo de limón antes de servir."
    ]
  },
  {
    "titulo": "Quinoa con salmón y brócoli",
    "ids": [
      "quinoa",
      "salmon",
      "brocoli",
      "limon"
    ],
    "pasos": [
      "Lava y cuece la quinoa hasta que esté tierna.",
      "Cuece el brócoli al vapor.",
      "Cocina el salmón en horno a 190 °C hasta alcanzar 63 °C.",
      "Sirve sobre la quinoa con brócoli y jugo de limón."
    ]
  }
] as const;
const CANTIDADES:Record<string,string>={"carne":"300 g","zapallo":"300 g","papa":"350 g","choclo":"250 g","zanahoria":"180 g","arveja":"200 g","tomate":"250 g","cebolla":"100 g","huevo":"2 unidades","poroto":"200 g","pollo":"300 g","harina":"200 g","mantequilla":"40 g","leche":"180 ml","queso":"100 g","albahaca":"8 hojas","pescado":"300 g","limon":"1 unidad","perejil":"1 cucharada","pan":"4 rebanadas","ajo":"2 dientes","acelga":"250 g","garbanzo":"200 g","jengibre":"10 g","arroz":"150 g","pimenton":"1 unidad","romero":"1 cucharadita","pasta":"180 g","betarraga":"2 unidades","pepino":"1 unidad","avena":"100 g","brocoli":"250 g","champinon":"200 g","polenta":"150 g","lenteja":"180 g","cuscus":"150 g","quinoa":"150 g","salmon":"300 g"};
const TIEMPOS_COCCION:Record<string,number>={
 "Cazuela de vacuno con zapallo":90,"Carbonada casera":50,"Porotos granados":65,"Pastel de choclo":65
};
export const RECETAS_LOTE_10:Receta[]=FICHAS.map((f,i)=>({id:`lote-10-${i+1}`,titulo:f.titulo,descripcion:"Preparación para dos personas; cantidades orientativas.",tiempoPreparacion:"15 min",tiempoCoccion:`${TIEMPOS_COCCION[f.titulo]??( /ensalada|tostada|sandwich|sándwich|ceviche/i.test(f.titulo)?0:/sopa|guiso|cazuela|porotos|lentejas|estofado|pastel/i.test(f.titulo)?45:35)} min`,porciones:"2 personas",dificultad:"Fácil",ingredientes:f.ids.map(id=>`${CANTIDADES[id]} de ${id}`),pasos:[...f.pasos],costoAproximado:"Medio",preferencia:"Catálogo editorial sin IA",ingredientesCoincidentes:[],ingredientesFaltantes:[],porcentajeCoincidencia:0}));
