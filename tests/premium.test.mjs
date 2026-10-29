import test from "node:test";
import assert from "node:assert/strict";
import { exigirAccesoPremium, ESTADO_PREMIUM } from "../src/lib/premium-access.ts";

test("Premium exige suscripción verificada antes de consumir OpenAI", () => {
  assert.equal(ESTADO_PREMIUM, "pendiente_verificacion_de_suscripcion");
  assert.throws(() => exigirAccesoPremium(), /suscripciones/);
});


test("La demo del planificador es accesible en Preview sin habilitar Premium de pago", async () => {
  const { readFileSync } = await import("node:fs");
  const pagina = readFileSync(new URL("../src/routes/premium.tsx", import.meta.url), "utf8");
  assert.match(pagina, /<PremiumDemo \/>/);
  assert.doesNotMatch(pagina, /esPremium\s*\?\s*\(/);
  assert.match(pagina, /Todavía no hay pagos ni suscripciones activos/);
  const acceso = readFileSync(new URL("../src/lib/premium-access.ts", import.meta.url), "utf8");
  assert.match(acceso, /exigirAccesoPremium/);
});
