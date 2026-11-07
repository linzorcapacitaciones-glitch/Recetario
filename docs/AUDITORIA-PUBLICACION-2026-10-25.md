# Auditoría incremental — 25 de octubre de 2026

**Decisión: NO APROBADO / NO PUBLICAR.** Este documento es una evaluación de la rama de prueba; no constituye autorización para fusionar, activar cobros ni publicar.

## Evidencia verificada

- Rama: `feature/ampliacion-recetas-lote-1`; PR #7 permanece abierto y sin fusionar.
- La comparación GitHub con `main` mostró divergencia: 148 commits por delante y 34 por detrás al comienzo de esta revisión. Deben resolverse los cambios divergentes antes de una eventual integración.
- GitHub Actions para el commit `2f2aec938541c51adda4dde844f46b636b4dc22e`: ejecución `40095972342`, conclusión `success`. La verificación incluye pruebas unitarias y compilación.
- Preview Vercel del commit `c849793f73edd92d06c320c7073986959b78ae87`: despliegue `dpl_8HZgXR5UBvhDueuEPYaKKs1Gwg5t`, estado `READY`. Esto solo prueba despliegue, no funcionalidad E2E.
- El catálogo de los 18 archivos de lotes 2–19 más `recetas-adicionales.ts` contiene **474 fichas** con **474 títulos normalizados distintos**. Las fichas demo y las 18 del planificador se incorporan por separado; el objetivo de 500 títulos normalizados no equivale a 500 preparaciones culinarias semánticamente distintas.
- En el lote 2 se detectaron **40 fichas** con fórmulas genéricas como «saltea el acompañamiento» o «ingrediente principal ya cocido». Se corrigieron cinco preparaciones de arroz, con pasos específicos y tiempos diferenciados, en `9aba0a7e0cb5e2b0241380e8f86df2720f05cda1`; quedan **35 fichas** con esas fórmulas detectables. La prueba de regresión se agregó en `c849793f73edd92d06c320c7073986959b78ae87`.

## Bloqueos de publicación

1. **Editorial:** revisar individualmente las fichas restantes (ingredientes, cantidades, técnicas, tiempos, seguridad alimentaria, alérgenos) y detectar duplicaciones semánticas. Un título distinto no garantiza una receta distinta.
2. **CI:** comprobar la conclusión final del workflow para el último commit de la rama, no solo el éxito de un commit anterior.
3. **E2E:** faltan pruebas reales en navegador y móvil para búsqueda por ingredientes, preferencias, resultados vacíos, detalle de recetas, planificador, persistencia y listas de compras.
4. **Planificador:** sigue limitado a 18 platos y precios simulados. La lista de compras tiene pruebas unitarias, pero no una verificación completa de varias planificaciones, eliminación, marcado, recuperación y migración de datos anteriores.
5. **Integración:** la rama está divergida de `main`; no resolver conflictos mediante fusión o publicación hasta completar los controles.
6. **Monetización:** no activar servicios de pago ni suscripciones ficticias.

**Acción:** mantener PR #7 sin fusionar, seguir revisando la rama y no comunicar que está lista.
