import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { useListaCompras } from "@/lib/listaCompras";
import {
  PRODUCTOS, IDS_INGREDIENTES, PRECIOS_REFERENCIA,
  type IngredienteId
} from "@/lib/planificador-semanal";
import { calcularPlanConInventario, type InventarioCantidad } from "@/lib/premium-inventario";

const moneda = (n: number) => new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP", maximumFractionDigits: 0 }).format(n);
const cantidades = (n: number, unidad: string) =>
  unidad === "unidad" ? `${Number.isInteger(n) ? n : n.toFixed(1)} ${n === 1 ? "unidad" : "unidades"}` :
  `${Math.round(n)} g`;

export function PlanificadorSemanal() {
  const [personas, setPersonas] = useState(2);
  const [dias, setDias] = useState(7);
  const [comidasPorDia, setComidasPorDia] = useState(1);
  const [presupuesto, setPresupuesto] = useState(30000);
  const [inventario, setInventario] = useState<InventarioCantidad>({});
  const [precios, setPrecios] = useState<Partial<Record<IngredienteId, number>>>({});
  const [variante, setVariante] = useState(0);
  const [aviso, setAviso] = useState("");
  const { agregar } = useListaCompras();

  const plan = useMemo(() => calcularPlanConInventario({
    personas, dias, comidasPorDia, presupuesto, despensa: "", precios, variante,
  }, inventario), [personas, dias, comidasPorDia, presupuesto, inventario, precios, variante]);

  const guardar = () => {
    try {
      window.localStorage.setItem("alacena-plan-semanal-v1", JSON.stringify({
        opciones: { personas, dias, comidasPorDia, presupuesto, inventario, precios, variante },
        plan, fecha: new Date().toISOString()
      }));
      setAviso("Plan guardado en este navegador. No se almacena en la nube.");
    } catch {
      setAviso("No fue posible guardar el plan en este navegador.");
    }
  };

  const comprar = () => {
    const nombres = plan.comprasNetas.filter(c => c.comprar > 0).map(c => `${cantidades(c.comprar, c.unidad)} de ${c.nombre}`);
    const total = agregar(nombres, "Planificador semanal");
    setAviso(`${total} productos incorporados a tu lista de compras.`);
  };

  return (
    <section className="rounded-2xl border border-border bg-card p-4 sm:p-6">
      <p className="text-xs font-semibold uppercase tracking-wide text-primary">Herramienta funcional · Sin llamadas a IA</p>
      <h2 className="font-display mt-2 text-2xl">Planificador semanal y presupuesto</h2>
      <p className="text-muted-foreground mt-2 text-sm">
        Diseña tu semana con los ingredientes disponibles, calcula costos de referencia y construye
        una lista de compras agrupada. Los platos proceden de un catálogo limitado, no de OpenAI.
      </p>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <label className="grid gap-1 text-sm">Personas
          <input aria-label="Personas para planificar" className="min-h-11 rounded-xl border bg-background px-3" type="number" min={1} max={12}
            value={personas} onChange={e => setPersonas(Math.max(1, Math.min(12, Number(e.target.value) || 1)))}/>
        </label>
        <label className="grid gap-1 text-sm">Días a planificar
          <select aria-label="Días del plan" className="min-h-11 rounded-xl border bg-background px-3" value={dias}
            onChange={e => setDias(Number(e.target.value))}>
            <option value={3}>3 días</option><option value={5}>5 días</option><option value={7}>7 días</option>
          </select>
        </label>
        <label className="grid gap-1 text-sm">Comidas por día
          <select aria-label="Comidas diarias" className="min-h-11 rounded-xl border bg-background px-3" value={comidasPorDia}
            onChange={e => setComidasPorDia(Number(e.target.value))}>
            <option value={1}>1 plato principal</option><option value={2}>Almuerzo y cena</option>
          </select>
        </label>
        <label className="grid gap-1 text-sm">Presupuesto orientativo semanal (CLP)
          <input aria-label="Presupuesto semanal en pesos chilenos" type="number" min={0} step={1000}
            className="min-h-11 rounded-xl border bg-background px-3" value={presupuesto}
            onChange={e => setPresupuesto(Math.max(0, Number(e.target.value) || 0))}/>
        </label>
      </div>
      <details className="mt-4 rounded-xl border p-3" open>
        <summary className="cursor-pointer font-medium text-sm">Inventario real: ¿cuánto tienes en casa?</summary>
        <p className="text-muted-foreground my-3 text-xs">Indica gramos o unidades. Deja 0 cuando no tengas el ingrediente. La lista de compras descontará solamente la cantidad disponible.</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {IDS_INGREDIENTES.map(id => <label key={id} className="grid gap-1 text-xs">
            {PRODUCTOS[id].nombre} · {PRODUCTOS[id].unidad === "g" ? "gramos" : "unidades"}
            <input type="number" min={0} step={PRODUCTOS[id].unidad === "g" ? 50 : 1}
              className="min-h-10 rounded-lg border bg-background px-2"
              value={inventario[id] ?? 0}
              onChange={e => setInventario(p => ({...p, [id]: Math.max(0, Number(e.target.value) || 0)}))}/>
          </label>)}
        </div>
      </details>
      <details className="mt-4 rounded-xl border p-3">
        <summary className="cursor-pointer font-medium text-sm">Modificar precios de referencia de ingredientes</summary>
        <p className="text-muted-foreground my-3 text-xs">Valores simulados, NO precios obtenidos de supermercados. Edita cada precio para adaptarlo a tu ciudad. El costo no incluye envases, condimentos, energía ni transporte.</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {IDS_INGREDIENTES.map(id => {
            const producto = PRODUCTOS[id];
            const factor = producto.unidad === "g" ? 100 : 1;
            return <label key={id} className="grid gap-1 text-xs">
              {producto.nombre} · CLP por {producto.unidad === "g" ? "100 g" : "unidad"}
              <input type="number" min={0} step={10} className="min-h-10 rounded-lg border bg-background px-2"
                aria-label={`Precio de ${producto.nombre}`}
                value={Math.round((precios[id] ?? PRECIOS_REFERENCIA[id]) * factor)}
                onChange={e => setPrecios(p => ({ ...p, [id]: Math.max(0, Number(e.target.value) || 0) / factor }))}/>
            </label>;
          })}
        </div>
      </details>

      <div className="mt-5 grid gap-3 rounded-2xl bg-secondary/50 p-4 sm:grid-cols-3">
        <div><p className="text-muted-foreground text-xs">Ingredientes usados</p><p className="font-display text-xl">{moneda(plan.costoTotal)}</p></div>
        <div><p className="text-muted-foreground text-xs">Compra estimada faltante</p><p className="font-display text-xl">{moneda(plan.costoCompraNeta)}</p></div>
        <div><p className="text-muted-foreground text-xs">Por persona (semana)</p><p className="font-display text-xl">{moneda(plan.costoPorPersona)}</p></div>
      </div>
      <p className={`mt-3 text-sm ${plan.excedePresupuesto ? "text-destructive" : "text-primary"}`}>
        {presupuesto <= 0 ? "Sin presupuesto definido." :
          plan.excedePresupuesto ? `El costo estimado supera tu presupuesto en ${moneda(plan.costoTotal - presupuesto)}. Ajusta precios, días, personas o ingredientes.` :
          `El costo estimado está dentro del presupuesto, con ${moneda(presupuesto - plan.costoTotal)} de margen.`}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <Button type="button" variant="outline" onClick={() => setVariante(n => n + 1)}>Probar otra combinación</Button>
        <Button type="button" onClick={guardar}>Guardar planificación</Button>
      </div>

      <h3 className="font-display mt-7 text-xl">Menú semanal ({plan.platos.length} comidas)</h3>
      <div className="mt-3 grid gap-3">
        {plan.platos.map((item,i) => (
          <article key={`${item.dia}-${item.comida}-${i}`} className="rounded-xl border px-4 py-3">
            <p className="text-muted-foreground text-xs">{item.dia} · {item.comida}</p>
            <h4 className="mt-1 font-semibold">{item.plato.titulo}</h4>
            <p className="text-muted-foreground mt-1 text-xs">Ingredientes (uso estimado): {moneda(item.costoIngredientes)} · {moneda(item.costoPorPersona)} por persona</p>
          </article>
        ))}
      </div>

      <h3 className="font-display mt-7 text-xl">Lista de compras consolidada</h3>
      <p className="text-muted-foreground mt-1 text-xs">Cantidades acumuladas menos las existencias reales de tu despensa. El costo corresponde a la cantidad utilizada, no al precio de paquetes completos.</p>
      {plan.comprasNetas.some(x => x.comprar > 0) ? <ul className="mt-3 grid gap-2">
        {plan.comprasNetas.filter(item => item.comprar > 0).map(item => <li key={item.id} className="flex justify-between gap-4 rounded-xl border px-4 py-3 text-sm">
          <span>{item.nombre} · {cantidades(item.comprar, item.unidad)}</span>
          <span className="shrink-0 text-muted-foreground">{moneda(item.costo)}</span>
        </li>)}
      </ul> : <p className="mt-3 text-sm text-primary">Según la despensa indicada, no hay ingredientes faltantes.</p>}
      <Button type="button" variant="outline" className="mt-4" onClick={comprar}>
        Incorporar faltantes a mi lista de compras
      </Button>
      {aviso && <p role="status" className="mt-3 text-sm text-primary">{aviso}</p>}
    </section>
  );
}
