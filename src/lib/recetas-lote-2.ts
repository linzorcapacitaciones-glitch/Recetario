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
      "Cuece el arroz con agua hasta que esté tierno.",
      "Lava y prepara tomate en trozos pequeños.",
      "Saltea el acompañamiento con un poco de aceite; incorpora el ingrediente principal ya cocido.",
      "Calienta todo junto hasta integrar los sabores y sirve."
    ]
  },
  {
    "titulo": "Arroz guisado con cebolla",
    "ids": [
      "arroz",
      "cebolla"
    ],
    "pasos": [
      "Cuece el arroz con agua hasta que esté tierno.",
      "Lava y prepara cebolla en trozos pequeños.",
      "Saltea el acompañamiento con un poco de aceite; incorpora el ingrediente principal ya cocido.",
      "Calienta todo junto hasta integrar los sabores y sirve."
    ]
  },
  {
    "titulo": "Arroz al horno con zanahoria",
    "ids": [
      "arroz",
      "zanahoria"
    ],
    "pasos": [
      "Cuece el arroz con agua hasta que esté tierno.",
      "Lava y prepara zanahoria en trozos pequeños.",
      "Saltea el acompañamiento con un poco de aceite; incorpora el ingrediente principal ya cocido.",
      "Pasa a una fuente apta para horno y calienta a 190 °C hasta que la preparación esté bien caliente; sirve."
    ]
  },
  {
    "titulo": "Arroz cremoso con espinaca",
    "ids": [
      "arroz",
      "espinaca"
    ],
    "pasos": [
      "Cuece el arroz con agua hasta que esté tierno.",
      "Lava y prepara espinaca en trozos pequeños.",
      "Cocina el acompañamiento con un poco de agua y tritúralo si corresponde para formar una salsa.",
      "Calienta todo junto hasta integrar los sabores y sirve."
    ]
  },
  {
    "titulo": "Arroz salteado con zapallo",
    "ids": [
      "arroz",
      "zapallo"
    ],
    "pasos": [
      "Cuece el arroz con agua hasta que esté tierno.",
      "Lava y prepara zapallo en trozos pequeños.",
      "Saltea el acompañamiento con un poco de aceite; incorpora el ingrediente principal ya cocido.",
      "Calienta todo junto hasta integrar los sabores y sirve."
    ]
  },
  {
    "titulo": "Arroz con salsa de queso",
    "ids": [
      "arroz",
      "queso"
    ],
    "pasos": [
      "Cuece el arroz con agua hasta que esté tierno.",
      "Ralla o corta el queso y resérvalo.",
      "Cocina el acompañamiento con un poco de agua y tritúralo si corresponde para formar una salsa.",
      "Calienta todo junto hasta integrar los sabores y sirve."
    ]
  },
  {
    "titulo": "Arroz salteado con pollo",
    "ids": [
      "arroz",
      "pollo"
    ],
    "pasos": [
      "Cuece el arroz con agua hasta que esté tierno.",
      "Corta el pollo en trozos y cocínalo por completo hasta alcanzar 74 °C en el centro.",
      "Saltea el acompañamiento con un poco de aceite; incorpora el ingrediente principal ya cocido.",
      "Calienta todo junto hasta integrar los sabores y sirve."
    ]
  },
  {
    "titulo": "Arroz guisado con atún",
    "ids": [
      "arroz",
      "atun"
    ],
    "pasos": [
      "Cuece el arroz con agua hasta que esté tierno.",
      "Escurre el atún en conserva y resérvalo refrigerado hasta incorporarlo.",
      "Saltea el acompañamiento con un poco de aceite; incorpora el ingrediente principal ya cocido.",
      "Calienta todo junto hasta integrar los sabores y sirve."
    ]
  },
  {
    "titulo": "Arroz al horno con garbanzos",
    "ids": [
      "arroz",
      "garbanzo"
    ],
    "pasos": [
      "Cuece el arroz con agua hasta que esté tierno.",
      "Utiliza las legumbres previamente cocidas y escurridas.",
      "Saltea el acompañamiento con un poco de aceite; incorpora el ingrediente principal ya cocido.",
      "Pasa a una fuente apta para horno y calienta a 190 °C hasta que la preparación esté bien caliente; sirve."
    ]
  },
  {
    "titulo": "Papas salteados con tomate",
    "ids": [
      "papa",
      "tomate",
      "cebolla"
    ],
    "pasos": [
      "Lava, pela y cuece las papas hasta que estén tiernas.",
      "Lava y prepara tomate en trozos pequeños.",
      "Saltea el acompañamiento con un poco de aceite; incorpora el ingrediente principal ya cocido.",
      "Calienta todo junto hasta integrar los sabores y sirve."
    ]
  },
  {
    "titulo": "Papas guisados con cebolla",
    "ids": [
      "papa",
      "cebolla"
    ],
    "pasos": [
      "Lava, pela y cuece las papas hasta que estén tiernas.",
      "Lava y prepara cebolla en trozos pequeños.",
      "Saltea el acompañamiento con un poco de aceite; incorpora el ingrediente principal ya cocido.",
      "Calienta todo junto hasta integrar los sabores y sirve."
    ]
  },
  {
    "titulo": "Papas al horno con zanahoria",
    "ids": [
      "papa",
      "zanahoria"
    ],
    "pasos": [
      "Lava, pela y cuece las papas hasta que estén tiernas.",
      "Lava y prepara zanahoria en trozos pequeños.",
      "Saltea el acompañamiento con un poco de aceite; incorpora el ingrediente principal ya cocido.",
      "Pasa a una fuente apta para horno y calienta a 190 °C hasta que la preparación esté bien caliente; sirve."
    ]
  },
  {
    "titulo": "Papas cremosos con espinaca",
    "ids": [
      "papa",
      "espinaca"
    ],
    "pasos": [
      "Lava, pela y cuece las papas hasta que estén tiernas.",
      "Lava y prepara espinaca en trozos pequeños.",
      "Cocina el acompañamiento con un poco de agua y tritúralo si corresponde para formar una salsa.",
      "Calienta todo junto hasta integrar los sabores y sirve."
    ]
  },
  {
    "titulo": "Papas salteados con zapallo",
    "ids": [
      "papa",
      "zapallo"
    ],
    "pasos": [
      "Lava, pela y cuece las papas hasta que estén tiernas.",
      "Lava y prepara zapallo en trozos pequeños.",
      "Saltea el acompañamiento con un poco de aceite; incorpora el ingrediente principal ya cocido.",
      "Calienta todo junto hasta integrar los sabores y sirve."
    ]
  },
  {
    "titulo": "Papas con salsa de queso",
    "ids": [
      "papa",
      "queso"
    ],
    "pasos": [
      "Lava, pela y cuece las papas hasta que estén tiernas.",
      "Ralla o corta el queso y resérvalo.",
      "Cocina el acompañamiento con un poco de agua y tritúralo si corresponde para formar una salsa.",
      "Calienta todo junto hasta integrar los sabores y sirve."
    ]
  },
  {
    "titulo": "Papas salteados con pollo",
    "ids": [
      "papa",
      "pollo"
    ],
    "pasos": [
      "Lava, pela y cuece las papas hasta que estén tiernas.",
      "Corta el pollo en trozos y cocínalo por completo hasta alcanzar 74 °C en el centro.",
      "Saltea el acompañamiento con un poco de aceite; incorpora el ingrediente principal ya cocido.",
      "Calienta todo junto hasta integrar los sabores y sirve."
    ]
  },
  {
    "titulo": "Papas guisados con atún",
    "ids": [
      "papa",
      "atun"
    ],
    "pasos": [
      "Lava, pela y cuece las papas hasta que estén tiernas.",
      "Escurre el atún en conserva y resérvalo refrigerado hasta incorporarlo.",
      "Saltea el acompañamiento con un poco de aceite; incorpora el ingrediente principal ya cocido.",
      "Calienta todo junto hasta integrar los sabores y sirve."
    ]
  },
  {
    "titulo": "Papas al horno con lentejas",
    "ids": [
      "papa",
      "lenteja"
    ],
    "pasos": [
      "Lava, pela y cuece las papas hasta que estén tiernas.",
      "Utiliza las legumbres previamente cocidas y escurridas.",
      "Saltea el acompañamiento con un poco de aceite; incorpora el ingrediente principal ya cocido.",
      "Pasa a una fuente apta para horno y calienta a 190 °C hasta que la preparación esté bien caliente; sirve."
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
      "Cuece la pasta en agua hirviendo siguiendo el tiempo del envase.",
      "Lava y prepara tomate en trozos pequeños.",
      "Saltea el acompañamiento con un poco de aceite; incorpora el ingrediente principal ya cocido.",
      "Calienta todo junto hasta integrar los sabores y sirve."
    ]
  },
  {
    "titulo": "Pasta guisada con cebolla",
    "ids": [
      "pasta",
      "cebolla"
    ],
    "pasos": [
      "Cuece la pasta en agua hirviendo siguiendo el tiempo del envase.",
      "Lava y prepara cebolla en trozos pequeños.",
      "Saltea el acompañamiento con un poco de aceite; incorpora el ingrediente principal ya cocido.",
      "Calienta todo junto hasta integrar los sabores y sirve."
    ]
  },
  {
    "titulo": "Pasta al horno con zanahoria",
    "ids": [
      "pasta",
      "zanahoria"
    ],
    "pasos": [
      "Cuece la pasta en agua hirviendo siguiendo el tiempo del envase.",
      "Lava y prepara zanahoria en trozos pequeños.",
      "Saltea el acompañamiento con un poco de aceite; incorpora el ingrediente principal ya cocido.",
      "Pasa a una fuente apta para horno y calienta a 190 °C hasta que la preparación esté bien caliente; sirve."
    ]
  },
  {
    "titulo": "Pasta cremosa con espinaca",
    "ids": [
      "pasta",
      "espinaca"
    ],
    "pasos": [
      "Cuece la pasta en agua hirviendo siguiendo el tiempo del envase.",
      "Lava y prepara espinaca en trozos pequeños.",
      "Cocina el acompañamiento con un poco de agua y tritúralo si corresponde para formar una salsa.",
      "Calienta todo junto hasta integrar los sabores y sirve."
    ]
  },
  {
    "titulo": "Pasta salteada con zapallo",
    "ids": [
      "pasta",
      "zapallo"
    ],
    "pasos": [
      "Cuece la pasta en agua hirviendo siguiendo el tiempo del envase.",
      "Lava y prepara zapallo en trozos pequeños.",
      "Saltea el acompañamiento con un poco de aceite; incorpora el ingrediente principal ya cocido.",
      "Calienta todo junto hasta integrar los sabores y sirve."
    ]
  },
  {
    "titulo": "Pasta con salsa de queso",
    "ids": [
      "pasta",
      "queso"
    ],
    "pasos": [
      "Cuece la pasta en agua hirviendo siguiendo el tiempo del envase.",
      "Ralla o corta el queso y resérvalo.",
      "Cocina el acompañamiento con un poco de agua y tritúralo si corresponde para formar una salsa.",
      "Calienta todo junto hasta integrar los sabores y sirve."
    ]
  },
  {
    "titulo": "Pasta salteada con pollo",
    "ids": [
      "pasta",
      "pollo"
    ],
    "pasos": [
      "Cuece la pasta en agua hirviendo siguiendo el tiempo del envase.",
      "Corta el pollo en trozos y cocínalo por completo hasta alcanzar 74 °C en el centro.",
      "Saltea el acompañamiento con un poco de aceite; incorpora el ingrediente principal ya cocido.",
      "Calienta todo junto hasta integrar los sabores y sirve."
    ]
  },
  {
    "titulo": "Pasta guisada con atún",
    "ids": [
      "pasta",
      "atun"
    ],
    "pasos": [
      "Cuece la pasta en agua hirviendo siguiendo el tiempo del envase.",
      "Escurre el atún en conserva y resérvalo refrigerado hasta incorporarlo.",
      "Saltea el acompañamiento con un poco de aceite; incorpora el ingrediente principal ya cocido.",
      "Calienta todo junto hasta integrar los sabores y sirve."
    ]
  },
  {
    "titulo": "Pasta al horno con garbanzos",
    "ids": [
      "pasta",
      "garbanzo"
    ],
    "pasos": [
      "Cuece la pasta en agua hirviendo siguiendo el tiempo del envase.",
      "Utiliza las legumbres previamente cocidas y escurridas.",
      "Saltea el acompañamiento con un poco de aceite; incorpora el ingrediente principal ya cocido.",
      "Pasa a una fuente apta para horno y calienta a 190 °C hasta que la preparación esté bien caliente; sirve."
    ]
  },
  {
    "titulo": "Lentejas salteados con tomate",
    "ids": [
      "lenteja",
      "tomate",
      "cebolla"
    ],
    "pasos": [
      "Cuece las legumbres previamente remojadas cuando corresponda, siguiendo el tiempo del envase, o usa legumbres ya cocidas.",
      "Lava y prepara tomate en trozos pequeños.",
      "Saltea el acompañamiento con un poco de aceite; incorpora el ingrediente principal ya cocido.",
      "Calienta todo junto hasta integrar los sabores y sirve."
    ]
  },
  {
    "titulo": "Lentejas guisados con cebolla",
    "ids": [
      "lenteja",
      "cebolla"
    ],
    "pasos": [
      "Cuece las legumbres previamente remojadas cuando corresponda, siguiendo el tiempo del envase, o usa legumbres ya cocidas.",
      "Lava y prepara cebolla en trozos pequeños.",
      "Saltea el acompañamiento con un poco de aceite; incorpora el ingrediente principal ya cocido.",
      "Calienta todo junto hasta integrar los sabores y sirve."
    ]
  },
  {
    "titulo": "Lentejas al horno con zanahoria",
    "ids": [
      "lenteja",
      "zanahoria"
    ],
    "pasos": [
      "Cuece las legumbres previamente remojadas cuando corresponda, siguiendo el tiempo del envase, o usa legumbres ya cocidas.",
      "Lava y prepara zanahoria en trozos pequeños.",
      "Saltea el acompañamiento con un poco de aceite; incorpora el ingrediente principal ya cocido.",
      "Pasa a una fuente apta para horno y calienta a 190 °C hasta que la preparación esté bien caliente; sirve."
    ]
  },
  {
    "titulo": "Lentejas cremosos con espinaca",
    "ids": [
      "lenteja",
      "espinaca"
    ],
    "pasos": [
      "Cuece las legumbres previamente remojadas cuando corresponda, siguiendo el tiempo del envase, o usa legumbres ya cocidas.",
      "Lava y prepara espinaca en trozos pequeños.",
      "Cocina el acompañamiento con un poco de agua y tritúralo si corresponde para formar una salsa.",
      "Calienta todo junto hasta integrar los sabores y sirve."
    ]
  },
  {
    "titulo": "Lentejas salteados con zapallo",
    "ids": [
      "lenteja",
      "zapallo"
    ],
    "pasos": [
      "Cuece las legumbres previamente remojadas cuando corresponda, siguiendo el tiempo del envase, o usa legumbres ya cocidas.",
      "Lava y prepara zapallo en trozos pequeños.",
      "Saltea el acompañamiento con un poco de aceite; incorpora el ingrediente principal ya cocido.",
      "Calienta todo junto hasta integrar los sabores y sirve."
    ]
  },
  {
    "titulo": "Lentejas con salsa de queso",
    "ids": [
      "lenteja",
      "queso"
    ],
    "pasos": [
      "Cuece las legumbres previamente remojadas cuando corresponda, siguiendo el tiempo del envase, o usa legumbres ya cocidas.",
      "Ralla o corta el queso y resérvalo.",
      "Cocina el acompañamiento con un poco de agua y tritúralo si corresponde para formar una salsa.",
      "Calienta todo junto hasta integrar los sabores y sirve."
    ]
  },
  {
    "titulo": "Lentejas salteados con arroz",
    "ids": [
      "lenteja",
      "arroz"
    ],
    "pasos": [
      "Cuece las legumbres previamente remojadas cuando corresponda, siguiendo el tiempo del envase, o usa legumbres ya cocidas.",
      "Cuece el arroz por separado hasta que esté tierno.",
      "Saltea el acompañamiento con un poco de aceite; incorpora el ingrediente principal ya cocido.",
      "Calienta todo junto hasta integrar los sabores y sirve."
    ]
  },
  {
    "titulo": "Lentejas guisados con papas",
    "ids": [
      "lenteja",
      "papa"
    ],
    "pasos": [
      "Cuece las legumbres previamente remojadas cuando corresponda, siguiendo el tiempo del envase, o usa legumbres ya cocidas.",
      "Cuece las papas en cubos hasta que estén tiernas.",
      "Saltea el acompañamiento con un poco de aceite; incorpora el ingrediente principal ya cocido.",
      "Calienta todo junto hasta integrar los sabores y sirve."
    ]
  },
  {
    "titulo": "Lentejas al horno con huevo",
    "ids": [
      "lenteja",
      "huevo"
    ],
    "pasos": [
      "Cuece las legumbres previamente remojadas cuando corresponda, siguiendo el tiempo del envase, o usa legumbres ya cocidas.",
      "Cuece los huevos hasta que queden firmes, o incorpóralos batidos y cocina completamente.",
      "Saltea el acompañamiento con un poco de aceite; incorpora el ingrediente principal ya cocido.",
      "Pasa a una fuente apta para horno y calienta a 190 °C hasta que la preparación esté bien caliente; sirve."
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
      "Cuece las legumbres previamente remojadas cuando corresponda, siguiendo el tiempo del envase, o usa legumbres ya cocidas.",
      "Lava y prepara tomate en trozos pequeños.",
      "Saltea el acompañamiento con un poco de aceite; incorpora el ingrediente principal ya cocido.",
      "Calienta todo junto hasta integrar los sabores y sirve."
    ]
  },
  {
    "titulo": "Garbanzos guisados con cebolla",
    "ids": [
      "garbanzo",
      "cebolla"
    ],
    "pasos": [
      "Cuece las legumbres previamente remojadas cuando corresponda, siguiendo el tiempo del envase, o usa legumbres ya cocidas.",
      "Lava y prepara cebolla en trozos pequeños.",
      "Saltea el acompañamiento con un poco de aceite; incorpora el ingrediente principal ya cocido.",
      "Calienta todo junto hasta integrar los sabores y sirve."
    ]
  },
  {
    "titulo": "Garbanzos al horno con zanahoria",
    "ids": [
      "garbanzo",
      "zanahoria"
    ],
    "pasos": [
      "Cuece las legumbres previamente remojadas cuando corresponda, siguiendo el tiempo del envase, o usa legumbres ya cocidas.",
      "Lava y prepara zanahoria en trozos pequeños.",
      "Saltea el acompañamiento con un poco de aceite; incorpora el ingrediente principal ya cocido.",
      "Pasa a una fuente apta para horno y calienta a 190 °C hasta que la preparación esté bien caliente; sirve."
    ]
  },
  {
    "titulo": "Garbanzos cremosos con espinaca",
    "ids": [
      "garbanzo",
      "espinaca"
    ],
    "pasos": [
      "Cuece las legumbres previamente remojadas cuando corresponda, siguiendo el tiempo del envase, o usa legumbres ya cocidas.",
      "Lava y prepara espinaca en trozos pequeños.",
      "Cocina el acompañamiento con un poco de agua y tritúralo si corresponde para formar una salsa.",
      "Calienta todo junto hasta integrar los sabores y sirve."
    ]
  },
  {
    "titulo": "Garbanzos salteados con zapallo",
    "ids": [
      "garbanzo",
      "zapallo"
    ],
    "pasos": [
      "Cuece las legumbres previamente remojadas cuando corresponda, siguiendo el tiempo del envase, o usa legumbres ya cocidas.",
      "Lava y prepara zapallo en trozos pequeños.",
      "Saltea el acompañamiento con un poco de aceite; incorpora el ingrediente principal ya cocido.",
      "Calienta todo junto hasta integrar los sabores y sirve."
    ]
  },
  {
    "titulo": "Garbanzos con salsa de queso",
    "ids": [
      "garbanzo",
      "queso"
    ],
    "pasos": [
      "Cuece las legumbres previamente remojadas cuando corresponda, siguiendo el tiempo del envase, o usa legumbres ya cocidas.",
      "Ralla o corta el queso y resérvalo.",
      "Cocina el acompañamiento con un poco de agua y tritúralo si corresponde para formar una salsa.",
      "Calienta todo junto hasta integrar los sabores y sirve."
    ]
  },
  {
    "titulo": "Garbanzos salteados con arroz",
    "ids": [
      "garbanzo",
      "arroz"
    ],
    "pasos": [
      "Cuece las legumbres previamente remojadas cuando corresponda, siguiendo el tiempo del envase, o usa legumbres ya cocidas.",
      "Cuece el arroz por separado hasta que esté tierno.",
      "Saltea el acompañamiento con un poco de aceite; incorpora el ingrediente principal ya cocido.",
      "Calienta todo junto hasta integrar los sabores y sirve."
    ]
  },
  {
    "titulo": "Garbanzos guisados con papas",
    "ids": [
      "garbanzo",
      "papa"
    ],
    "pasos": [
      "Cuece las legumbres previamente remojadas cuando corresponda, siguiendo el tiempo del envase, o usa legumbres ya cocidas.",
      "Cuece las papas en cubos hasta que estén tiernas.",
      "Saltea el acompañamiento con un poco de aceite; incorpora el ingrediente principal ya cocido.",
      "Calienta todo junto hasta integrar los sabores y sirve."
    ]
  },
  {
    "titulo": "Garbanzos al horno con huevo",
    "ids": [
      "garbanzo",
      "huevo"
    ],
    "pasos": [
      "Cuece las legumbres previamente remojadas cuando corresponda, siguiendo el tiempo del envase, o usa legumbres ya cocidas.",
      "Cuece los huevos hasta que queden firmes, o incorpóralos batidos y cocina completamente.",
      "Saltea el acompañamiento con un poco de aceite; incorpora el ingrediente principal ya cocido.",
      "Pasa a una fuente apta para horno y calienta a 190 °C hasta que la preparación esté bien caliente; sirve."
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
      "Bate los huevos en un recipiente limpio.",
      "Lava y prepara tomate en trozos pequeños.",
      "Saltea el acompañamiento con un poco de aceite; incorpora el ingrediente principal ya cocido.",
      "Cocina los huevos hasta que estén completamente cuajados."
    ]
  },
  {
    "titulo": "Huevos encebollados",
    "ids": [
      "huevo",
      "cebolla"
    ],
    "pasos": [
      "Bate los huevos en un recipiente limpio.",
      "Lava y prepara cebolla en trozos pequeños.",
      "Saltea el acompañamiento con un poco de aceite; incorpora el ingrediente principal ya cocido.",
      "Cocina los huevos hasta que estén completamente cuajados."
    ]
  },
  {
    "titulo": "Tortilla de zanahoria",
    "ids": [
      "huevo",
      "zanahoria"
    ],
    "pasos": [
      "Bate los huevos en un recipiente limpio.",
      "Lava y prepara zanahoria en trozos pequeños.",
      "Saltea el acompañamiento con un poco de aceite; incorpora el ingrediente principal ya cocido.",
      "Pasa a una fuente apta para horno y calienta a 190 °C hasta que la preparación esté bien caliente; sirve."
    ]
  },
  {
    "titulo": "Omelette de espinaca",
    "ids": [
      "huevo",
      "espinaca"
    ],
    "pasos": [
      "Bate los huevos en un recipiente limpio.",
      "Lava y prepara espinaca en trozos pequeños.",
      "Cocina el acompañamiento con un poco de agua y tritúralo si corresponde para formar una salsa.",
      "Cocina los huevos hasta que estén completamente cuajados."
    ]
  },
  {
    "titulo": "Frittata de zapallo",
    "ids": [
      "huevo",
      "zapallo"
    ],
    "pasos": [
      "Bate los huevos en un recipiente limpio.",
      "Lava y prepara zapallo en trozos pequeños.",
      "Saltea el acompañamiento con un poco de aceite; incorpora el ingrediente principal ya cocido.",
      "Cocina los huevos hasta que estén completamente cuajados."
    ]
  },
  {
    "titulo": "Huevos gratinados con queso",
    "ids": [
      "huevo",
      "queso"
    ],
    "pasos": [
      "Bate los huevos en un recipiente limpio.",
      "Ralla o corta el queso y resérvalo.",
      "Cocina el acompañamiento con un poco de agua y tritúralo si corresponde para formar una salsa.",
      "Cocina los huevos hasta que estén completamente cuajados."
    ]
  },
  {
    "titulo": "Arroz con huevo a la sartén",
    "ids": [
      "huevo",
      "arroz"
    ],
    "pasos": [
      "Bate los huevos en un recipiente limpio.",
      "Cuece el arroz por separado hasta que esté tierno.",
      "Saltea el acompañamiento con un poco de aceite; incorpora el ingrediente principal ya cocido.",
      "Cocina los huevos hasta que estén completamente cuajados."
    ]
  },
  {
    "titulo": "Tortilla de papas en cubos",
    "ids": [
      "huevo",
      "papa"
    ],
    "pasos": [
      "Bate los huevos en un recipiente limpio.",
      "Cuece las papas en cubos hasta que estén tiernas.",
      "Saltea el acompañamiento con un poco de aceite; incorpora el ingrediente principal ya cocido.",
      "Cocina los huevos hasta que estén completamente cuajados."
    ]
  },
  {
    "titulo": "Revuelto de pollo y huevo",
    "ids": [
      "huevo",
      "pollo"
    ],
    "pasos": [
      "Bate los huevos en un recipiente limpio.",
      "Corta el pollo en trozos y cocínalo por completo hasta alcanzar 74 °C en el centro.",
      "Saltea el acompañamiento con un poco de aceite; incorpora el ingrediente principal ya cocido.",
      "Pasa a una fuente apta para horno y calienta a 190 °C hasta que la preparación esté bien caliente; sirve."
    ]
  }
];
const CANTIDADES: Record<string,string> = {"arroz":"150 g","papa":"320 g","pasta":"180 g","lenteja":"170 g","garbanzo":"190 g","huevo":"3 unidades","tomate":"200 g","cebolla":"100 g","zanahoria":"150 g","espinaca":"140 g","zapallo":"260 g","queso":"70 g","pollo":"260 g","atun":"140 g"};
export const RECETAS_LOTE_2: Receta[] = FICHAS.map((f,i)=>({
 id:`lote2-${i+1}`,titulo:f.titulo,
 descripcion:"Preparación casera con cantidades orientativas para dos personas.",
 tiempoPreparacion:"15 min",tiempoCoccion:"40 min",porciones:"2 personas",dificultad:"Fácil",
 ingredientes:f.ids.map(id=>`${CANTIDADES[id]} de ${id}`),pasos:f.pasos,
 costoAproximado:"Medio",preferencia:"Catálogo local sin IA",
 ingredientesCoincidentes:[],ingredientesFaltantes:[],porcentajeCoincidencia:0
}));
