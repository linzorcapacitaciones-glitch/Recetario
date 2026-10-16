import { useState } from "react";
import { Check, ShoppingBasket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useListaCompras } from "@/lib/listaCompras";

const SOBRAS = [
  { titulo: "Arroz salteado con verduras", uso: "Arroz cocido del día anterior", pasos: ["Refrigera el arroz prontamente tras cocinarlo.", "Recalienta hasta que esté bien caliente y saltea con verduras cocidas."] },
  { titulo: "Tortilla de pollo cocido", uso: "Pollo previamente cocido y refrigerado", pasos: ["Desmenuza el pollo y mezcla con huevo batido.", "Cocina hasta cuajar por completo."] },
  { titulo: "Sopa con sobras", uso: "Verduras cocidas y pollo refrigerado", pasos: ["Calienta caldo hasta hervir.", "Añade ingredientes ya cocidos y recalienta bien."] },
  { titulo: "Croquetas de arroz", uso: "Arroz cocido y huevo", pasos: ["Mezcla arroz frío con huevo.", "Forma croquetas y cocina completamente por ambos lados."] },
];

const MENU = [
  { dia: "Lunes", plato: "Arroz con pollo y tomate" },
  { dia: "Martes", plato: "Tortilla de verduras" },
  { dia: "Miércoles", plato: "Sopa de pollo con arroz" },
  { dia: "Jueves", plato: "Pasta con salsa de tomate" },
  { dia: "Viernes", plato: "Croquetas de arroz y huevo" },
  { dia: "Sábado", plato: "Ensalada tibia de pollo" },
  { dia: "Domingo", plato: "Pollo asado con verduras" },
];
const COMPRAS = ["Huevos", "Zanahorias", "Cebolla", "Pasta", "Lechuga"];

/** Ejemplos estáticos: nunca hacen peticiones a la API. */
export function PremiumDemo() {
  const [mostrarSobras, setMostrarSobras] = useState(false);
  const [mostrarMenu, setMostrarMenu] = useState(false);
  const [aviso, setAviso] = useState("");
  const { agregar } = useListaCompras();

  return (
    <div className="grid gap-8">
      <section className="rounded-2xl border border-primary/40 bg-primary/5 p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">Premium · Demostración sin IA</p>
        <h2 className="font-display mt-2 text-2xl">Prueba la experiencia antes de comprar</h2>
        <p className="text-muted-foreground mt-2 text-sm">
          Aquí encontrarás ejemplos preparados previamente. No son respuestas personalizadas ni generadas por OpenAI.
          Todavía no se cobra ninguna suscripción.
        </p>
      </section>

      <section className="rounded-2xl border border-border bg-card p-5">
        <h2 className="font-display text-2xl">♻️ Aprovechar sobras</h2>
        <p className="text-muted-foreground mt-2 text-sm">Cuatro ideas de muestra para ver el formato de este servicio Premium.</p>
        <Button className="mt-4 min-h-11 rounded-full" onClick={() => setMostrarSobras(v => !v)}>
          {mostrarSobras ? "Ocultar ejemplos" : "Ver cuatro ideas de muestra"}
        </Button>
        {mostrarSobras && <div className="mt-5 grid gap-3">
          {SOBRAS.map((idea, i) => <article key={idea.titulo} className="rounded-xl border p-4">
            <h3 className="font-semibold">{i + 1}. {idea.titulo}</h3>
            <p className="text-muted-foreground mt-1 text-sm">Aprovecha: {idea.uso}</p>
            <ol className="mt-2 list-decimal pl-5 text-sm">{idea.pasos.map(p => <li key={p}>{p}</li>)}</ol>
          </article>)}
          <p className="text-muted-foreground text-xs">Seguridad: usa sobras que hayan sido conservadas y refrigeradas correctamente.</p>
        </div>}
      </section>

      <section className="rounded-2xl border border-border bg-card p-5">
        <h2 className="font-display text-2xl">📅 Menú semanal</h2>
        <p className="text-muted-foreground mt-2 text-sm">Semana de ejemplo para evaluar la organización y la lista de compras.</p>
        <Button className="mt-4 min-h-11 rounded-full" onClick={() => setMostrarMenu(v => !v)}>
          {mostrarMenu ? "Ocultar menú" : "Ver menú de muestra"}
        </Button>
        {mostrarMenu && <div className="mt-5 grid gap-2">
          {MENU.map(d => <div key={d.dia} className="flex items-start justify-between gap-3 rounded-xl border px-4 py-3 text-sm">
            <strong>{d.dia}</strong><span className="text-right">{d.plato}</span>
          </div>)}
          <Button variant="outline" className="mt-3 min-h-11 rounded-full"
            onClick={() => setAviso(`${agregar(COMPRAS, "Menú de muestra Premium")} ingrediente(s) añadidos a la lista de compras.`)}>
            <ShoppingBasket className="size-4" /> Agregar compras de muestra
          </Button>
          {aviso && <p className="flex items-center gap-2 text-sm text-primary" role="status"><Check className="size-4" />{aviso}</p>}
        </div>}
      </section>
    </div>
  );
}
