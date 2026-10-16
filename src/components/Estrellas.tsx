import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function Estrellas({
  valor,
  tamano = "size-4",
  className,
}: {
  valor: number;
  tamano?: string;
  className?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-0.5", className)} aria-hidden="true">
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          className={cn(
            tamano,
            n <= Math.round(valor) ? "fill-current text-primary" : "text-muted-foreground/40",
          )}
        />
      ))}
    </span>
  );
}

export function SelectorEstrellas({
  valor,
  onChange,
}: {
  valor: number;
  onChange: (n: number) => void;
}) {
  return (
    <div className="inline-flex items-center gap-1" role="radiogroup" aria-label="Calificación">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          role="radio"
          aria-checked={valor === n}
          aria-label={`${n} de 5 estrellas`}
          onClick={() => onChange(n)}
          className="focus-visible:ring-ring inline-flex min-h-11 min-w-11 items-center justify-center rounded-full transition-transform hover:scale-110 focus-visible:ring-2 focus-visible:outline-none"
        >
          <Star
            className={cn(
              "size-6",
              n <= valor ? "fill-current text-primary" : "text-muted-foreground/40",
            )}
          />
        </button>
      ))}
    </div>
  );
}
