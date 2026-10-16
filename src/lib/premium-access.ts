/**
 * Único punto de control Premium, siempre en el servidor.
 * La vista Premium localStorage es una DEMO visual, no un derecho de suscripción.
 *
 * Hasta integrar identidad, comprobación de plan desde base de datos y webhooks
 * de pagos, ningún endpoint Premium debe consumir recursos facturables.
 * No habilitarlo con una variable pública ni pasando el plan desde el cliente.
 */
export const ESTADO_PREMIUM = "pendiente_verificacion_de_suscripcion" as const;

export function exigirAccesoPremium(): never {
  throw new Error(
    "Chef IA Premium está disponible solo como demostración. Las consultas con IA se activarán después de implementar y verificar las suscripciones.",
  );
}
