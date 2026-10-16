/**
 * Caché local de imágenes referenciales por receta.
 * Evita generar una imagen nueva cada vez que se abre la misma receta:
 * la imagen se genera una sola vez, a petición del usuario, y se reutiliza.
 */
import { useCallback, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { imagenReceta } from "./chef.functions";
import { claveReceta } from "./resenas";

const CLAVE = "alacena-imagenes-v1";
const MAX = 40;

type Mapa = Record<string, string>;

function leer(): Mapa {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(CLAVE);
    return raw ? (JSON.parse(raw) as Mapa) : {};
  } catch {
    return {};
  }
}

export function imagenGuardada(titulo: string): string | undefined {
  return leer()[claveReceta(titulo)];
}

function guardar(titulo: string, imagen: string) {
  try {
    const mapa = leer();
    const entradas = Object.entries({ ...mapa, [claveReceta(titulo)]: imagen }).slice(-MAX);
    window.localStorage.setItem(CLAVE, JSON.stringify(Object.fromEntries(entradas)));
  } catch {
    // sin almacenamiento la app sigue funcionando, sólo no se reutiliza la imagen
  }
}

export function useImagenReceta(titulo: string, descripcion?: string) {
  const generarImagen = useServerFn(imagenReceta);
  const [imagen, setImagen] = useState<string | undefined>(() => imagenGuardada(titulo));
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generar = useCallback(async () => {
    if (imagen || cargando) return;
    setCargando(true);
    setError(null);
    try {
      const res = await generarImagen({
        data: { titulo, ...(descripcion ? { descripcion } : {}) },
      });
      setImagen(res.imagen);
      guardar(titulo, res.imagen);
    } catch (e) {
      setError(e instanceof Error ? e.message : "No se pudo generar la imagen.");
    } finally {
      setCargando(false);
    }
  }, [cargando, descripcion, generarImagen, imagen, titulo]);

  return { imagen, cargando, error, generar };
}
