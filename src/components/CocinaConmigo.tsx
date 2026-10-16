import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowLeft, Check, Pause, Play, RotateCcw, Timer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/** Detecta minutos mencionados en el paso para ofrecer temporizador. */
function minutosDelPaso(paso: string): number | null {
  const m = paso.toLowerCase().match(/(\d{1,3})\s*(?:a\s*\d{1,3}\s*)?(?:min|minutos?)/);
  if (m) return Math.min(240, parseInt(m[1]!, 10));
  const h = paso.toLowerCase().match(/(\d{1,2})\s*(?:h|horas?)/);
  if (h) return Math.min(240, parseInt(h[1]!, 10) * 60);
  return null;
}

function formato(segundos: number) {
  const m = Math.floor(segundos / 60);
  const s = segundos % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export function CocinaConmigo({ pasos }: { pasos: string[] }) {
  const [indice, setIndice] = useState(0);
  const paso = pasos[indice] ?? "";
  const minutos = useMemo(() => minutosDelPaso(paso), [paso]);

  const [restante, setRestante] = useState<number | null>(null);
  const [corriendo, setCorriendo] = useState(false);
  const intervalo = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    setRestante(null);
    setCorriendo(false);
  }, [indice]);

  useEffect(() => {
    if (!corriendo) return;
    intervalo.current = setInterval(() => {
      setRestante((r) => {
        if (r === null) return r;
        if (r <= 1) {
          setCorriendo(false);
          return 0;
        }
        return r - 1;
      });
    }, 1000);
    return () => {
      if (intervalo.current) clearInterval(intervalo.current);
    };
  }, [corriendo]);

  return (
    <div className="border-border bg-secondary/30 rounded-2xl border p-4">
      <p className="text-muted-foreground text-xs font-semibold tracking-[0.18em] uppercase">
        Paso {indice + 1} de {pasos.length}
      </p>
      <p className="mt-2 text-base leading-relaxed text-foreground">{paso}</p>

      {minutos !== null && (
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {restante === null ? (
            <Button
              type="button"
              variant="outline"
              className="min-h-11 rounded-full"
              onClick={() => {
                setRestante(minutos * 60);
                setCorriendo(true);
              }}
            >
              <Timer className="size-4" aria-hidden="true" />⏱️ Iniciar temporizador ({minutos} min)
            </Button>
          ) : (
            <>
              <span
                aria-live="polite"
                className={cn(
                  "font-display rounded-full px-4 py-2 text-xl tabular-nums",
                  restante === 0
                    ? "bg-primary text-primary-foreground"
                    : "bg-background text-foreground border-border border",
                )}
              >
                {restante === 0 ? "¡Listo!" : formato(restante)}
              </span>
              <Button
                type="button"
                variant="outline"
                className="min-h-11 min-w-11 rounded-full"
                aria-label={corriendo ? "Pausar temporizador" : "Continuar temporizador"}
                onClick={() => setCorriendo((c) => !c)}
                disabled={restante === 0}
              >
                {corriendo ? <Pause className="size-4" /> : <Play className="size-4" />}
              </Button>
              <Button
                type="button"
                variant="ghost"
                className="min-h-11 min-w-11 rounded-full"
                aria-label="Reiniciar temporizador"
                onClick={() => {
                  setRestante(minutos * 60);
                  setCorriendo(false);
                }}
              >
                <RotateCcw className="size-4" />
              </Button>
            </>
          )}
        </div>
      )}

      <div className="mt-4 flex gap-2">
        <Button
          type="button"
          variant="outline"
          className="min-h-11 flex-1 rounded-full"
          onClick={() => setIndice((i) => Math.max(0, i - 1))}
          disabled={indice === 0}
        >
          <ArrowLeft className="size-4" aria-hidden="true" /> Anterior
        </Button>
        <Button
          type="button"
          className="min-h-11 flex-1 rounded-full"
          onClick={() => setIndice((i) => Math.min(pasos.length - 1, i + 1))}
          disabled={indice === pasos.length - 1}
        >
          <Check className="size-4" aria-hidden="true" />
          {indice === pasos.length - 1 ? "Terminado" : "Listo / Siguiente"}
        </Button>
      </div>
    </div>
  );
}
