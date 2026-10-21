import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { planificarSemana, type ResultadoPlan } from "@/lib/planificador-semanal";
import { useListaCompras } from "@/lib/listaCompras";

export const Route = createFileRoute("/plan-gratis")({
  component: PlanGratis,
  head: () => ({ meta: [{ title: "Planificador gratuito sin IA | Alacena" }] }),
});

function PlanGratis() {
  const [personas, setPersonas] = useState(2);
  const [dias, setDias] = useState(7);
  const [comidasPorDia, setComidasPorDia] = useState(1);
  const [presupuesto, setPresupuesto] = useState(30000);
  const [despensa, setDespensa] = useState("");
  const [resultado, setResultado] = useState<ResultadoPlan | null>(null);
  const [aviso, setAviso] = useState("");
  const { agregar } = useListaCompras();
  const clp = (n: number) => new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP", maximumFractionDigits: 0 }).format(n);
  const enviar = (e: FormEvent) => {
    e.preventDefault();
    setAviso("");
    setResultado(planificarSemana({ personas, dias, comidasPorDia, presupuesto, despensa }));
  };
  return <div className="min-h-screen bg-background"><SiteHeader />
    <main className="mx-auto max-w-3xl px-5 py-9">
      <p className="text-sm font-semibold text-primary">Gratis · Sin consumo de IA</p>
      <h1 className="font-display mt-2 text-3xl">Planifica tus comidas</h1>
      <p className="mt-3 text-sm text-muted-foreground">Organiza almuerzos y cenas según lo que tienes en casa. Los precios son valores simulados de referencia, no precios de supermercados.</p>
      <form onSubmit={enviar} className="mt-6 grid gap-4 rounded-2xl border bg-card p-5">
        <label className="grid gap-1 text-sm">Personas <input className="rounded-xl border bg-background p-3" type="number" min="1" max="12" value={personas} onChange={e=>setPersonas(Number(e.target.value))} required /></label>
        <label className="grid gap-1 text-sm">Días <input className="rounded-xl border bg-background p-3" type="number" min="1" max="7" value={dias} onChange={e=>setDias(Number(e.target.value))} required /></label>
        <label className="grid gap-1 text-sm">Comidas al día <select className="rounded-xl border bg-background p-3" value={comidasPorDia} onChange={e=>setComidasPorDia(Number(e.target.value))}><option value={1}>1 (plato principal)</option><option value={2}>2 (almuerzo y cena)</option></select></label>
        <label className="grid gap-1 text-sm">Presupuesto total en CLP <input className="rounded-xl border bg-background p-3" type="number" min="0" step="1000" value={presupuesto} onChange={e=>setPresupuesto(Number(e.target.value))} /></label>
        <label className="grid gap-1 text-sm">Ingredientes que ya tienes <textarea className="min-h-24 rounded-xl border bg-background p-3" value={despensa} onChange={e=>setDespensa(e.target.value)} placeholder="arroz, pollo, tomate, huevos" /></label>
        <button type="submit" className="rounded-full bg-primary px-5 py-3 font-semibold text-primary-foreground">Crear planificación gratuita</button>
      </form>
      {resultado && <section className="mt-7" aria-live="polite">
        <h2 className="font-display text-2xl">Tu planificación</h2>
        <p className="mt-2 text-sm">Costo estimado de ingredientes: <strong>{clp(resultado.costoTotal)}</strong>. Compra estimada de faltantes: <strong>{clp(resultado.costoCompraEstimada)}</strong>.</p>
        {resultado.excedePresupuesto && <p className="mt-2 text-sm text-destructive">La planificación supera el presupuesto indicado. Los precios son referenciales.</p>}
        <div className="mt-4 grid gap-3">{resultado.platos.map((item,i)=><article key={i} className="rounded-xl border bg-card p-4"><p className="text-xs text-muted-foreground">{item.dia} · {item.comida}</p><h3 className="font-semibold">{item.plato.titulo}</h3><p className="text-sm">Ingredientes: {item.plato.ingredientes.map(([id,q])=>id+" ("+q*resultado.personas/2+")").join(", ")}</p><p className="text-sm text-muted-foreground">Costo estimado: {clp(item.costoIngredientes)}</p></article>)}</div>
        <h2 className="font-display mt-7 text-xl">Ingredientes por comprar</h2>
        <ul className="mt-2 list-inside list-disc text-sm">{resultado.compras.map(p=><li key={p.id}>{p.nombre}: {p.cantidad} {p.unidad} · {clp(p.costo)}</li>)}</ul>
        <button className="mt-4 rounded-full bg-primary px-5 py-3 text-primary-foreground" type="button" onClick={()=>setAviso(`${agregar(resultado.compras.map(p=>`${p.nombre}: ${p.cantidad} ${p.unidad}`),"Plan gratuito")} ingrediente(s) agregados.`)}>Agregar faltantes a mi lista</button>
        {aviso && <p className="mt-2 text-sm text-primary">{aviso}</p>}
        <p className="mt-4 text-xs text-muted-foreground">Las cantidades son estimaciones para planificar. Revisa porciones, disponibilidad y precios antes de comprar.</p>
        <Link to="/lista" className="mt-3 inline-block text-primary underline">Ver lista de compras</Link>
      </section>}
    </main>
  </div>;
}
