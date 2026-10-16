import test from "node:test";
import assert from "node:assert/strict";
import { exigirAccesoPremium, ESTADO_PREMIUM } from "../src/lib/premium-access.ts";

test("Premium exige suscripción verificada antes de consumir OpenAI", () => {
  assert.equal(ESTADO_PREMIUM, "pendiente_verificacion_de_suscripcion");
  assert.throws(() => exigirAccesoPremium(), /suscripciones/);
});
