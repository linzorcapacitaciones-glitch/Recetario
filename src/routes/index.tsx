import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState, type FormEvent } from "react";
import { CornerDownLeft, Loader2, Sparkles } from "lucide-react";
import heroImg from "@/assets/cocina-hero.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { RecetaCard } from "@/components/RecetaCard";
import { generarRecetas, type Receta } from "@/lib/recipes.functions";
import { useFavoritos } from "@/lib/favoritos";
import { PersonalizarBusqueda } from "@/components/PersonalizarBusqueda";
import { AnuncioPlaceholder } from "@/components/AnuncioPlaceholder";
import { usePlan } from "@/lib/plan";
import { metricasBusqueda, registrarEvento } from "@/lib/analitica";
import {
  combinarPreferencias,
  etiquetaIntencion,
  etiquetaTiempo,
  type Preferencias,
} from "@/lib/preferencias";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alacena — 10 recetas con lo que ya tienes en casa" },
      {
        name: "description",
        content:
          "Escribe los ingredientes de tu alacena y recibe 10 recetas en español con pasos detallados y tiempos de preparación y cocción.",
      },
      { property: "og:title", content: "Alacena — 10 recetas con lo que ya tienes en casa" },
      {
        property: "og:description",
        content: "10 recetas al instante a partir de los ingredientes que tienes en tu cocina.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

const EJEMPLOS = ["pollo, arroz, limón", "huevos, espinaca, queso", "atún, pasta, tomate"];

function Index() {
  const [texto, setTexto] = useState("");
  const [prefs, setPrefs] = useState<Preferencias>({});
  const generar = useServerFn(generarRecetas);
  const { alternar, esFavorito } = useFavoritos();
  const { mostrarPublicidad } = usePlan();

  useEffect(() => {
    registrarEvento("app_open");
  }, []);

  const mutacion = useMutation({
    mutationFn: (ingredientes: string) => {
      const c = combinarPreferencias(prefs, ingredientes);
      const preferencias = {
        ...(c.intencion ? { intencion: etiquetaIntencion(c.intencion)! } : {}),
        ...(c.personas ? { personas: `${c.personas} personas` } : {}),
        ...(c.tiempo ? { tiempo: etiquetaTiempo(c.tiempo)! } : {}),
      };
      registrarEvento("ingredient_search", {
        ...metricasBusqueda(ingredientes),
        conIntencion: Boolean(c.intencion),
        conPersonas: Boolean(c.personas),
        conTiempo: Boolean(c.tiempo),
      });
      return generar({ data: { ingredientes, preferencias } });
    },
    onSuccess: (data) => {
      registrarEvento("recipe_results_view", { totalRecetas: data.recetas.length });
    },
  });

  const enviar = (e: FormEvent) => {
    e.preventDefault();
    const valor = texto.trim();
    if (valor.length < 2 || mutacion.isPending) return;
    mutacion.mutate(valor);
  };

  const recetas: Receta[] = mutacion.data?.recetas ?? [];

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="relative min-h-[610px] overflow-hidden sm:min-h-[650px]">
        <img
          src={heroImg}
          alt="Mesa de cocina con verduras frescas, hierbas y aceite de oliva"
          width={1600}
          height={1008}
          className="absolute inset-0 size-full object-cover object-[34%_center] sm:object-center"
        />
        <div className="from-transparent via-transparent to-background absolute inset-0 bg-gradient-to-b via-70%" />
        <div className="relative mx-auto flex min-h-[610px] max-w-5xl items-center px-4 py-14 sm:min-h-[650px] sm:px-6 sm:py-20">
          <div className="bg-background/82 border-border/70 mx-auto w-full max-w-3xl rounded-3xl border px-5 py-9 text-center shadow-xl backdrop-blur-md sm:px-12 sm:py-12">
            <span className="border-border bg-card/85 text-muted-foreground inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs tracking-[0.18em] uppercase">
              <Sparkles className="size-3.5" />
              Cocina sin ir al súper
            </span>
            <h1 className="font-display mt-6 text-5xl leading-[1.05] tracking-tight sm:text-6xl">
              ¿Qué tienes en casa?
            </h1>
            <p className="text-muted-foreground mx-auto mt-5 max-w-xl text-lg">
              Escribe los ingredientes que tienes disponibles y te diremos qué puedes cocinar.
            </p>

            <form onSubmit={enviar} className="mt-9">
              <div className="border-border bg-card focus-within:border-primary flex items-center gap-3 rounded-full border p-2 pl-6 shadow-lg transition-colors">
                <input
                  value={texto}
                  onChange={(e) => setTexto(e.target.value)}
                  placeholder="arroz, pollo, zanahoria, limón…"
                  aria-label="Ingredientes disponibles"
                  className="placeholder:text-muted-foreground/70 min-w-0 flex-1 bg-transparent py-3 text-base outline-none"
                />
                <button
                  type="submit"
                  disabled={mutacion.isPending || texto.trim().length < 2}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex shrink-0 items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-colors disabled:opacity-50"
                >
                  {mutacion.isPending ? (
                    <Loader2 className="size-4 animate-spin" />
                  ) : (
                    <CornerDownLeft className="size-4" />
                  )}
                  <span className="hidden sm:inline">
                    {mutacion.isPending ? "Cocinando…" : "Generar"}
                  </span>
                </button>
              </div>
            </form>

            <PersonalizarBusqueda valor={prefs} onChange={setPrefs} />

            <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs">
              {EJEMPLOS.map((e) => (
                <button
                  key={e}
                  type="button"
                  onClick={() => setTexto(e)}
                  className="border-border bg-card/80 text-muted-foreground hover:border-primary hover:text-foreground rounded-full border px-3 py-1.5 transition-colors"
                >
                  {e}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-5 pb-24">
        {mutacion.isError && (
          <p className="border-destructive/30 bg-destructive/10 text-destructive mx-auto max-w-xl rounded-2xl border px-5 py-4 text-center text-sm">
            {(mutacion.error as Error).message}
          </p>
        )}

        {mutacion.isPending && mostrarPublicidad && (
          <AnuncioPlaceholder className="mx-auto mb-6 max-w-xl" />
        )}

        {mutacion.isPending && (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="border-border bg-card h-72 animate-pulse rounded-3xl border"
              />
            ))}
          </div>
        )}

        {recetas.length > 0 && !mutacion.isPending && (
          <>
            <div className="mb-8 flex items-end justify-between gap-4">
              <h2 className="font-display text-3xl tracking-tight">
                Tus 10 recetas, de mayor a menor coincidencia
              </h2>
              <p className="text-muted-foreground text-sm">Guarda las que te gusten con ♥</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {recetas.map((receta, i) => (
                <RecetaCard
                  key={receta.id}
                  receta={receta}
                  indice={i}
                  favorito={esFavorito(receta)}
                  onToggle={alternar}
                />
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
