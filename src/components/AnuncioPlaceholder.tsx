import { Megaphone } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Espacio publicitario reservado, no invasivo y sin proveedor integrado.
 * Nunca debe colocarse dentro de los pasos de una receta.
 */
export function AnuncioPlaceholder({ className }: { className?: string }) {
  return (
    <aside
      aria-label="Espacio publicitario"
      className={cn(
        "border-border bg-secondary/40 text-muted-foreground flex items-center justify-center gap-2 rounded-2xl border border-dashed px-4 py-3 text-xs",
        className,
      )}
    >
      <Megaphone className="size-3.5 shrink-0" />
      <span>Espacio publicitario · sin anuncios con Premium</span>
    </aside>
  );
}
