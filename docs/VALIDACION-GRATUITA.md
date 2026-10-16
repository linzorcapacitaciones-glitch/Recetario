# Validación gratuita de Recetario

## Alcance
- Vercel Hobby: **desarrollo y pruebas no comerciales**; sin publicidad ni suscripciones activas.
- Demo: `/demo` presenta diez recetas **estáticas** para evaluar interfaz, favoritos, reseñas y navegación, sin invocar OpenAI.
- La demo **no valida** la generación real de diez recetas a partir de ingredientes variables.
- No exponer claves API ni capturar datos personales en registros públicos.

## Pruebas de aceptación
- [ ] Móvil Android: inicio y demo cargan correctamente.
- [ ] Demo muestra diez tarjetas diferentes, ingredientes, tiempos y pasos.
- [ ] Marcar una favorita y encontrarla en /favoritos.
- [ ] Compartir una receta sin errores.
- [ ] Probar lista de compras y restauración tras recargar.
- [ ] Recetas reales: 20 combinaciones de ingredientes y restricciones, exactamente diez resultados por intento exitoso.
- [ ] Registrar costo real por generación y bloquear solicitudes abusivas antes de promoción pública.
- [ ] Corregir el error 429 de crédito/límite de la API.
- [ ] Antes de cobrar: autenticación, roles Premium verificados en servidor, procesamiento de pagos y alojamiento comercial.

## Monetización futura
Plan gratuito con funciones controladas y publicidad moderada; plan Premium con límites claros.
El precio de $3.990 CLP/mes es **una hipótesis**, no una tarifa en cobro.
Tener un espacio publicitario de muestra NO genera ingresos.
