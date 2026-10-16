import type { Receta } from "./recipes.functions";

export type Disponibilidad = {
  nivel: "verde" | "amarillo" | "naranja";
  texto: string;
  clase: string;
};

export function disponibilidad(receta: Receta): Disponibilidad {
  const faltan = receta.ingredientesFaltantes?.length ?? 0;
  if (faltan === 0)
    return {
      nivel: "verde",
      texto: "Puedes prepararla con lo que tienes",
      clase: "bg-emerald-100 text-emerald-800 border-emerald-200",
    };
  if (faltan === 1)
    return {
      nivel: "amarillo",
      texto: "Te falta 1 ingrediente",
      clase: "bg-amber-100 text-amber-800 border-amber-200",
    };
  return {
    nivel: "naranja",
    texto: "Te faltan varios ingredientes",
    clase: "bg-orange-100 text-orange-800 border-orange-200",
  };
}

export function porcentaje(receta: Receta) {
  return Math.max(0, Math.min(100, Math.round(receta.porcentajeCoincidencia ?? 0)));
}
