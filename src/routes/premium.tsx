import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { Check, Loader2, Sparkles } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { PremiumDemo } from "@/components/PremiumDemo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  aprovecharSobras,
  crearMenuSemanal,
  type IdeasSobras,
  type MenuSemanal,
} from "@/lib/chef.functions";
import { useListaCompras } from "@/lib/listaCompras";
import { BENEFICIOS_PREMIUM, PRECIOS } from "@/lib/plan";

export const Route = createFileRoute("/premium")({
  head: () => ({
    meta: [
      { title: "Chef IA Premium · Cocina Inteligente" },
      {
        name: "description",
        content:
          "Chef IA adapta tus recetas: cantidades, sustituciones, tiempo, presupuesto, menús semanales y listas de compras.",
      },
      { property: "og:title", content: "👨‍🍳 Chef IA · Tu asistente personal de cocina" },
      {
        property: "og:description",
        content: "Convierte cualquier receta en una receta hecha para ti.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PremiumPagina,
});

function PremiumPagina() {

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl px-5 py-10">
        <h1 className="font-display text-4xl leading-tight text-foreground">👨‍🍳 Chef IA</h1>
        <p className="text-primary mt-1 text-sm font-medium">Tu asistente personal de cocina</p>
        <p className="text-muted-foreground mt-3 text-base">
          Convierte cualquier receta en una receta hecha para ti.
        </p>

        <ul className="mt-6 grid gap-2 sm:grid-cols-2">
          {BENEFICIOS_PREMIUM.map((b) => (
            <li key={b} className="flex items-start gap-2.5 text-sm text-foreground">
              <span className="bg-accent text-accent-foreground mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full">
                <Check className="size-3" aria-hidden="true" />
              </span>
              {b}
            </li>
          ))}
        </ul>

        <div className="border-border bg-card mt-8 grid gap-3 rounded-3xl border p-6">
          <p className="font-display text-2xl">{PRECIOS.mensual}</p>
          <p className="text-muted-foreground text-sm">{PRECIOS.anual}</p>
          <p className="text-muted-foreground text-xs">
            Precio orientativo. Todavía no hay pagos ni suscripciones activos.
          </p>
          <Button type="button" className="min-h-12 rounded-full" disabled>
            ⭐ Próximamente Premium
          </Button>
          <p className="text-muted-foreground text-xs">
            Puedes probar el planificador semanal y la lista de compras sin iniciar sesión ni contratar Premium.
            Los cálculos son locales, los precios son simulados y las herramientas de IA permanecen desactivadas.
          </p>
        </div>

        <div className="mt-10 grid gap-10">
          <PremiumDemo />
        </div>
      </main>
    </div>
  );
}

function SobrasPanel() {
  const pedir = useServerFn(aprovecharSobras);
  const [sobras, setSobras] = useState("");
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [ideas, setIdeas] = useState<IdeasSobras | null>(null);

  return (
    <section>
      <h2 className="font-display text-2xl">♻️ Aprovechar sobras</h2>
      <p className="text-muted-foreground mt-1 text-sm">
        Cuéntanos qué te sobró y el Chef IA propone ideas para no desperdiciar nada.
      </p>
      <Textarea
        value={sobras}
        onChange={(e) => setSobras(e.target.value)}
        placeholder="Ej.: me sobró pollo asado, arroz y verduras"
        aria-label="Alimentos que te sobraron"
        className="mt-3 min-h-20 rounded-xl"
      />
      <Button
        type="button"
        className="mt-3 min-h-11 rounded-full"
        disabled={cargando || sobras.trim().length < 3}
        onClick={async () => {
          setCargando(true);
          setError(null);
          try {
            setIdeas(await pedir({ data: { sobras: sobras.trim() } }));
          } catch (e) {
            setError(e instanceof Error ? e.message : "No se pudieron generar ideas.");
          } finally {
            setCargando(false);
          }
        }}
      >
        {cargando ? <Loader2 className="size-4 animate-spin" aria-hidden="true" /> : <Sparkles className="size-4" aria-hidden="true" />}
        {cargando ? "Buscando ideas…" : "Generar ideas"}
      </Button>
      {error && <p className="text-destructive mt-2 text-sm">{error}</p>}
      {ideas && (
        <div className="mt-4 grid gap-3" aria-live="polite">
          {ideas.ideas.map((idea, i) => (
            <article key={i} className="border-border bg-card rounded-2xl border p-4">
              <h3 className="font-display text-lg">{idea.titulo}</h3>
              <p className="text-muted-foreground mt-1 text-sm">{idea.descripcion}</p>
              <p className="text-muted-foreground mt-1 text-xs">Usa: {idea.ingredientesUsados.join(", ")}</p>
              <p className="text-primary mt-1 text-xs">{idea.urgencia}</p>
              <ol className="mt-2 grid gap-1 text-sm">
                {idea.pasos.map((p, k) => (
                  <li key={k}>
                    <span className="text-primary">{k + 1}.</span> {p}
                  </li>
                ))}
              </ol>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

function MenuPanel() {
  const pedir = useServerFn(crearMenuSemanal);
  const { agregar } = useListaCompras();
  const [personas, setPersonas] = useState(4);
  const [dias, setDias] = useState(5);
  const [comidas, setComidas] = useState("Almuerzo y cena");
  const [presupuesto, setPresupuesto] = useState("");
  const [preferencias, setPreferencias] = useState("");
  const [tiene, setTiene] = useState("");
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [menu, setMenu] = useState<MenuSemanal | null>(null);
  const [aviso, setAviso] = useState<string | null>(null);

  return (
    <section>
      <h2 className="font-display text-2xl">📅 Crear menú semanal</h2>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <label className="grid gap-1 text-xs">
          Personas
          <Input
            type="number"
            min={1}
            max={20}
            value={personas}
            onChange={(e) => setPersonas(Math.max(1, Math.min(20, Number(e.target.value) || 1)))}
            className="min-h-11 rounded-xl"
          />
        </label>
        <label className="grid gap-1 text-xs">
          Días
          <Input
            type="number"
            min={1}
            max={7}
            value={dias}
            onChange={(e) => setDias(Math.max(1, Math.min(7, Number(e.target.value) || 1)))}
            className="min-h-11 rounded-xl"
          />
        </label>
        <label className="grid gap-1 text-xs">
          Tipo de comidas
          <Input value={comidas} onChange={(e) => setComidas(e.target.value)} className="min-h-11 rounded-xl" />
        </label>
        <label className="grid gap-1 text-xs">
          Presupuesto aproximado
          <Input
            value={presupuesto}
            onChange={(e) => setPresupuesto(e.target.value)}
            placeholder="Ej.: $40.000"
            className="min-h-11 rounded-xl"
          />
        </label>
        <label className="grid gap-1 text-xs sm:col-span-2">
          Preferencias
          <Input
            value={preferencias}
            onChange={(e) => setPreferencias(e.target.value)}
            placeholder="Ej.: saludable, sin cerdo"
            className="min-h-11 rounded-xl"
          />
        </label>
        <label className="grid gap-1 text-xs sm:col-span-2">
          Alimentos que ya tienes
          <Textarea
            value={tiene}
            onChange={(e) => setTiene(e.target.value)}
            placeholder="Ej.: arroz, huevos, zanahorias"
            className="min-h-16 rounded-xl"
          />
        </label>
      </div>

      <Button
        type="button"
        className="mt-3 min-h-11 rounded-full"
        disabled={cargando}
        onClick={async () => {
          setCargando(true);
          setError(null);
          try {
            setMenu(
              await pedir({
                data: {
                  personas,
                  dias,
                  comidas,
                  ...(presupuesto.trim() ? { presupuesto: presupuesto.trim() } : {}),
                  ...(preferencias.trim() ? { preferencias: preferencias.trim() } : {}),
                  ...(tiene.trim() ? { tiene: tiene.trim() } : {}),
                },
              }),
            );
          } catch (e) {
            setError(e instanceof Error ? e.message : "No se pudo crear el menú.");
          } finally {
            setCargando(false);
          }
        }}
      >
        {cargando ? <Loader2 className="size-4 animate-spin" aria-hidden="true" /> : <Sparkles className="size-4" aria-hidden="true" />}
        {cargando ? "Creando menú…" : "Crear menú semanal"}
      </Button>
      {error && <p className="text-destructive mt-2 text-sm">{error}</p>}

      {menu && (
        <div className="mt-4 grid gap-3" aria-live="polite">
          {menu.dias.map((d, i) => (
            <article key={i} className="border-border bg-card rounded-2xl border p-4">
              <h3 className="font-display text-lg">{d.dia}</h3>
              <ul className="mt-1 grid gap-1 text-sm">
                {d.comidas.map((c, k) => (
                  <li key={k}>
                    {c.emoji} <span className="text-muted-foreground text-xs">{c.tipo}:</span> {c.nombre}
                  </li>
                ))}
              </ul>
            </article>
          ))}
          <p className="font-display text-xl">💰 Costo estimado del menú: {menu.costoEstimado}</p>
          <p className="text-muted-foreground text-xs italic">{menu.nota}</p>
          <div className="flex flex-wrap gap-2">
            <Button
              type="button"
              className="min-h-11 rounded-full"
              onClick={() => setAviso(`${agregar(menu.listaCompras, "Menú semanal")} ingrediente(s) agregados.`)}
            >
              🛒 Generar lista de compras
            </Button>
            <Button asChild variant="outline" className="min-h-11 rounded-full">
              <Link to="/lista">Ver mi lista</Link>
            </Button>
          </div>
          {aviso && (
            <p className="text-primary text-xs" aria-live="polite">
              {aviso}
            </p>
          )}
        </div>
      )}
    </section>
  );
}
