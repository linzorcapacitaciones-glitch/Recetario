import { useMemo, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Link } from "@tanstack/react-router";
import { Check, Loader2, RefreshCw, Send, Sparkles, X } from "lucide-react";
import type { Receta } from "@/lib/recipes.functions";
import {
  adaptarReceta,
  calcularCosto,
  estimarNutricion,
  preguntarChef,
  type CostoReceta,
  type Nutricion,
  type RecetaAdaptada,
} from "@/lib/chef.functions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CocinaConmigo } from "@/components/CocinaConmigo";
import { ImagenPlato } from "@/components/ImagenPlato";
import { useListaCompras } from "@/lib/listaCompras";
import { usePlan, BENEFICIOS_PREMIUM, PRECIOS } from "@/lib/plan";
import { registrarEvento } from "@/lib/analitica";
import { claveReceta } from "@/lib/resenas";
import { cn } from "@/lib/utils";

const OPCIONES = [
  { tipo: "personas", etiqueta: "👨‍👩‍👧 Cambiar cantidad de personas", ejemplo: "Somos 6 personas" },
  { tipo: "sustituir", etiqueta: "🔄 Sustituir ingredientes", ejemplo: "No tengo mantequilla" },
  { tipo: "tiempo", etiqueta: "⏱️ Ajustar tiempo", ejemplo: "Quiero hacerla en 20 minutos" },
  { tipo: "presupuesto", etiqueta: "💰 Ajustar presupuesto", ejemplo: "Quiero gastar máximo $6.000" },
  { tipo: "preferencias", etiqueta: "🥗 Adaptar preferencias", ejemplo: "Una versión más saludable" },
  { tipo: "variacion", etiqueta: "🧠 Crear una variación", ejemplo: "Una versión al horno" },
] as const;

type TipoAdaptacion = (typeof OPCIONES)[number]["tipo"];

const PREGUNTAS_RAPIDAS = [
  "¿Con qué puedo reemplazar un ingrediente?",
  "¿Cómo puedo hacerla más saludable?",
  "¿Cómo reduzco el costo?",
  "¿Puedo prepararla más rápido?",
  "¿Cómo sé si está lista?",
  "¿Qué hago si me quedó salada?",
];

function contexto(receta: Receta) {
  return {
    titulo: receta.titulo,
    porciones: receta.porciones,
    tiempoPreparacion: receta.tiempoPreparacion,
    tiempoCoccion: receta.tiempoCoccion,
    dificultad: receta.dificultad,
    ingredientes: receta.ingredientes,
    pasos: receta.pasos,
  };
}

export function ChefIAReceta({ receta }: { receta: Receta }) {
  const [abierto, setAbierto] = useState(false);
  const { esPremium } = usePlan();
  const recetaId = claveReceta(receta.titulo);

  return (
    <Dialog
      open={abierto}
      onOpenChange={(v) => {
        setAbierto(v);
        if (v) {
          registrarEvento("adapt_recipe_clicked", { recetaId });
          if (!esPremium) registrarEvento("premium_preview_view", { recetaId });
        }
      }}
    >
      <DialogTrigger asChild>
        <Button
          type="button"
          variant="outline"
          className="border-primary/35 bg-background hover:border-primary hover:bg-accent focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 mt-5 h-auto min-h-12 w-full rounded-xl px-4 py-2.5 whitespace-normal"
        >
          <RefreshCw className="size-4 text-primary" aria-hidden="true" />
          <span className="flex flex-col items-start text-left leading-tight">
            <span>🔄 Adaptar receta</span>
            <span className="text-muted-foreground mt-1 text-[11px] font-normal">
              {esPremium ? "👨‍🍳 Demostración Premium" : "✨ Próximamente Premium"}
            </span>
          </span>
        </Button>
      </DialogTrigger>

      <DialogContent
        aria-modal="true"
        showClose={false}
        className="flex max-h-[88vh] w-[calc(100%-1.5rem)] max-w-2xl flex-col overflow-hidden rounded-2xl border-border bg-card p-0"
      >
        <DialogClose asChild>
          <Button
            type="button"
            variant="ghost"
            aria-label="Cerrar Chef IA"
            className="text-muted-foreground hover:text-foreground absolute top-3 right-3 z-10 min-h-11 min-w-11 rounded-full p-0"
          >
            <X className="size-4" aria-hidden="true" />
          </Button>
        </DialogClose>

        <DialogHeader className="border-border border-b p-5 pr-14 text-left sm:p-6 sm:pr-14">
          <DialogTitle className="font-display text-2xl leading-tight" tabIndex={-1}>
            👨‍🍳 Chef IA
          </DialogTitle>
          <DialogDescription className="pt-1 leading-relaxed">
            {esPremium
              ? `Demostración sin IA para “${receta.titulo}”.`
              : "Con Premium podrás personalizar esta receta según tus necesidades."}
          </DialogDescription>
        </DialogHeader>

        <div className="min-h-0 flex-1 overflow-y-auto p-5 sm:p-6">
          {esPremium ? (
            <div className="grid gap-4">
              <p className="rounded-xl border border-primary/30 bg-primary/10 px-4 py-3 text-sm">
                Vista de prueba: puedes cocinar paso a paso y preparar tu lista de compras.
                Las adaptaciones automáticas, preguntas al Chef e imágenes con IA esperan la activación de suscripciones.
              </p>
              <CocinaConmigo pasos={receta.pasos} />
              <ComprasPanel receta={receta} />
            </div>
          ) : <VistaPreviaPremium />}
        </div>
      </DialogContent>
    </Dialog>
  );
}

