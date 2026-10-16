/**
 * Arquitectura simple Free / Premium ("👨‍🍳 Chef IA").
 * No implementa pagos ni suscripciones: sólo describe qué habilita cada plan
 * y permite activar una vista de prueba local para revisar la experiencia.
 */
import { useCallback, useEffect, useState } from "react";

export type Plan = "free" | "premium";

export type Funcion =
  | "busqueda"
  | "diezResultados"
  | "recetasBasicas"
  | "favoritos"
  | "resenas"
  | "compartir"
  | "adaptarReceta"
  | "chefIA"
  | "sustituciones"
  | "recetasPersonalizadas"
  | "costoReceta"
  | "imagenPlato"
  | "cocinaConmigo"
  | "nutricion"
  | "aprovecharSobras"
  | "menuSemanal"
  | "listaCompra"
  | "recomendacionesPresupuesto"
  | "historial"
  | "sinPublicidad";

export const FUNCIONES_POR_PLAN: Record<Plan, Funcion[]> = {
  free: ["busqueda", "diezResultados", "recetasBasicas", "favoritos", "resenas", "compartir"],
  premium: [
    "busqueda",
    "diezResultados",
    "recetasBasicas",
    "favoritos",
    "resenas",
    "compartir",
    "adaptarReceta",
    "chefIA",
    "sustituciones",
    "recetasPersonalizadas",
    "costoReceta",
    "imagenPlato",
    "cocinaConmigo",
    "nutricion",
    "aprovecharSobras",
    "menuSemanal",
    "listaCompra",
    "recomendacionesPresupuesto",
    "historial",
    "sinPublicidad",
  ],
};

export const PRECIOS = { mensual: "$3.990 CLP / mes", anual: "$29.990 CLP / año" };

export const BENEFICIOS_PREMIUM = [
  "Adapta cantidades automáticamente",
  "Sustituye ingredientes",
  "Ajusta recetas a tu presupuesto",
  "Ajusta recetas al tiempo disponible",
  "Crea variaciones",
  "Calcula costos estimados",
  "Cocina contigo paso a paso",
  "Crea listas de compras",
  "Aprovecha tus sobras",
  "Genera menús semanales",
  "Sin publicidad",
];

/**
 * Vista de prueba local del Premium. No es una suscripción ni un pago:
 * cuando exista un sistema de cuentas y cobros, el plan vendrá desde ahí.
 */
const CLAVE_PRUEBA = "alacena-premium-prueba-v1";
const listeners = new Set<() => void>();

export function pruebaPremiumActiva() {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem(CLAVE_PRUEBA) === "1";
  } catch {
    return false;
  }
}

export function tieneFuncion(funcion: Funcion, plan: Plan) {
  return FUNCIONES_POR_PLAN[plan].includes(funcion);
}

export function usePlan() {
  const [plan, setPlan] = useState<Plan>("free");

  useEffect(() => {
    const sync = () => setPlan(pruebaPremiumActiva() ? "premium" : "free");
    sync();
    listeners.add(sync);
    window.addEventListener("storage", sync);
    return () => {
      listeners.delete(sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const activarPrueba = useCallback((valor: boolean) => {
    try {
      if (valor) window.localStorage.setItem(CLAVE_PRUEBA, "1");
      else window.localStorage.removeItem(CLAVE_PRUEBA);
    } catch {
      /* ignorar */
    }
    listeners.forEach((l) => l());
  }, []);

  return {
    plan,
    esPremium: plan === "premium",
    tieneFuncion: (f: Funcion) => tieneFuncion(f, plan),
    mostrarPublicidad: !tieneFuncion("sinPublicidad", plan),
    activarPrueba,
  };
}
