import { useState, type FormEvent } from "react";
import { MessageSquare, Trash2 } from "lucide-react";
import { Estrellas, SelectorEstrellas } from "@/components/Estrellas";
import { useResenas } from "@/lib/resenas";
import { registrarEvento } from "@/lib/analitica";

export function ResumenResenas({ recetaId }: { recetaId: string }) {
  const { promedio, total } = useResenas(recetaId);
  return (
    <div className="flex items-center gap-2 text-xs">
      <Estrellas valor={promedio} tamano="size-3.5" />
      <span className="text-muted-foreground">
        {total > 0 ? `${promedio.toFixed(1)} · ${total} reseña${total > 1 ? "s" : ""}` : "Sin reseñas"}
      </span>
    </div>
  );
}

export function ResenasReceta({ recetaId }: { recetaId: string }) {
  const { resenas, promedio, total, agregar, eliminar } = useResenas(recetaId);
  const [abierto, setAbierto] = useState(false);
  const [estrellas, setEstrellas] = useState(5);
  const [autor, setAutor] = useState("");
  const [comentario, setComentario] = useState("");

  const enviar = (e: FormEvent) => {
    e.preventDefault();
    agregar({ autor, estrellas, comentario });
    registrarEvento("review_submitted", {
      recetaId,
      estrellas,
      longitudComentario: comentario.trim().length,
    });
    setComentario("");
    setEstrellas(5);
  };

  return (
    <div className="border-border mt-5 border-t pt-4">
      <button
        type="button"
        onClick={() => setAbierto((v) => !v)}
        aria-expanded={abierto}
        className="flex w-full items-center justify-between gap-3 text-left"
      >
        <span className="flex items-center gap-2">
          <Estrellas valor={promedio} tamano="size-4" />
          <span className="text-muted-foreground text-xs">
            {total > 0
              ? `${promedio.toFixed(1)} · ${total} reseña${total > 1 ? "s" : ""}`
              : "Sé el primero en opinar"}
          </span>
        </span>
        <span className="text-primary inline-flex items-center gap-1.5 text-xs font-medium">
          <MessageSquare className="size-3.5" />
          {abierto ? "Ocultar" : "Reseñas"}
        </span>
      </button>

      {abierto && (
        <div className="mt-4 space-y-4">
          <form onSubmit={enviar} className="bg-secondary/60 space-y-3 rounded-2xl p-4">
            <SelectorEstrellas
              valor={estrellas}
              onChange={(v) => {
                setEstrellas(v);
                registrarEvento("recipe_rating", { recetaId, estrellas: v });
              }}
            />
            <input
              value={autor}
              onChange={(e) => setAutor(e.target.value)}
              placeholder="Tu nombre (opcional)"
              aria-label="Tu nombre"
              className="border-border bg-card placeholder:text-muted-foreground/70 focus:border-primary w-full rounded-xl border px-3 py-2 text-sm outline-none"
            />
            <textarea
              value={comentario}
              onChange={(e) => setComentario(e.target.value)}
              placeholder="¿Cómo te quedó la receta?"
              aria-label="Comentario"
              rows={3}
              className="border-border bg-card placeholder:text-muted-foreground/70 focus:border-primary w-full resize-none rounded-xl border px-3 py-2 text-sm outline-none"
            />
            <button
              type="submit"
              disabled={comentario.trim().length < 2}
              className="bg-primary text-primary-foreground hover:bg-primary/90 w-full rounded-full px-4 py-2 text-sm font-medium transition-colors disabled:opacity-50"
            >
              Publicar reseña
            </button>
          </form>

          {resenas.length > 0 && (
            <ul className="space-y-3">
              {resenas.map((r) => (
                <li key={r.id} className="border-border rounded-2xl border p-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-sm font-medium">{r.autor}</p>
                      <Estrellas valor={r.estrellas} tamano="size-3.5" />
                    </div>
                    <button
                      type="button"
                      onClick={() => eliminar(r.id)}
                      aria-label="Eliminar reseña"
                      className="text-muted-foreground hover:text-destructive transition-colors"
                    >
                      <Trash2 className="size-3.5" />
                    </button>
                  </div>
                  <p className="text-foreground/85 mt-2 text-sm">{r.comentario}</p>
                  <p className="text-muted-foreground mt-1 text-xs">
                    {new Date(r.fecha).toLocaleDateString("es", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