function VistaPreviaPremium() {
  return (
    <div className="grid gap-4">
      <p className="text-sm text-foreground">
        ✨ Adapta esta receta a lo que necesitas: cantidades, ingredientes, tiempo, presupuesto y más.
      </p>
      <ul className="grid gap-2.5 text-sm text-foreground">
        {BENEFICIOS_PREMIUM.map((b) => (
          <li key={b} className="flex items-start gap-2.5">
            <span className="bg-accent text-accent-foreground mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full">
              <Check className="size-3" aria-hidden="true" />
            </span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <p className="text-muted-foreground text-xs">
        {PRECIOS.mensual} · {PRECIOS.anual} · aún no disponible para compra.
      </p>
      <Button asChild className="min-h-11 rounded-full">
        <Link to="/premium">⭐ Ver Chef IA Premium</Link>
      </Button>
    </div>
  );
}

function PanelPremium({ receta }: { receta: Receta }) {
  return (
    <Tabs defaultValue="chef">
      <TabsList className="flex h-auto w-full flex-wrap justify-start gap-1 bg-secondary/60 p-1">
        <TabsTrigger value="chef" className="min-h-10 rounded-full px-3 text-xs">
          ✨ Pregúntale
        </TabsTrigger>
        <TabsTrigger value="adaptar" className="min-h-10 rounded-full px-3 text-xs">
          🔄 Adaptar
        </TabsTrigger>
        <TabsTrigger value="costo" className="min-h-10 rounded-full px-3 text-xs">
          💰 Costo
        </TabsTrigger>
        <TabsTrigger value="cocinar" className="min-h-10 rounded-full px-3 text-xs">
          👨‍🍳 Cocina conmigo
        </TabsTrigger>
        <TabsTrigger value="extras" className="min-h-10 rounded-full px-3 text-xs">
          🥗 Nutrición y compras
        </TabsTrigger>
      </TabsList>

      <TabsContent value="chef" className="mt-4">
        <PreguntarChef receta={receta} />
      </TabsContent>
      <TabsContent value="adaptar" className="mt-4">
        <AdaptarPanel receta={receta} />
      </TabsContent>
      <TabsContent value="costo" className="mt-4">
        <CostoPanel receta={receta} />
      </TabsContent>
      <TabsContent value="cocinar" className="mt-4">
        <CocinaConmigo pasos={receta.pasos} />
        <ImagenPlato titulo={receta.titulo} descripcion={receta.descripcion} />
      </TabsContent>
      <TabsContent value="extras" className="mt-4 grid gap-5">
        <NutricionPanel receta={receta} />
        <ComprasPanel receta={receta} />
      </TabsContent>
    </Tabs>
  );
}

/* ------------------------------- Pregúntale al chef -------------------------------- */

function PreguntarChef({ receta }: { receta: Receta }) {
  const preguntar = useServerFn(preguntarChef);
  const [mensajes, setMensajes] = useState<{ rol: "usuario" | "chef"; texto: string }[]>([]);
  const [texto, setTexto] = useState("");
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const enviar = async (pregunta: string) => {
    const limpio = pregunta.trim();
    if (!limpio || cargando) return;
    setTexto("");
    setError(null);
    setCargando(true);
    const historial = mensajes.slice(-6);
    setMensajes((m) => [...m, { rol: "usuario", texto: limpio }]);
    try {
      const res = await preguntar({
        data: { receta: contexto(receta), pregunta: limpio, historial },
      });
      setMensajes((m) => [...m, { rol: "chef", texto: res.respuesta }]);
    } catch (e) {
      setError(e instanceof Error ? e.message : "No se pudo responder.");
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="grid gap-3">
      <p className="text-sm font-medium text-foreground">✨ Pregúntale a tu Chef IA</p>
      <div className="flex flex-wrap gap-2">
        {PREGUNTAS_RAPIDAS.map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => void enviar(p)}
            className="border-border bg-background hover:border-primary hover:text-primary focus-visible:ring-ring min-h-9 rounded-full border px-3 py-1.5 text-xs transition-colors focus-visible:ring-2 focus-visible:outline-none"
          >
            {p}
          </button>
        ))}
      </div>

      {mensajes.length > 0 && (
        <div className="grid gap-2" aria-live="polite">
          {mensajes.map((m, i) => (
            <p
              key={i}
              className={cn(
                "rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
                m.rol === "usuario"
                  ? "bg-primary text-primary-foreground ml-auto max-w-[85%]"
                  : "bg-secondary/50 text-foreground mr-auto max-w-[95%]",
              )}
            >
              {m.texto}
            </p>
          ))}
        </div>
      )}
      {cargando && (
        <p className="text-muted-foreground flex items-center gap-2 text-sm">
          <Loader2 className="size-4 animate-spin" aria-hidden="true" /> El Chef está pensando…
        </p>
      )}
      {error && <p className="text-destructive text-sm">{error}</p>}

      <form
        className="flex gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          void enviar(texto);
        }}
      >
        <Input
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Ej.: No tengo mantequilla, ¿con qué la reemplazo?"
          aria-label="Escribe tu pregunta al Chef IA"
          className="min-h-11 rounded-full"
        />
        <Button type="submit" className="min-h-11 min-w-11 rounded-full" aria-label="Enviar pregunta" disabled={cargando}>
          <Send className="size-4" aria-hidden="true" />
        </Button>
      </form>
    </div>
  );
}

