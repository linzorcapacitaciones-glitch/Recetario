import { ImageIcon, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useImagenReceta } from "@/lib/imagenes";

/**
 * Imagen referencial del plato. Se genera sólo cuando el usuario la pide
 * y luego se reutiliza desde la caché local: nunca se genera al abrir la receta.
 */
export function ImagenPlato({ titulo, descripcion }: { titulo: string; descripcion?: string }) {
  const { imagen, cargando, error, generar } = useImagenReceta(titulo, descripcion);

  if (imagen) {
    return (
      <img
        src={imagen}
        alt={`Imagen referencial de ${titulo}`}
        loading="lazy"
        className="border-border mt-4 aspect-[4/3] w-full rounded-2xl border object-cover"
      />
    );
  }

  return (
    <div className="border-border bg-secondary/30 mt-4 rounded-2xl border border-dashed p-4 text-center">
      <Button
        type="button"
        variant="outline"
        className="min-h-11 rounded-full"
        onClick={() => void generar()}
        disabled={cargando}
      >
        {cargando ? (
          <Loader2 className="size-4 animate-spin" aria-hidden="true" />
        ) : (
          <ImageIcon className="size-4" aria-hidden="true" />
        )}
        {cargando ? "Creando imagen del plato…" : "Ver imagen del plato"}
      </Button>
      <p className="text-muted-foreground mt-2 text-xs">Imagen referencial, no es una foto real del resultado.</p>
      {error && <p className="text-destructive mt-2 text-xs">{error}</p>}
    </div>
  );
}
