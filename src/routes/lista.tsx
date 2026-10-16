import { createFileRoute } from "@tanstack/react-router";
import { Check, ShoppingCart, Trash2 } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { Button } from "@/components/ui/button";
import { useListaCompras } from "@/lib/listaCompras";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/lista")({
  head: () => ({
    meta: [
      { title: "Lista de compras · Cocina Inteligente" },
      {
        name: "description",
        content:
          "Revisa y marca los ingredientes que te faltan para cocinar tus recetas guardadas en Cocina Inteligente.",
      },
      { property: "og:title", content: "Lista de compras · Cocina Inteligente" },
      {
        property: "og:description",
        content: "Los ingredientes que te faltan, en una lista simple y práctica.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ListaPagina,
});

function ListaPagina() {
  const { items, alternar, quitar, vaciar } = useListaCompras();
  const pendientes = items.filter((i) => !i.comprado).length;

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl px-5 py-10">
        <h1 className="font-display text-3xl text-foreground">🛒 Lista de compras</h1>
        <p className="text-muted-foreground mt-2 text-sm">
          {items.length === 0
            ? "Aún no agregas ingredientes. Ábrela desde una receta con “Crear lista de compras”."
            : `${pendientes} pendiente(s) de ${items.length}.`}
        </p>

        <ul className="mt-6 grid gap-2">
          {items.map((item) => (
            <li
              key={item.id}
              className="border-border bg-card flex items-center gap-3 rounded-2xl border px-4 py-3"
            >
              <button
                type="button"
                onClick={() => alternar(item.id)}
                aria-pressed={item.comprado}
                aria-label={item.comprado ? `Marcar ${item.nombre} como pendiente` : `Marcar ${item.nombre} como comprado`}
                className={cn(
                  "focus-visible:ring-ring inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border transition-colors focus-visible:ring-2 focus-visible:outline-none",
                  item.comprado
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background text-muted-foreground",
                )}
              >
                <Check className="size-4" aria-hidden="true" />
              </button>
              <span className="flex-1">
                <span className={cn("text-sm", item.comprado && "text-muted-foreground line-through")}>
                  {item.nombre}
                </span>
                <span className="text-muted-foreground block text-xs">{item.origen}</span>
              </span>
              <Button
                type="button"
                variant="ghost"
                aria-label={`Quitar ${item.nombre}`}
                className="text-muted-foreground min-h-11 min-w-11 rounded-full p-0"
                onClick={() => quitar(item.id)}
              >
                <Trash2 className="size-4" aria-hidden="true" />
              </Button>
            </li>
          ))}
        </ul>

        {items.length > 0 && (
          <Button type="button" variant="outline" className="mt-6 min-h-11 rounded-full" onClick={vaciar}>
            <ShoppingCart className="size-4" aria-hidden="true" /> Vaciar lista
          </Button>
        )}
      </main>
    </div>
  );
}
