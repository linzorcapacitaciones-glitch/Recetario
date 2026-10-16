import { createFileRoute, Link } from "@tanstack/react-router";
import { RecetaCard } from "@/components/RecetaCard";
import { SiteHeader } from "@/components/SiteHeader";
import { RECETAS_DEMO } from "@/lib/recetas-demo";
import { useFavoritos } from "@/lib/favoritos";

export const Route = createFileRoute("/demo")({
  head: () => ({
    meta: [
      { title: "Demostración sin IA | Recetario de la Alacena" },
      { name: "robots", content: "noindex,nofollow" },
      { name: "description", content: "Prueba la interfaz de diez recetas de ejemplo sin consumir tokens." }
    ]
  }),
  component: Demo
});

function Demo() {
  const { alternar, esFavorito } = useFavoritos();
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-5 py-10">
        <div className="rounded-2xl border border-primary/30 bg-primary/5 p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">Modo demostración · Sin costo de IA</p>
          <h1 className="font-display mt-2 text-3xl">Diez recetas de ejemplo para probar</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Las recetas de esta página son datos de muestra, NO han sido generadas con IA.
            Puedes revisar los pasos, los favoritos y la presentación sin consumir créditos.
            La generación real todavía requiere que OpenAI API tenga cuota disponible.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Ingredientes de muestra: pollo, arroz, tomate y huevo. Una receta requiere comprar queso.
          </p>
          <Link to="/" className="mt-4 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm text-primary-foreground">
            Volver a generación con IA
          </Link>
        </div>
        <h2 className="font-display my-7 text-2xl">10 recetas de muestra</h2>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {RECETAS_DEMO.map((receta, indice) => (
            <RecetaCard key={receta.id} receta={receta} indice={indice}
              favorito={esFavorito(receta)} onToggle={alternar} />
          ))}
        </div>
      </main>
    </div>
  );
}
