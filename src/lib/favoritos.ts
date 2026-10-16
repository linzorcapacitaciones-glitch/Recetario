import { useCallback, useEffect, useState } from "react";
import type { Receta } from "./recipes.functions";

const KEY = "alacena-favoritos-v1";

function leer(): Receta[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Receta[]) : [];
  } catch {
    return [];
  }
}

const listeners = new Set<() => void>();
function emitir() {
  listeners.forEach((l) => l());
}

export function useFavoritos() {
  const [favoritos, setFavoritos] = useState<Receta[]>([]);

  useEffect(() => {
    const sync = () => setFavoritos(leer());
    sync();
    listeners.add(sync);
    window.addEventListener("storage", sync);
    return () => {
      listeners.delete(sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const alternar = useCallback((receta: Receta) => {
    const actuales = leer();
    const existe = actuales.some((r) => r.titulo === receta.titulo);
    const siguientes = existe
      ? actuales.filter((r) => r.titulo !== receta.titulo)
      : [receta, ...actuales];
    window.localStorage.setItem(KEY, JSON.stringify(siguientes));
    emitir();
    return !existe;
  }, []);

  const esFavorito = useCallback(
    (receta: Receta) => favoritos.some((r) => r.titulo === receta.titulo),
    [favoritos],
  );

  return { favoritos, alternar, esFavorito };
}
