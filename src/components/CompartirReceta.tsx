import { useState } from "react";
import { Check, Share2 } from "lucide-react";
import type { Receta } from "@/lib/recipes.functions";
import { cn } from "@/lib/utils";
import { registrarEvento } from "@/lib/analitica";
import { claveReceta } from "@/lib/resenas";

function textoReceta(receta: Receta) {
  return [
    receta.titulo,
    "",
    receta.descripcion,
    "",
    `Preparación: ${receta.tiempoPreparacion} · Cocción: ${receta.tiempoCoccion} · ${receta.porciones}`,
    "",
    "Ingredientes:",
    ...receta.ingredientes.map((i) => `• ${i}`),
    "",
    "Paso a paso:",
    ...receta.pasos.map((p, i) => `${i + 1}. ${p}`),
  ].join("\n");
}

export function CompartirReceta({ receta }: { receta: Receta }) {
  const [estado, setEstado] = useState<"idle" | "copiado">("idle");

  const compartir = async () => {
    const url = typeof window !== "undefined" ? window.location.origin : "";
    const texto = `${textoReceta(receta)}\n\n${url}`;
    registrarEvento("share_recipe", { recetaId: claveReceta(receta.titulo) });

    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title: receta.titulo, text: textoReceta(receta), url });
        return;
      } catch {
        // el usuario canceló o no se pudo compartir: usamos la alternativa
      }
    }

    try {
      await navigator.clipboard.writeText(texto);
      setEstado("copiado");
      setTimeout(() => setEstado("idle"), 2000);
    } catch {
      setEstado("idle");
    }
  };

  return (
    <button
      type="button"
      onClick={compartir}
      aria-label={`Compartir ${receta.titulo}`}
      className={cn(
        "border-border bg-background text-muted-foreground hover:text-primary hover:border-primary focus-visible:ring-ring inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border transition-colors focus-visible:ring-2 focus-visible:outline-none",
        estado === "copiado" && "border-primary text-primary",
      )}
      title={estado === "copiado" ? "Copiado" : "Compartir receta"}
    >
      {estado === "copiado" ? (
        <Check className="size-4" aria-hidden="true" />
      ) : (
        <Share2 className="size-4" aria-hidden="true" />
      )}
    </button>
  );
}
