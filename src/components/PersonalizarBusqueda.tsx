import { useId, useState } from "react";
import { ChevronDown, ChevronUp, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { registrarEvento } from "@/lib/analitica";
import { INTENCIONES, PERSONAS, TIEMPOS, type Preferencias } from "@/lib/preferencias";

export function PersonalizarBusqueda({
  valor,
  onChange,
}: {
  valor: Preferencias;
  onChange: (p: Preferencias) => void;
}) {
  const [abierto, setAbierto] = useState(false);
  const panelId = useId();
  const activos = [valor.intencion, valor.personas, valor.tiempo].filter(Boolean).length;

  const alternarPanel = () => {
    setAbierto((v) => {
      if (!v) registrarEvento("personalization_open");
      return !v;
    });
  };

  const usar = (tipo: "intencion" | "personas" | "tiempo", seleccionado: boolean) => {
    if (seleccionado) registrarEvento("personalization_used", { tipoPreferencia: tipo });
  };

  return (
    <div className="mt-4 text-left">
      <Button
        type="button"
        variant="outline"
        onClick={alternarPanel}
        aria-expanded={abierto}
        aria-controls={panelId}
        className="border-primary/35 bg-card/90 text-foreground hover:border-primary hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background mx-auto h-11 min-h-11 rounded-full px-4 shadow-sm"
      >
        <Settings className="size-4 text-primary" aria-hidden="true" />
        Personalizar búsqueda
        {activos > 0 && (
          <span className="bg-primary text-primary-foreground inline-flex min-w-5 items-center justify-center rounded-full px-1.5 py-0.5 text-[10px]">
            {activos}
          </span>
        )}
        {abierto ? (
          <ChevronUp className="size-4" aria-hidden="true" />
        ) : (
          <ChevronDown className="size-4" aria-hidden="true" />
        )}
        <span className="sr-only">
          {activos > 0 ? `${activos} preferencias activas. ` : ""}
          {abierto ? "Opciones visibles, pulsa para ocultarlas" : "Pulsa para mostrar las opciones"}
        </span>
      </Button>

      <div
        id={panelId}
        hidden={!abierto}
        className="border-border bg-card/90 mt-3 space-y-4 rounded-2xl border p-4 shadow-sm"
      >
        <Grupo titulo="¿Qué buscas?">
          {INTENCIONES.map((i) => {
            const activo = valor.intencion === i.valor;
            return (
              <Chip
                key={i.valor}
                activo={activo}
                onClick={() => {
                  usar("intencion", !activo);
                  onChange({ ...valor, intencion: activo ? undefined : i.valor });
                }}
              >
                {i.etiqueta}
              </Chip>
            );
          })}
        </Grupo>

        <Grupo titulo="¿Cuántas personas?">
          {PERSONAS.map((p) => {
            const activo = valor.personas === p;
            return (
              <Chip
                key={p}
                activo={activo}
                etiqueta={`${p} personas`}
                onClick={() => {
                  usar("personas", !activo);
                  onChange({ ...valor, personas: activo ? undefined : p });
                }}
              >
                {p}
              </Chip>
            );
          })}
        </Grupo>

        <Grupo titulo="¿Cuánto tiempo tienes?">
          {TIEMPOS.map((t) => {
            const activo = valor.tiempo === t.valor;
            return (
              <Chip
                key={t.valor}
                activo={activo}
                onClick={() => {
                  usar("tiempo", !activo);
                  onChange({ ...valor, tiempo: activo ? undefined : t.valor });
                }}
              >
                {t.etiqueta}
              </Chip>
            );
          })}
        </Grupo>

        {activos > 0 && (
          <button
            type="button"
            onClick={() => onChange({})}
            className="text-muted-foreground hover:text-foreground focus-visible:ring-ring inline-flex min-h-11 items-center rounded-md text-xs underline underline-offset-4 focus-visible:ring-2 focus-visible:outline-none"
          >
            Quitar filtros
          </button>
        )}
      </div>
    </div>
  );
}

function Grupo({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  const tituloId = useId();
  return (
    <div role="group" aria-labelledby={tituloId}>
      <p
        id={tituloId}
        className="text-accent-foreground text-[11px] font-semibold tracking-[0.16em] uppercase"
      >
        {titulo}
      </p>
      <div className="mt-2 flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

function Chip({
  activo,
  onClick,
  etiqueta,
  children,
}: {
  activo: boolean;
  onClick: () => void;
  etiqueta?: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={activo}
      {...(etiqueta ? { "aria-label": etiqueta } : {})}
      className={cn(
        "focus-visible:ring-ring inline-flex min-h-11 items-center rounded-full border px-4 text-xs transition-colors focus-visible:ring-2 focus-visible:outline-none",
        activo
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-card text-muted-foreground hover:border-primary hover:text-foreground",
      )}
    >
      {children}
    </button>
  );
}
