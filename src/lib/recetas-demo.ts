/** Datos estáticos para evaluar la interfaz, nunca resultados de IA. */
import type { Receta } from "./recipes.functions";

type Caso = {
  titulo: string;
  descripcion: string;
  ingredientes: string[];
  pasos: string[];
  coincidencias: string[];
  faltantes?: string[];
  minutos: number;
};

const casos: Caso[] = [
  {
    titulo: "Arroz salteado con pollo y huevo",
    descripcion: "Arroz dorado con pollo bien cocido, tomate y huevo.",
    ingredientes: ["1 taza de arroz", "200 g de pollo", "2 huevos", "1 tomate", "aceite y sal"],
    pasos: ["Cuece el arroz hasta que esté tierno.", "Cocina completamente el pollo troceado en una sartén.", "Incorpora el tomate picado y rehoga durante tres minutos.", "Agrega el arroz y los huevos batidos; revuelve hasta que cuajen por completo."],
    coincidencias: ["arroz", "pollo", "huevo", "tomate"], minutos: 30
  },
  {
    titulo: "Tortilla de tomate",
    descripcion: "Una tortilla casera rápida.",
    ingredientes: ["3 huevos", "2 tomates", "aceite y sal"],
    pasos: ["Lava y corta los tomates en cubitos.", "Bate los huevos con una pizca de sal.", "Saltea los tomates por tres minutos.", "Vierte los huevos y cocina a fuego medio hasta que estén completamente cuajados."],
    coincidencias: ["huevo", "tomate"], minutos: 15
  },
  {
    titulo: "Pollo al tomate con arroz",
    descripcion: "Pollo con una sencilla salsa de tomates.",
    ingredientes: ["250 g de pollo", "3 tomates", "1 taza de arroz", "agua, aceite y sal"],
    pasos: ["Cuece el arroz en agua con sal.", "Dora el pollo y cocínalo completamente.", "Agrega los tomates picados y un poco de agua.", "Cocina hasta formar una salsa y sirve con el arroz."],
    coincidencias: ["pollo", "tomate", "arroz"], minutos: 40
  },
  {
    titulo: "Ensalada tibia de arroz y huevo",
    descripcion: "Una comida sencilla que aprovecha arroz sobrante.",
    ingredientes: ["1 taza de arroz", "2 huevos", "2 tomates", "aceite y sal"],
    pasos: ["Cuece el arroz y deja que se entibie.", "Cuece los huevos diez minutos en agua hirviendo.", "Pela los huevos, lava y trocea los tomates.", "Mezcla los ingredientes y sirve con una pequeña cantidad de aceite."],
    coincidencias: ["arroz", "huevo", "tomate"], minutos: 25
  },
  {
    titulo: "Sopa de pollo, arroz y tomate",
    descripcion: "Caldo reconfortante y fácil de preparar.",
    ingredientes: ["200 g de pollo", "media taza de arroz", "2 tomates", "agua y sal"],
    pasos: ["Hierve el pollo hasta que esté completamente cocido.", "Desmenúzalo y regresa la carne al caldo.", "Agrega el arroz lavado y los tomates picados.", "Cocina hasta que el arroz esté suave y rectifica la sal."],
    coincidencias: ["pollo", "arroz", "tomate"], minutos: 40
  },
  {
    titulo: "Tomates rellenos con huevo y arroz",
    descripcion: "Tomates frescos rellenos con una mezcla suave.",
    ingredientes: ["4 tomates grandes", "media taza de arroz", "2 huevos", "aceite y sal"],
    pasos: ["Cuece el arroz y los huevos por separado.", "Lava los tomates, corta sus tapas y retira parte de la pulpa.", "Pica los huevos cocidos y mezcla con arroz y pulpa.", "Rellena los tomates, sazona y sirve."],
    coincidencias: ["tomate", "arroz", "huevo"], minutos: 30
  },
  {
    titulo: "Pollo desmenuzado con arroz",
    descripcion: "Pollo jugoso al tomate, para almorzar en familia.",
    ingredientes: ["250 g de pollo", "2 tomates", "media taza de arroz", "aceite y sal"],
    pasos: ["Cuece completamente el pollo y desmenúzalo.", "Prepara el arroz en agua hirviendo.", "Saltea el tomate en una sartén.", "Agrega el pollo al tomate y sirve sobre el arroz."],
    coincidencias: ["pollo", "tomate", "arroz"], minutos: 35
  },
  {
    titulo: "Arroz a la sartén con huevo y tomate",
    descripcion: "Arroz con huevo revuelto y tomate fresco.",
    ingredientes: ["1 taza de arroz", "2 huevos", "2 tomates", "aceite y sal"],
    pasos: ["Cuece el arroz hasta que esté tierno.", "Saltea los tomates picados con aceite.", "Añade los huevos y remueve hasta cuajarlos completamente.", "Mezcla con el arroz cocido y sirve caliente."],
    coincidencias: ["arroz", "huevo", "tomate"], minutos: 25
  },
  {
    titulo: "Croquetas de arroz y pollo",
    descripcion: "Croquetas a la sartén para aprovechar sobras.",
    ingredientes: ["1 taza de arroz cocido", "150 g de pollo cocido", "1 huevo", "aceite y sal"],
    pasos: ["Desmenuza el pollo previamente cocido.", "Mezcla pollo, arroz y huevo batido.", "Forma croquetas pequeñas y compactas.", "Dóralas a fuego medio por ambos lados hasta que el huevo esté totalmente cuajado."],
    coincidencias: ["arroz", "pollo", "huevo"], minutos: 20
  },
  {
    titulo: "Arroz cremoso con pollo y queso",
    descripcion: "Una variación que necesita comprar queso.",
    ingredientes: ["1 taza de arroz", "200 g de pollo", "1 tomate", "50 g de queso", "agua, aceite y sal"],
    pasos: ["Cuece el arroz hasta que esté tierno.", "Dora y cocina completamente el pollo con tomate.", "Mezcla el arroz cocido, el pollo y el queso rallado.", "Calienta a fuego suave hasta que el queso se derrita."],
    coincidencias: ["arroz", "pollo", "tomate"], faltantes: ["queso"], minutos: 35
  }
];

export const RECETAS_DEMO: Receta[] = casos.map((c, indice) => ({
  id: `demo-${indice + 1}`,
  titulo: c.titulo,
  descripcion: c.descripcion,
  ingredientes: c.ingredientes,
  pasos: c.pasos,
  ingredientesCoincidentes: c.coincidencias,
  ingredientesFaltantes: c.faltantes ?? [],
  porcentajeCoincidencia: c.faltantes?.length ? 75 : 100,
  tiempoPreparacion: "10 min",
  tiempoCoccion: `${Math.max(5, c.minutos - 10)} min`,
  porciones: "2 personas",
  dificultad: "Fácil",
  costoAproximado: c.faltantes?.length ? "Medio" : "Bajo",
  preferencia: "Prueba sin IA",
  mejorOpcion: indice === 0
}));
