import { useEffect, useRef, useState } from "react";
import { ChefHat, Clock, Flame, Heart, Users, Wallet, Check, RefreshCw, X } from "lucide-react";
import type { Receta } from "@/lib/recipes.functions";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CompartirReceta } from "@/components/CompartirReceta";
import { ResenasReceta, ResumenResenas } from "@/components/ResenasReceta";
import { ChefIAReceta } from "@/components/ChefIA";
import { claveReceta } from "@/lib/resenas";
import { disponibilidad, porcentaje } from "@/lib/coincidencia";
import { registrarEvento } from "@/lib/analitica";

export function RecetaCard({
  receta,
  indice,
  favorito,
  onToggle,
}: {
  receta: Receta;
  indice: number;
  favorito: boolean;
  onToggle: (receta: Receta) => void;
}) {
  const recetaId = claveReceta(receta.titulo);
  const estado = disponibilidad(receta);
  const pct = porcentaje(receta);
  const tieneDatos = receta.porcentajeCoincidencia != null;
  const ref = useRef<HTMLElement | null>(null);
  const visto = useRef(false);

  useEffect(() => {
    const nodo = ref.current;
    if (!nodo || typeof IntersectionObserver === "undefined") return;
    const observador = new IntersectionObserver(
      (entradas) => {
        for (const entrada of entradas) {
          if (entrada.isIntersecting && !visto.current) {
            visto.current = true;
            registrarEvento("recipe_open", { posicion: indice + 1, recetaId });
            observador.disconnect();
          }
        }
      },
      { threshold: 0.5 },
    );
    observador.observe(nodo);
    return () => observador.disconnect();
  }, [indice, recetaId]);

  return (
    <article
      ref={ref}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-[0_1px_2px_rgba(60,40,20,0.04)] transition-shadow hover:shadow-[0_16px_40px_-24px_rgba(90,60,30,0.45)]"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="font-display text-sm text-muted-foreground">
          {String(indice + 1).padStart(2, "0")}
        </span>
        <div className="flex items-center gap-2">
          <CompartirReceta receta={receta} />
          <button
            type="button"
            onClick={() => {
              onToggle(receta);
              registrarEvento("favorite_recipe", {
                recetaId,
                accion: favorito ? "quitar" : "guardar",
              });
            }}
            aria-label={favorito ? "Quitar de favoritos" : "Guardar en favoritos"}
            aria-pressed={favorito}
            className={cn(
              "focus-visible:ring-ring inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-border transition-colors focus-visible:ring-2 focus-visible:outline-none",
              favorito
                ? "border-primary bg-primary text-primary-foreground"
                : "bg-background text-muted-foreground hover:text-primary",
            )}
          >
            <Heart className={cn("size-4", favorito && "fill-current")} aria-hidden="true" />
          </button>
        </div>
      </div>

      {receta.mejorOpcion && (
        <span className="bg-primary text-primary-foreground mt-3 inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium">
          🥇 Mejor opción para ti
        </span>
      )}

      {tieneDatos && (
        <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
          <span className="border-primary/30 bg-primary/10 text-primary rounded-full border px-3 py-1 font-semibold">
            {pct}% de coincidencia
          </span>
          <span className={cn("rounded-full border px-3 py-1", estado.clase)}>{estado.texto}</span>
        </div>
      )}

      <h3 className="font-display mt-3 text-2xl leading-tight text-foreground">{receta.titulo}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{receta.descripcion}</p>

      <div className="mt-3">
        <ResumenResenas recetaId={recetaId} />
      </div>

      <div className="mt-4 flex flex-wrap gap-2 text-xs">
        <Dato icon={<Clock className="size-3.5" />} texto={`Prep. ${receta.tiempoPreparacion}`} />
        <Dato icon={<Flame className="size-3.5" />} texto={`Cocción ${receta.tiempoCoccion}`} />
        <Dato icon={<Users className="size-3.5" />} texto={receta.porciones} />
        <Dato icon={<ChefHat className="size-3.5" />} texto={receta.dificultad} />
        {receta.costoAproximado && (
          <Dato icon={<Wallet className="size-3.5" />} texto={`Costo ${receta.costoAproximado}`} />
        )}
      </div>

      {receta.preferencia && (
        <p className="text-muted-foreground mt-2 text-xs italic">Ideal para: {receta.preferencia}</p>
      )}

      {receta.ingredientesFaltantes && receta.ingredientesFaltantes.length > 0 && (
        <p className="text-muted-foreground mt-2 text-xs">
          Te falta: {receta.ingredientesFaltantes.join(", ")}
        </p>
      )}

      <div className="mt-5 grid gap-5">
        <div>
          <h4 className="text-xs font-semibold tracking-[0.18em] text-accent-foreground uppercase">
            Ingredientes
          </h4>
          <ul className="mt-2 space-y-1 text-sm text-foreground/85">
            {receta.ingredientes.map((ing, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
                {ing}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold tracking-[0.18em] text-accent-foreground uppercase">
            Paso a paso
          </h4>
          <ol className="mt-2 space-y-2 text-sm text-foreground/85">
            {receta.pasos.map((paso, i) => (
              <li key={i} className="flex gap-3">
                <span className="font-display text-primary">{i + 1}.</span>
                <span>{paso}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <ResenasReceta recetaId={recetaId} />

      <AdaptarRecetaPremium recetaId={recetaId} />
    </article>
  );
}

function Dato({ icon, texto }: { icon: React.ReactNode; texto: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-secondary-foreground">
      {icon}
      {texto}
    </span>
  );
}

const OPCIONES_PREMIUM = [
  "Cambiar cantidad de personas",
  "Sustituir ingredientes que no tengas",
  "Adaptar a preferencias",
  "Ajustarla al tiempo",
  "Adaptarla a presupuesto",
  "Crear versión personalizada",
];

function AdaptarRecetaPremium({ recetaId }: { recetaId: string }) {
  const [abierto, setAbierto] = useState(false);

  return (
    <Dialog
      open={abierto}
      onOpenChange={(v) => {
        setAbierto(v);
        if (v) {
          registrarEvento("adapt_recipe_clicked", { recetaId });
          registrarEvento("premium_preview_view", { recetaId });
        }
      }}
    >
      <DialogTrigger asChild>
        <Button
          type="button"
          variant="outline"
          className="border-primary/35 bg-background hover:border-primary hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background mt-5 h-auto min-h-12 w-full rounded-xl px-4 py-2.5 whitespace-normal"
        >
          <RefreshCw className="size-4 text-primary" aria-hidden="true" />
          <span className="flex flex-col items-start text-left leading-tight">
            <span>🔄 Adaptar receta</span>
            <span className="text-muted-foreground mt-1 text-[11px] font-normal">
              ✨ Próximamente Premium
            </span>
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent
        aria-modal="true"
        showClose={false}
        className="w-[calc(100%-2rem)] max-w-md rounded-2xl border-border bg-card p-5 sm:p-6"
      >
        <DialogClose asChild>
          <Button
            type="button"
            variant="ghost"
            aria-label="Cerrar ventana de Premium"
            className="text-muted-foreground hover:text-foreground absolute top-3 right-3 min-h-11 min-w-11 rounded-full p-0"
          >
            <X className="size-4" aria-hidden="true" />
          </Button>
        </DialogClose>

        <DialogHeader className="pr-12 text-left">
          <DialogTitle className="font-display text-2xl leading-tight" tabIndex={-1}>
            ✨ Adapta esta receta a lo que necesitas
          </DialogTitle>
          <DialogDescription className="pt-2 leading-relaxed">
            Con Premium podrás personalizar esta receta según tus necesidades.
          </DialogDescription>
        </DialogHeader>

        <ul className="grid gap-2.5 text-sm text-foreground">
          {OPCIONES_PREMIUM.map((opcion) => (
            <li key={opcion} className="flex items-start gap-2.5">
              <span className="bg-accent text-accent-foreground mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full">
                <Check className="size-3" aria-hidden="true" />
              </span>
              <span>{opcion}</span>
            </li>
          ))}
        </ul>

        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" className="min-h-11 w-full rounded-full sm:w-auto">
              ⭐ Próximamente Premium
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
