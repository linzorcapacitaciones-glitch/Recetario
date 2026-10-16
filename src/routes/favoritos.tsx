import { createFileRoute, Link } from "@tanstack/react-router";
import { HeartCrack } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { RecetaCard } from "@/components/RecetaCard";
import { useFavoritos } from "@/lib/favoritos";

export const Route = createFileRoute("/favoritos")({
  head: () => ({
    meta: [
      { title: "Recetas favoritas | Alacena" },
      {
        name: "description",
        content:
          "Consulta tus recetas guardadas con ingredientes, pasos y tiempos de cocción, siempre a mano.",
      },
      { property: "og:title", content: "Recetas favoritas | Alacena" },
      {
        property: "og:description",
        content: "Tu recetario personal: recetas guardadas con pasos y tiempos.",
      },
    ],
  }),
  component: Favoritos,
});

function Favoritos() {
  const { favoritos, alternar, esFavorito } = useFavoritos();

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-5 py-12">
        <h1 className="font-display text-4xl tracking-tight sm:text-5xl">Tus recetas favoritas</h1>
        <p className="text-muted-foreground mt-3 max-w-xl">
          Aquí se guardan las recetas que marcaste con el corazón. Se conservan en este navegador.
        </p>

        {favoritos.length === 0 ? (
          <div className="border-border bg-card mt-12 grid place-items-center rounded-3xl border border-dashed px-6 py-20 text-center">
            <HeartCrack className="text-muted-foreground size-8" />
            <p className="font-display mt-4 text-xl">Todavía no guardaste recetas</p>
            <p className="text-muted-foreground mt-2 text-sm">
              Genera ideas con lo que tienes en la alacena y guarda las que más te gusten.
            </p>
            <Link
              to="/"
              className="bg-primary text-primary-foreground hover:bg-primary/90 mt-6 rounded-full px-6 py-3 text-sm font-medium transition-colors"
            >
              Generar recetas
            </Link>
          </div>
        ) : (
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {favoritos.map((receta, i) => (
              <RecetaCard
                key={receta.id ?? receta.titulo}
                receta={receta}
                indice={i}
                favorito={esFavorito(receta)}
                onToggle={alternar}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
