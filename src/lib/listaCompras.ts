/**
 * Lista de compras local y sencilla.
 * La estructura guarda el origen de cada ítem (una receta o un menú semanal)
 * para poder evolucionar más adelante hacia la lista de un menú completo.
 */
import { useCallback, useEffect, useState } from "react";
import { consolidarComprasCuantificadas, type ProductoCompra } from "./compras-cantidades";

const CLAVE = "alacena-lista-compras-v1";

export type ItemCompra = {
  id: string;
  nombre: string;
  origen: string;
  comprado: boolean;
  productoId?: string;
  cantidad?: number;
  unidad?: "g" | "unidad";
  fuentes?: string[];
};

function leer(): ItemCompra[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(CLAVE);
    return raw ? (JSON.parse(raw) as ItemCompra[]) : [];
  } catch {
    return [];
  }
}

const listeners = new Set<() => void>();
function escribir(items: ItemCompra[]) {
  try {
    window.localStorage.setItem(CLAVE, JSON.stringify(items));
  } catch {
    /* ignorar */
  }
  listeners.forEach((l) => l());
}

export function useListaCompras() {
  const [items, setItems] = useState<ItemCompra[]>([]);

  useEffect(() => {
    const sync = () => setItems(leer());
    sync();
    listeners.add(sync);
    window.addEventListener("storage", sync);
    return () => {
      listeners.delete(sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const agregar = useCallback((nombres: string[], origen: string) => {
    const actuales = leer();
    const clave = (s: string) => s.toLocaleLowerCase("es").normalize("NFD").replace(/\p{M}/gu, "").replace(/\s+/g, " ").trim();
    const existentes = new Set(actuales.map((i) => clave(i.nombre)));
    const nuevos: ItemCompra[] = [];
    for (const entrada of nombres) {
      const nombre = entrada.trim();
      const identificador = clave(nombre);
      if (!identificador || existentes.has(identificador)) continue;
      existentes.add(identificador);
      nuevos.push({
        id: `${Date.now()}-${nuevos.length}-${nombre.slice(0, 12)}`,
        nombre, origen, comprado: false,
      });
    }
    escribir([...actuales, ...nuevos]);
    return nuevos.length;
  }, []);

  const agregarCantidades = useCallback((productos: ProductoCompra[], origen: string, fuente: string) => {
    const resultado = consolidarComprasCuantificadas(leer(), productos, origen, fuente, Date.now());
    if (resultado.modificados > 0) escribir(resultado.items);
    return resultado.modificados;
  }, []);

  const alternar = useCallback((id: string) => {
    escribir(leer().map((i) => (i.id === id ? { ...i, comprado: !i.comprado } : i)));
  }, []);

  const quitar = useCallback((id: string) => {
    escribir(leer().filter((i) => i.id !== id));
  }, []);

  const vaciar = useCallback(() => escribir([]), []);

  return { items, agregar, agregarCantidades, alternar, quitar, vaciar };
}