/* ------------------------------------ Adaptar -------------------------------------- */

function AdaptarPanel({ receta }: { receta: Receta }) {
  const adaptar = useServerFn(adaptarReceta);
  const [tipo, setTipo] = useState<TipoAdaptacion>("personas");
  const [instruccion, setInstruccion] = useState("");
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [resultado, setResultado] = useState<RecetaAdaptada | null>(null);
  const ejemplo = useMemo(() => OPCIONES.find((o) => o.tipo === tipo)!.ejemplo, [tipo]);

  const ejecutar = async () => {
    const texto = instruccion.trim() || ejemplo;
    setCargando(true);
    setError(null);
    try {
      setResultado(await adaptar({ data: { receta: contexto(receta), tipo, instruccion: texto } }));
    } catch (e) {
      setError(e instanceof Error ? e.message : "No se pudo adaptar la receta.");
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="grid gap-3">
      <div className="grid gap-2 sm:grid-cols-2">
        {OPCIONES.map((o) => (
          <button
            key={o.tipo}
            type="button"
            aria-pressed={tipo === o.tipo}
            onClick={() => setTipo(o.tipo)}
            className={cn(
              "border-border focus-visible:ring-ring min-h-11 rounded-xl border px-3 py-2 text-left text-sm transition-colors focus-visible:ring-2 focus-visible:outline-none",
              tipo === o.tipo ? "border-primary bg-accent text-accent-foreground" : "bg-background hover:border-primary",
            )}
          >
            {o.etiqueta}
          </button>
        ))}
      </div>

      <Textarea
        value={instruccion}
        onChange={(e) => setInstruccion(e.target.value)}
        placeholder={`Ej.: ${ejemplo}`}
        aria-label="Instrucciones para adaptar la receta"
        className="min-h-20 rounded-xl"
      />
      <Button type="button" className="min-h-11 rounded-full" onClick={() => void ejecutar()} disabled={cargando}>
        {cargando ? <Loader2 className="size-4 animate-spin" aria-hidden="true" /> : <Sparkles className="size-4" aria-hidden="true" />}
        {cargando ? "Adaptando…" : "Adaptar receta"}
      </Button>
      {error && <p className="text-destructive text-sm">{error}</p>}

      {resultado && (
        <article className="border-border bg-secondary/30 grid gap-3 rounded-2xl border p-4" aria-live="polite">
          <h4 className="font-display text-xl leading-tight">{resultado.titulo}</h4>
          <p className="text-muted-foreground text-sm">{resultado.resumen}</p>
          <p className="text-muted-foreground text-xs">
            {resultado.porciones} · Prep. {resultado.tiempoPreparacion} · Cocción {resultado.tiempoCoccion}
          </p>
          <div>
            <h5 className="text-xs font-semibold tracking-[0.18em] uppercase">Ingredientes</h5>
            <ul className="mt-1 space-y-1 text-sm">
              {resultado.ingredientes.map((i, k) => (
                <li key={k}>• {i}</li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-xs font-semibold tracking-[0.18em] uppercase">Paso a paso</h5>
            <ol className="mt-1 space-y-1 text-sm">
              {resultado.pasos.map((p, k) => (
                <li key={k}>
                  <span className="text-primary">{k + 1}.</span> {p}
                </li>
              ))}
            </ol>
          </div>
          <p className="text-muted-foreground text-xs italic">{resultado.notas}</p>
        </article>
      )}
    </div>
  );
}

/* -------------------------------------- Costo -------------------------------------- */

function numeroPersonas(porciones?: string) {
  const m = porciones?.match(/\d{1,2}/);
  return m ? Math.max(1, Math.min(20, parseInt(m[0], 10))) : 4;
}

const moneda = (n: number) => `$${Math.round(n).toLocaleString("es-CL")}`;

function CostoPanel({ receta }: { receta: Receta }) {
  const calcular = useServerFn(calcularCosto);
  const [personas, setPersonas] = useState(numeroPersonas(receta.porciones));
  const [precios, setPrecios] = useState("");
  const [presupuesto, setPresupuesto] = useState("");
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [costo, setCosto] = useState<CostoReceta | null>(null);

  const ejecutar = async () => {
    setCargando(true);
    setError(null);
    try {
      const presu = parseInt(presupuesto.replace(/\D/g, ""), 10);
      setCosto(
        await calcular({
          data: {
            receta: contexto(receta),
            personas,
            ...(receta.ingredientesFaltantes?.length ? { faltantes: receta.ingredientesFaltantes } : {}),
            ...(precios.trim() ? { precios: precios.trim() } : {}),
            ...(Number.isFinite(presu) && presu > 0 ? { presupuesto: presu } : {}),
          },
        }),
      );
    } catch (e) {
      setError(e instanceof Error ? e.message : "No se pudo calcular el costo.");
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="grid gap-3">
      <p className="text-sm font-medium text-foreground">💰 ¿Cuánto cuesta esta receta?</p>
      <div className="grid gap-3 sm:grid-cols-2">
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
          💰 Ajustar receta a mi presupuesto
          <Input
            inputMode="numeric"
            value={presupuesto}
            onChange={(e) => setPresupuesto(e.target.value)}
            placeholder="Ej.: 6000"
            className="min-h-11 rounded-xl"
          />
        </label>
      </div>
      <label className="grid gap-1 text-xs">
        Precios que conoces (opcional)
        <Textarea
          value={precios}
          onChange={(e) => setPrecios(e.target.value)}
          placeholder="Ej.: pollo $5.000 el kilo, arroz $1.200 el kilo"
          className="min-h-16 rounded-xl"
        />
      </label>
      <Button type="button" className="min-h-11 rounded-full" onClick={() => void ejecutar()} disabled={cargando}>
        {cargando ? <Loader2 className="size-4 animate-spin" aria-hidden="true" /> : null}
        {cargando ? "Calculando…" : "Calcular costo estimado"}
      </Button>
      {error && <p className="text-destructive text-sm">{error}</p>}

      {costo && (
        <div className="border-border bg-secondary/30 grid gap-2 rounded-2xl border p-4 text-sm" aria-live="polite">
          <p className="font-display text-xl">Costo total estimado: {moneda(costo.costoTotal)}</p>
          <p>{costo.personas} personas</p>
          <p>Costo por persona: {moneda(costo.costoPorPersona)}</p>
          <ul className="mt-1 grid gap-1 text-xs">
            {costo.items.map((i, k) => (
              <li key={k} className="flex justify-between gap-3">
                <span>
                  {i.disponible ? "✓" : "🛒"} {i.ingrediente}
                </span>
                <span className="tabular-nums">{moneda(i.costo)}</span>
              </li>
            ))}
          </ul>
          {costo.faltantes.length > 0 && (
            <p className="text-muted-foreground text-xs">Te falta: {costo.faltantes.join(", ")}</p>
          )}
          <p className="text-muted-foreground text-xs italic">{costo.nota}</p>
          <p className="text-muted-foreground text-xs">Los valores son estimaciones, no precios garantizados.</p>
        </div>
      )}
    </div>
  );
}

/* ------------------------------ Nutrición y compras -------------------------------- */

function NutricionPanel({ receta }: { receta: Receta }) {
  const estimar = useServerFn(estimarNutricion);
  const [datos, setDatos] = useState<Nutricion | null>(null);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="grid gap-2">
      <p className="text-sm font-medium text-foreground">🥗 Información nutricional estimada</p>
      <Button
        type="button"
        variant="outline"
        className="min-h-11 rounded-full"
        disabled={cargando}
        onClick={async () => {
          setCargando(true);
          setError(null);
          try {
            setDatos(await estimar({ data: { receta: contexto(receta) } }));
          } catch (e) {
            setError(e instanceof Error ? e.message : "No se pudo estimar.");
          } finally {
            setCargando(false);
          }
        }}
      >
        {cargando ? <Loader2 className="size-4 animate-spin" aria-hidden="true" /> : null}
        {cargando ? "Estimando…" : "Calcular información nutricional"}
      </Button>
      {error && <p className="text-destructive text-sm">{error}</p>}
      {datos && (
        <div className="border-border bg-secondary/30 grid gap-1 rounded-2xl border p-4 text-sm" aria-live="polite">
          <p className="text-muted-foreground text-xs">Por {datos.porcion}</p>
          <p>Calorías: {datos.calorias}</p>
          <p>Proteínas: {datos.proteinas}</p>
          <p>Carbohidratos: {datos.carbohidratos}</p>
          <p>Grasas: {datos.grasas}</p>
          <p className="text-muted-foreground text-xs italic">{datos.nota}</p>
        </div>
      )}
    </div>
  );
}

function ComprasPanel({ receta }: { receta: Receta }) {
  const { agregar } = useListaCompras();
  const [aviso, setAviso] = useState<string | null>(null);
  const faltantes = receta.ingredientesFaltantes ?? [];

  return (
    <div className="grid gap-2">
      <p className="text-sm font-medium text-foreground">🛒 Crear lista de compras</p>
      <p className="text-muted-foreground text-xs">
        {faltantes.length > 0
          ? `Te falta: ${faltantes.join(", ")}.`
          : "No detectamos ingredientes faltantes; puedes agregar todos los de la receta."}
      </p>
      <div className="flex flex-wrap gap-2">
        {faltantes.length > 0 && (
          <Button
            type="button"
            className="min-h-11 rounded-full"
            onClick={() => setAviso(`${agregar(faltantes, receta.titulo)} ingrediente(s) agregados.`)}
          >
            Agregar lo que falta
          </Button>
        )}
        <Button
          type="button"
          variant="outline"
          className="min-h-11 rounded-full"
          onClick={() => setAviso(`${agregar(receta.ingredientes, receta.titulo)} ingrediente(s) agregados.`)}
        >
          Agregar todos los ingredientes
        </Button>
        <Button asChild variant="ghost" className="min-h-11 rounded-full">
          <Link to="/lista">Ver mi lista</Link>
        </Button>
      </div>
      {aviso && (
        <p className="text-primary text-xs" aria-live="polite">
          {aviso}
        </p>
      )}
    </div>
  );
}
