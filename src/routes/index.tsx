import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { CornerDownLeft, Sparkles } from "lucide-react";

import { SiteHeader } from "@/components/SiteHeader";
import { RecetaCard } from "@/components/RecetaCard";
import { buscarRecetasGratis, explorarCatalogo, type ResultadoBusqueda } from "@/lib/buscador-gratis";
import { useFavoritos } from "@/lib/favoritos";
import { PersonalizarBusqueda } from "@/components/PersonalizarBusqueda";
import { AnuncioPlaceholder } from "@/components/AnuncioPlaceholder";
import { usePlan } from "@/lib/plan";
import { metricasBusqueda, registrarEvento } from "@/lib/analitica";
import {
  combinarPreferencias,
  type Preferencias,
} from "@/lib/preferencias";

const heroImg = "https://pantry-to-plate-pro-86.lovable.app/assets/cocina-hero-CUhy-Vc2.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alacena — recetas con lo que ya tienes en casa" },
      {
        name: "description",
        content:
          "Escribe tus ingredientes y descubre recetas del catálogo gratuito, con ingredientes y pasos sin consumir IA.",
      },
      { property: "og:title", content: "Alacena — recetas con lo que ya tienes en casa" },
      {
        property: "og:description",
        content: "Busca recetas reales de un catálogo gratuito usando los ingredientes que tienes en casa, sin llamadas a IA.",
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
  const { alternar, esFavorito } = useFavoritos();
  const { mostrarPublicidad } = usePlan();
  const [resultado, setResultado] = useState<ResultadoBusqueda | null>(null);
  const [limite, setLimite] = useState(10);
  const [explorando, setExplorando] = useState(false);
  const [ultimaBusqueda, setUltimaBusqueda] = useState<{ texto: string; preferencias: Preferencias } | null>(null);

  useEffect(() => {
    registrarEvento("app_open");
  }, []);

  const enviar = (e: FormEvent) => {
    e.preventDefault();
    const valor = texto.trim();
    if (valor.length < 2) return;
    const c = combinarPreferencias(prefs, valor);
    registrarEvento("ingredient_search", {
      ...metricasBusqueda(valor),
      conIntencion: Boolean(c.intencion),
      conPersonas: Boolean(c.personas),
      conTiempo: Boolean(c.tiempo),
      modo: "catalogo_local",
    });
    const busqueda = buscarRecetasGratis(valor, c, 10);
    setLimite(10);
    setExplorando(false);
    setUltimaBusqueda({ texto: valor, preferencias: c });
    setResultado(busqueda);
    registrarEvento("recipe_results_view", { totalRecetas: busqueda.recetas.length, modo: "catalogo_local" });
  };

  const recetas = resultado?.recetas ?? [];

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
                  disabled={texto.trim().length < 2}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex shrink-0 items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-colors disabled:opacity-50"
                >
                  <CornerDownLeft className="size-4" />
                  <span className="hidden sm:inline">
                    Buscar gratis
                  </span>
                </button>
              </div>
            </form>

            <p className="mt-4 text-sm text-muted-foreground">
              Búsqueda gratuita y funcional, sin gastar créditos de IA.{" "}
              <Link to="/demo" className="font-semibold text-primary underline underline-offset-4">
                Ver demostración de la interfaz
              </Link>
            </p>

            <button type="button" className="mt-5 rounded-full border border-primary px-5 py-2.5 text-sm font-semibold text-primary hover:bg-primary/10" onClick={() => {
              setExplorando(true);
              setLimite(10);
              setUltimaBusqueda(null);
              setResultado(explorarCatalogo(10));
              registrarEvento("recipe_results_view", { totalRecetas: 10, modo: "explorar_catalogo" });
            }}>Explorar todas las recetas sin ingresar ingredientes</button>

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
        {resultado && (
          <div className="mb-6 rounded-2xl border border-border bg-card p-4 text-sm">
            <p className="font-semibold">Catálogo gratuito: {resultado.totalCatalogo} recetas revisables, sin llamadas a OpenAI.</p>
            <p className="text-muted-foreground mt-1">{explorando ? `Explorando el catálogo: ${recetas.length} de ${resultado.totalCatalogo} recetas.` : `Encontramos ${resultado.totalCoincidentes} recetas compatibles; mostramos ${recetas.length}, ordenadas por ingredientes disponibles y faltantes.`}</p>
            {resultado.ingredientesReconocidos.length > 0 && <p className="mt-2">Reconocidos: {resultado.ingredientesReconocidos.join(", ")}.</p>}
            {resultado.ignorados.length > 0 && <p className="text-muted-foreground mt-2">Sin coincidencia en el catálogo: {resultado.ignorados.join(", ")}. No se usarán para puntuar recetas.</p>}
            {resultado.totalCoincidentes===0 && <p className="mt-2 text-primary">Prueba con arroz, pollo, huevo, tomate, papa, lentejas, atún o pasta; o amplía el tiempo máximo en tus preferencias.</p>}
            <p className="text-muted-foreground mt-2 text-xs">Los ingredientes y tiempos son estimaciones editoriales. Las recetas se muestran con cantidades base para dos personas; la adaptación de porciones será una función futura.</p>
          </div>
        )}
        {resultado && mostrarPublicidad && <AnuncioPlaceholder className="mx-auto mb-6 max-w-xl" />}

        {recetas.length > 0 && (
          <>
            <div className="mb-8 flex items-end justify-between gap-4">
              <h2 className="font-display text-3xl tracking-tight">
                {explorando ? "Explora nuestras recetas" : `Tus ${recetas.length} recetas recomendadas`}
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
        {resultado && (ultimaBusqueda || explorando) && recetas.length < resultado.totalCoincidentes && (
          <div className="mt-10 mx-auto max-w-xl rounded-2xl border border-border bg-card p-5 text-center">
            {limite < 15 ? (
              <>
                <p className="mb-3 font-semibold">Hay más recetas para ti</p>
                <p className="mb-4 text-sm text-muted-foreground">Este es un espacio reservado para publicidad. Todavía no hay anuncios reales ni ingresos publicitarios activos.</p>
                {mostrarPublicidad && <AnuncioPlaceholder className="mb-4" />}
                <button type="button" className="rounded-full bg-primary px-7 py-3 font-semibold text-primary-foreground hover:opacity-90" onClick={() => {
                  const siguiente = Math.min(15, resultado.totalCoincidentes);
                  setLimite(siguiente);
                  setResultado(explorando ? explorarCatalogo(siguiente) : buscarRecetasGratis(ultimaBusqueda!.texto, ultimaBusqueda!.preferencias, siguiente));
                }}>Ver 5 recetas adicionales (prueba sin anuncio real)</button>
              </>
            ) : (
              <>
                <p className="font-semibold">¿Quieres ver todas las coincidencias?</p>
                <p className="mt-2 text-sm text-muted-foreground">El acceso completo estará disponible con Premium cuando se activen las suscripciones verificadas.</p>
                <Link to="/premium" className="mt-4 inline-block rounded-full bg-primary px-7 py-3 font-semibold text-primary-foreground">Conocer Premium</Link>
              </>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
