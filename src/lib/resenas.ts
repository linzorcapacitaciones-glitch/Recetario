import { useCallback, useEffect, useState } from "react";

export type Resena = {
  id: string;
  recetaId: string;
  autor: string;
  estrellas: number;
  comentario: string;
  fecha: string;
};

const KEY = "alacena-resenas-v1";

export function claveReceta(titulo: string) {
  return titulo
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function leer(): Resena[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Resena[]) : [];
  } catch {
    return [];
  }
}

const listeners = new Set<() => void>();

export function useResenas(recetaId: string) {
  const [todas, setTodas] = useState<Resena[]>([]);

  useEffect(() => {
    const sync = () => setTodas(leer());
    sync();
    listeners.add(sync);
    window.addEventListener("storage", sync);
    return () => {
      listeners.delete(sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const resenas = todas
    .filter((r) => r.recetaId === recetaId)
    .sort((a, b) => b.fecha.localeCompare(a.fecha));

  const promedio = resenas.length
    ? resenas.reduce((s, r) => s + r.estrellas, 0) / resenas.length
    : 0;

  const agregar = useCallback(
    (datos: { autor: string; estrellas: number; comentario: string }) => {
      const nueva: Resena = {
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        recetaId,
        autor: datos.autor.trim() || "Anónimo",
        estrellas: Math.min(5, Math.max(1, Math.round(datos.estrellas))),
        comentario: datos.comentario.trim(),
        fecha: new Date().toISOString(),
      };
      window.localStorage.setItem(KEY, JSON.stringify([nueva, ...leer()]));
      listeners.forEach((l) => l());
    },
    [recetaId],
  );

  const eliminar = useCallback((id: string) => {
    window.localStorage.setItem(KEY, JSON.stringify(leer().filter((r) => r.id !== id)));
    listeners.forEach((l) => l());
  }, []);

  return { resenas, promedio, total: resenas.length, agregar, eliminar };
}
