/** 54 recetas base adicionales con preparación específica y cantidades orientativas para dos personas.
 * Revisión culinaria y de alérgenos pendiente antes de lanzamiento comercial.
 */
import type { Receta } from "./recipes.functions";
const FICHAS = [
  {
    "titulo": "Arroz salteado con tomate",
    "ids": [
      "arroz",
      "tomate",
      "cebolla"
    ],
    "pasos": [
      "Cuece el arroz en agua durante 15 a 20 minutos, hasta que esté tierno, y escúrrelo si es necesario.",
      "Lava y corta el tomate en cubos pequeños; pela y pica la cebolla.",
      "Saltea la cebolla en una sartén con un poco de aceite durante 4 minutos; añade el tomate y cocina 3 minutos más.",
      "Incorpora el arroz cocido y saltea 2 a 3 minutos, removiendo hasta que esté bien caliente."
    ]
  },
  {
    "titulo": "Arroz guisado con cebolla",
    "ids": [
      "arroz",
      "cebolla"
    ],
    "pasos": [
      "Pela la cebolla y córtala en cubos pequeños.",
      "Sofríe la cebolla en una olla con un poco de aceite durante 5 minutos, hasta que esté tierna.",
      "Añade el arroz seco y remueve durante 1 minuto para impregnarlo con el sofrito.",
      "Agrega agua caliente según la proporción del envase; tapa y cocina a fuego bajo durante 15 a 20 minutos, hasta que el arroz esté tierno."
    ]
  },
  {
    "titulo": "Arroz al horno con zanahoria",
    "ids": [
      "arroz",
      "zanahoria"
    ],
    "pasos": [
      "Cuece el arroz en agua durante 15 a 20 minutos, hasta que esté tierno; escúrrelo si es necesario.",
      "Lava, pela y ralla la zanahoria; saltéala en una sartén con un poco de aceite durante 5 minutos.",
      "Mezcla el arroz cocido con la zanahoria salteada y coloca la preparación en una fuente apta para horno.",
      "Hornea a 190 °C durante 10 minutos, hasta que esté bien caliente, y sirve."
    ]
  },
  {
    "titulo": "Arroz cremoso con espinaca",
    "ids": [
      "arroz",
      "espinaca"
    ],
    "pasos": [
      "Lava la espinaca, retira los tallos duros y corta las hojas en tiras.",
      "Coloca el arroz en una olla con agua caliente según el envase y cocina a fuego medio-bajo, removiendo ocasionalmente.",
      "Agrega la espinaca cuando falten unos 5 minutos para terminar la cocción y mezcla hasta que se ablande.",
      "Añade pequeñas cantidades de agua caliente si hace falta y remueve hasta que el arroz esté tierno y tenga una textura cremosa; sirve de inmediato."
    ]
  },
  {
    "titulo": "Arroz salteado con zapallo",
    "ids": [
      "arroz",
      "zapallo"
    ],
    "pasos": [
      "Cuece el arroz en agua durante 15 a 20 minutos, hasta que esté tierno, y escúrrelo si es necesario.",
      "Pela el zapallo y córtalo en cubos pequeños; cuécelo en agua durante 8 a 12 minutos, hasta que esté tierno, y escúrrelo.",
      "Calienta una sartén con un poco de aceite y saltea los cubos de zapallo durante 3 minutos, evitando deshacerlos.",
      "Agrega el arroz cocido y saltea 2 a 3 minutos más, hasta que todo esté bien caliente."
    ]
  },
  {
    "titulo": "Arroz con salsa de queso",
    "ids": [
      "arroz",
      "queso"
    ],
    "pasos": [
      "Cuece el arroz con agua hasta que esté tierno (aproximadamente 15 a 20 minutos).",
      "Ralla o corta el queso y resérvalo.",
      "Escurre el arroz si queda agua; devuelve a la olla a fuego bajo y agrega el queso con dos cucharadas de agua caliente.",
      "Remueve hasta que el queso se funda y cubra el arroz; sirve de inmediato."
    ]
  },
  {
    "titulo": "Arroz salteado con pollo",
    "ids": [
      "arroz",
      "pollo"
    ],
    "pasos": [
      "Cuece el arroz en agua durante 15 a 20 minutos hasta que esté tierno y escúrrelo si es necesario.",
      "Corta el pollo crudo en cubos sobre una tabla separada y lávate las manos después de manipularlo.",
      "Dora el pollo en una sartén con un poco de aceite durante 8 a 12 minutos, hasta que alcance 74 °C en el centro.",
      "Incorpora el arroz cocido a la sartén y saltea durante 2 a 3 minutos hasta que todo esté bien caliente."
    ]
  },
  {
    "titulo": "Arroz guisado con atún",
    "ids": [
      "arroz",
      "atun"
    ],
    "pasos": [
      "Cuece el arroz en agua durante 15 a 20 minutos hasta que esté tierno.",
      "Abre la conserva de atún y escurre su líquido justo antes de incorporarla.",
      "Calienta una sartén con un poco de aceite, agrega el arroz cocido y remueve durante 2 minutos.",
      "Incorpora el atún escurrido, mezcla suavemente y calienta 2 minutos más sin resecarlo."
    ]
  },
  {
    "titulo": "Arroz al horno con garbanzos",
    "ids": [
      "arroz",
      "garbanzo"
    ],
    "pasos": [
      "Cuece el arroz en agua durante 15 a 20 minutos y escúrrelo si es necesario.",
      "Enjuaga y escurre los garbanzos previamente cocidos; no uses garbanzos secos sin cocer.",
      "Mezcla el arroz cocido con los garbanzos y una cucharada de aceite en una fuente apta para horno.",
      "Hornea a 190 °C durante 10 a 12 minutos hasta que la preparación esté bien caliente."
    ]
  },
  {
    "titulo": "Papas salteadas con tomate",
    "ids": [
      "papa",
      "tomate",
      "cebolla"
    ],
    "pasos": [
      "Lava, pela y corta las papas en cubos; cuécelas en agua durante 12 a 15 minutos hasta que estén tiernas y escúrrelas.",
      "Lava y corta el tomate en cubos pequeños; pela y pica la cebolla.",
      "Saltea la cebolla en una sartén con un poco de aceite durante 4 minutos; añade el tomate y cocina 3 minutos más.",
      "Agrega las papas cocidas y saltea durante 3 minutos, removiendo con cuidado para no deshacerlas."
    ]
  },
  {
    "titulo": "Papas guisadas con cebolla",
    "ids": [
      "papa",
      "cebolla"
    ],
    "pasos": [
      "Lava, pela y corta las papas en cubos medianos.",
      "Pela y pica la cebolla; sofríela en una olla con un poco de aceite durante 5 minutos.",
      "Agrega las papas y agua suficiente para cubrir parcialmente; tapa y cocina a fuego medio durante 15 a 20 minutos.",
      "Comprueba que las papas estén tiernas, destapa para reducir el líquido si hace falta y sirve caliente."
    ]
  },
  {
    "titulo": "Papas al horno con zanahoria",
    "ids": [
      "papa",
      "zanahoria"
    ],
    "pasos": [
      "Lava, pela y corta las papas en cubos; hiérvelas durante 12 a 15 minutos hasta que estén casi tiernas y escúrrelas.",
      "Lava, pela y corta la zanahoria en rodajas delgadas; cuécela durante 8 a 10 minutos hasta ablandarla.",
      "Mezcla las papas y la zanahoria con una cucharada de aceite en una fuente para horno y distribúyelas en una sola capa.",
      "Hornea a 190 °C durante 15 minutos, hasta que las verduras estén tiernas y ligeramente doradas; sirve caliente."
    ]
  },
  {
    "titulo": "Papas cremosas con espinaca",
    "ids": [
      "papa",
      "espinaca"
    ],
    "pasos": [
      "Lava, pela y corta las papas; hiérvelas durante 15 a 20 minutos hasta que estén tiernas y escúrrelas.",
      "Lava la espinaca, retira los tallos duros y córtala en tiras.",
      "Saltea la espinaca durante 3 a 4 minutos en una sartén con un poco de aceite hasta que pierda volumen.",
      "Machaca las papas con un poco del agua de cocción reservada hasta obtener una textura cremosa; incorpora la espinaca y calienta 2 minutos."
    ]
  },
  {
    "titulo": "Papas salteadas con zapallo",
    "ids": [
      "papa",
      "zapallo"
    ],
    "pasos": [
      "Lava, pela y corta las papas en cubos; cuécelas durante 12 a 15 minutos hasta que estén tiernas y escúrrelas.",
      "Pela el zapallo, retira las semillas y córtalo en cubos pequeños de tamaño uniforme.",
      "Saltea los cubos de zapallo en una sartén con un poco de aceite durante 10 a 12 minutos, añadiendo un poco de agua si es necesario, hasta ablandarlos.",
      "Incorpora las papas cocidas y saltea durante 3 minutos más, mezclando con cuidado para conservar los cubos."
    ]
  },
  {
    "titulo": "Papas con salsa de queso",
    "ids": [
      "papa",
      "queso"
    ],
    "pasos": [
      "Lava, pela y corta las papas; cuécelas en agua hirviendo durante 15 a 20 minutos, hasta que estén tiernas.",
      "Ralla el queso mientras se cuecen las papas.",
      "Escurre las papas, reserva dos cucharadas del agua de cocción y añade el queso con el agua caliente.",
      "Remueve a fuego bajo hasta que el queso se funda y cubra las papas; sirve caliente."
    ]
  },
  {
    "titulo": "Papas salteadas con pollo",
    "ids": [
      "papa",
      "pollo"
    ],
    "pasos": [
      "Lava, pela y corta las papas en cubos; cuécelas durante 12 a 15 minutos hasta que estén tiernas y escúrrelas.",
      "Corta el pollo crudo en cubos sobre una tabla separada de las verduras y lávate las manos después de manipularlo.",
      "Cocina el pollo en una sartén con un poco de aceite durante 8 a 12 minutos, hasta que el centro alcance 74 °C.",
      "Agrega las papas cocidas al pollo ya completamente cocido y saltea 3 minutos hasta calentar de manera uniforme."
    ]
  },
  {
    "titulo": "Papas guisadas con atún",
    "ids": [
      "papa",
      "atun"
    ],
    "pasos": [
      "Lava, pela y corta las papas en cubos medianos.",
      "Coloca las papas en una olla con agua suficiente para cubrirlas parcialmente; cocina tapado durante 15 a 20 minutos hasta que estén tiernas.",
      "Escurre el atún en conserva y desmenúzalo con un tenedor limpio.",
      "Incorpora el atún a las papas cocidas y calienta 2 a 3 minutos, mezclando suavemente; sirve de inmediato."
    ]
  },
  {
    "titulo": "Papas al horno con lentejas",
    "ids": [
      "papa",
      "lenteja"
    ],
    "pasos": [
      "Lava, pela y corta las papas en cubos de 2 cm; hiérvelas 12 a 15 minutos hasta que estén casi tiernas y escúrrelas.",
      "Enjuaga y escurre las lentejas previamente cocidas; si están secas, cuécelas antes según el envase.",
      "Mezcla las papas y las lentejas cocidas con una cucharada de aceite en una fuente apta para horno.",
      "Hornea a 190 °C durante 12 a 15 minutos hasta que las papas estén completamente tiernas y la preparación caliente; sirve."
    ]
  },
  {
    "titulo": "Pasta salteada con tomate",
    "ids": [
      "pasta",
      "tomate",
      "cebolla"
    ],
    "pasos": [
      "Cuece la pasta en agua hirviendo según el envase y reserva dos cucharadas del agua de cocción.",
      "Lava y corta el tomate en cubos pequeños.",
      "Saltea el tomate en una sartén con aceite durante 5 a 7 minutos, hasta que suelte jugo.",
      "Incorpora la pasta escurrida y el agua reservada; mezcla 2 minutos y sirve caliente."
    ]
  },
  {
    "titulo": "Pasta guisada con cebolla",
    "ids": [
      "pasta",
      "cebolla"
    ],
    "pasos": [
      "Cuece la pasta en agua hirviendo según el envase; reserva un poco de agua de cocción.",
      "Pela la cebolla y córtala en tiras finas.",
      "Sofríe la cebolla en una sartén con aceite durante 8 a 10 minutos, hasta que esté tierna y dorada.",
      "Añade la pasta cocida y dos cucharadas de su agua; mezcla 2 minutos y sirve."
    ]
  },
  {
    "titulo": "Pasta al horno con zanahoria",
    "ids": [
      "pasta",
      "zanahoria"
    ],
    "pasos": [
      "Cuece la pasta en agua hirviendo 2 minutos menos que el tiempo del envase y escúrrela.",
      "Pela y ralla la zanahoria; saltéala con aceite durante 5 minutos.",
      "Mezcla la pasta y la zanahoria con un poco de agua de cocción en una fuente apta para horno.",
      "Hornea a 190 °C durante 10 a 12 minutos hasta que la pasta esté tierna y bien caliente."
    ]
  },
  {
    "titulo": "Pasta cremosa con espinaca",
    "ids": [
      "pasta",
      "espinaca"
    ],
    "pasos": [
      "Cuece la pasta según el envase y reserva media taza del agua de cocción.",
      "Lava la espinaca y córtala en tiras, retirando los tallos duros.",
      "Saltea la espinaca con aceite durante 3 minutos y agrega gradualmente agua de cocción.",
      "Incorpora la pasta y remueve 2 minutos hasta formar una salsa ligera que la recubra."
    ]
  },
  {
    "titulo": "Pasta salteada con zapallo",
    "ids": [
      "pasta",
      "zapallo"
    ],
    "pasos": [
      "Cuece la pasta según el envase y escúrrela.",
      "Pela el zapallo, retira las semillas y córtalo en cubos pequeños.",
      "Saltea el zapallo con aceite durante 10 a 12 minutos, añadiendo agua si hace falta, hasta que esté tierno.",
      "Agrega la pasta cocida y mezcla 2 a 3 minutos hasta que todo esté caliente."
    ]
  },
  {
    "titulo": "Pasta con salsa de queso",
    "ids": [
      "pasta",
      "queso"
    ],
    "pasos": [
      "Cuece la pasta en agua hirviendo según el tiempo indicado en el envase.",
      "Ralla el queso y reserva dos cucharadas del agua caliente de cocción de la pasta.",
      "Escurre la pasta y devuélvela a la olla a fuego bajo con el queso y el agua reservada.",
      "Remueve hasta que el queso se funda y forme una salsa ligera; sirve de inmediato."
    ]
  },
  {
    "titulo": "Pasta salteada con pollo",
    "ids": [
      "pasta",
      "pollo"
    ],
    "pasos": [
      "Cuece la pasta según el envase y escúrrela.",
      "Corta el pollo crudo en cubos usando una tabla separada y lávate las manos.",
      "Cocina el pollo en una sartén con aceite durante 8 a 12 minutos, hasta que alcance 74 °C en el centro.",
      "Añade la pasta cocida y saltea 2 minutos hasta integrar los ingredientes."
    ]
  },
  {
    "titulo": "Pasta guisada con atún",
    "ids": [
      "pasta",
      "atun"
    ],
    "pasos": [
      "Cuece la pasta según el envase y reserva dos cucharadas del agua de cocción.",
      "Abre la conserva de atún y escúrrela.",
      "Calienta la pasta en una sartén con aceite y el agua reservada durante 2 minutos.",
      "Agrega el atún escurrido, mezcla suavemente y calienta 2 minutos más sin resecarlo."
    ]
  },
  {
    "titulo": "Pasta al horno con garbanzos",
    "ids": [
      "pasta",
      "garbanzo"
    ],
    "pasos": [
      "Cuece la pasta 2 minutos menos de lo indicado en el envase y escúrrela.",
      "Enjuaga y escurre garbanzos previamente cocidos; nunca uses garbanzos secos sin cocer.",
      "Mezcla la pasta y los garbanzos con aceite y un poco de agua de cocción en una fuente.",
      "Hornea a 190 °C durante 12 a 15 minutos hasta que la pasta esté tierna y todo esté caliente."
    ]
  },
  {
    "titulo": "Lentejas salteadas con tomate",
    "ids": [
      "lenteja",
      "tomate",
      "cebolla"
    ],
    "pasos": [
      "Utiliza lentejas previamente cocidas y escurridas; si están secas, cuécelas según el envase antes de empezar.",
      "Lava el tomate y córtalo en cubos pequeños.",
      "Saltea el tomate con aceite durante 5 minutos hasta que se ablande y suelte jugo.",
      "Añade las lentejas cocidas y calienta 4 a 5 minutos, removiendo suavemente."
    ]
  },
  {
    "titulo": "Lentejas guisadas con cebolla",
    "ids": [
      "lenteja",
      "cebolla"
    ],
    "pasos": [
      "Utiliza lentejas previamente cocidas; si están secas, cuécelas primero según el envase.",
      "Pela la cebolla y pícala finamente.",
      "Sofríe la cebolla con aceite durante 6 a 8 minutos hasta que esté tierna.",
      "Incorpora las lentejas y un poco de agua; cocina tapado 8 minutos a fuego bajo."
    ]
  },
  {
    "titulo": "Lentejas al horno con zanahoria",
    "ids": [
      "lenteja",
      "zanahoria"
    ],
    "pasos": [
      "Utiliza lentejas cocidas y escurridas; cocina las secas previamente según el envase.",
      "Pela la zanahoria, córtala en cubos pequeños y hiérvela 8 minutos.",
      "Mezcla las lentejas y la zanahoria con aceite en una fuente apta para horno.",
      "Hornea a 190 °C durante 12 a 15 minutos hasta que todo esté caliente y la zanahoria tierna."
    ]
  },
  {
    "titulo": "Lentejas cremosas con espinaca",
    "ids": [
      "lenteja",
      "espinaca"
    ],
    "pasos": [
      "Utiliza lentejas ya cocidas; si están secas, cuécelas previamente según el envase.",
      "Lava la espinaca y retira los tallos duros.",
      "Saltea la espinaca con aceite durante 3 minutos hasta que reduzca su volumen.",
      "Añade las lentejas y un poco de agua; machaca una pequeña parte y cocina 5 minutos para espesar."
    ]
  },
  {
    "titulo": "Lentejas salteadas con zapallo",
    "ids": [
      "lenteja",
      "zapallo"
    ],
    "pasos": [
      "Utiliza lentejas cocidas y escurridas; cocina las secas previamente.",
      "Pela el zapallo, retira las semillas y córtalo en cubos pequeños.",
      "Saltea el zapallo con aceite y un poco de agua durante 10 a 12 minutos hasta que esté tierno.",
      "Agrega las lentejas y calienta 4 minutos, removiendo con cuidado."
    ]
  },
  {
    "titulo": "Lentejas con salsa de queso",
    "ids": [
      "lenteja",
      "queso"
    ],
    "pasos": [
      "Enjuaga las lentejas secas y cuécelas en agua durante 25 a 35 minutos, hasta que estén tiernas.",
      "Ralla el queso mientras se cuecen las lentejas.",
      "Escurre las lentejas, reserva dos cucharadas de agua caliente de cocción y añade el queso.",
      "Remueve a fuego bajo hasta que el queso se funda y se distribuya entre las lentejas; sirve caliente."
    ]
  },
  {
    "titulo": "Lentejas salteadas con arroz",
    "ids": [
      "lenteja",
      "arroz"
    ],
    "pasos": [
      "Utiliza lentejas previamente cocidas y escurridas.",
      "Cuece el arroz en agua según el envase durante unos 15 a 20 minutos.",
      "Calienta aceite en una sartén e incorpora el arroz cocido y escurrido.",
      "Añade las lentejas cocidas y saltea 4 minutos hasta que ambos ingredientes estén calientes."
    ]
  },
  {
    "titulo": "Lentejas guisadas con papas",
    "ids": [
      "lenteja",
      "papa"
    ],
    "pasos": [
      "Utiliza lentejas previamente cocidas; cocina las secas antes según el envase.",
      "Pela las papas y córtalas en cubos de tamaño uniforme.",
      "Cuece las papas en una olla con agua durante 12 a 15 minutos hasta que estén tiernas.",
      "Agrega las lentejas cocidas y cocina 5 minutos más con un poco del agua para formar un guiso."
    ]
  },
  {
    "titulo": "Lentejas al horno con huevo",
    "ids": [
      "lenteja",
      "huevo"
    ],
    "pasos": [
      "Utiliza lentejas cocidas y escurridas; cocina las secas previamente.",
      "Coloca las lentejas en una fuente pequeña apta para horno y haz dos huecos.",
      "Casca los huevos en los huecos, evitando que caigan restos de cáscara.",
      "Hornea a 190 °C durante 15 a 20 minutos, hasta que las claras y las yemas estén completamente cuajadas."
    ]
  },
  {
    "titulo": "Garbanzos salteados con tomate",
    "ids": [
      "garbanzo",
      "tomate",
      "cebolla"
    ],
    "pasos": [
      "Enjuaga y escurre garbanzos previamente cocidos; no utilices garbanzos secos sin cocer.",
      "Lava el tomate y córtalo en cubos pequeños.",
      "Saltea el tomate con aceite durante 5 minutos hasta que suelte jugo.",
      "Incorpora los garbanzos cocidos y saltea 4 minutos hasta que estén calientes."
    ]
  },
  {
    "titulo": "Garbanzos guisados con cebolla",
    "ids": [
      "garbanzo",
      "cebolla"
    ],
    "pasos": [
      "Enjuaga y escurre los garbanzos previamente cocidos.",
      "Pela la cebolla y córtala en tiras finas.",
      "Sofríe la cebolla con aceite durante 7 a 8 minutos hasta que esté tierna.",
      "Añade los garbanzos y un poco de agua; cocina tapado durante 8 minutos."
    ]
  },
  {
    "titulo": "Garbanzos al horno con zanahoria",
    "ids": [
      "garbanzo",
      "zanahoria"
    ],
    "pasos": [
      "Enjuaga y escurre garbanzos previamente cocidos.",
      "Pela la zanahoria, córtala en cubos pequeños y hiérvela 8 minutos.",
      "Mezcla los garbanzos y la zanahoria con aceite en una fuente apta para horno.",
      "Hornea a 190 °C durante 12 a 15 minutos hasta que la zanahoria esté tierna y todo caliente."
    ]
  },
  {
    "titulo": "Garbanzos cremosos con espinaca",
    "ids": [
      "garbanzo",
      "espinaca"
    ],
    "pasos": [
      "Enjuaga y escurre garbanzos previamente cocidos.",
      "Lava la espinaca y retira los tallos duros.",
      "Saltea la espinaca con aceite durante 3 minutos hasta que se ablande.",
      "Agrega los garbanzos y un poco de agua; machaca una parte y cocina 5 minutos hasta espesar."
    ]
  },
  {
    "titulo": "Garbanzos salteados con zapallo",
    "ids": [
      "garbanzo",
      "zapallo"
    ],
    "pasos": [
      "Enjuaga y escurre garbanzos previamente cocidos.",
      "Pela el zapallo, retira las semillas y córtalo en cubos pequeños.",
      "Saltea el zapallo con aceite y un poco de agua durante 10 a 12 minutos hasta que esté tierno.",
      "Añade los garbanzos y calienta 4 minutos, removiendo suavemente."
    ]
  },
  {
    "titulo": "Garbanzos con salsa de queso",
    "ids": [
      "garbanzo",
      "queso"
    ],
    "pasos": [
      "Enjuaga y escurre los garbanzos ya cocidos.",
      "Ralla el queso y calienta dos cucharadas de agua en una sartén a fuego bajo.",
      "Añade el queso al agua caliente y remueve suavemente hasta que se funda.",
      "Incorpora los garbanzos y calienta durante 3 a 5 minutos, removiendo hasta cubrirlos con la salsa."
    ]
  },
  {
    "titulo": "Garbanzos salteados con arroz",
    "ids": [
      "garbanzo",
      "arroz"
    ],
    "pasos": [
      "Enjuaga y escurre garbanzos previamente cocidos.",
      "Cuece el arroz según el envase durante unos 15 a 20 minutos y escúrrelo si hace falta.",
      "Calienta una sartén con aceite y añade el arroz cocido.",
      "Incorpora los garbanzos cocidos y saltea 4 minutos hasta que todo esté caliente."
    ]
  },
  {
    "titulo": "Garbanzos guisados con papas",
    "ids": [
      "garbanzo",
      "papa"
    ],
    "pasos": [
      "Enjuaga y escurre garbanzos previamente cocidos.",
      "Pela las papas y córtalas en cubos pequeños.",
      "Cuece las papas en agua durante 12 a 15 minutos hasta que estén tiernas.",
      "Agrega los garbanzos cocidos y cocina 5 minutos más con un poco de agua para formar un guiso."
    ]
  },
  {
    "titulo": "Garbanzos al horno con huevo",
    "ids": [
      "garbanzo",
      "huevo"
    ],
    "pasos": [
      "Enjuaga y escurre garbanzos previamente cocidos.",
      "Coloca los garbanzos en una fuente pequeña apta para horno y forma dos huecos.",
      "Casca los huevos en los huecos sin incorporar restos de cáscara.",
      "Hornea a 190 °C durante 15 a 20 minutos hasta que las claras y yemas estén completamente cuajadas."
    ]
  },
  {
    "titulo": "Huevos revueltos con tomate",
    "ids": [
      "huevo",
      "tomate",
      "cebolla"
    ],
    "pasos": [
      "Lava el tomate y la cebolla; córtalos en cubos pequeños.",
      "Saltea la cebolla con un poco de aceite durante 3 minutos y añade el tomate durante 2 minutos más.",
      "Bate los huevos en un recipiente limpio y viértelos sobre las verduras.",
      "Remueve a fuego medio-bajo hasta que los huevos estén completamente cuajados; sirve de inmediato."
    ]
  },
  {
    "titulo": "Huevos encebollados",
    "ids": [
      "huevo",
      "cebolla"
    ],
    "pasos": [
      "Pela la cebolla y córtala en tiras finas.",
      "Saltea la cebolla con un poco de aceite durante 5 a 8 minutos, hasta que esté tierna.",
      "Bate los huevos en un recipiente limpio y agrégalos a la sartén con la cebolla.",
      "Remueve a fuego medio-bajo hasta que los huevos estén completamente cuajados; sirve caliente."
    ]
  },
  {
    "titulo": "Tortilla de zanahoria",
    "ids": [
      "huevo",
      "zanahoria"
    ],
    "pasos": [
      "Lava, pela y ralla la zanahoria.",
      "Saltea la zanahoria con un poco de aceite durante 5 minutos hasta que se ablande.",
      "Bate los huevos y mézclalos con la zanahoria tibia.",
      "Vierte la mezcla en una sartén a fuego medio-bajo y cocina por ambos lados hasta que el huevo esté completamente cuajado."
    ]
  },
  {
    "titulo": "Omelette de espinaca",
    "ids": [
      "huevo",
      "espinaca"
    ],
    "pasos": [
      "Lava la espinaca y córtala en tiras.",
      "Saltea la espinaca durante 2 a 3 minutos y escurre el exceso de líquido.",
      "Bate los huevos y viértelos en una sartén antiadherente a fuego medio-bajo.",
      "Cuando comiencen a cuajar, agrega la espinaca, dobla el omelette y cocina hasta que el huevo esté completamente cuajado."
    ]
  },
  {
    "titulo": "Frittata de zapallo",
    "ids": [
      "huevo",
      "zapallo"
    ],
    "pasos": [
      "Pela y corta el zapallo en cubos pequeños.",
      "Cuece el zapallo en agua durante 8 a 12 minutos hasta que esté tierno y escúrrelo.",
      "Bate los huevos y mézclalos con el zapallo; vierte en una sartén ligeramente aceitada.",
      "Cocina a fuego medio-bajo con la sartén tapada hasta que el huevo esté completamente cuajado."
    ]
  },
  {
    "titulo": "Huevos gratinados con queso",
    "ids": [
      "huevo",
      "queso"
    ],
    "pasos": [
      "Precalienta el horno a 190 °C y engrasa una fuente pequeña.",
      "Bate los huevos y vierte la mezcla en la fuente.",
      "Distribuye el queso rallado sobre los huevos.",
      "Hornea aproximadamente 15 a 20 minutos, hasta que el huevo esté completamente cuajado y el queso dorado."
    ]
  },
  {
    "titulo": "Arroz con huevo a la sartén",
    "ids": [
      "huevo",
      "arroz"
    ],
    "pasos": [
      "Cuece el arroz en agua durante 15 a 20 minutos, hasta que esté tierno, y escúrrelo si es necesario.",
      "Bate los huevos en un recipiente limpio.",
      "Calienta el arroz cocido en una sartén con un poco de aceite durante 2 minutos.",
      "Vierte los huevos batidos y remueve hasta que estén completamente cuajados e integrados con el arroz."
    ]
  },
  {
    "titulo": "Tortilla de papas en cubos",
    "ids": [
      "huevo",
      "papa"
    ],
    "pasos": [
      "Lava, pela y corta las papas en cubos pequeños.",
      "Cuece los cubos de papa en agua hirviendo durante 10 a 15 minutos, hasta que estén tiernos; escúrrelos.",
      "Bate los huevos en un recipiente limpio y mézclalos con las papas cocidas.",
      "Vierte la mezcla en una sartén ligeramente aceitada y cocina por ambos lados hasta que el huevo esté completamente cuajado."
    ]
  },
  {
    "titulo": "Revuelto de pollo y huevo",
    "ids": [
      "huevo",
      "pollo"
    ],
    "pasos": [
      "Corta el pollo en cubos pequeños y cocínalo en una sartén con un poco de aceite hasta alcanzar 74 °C en el centro.",
      "Bate los huevos en un recipiente limpio mientras se cocina el pollo.",
      "Reduce el fuego, añade los huevos batidos a la sartén con el pollo ya cocido y mezcla suavemente.",
      "Cocina removiendo hasta que los huevos estén completamente cuajados; sirve de inmediato."
    ]
  }
];
const CANTIDADES: Record<string,string> = {"arroz":"150 g","papa":"320 g","pasta":"180 g","lenteja":"170 g","garbanzo":"190 g","huevo":"3 unidades","tomate":"200 g","cebolla":"100 g","zanahoria":"150 g","espinaca":"140 g","zapallo":"260 g","queso":"70 g","pollo":"260 g","atun":"140 g"};
const TIEMPOS_CORREGIDOS: Record<string, string> = {
  "Arroz salteado con tomate": "25 min",
  "Arroz guisado con cebolla": "25 min",
  "Arroz al horno con zanahoria": "30 min",
  "Arroz cremoso con espinaca": "25 min",
  "Arroz salteado con zapallo": "30 min",
  "Papas con salsa de queso": "20 min",
  "Pasta con salsa de queso": "15 min",
  "Lentejas con salsa de queso": "35 min",
  "Garbanzos con salsa de queso": "10 min",
  "Huevos revueltos con tomate": "10 min",
  "Huevos encebollados": "12 min",
  "Arroz con huevo a la sartén": "25 min",
  "Tortilla de papas en cubos": "25 min",
  "Revuelto de pollo y huevo": "20 min",

  "Arroz salteado con pollo": "25 min",
  "Arroz guisado con atún": "25 min",
  "Arroz al horno con garbanzos": "35 min",
  "Papas salteadas con tomate": "25 min",
  "Papas guisadas con cebolla": "25 min",
  "Arroz con salsa de queso": "25 min",
  "Tortilla de zanahoria": "20 min",
  "Omelette de espinaca": "12 min",
  "Frittata de zapallo": "25 min",
  "Huevos gratinados con queso": "20 min",
};
export const RECETAS_LOTE_2: Receta[] = FICHAS.map((f,i)=>({
 id:`lote2-${i+1}`,titulo:f.titulo,
 descripcion:"Preparación casera con cantidades orientativas para dos personas.",
 tiempoPreparacion:"15 min",tiempoCoccion:TIEMPOS_CORREGIDOS[f.titulo] ?? "40 min",porciones:"2 personas",dificultad:"Fácil",
 ingredientes:f.ids.map(id=>id === "garbanzo" ? "190 g de garbanzos cocidos y escurridos" : `${CANTIDADES[id]} de ${id}`),pasos:f.pasos,
 costoAproximado:"Medio",preferencia:"Catálogo local sin IA",
 ingredientesCoincidentes:[],ingredientesFaltantes:[],porcentajeCoincidencia:0
}));
