# Auditoría de publicación — 29 de octubre de 2026

**Decisión: NO APROBADO / NO FUSIONAR / NO PUBLICAR.** Auditoría incremental, sin servicios facturables.

## Estado comprobado

- PR #7 (`feature/ampliacion-recetas-lote-1`): abierto, borrador, `mergeable=false`; commit `90faee5df87d209ee9e0f013c98d630dbbe38a7d`. Sus dos ejecuciones recientes de CI finalizaron en `success` (GitHub Actions `40699870944` y `40699858078`).
- PR #8 (`integracion/recetario-cierre-2026-10-28`): abierto, borrador, sin fusionar. Se mantiene como rama aislada de corrección y verificación.
- El catálogo automatizado verifica 500 títulos normalizados distintos y fichas con ingredientes y pasos; esto **no demuestra** que las 500 recetas sean culinariamente distintas ni que las cantidades, técnicas y tiempos sean coherentes.
- Escaneo heurístico de los 474 registros estructurados en los archivos de lotes y adicionales: 474 títulos distintos; 60 pasos que mencionan hornear sin minutos explícitos en ese paso, 10 de ellos sin temperatura en ese mismo paso. Algunos contienen temperatura en un paso anterior o criterio seguro de temperatura interna: **son candidatos a revisión, no 60 errores confirmados**.
- Planificador local: utiliza 18 platos y precios simulados. Las listas de compras y el inventario cuantificado cuentan con pruebas unitarias; no existe todavía prueba E2E real de navegación y persistencia.
- El control de acceso a IA Premium en servidor sigue cerrado hasta contar con suscripción verificada; no hay cobros habilitados.

## Corrección comprobada de esta revisión

La ruta `/premium` en compilación de producción ocultaba `PremiumDemo` detrás de `esPremium`, mientras `pruebaPremiumActiva()` devolvía siempre `false` en `import.meta.env.PROD`. En Preview (compilación PROD) el usuario no podía acceder al planificador local. Se corrigió para mostrar `PremiumDemo` sin desbloquear funciones IA, cuentas ni cobros; se añadió prueba de regresión en `tests/premium.test.mjs`.

## Puertas de salida pendientes

1. Revisar editorialmente todas las recetas, especialmente equivalencias semánticas, cantidades, seguridad alimentaria y coherencia de los tiempos. Resolver o descartar los 60 candidatos del escaneo.
2. Ejecutar y registrar prueba E2E **en navegador y móvil**: búsqueda con y sin coincidencias, filtros, detalle, advertencias de alérgenos, planificador, presupuesto, inventario, agregar/quitar/marcar compras, persistencia tras recarga y recuperación de datos antiguos.
3. Comprobar CI y Preview `READY` del **último commit**, no solo de un commit anterior. `READY` no sustituye prueba E2E.
4. Resolver la divergencia de PR #7 con `main` y revisar el alcance de PR #8 antes de autorizar fusión; no fusionar automáticamente.
5. Mantener publicidad y Premium comerciales desactivados hasta implementar y verificar sus flujos sin recurrir a servicios de pago durante esta auditoría.

**No anunciar que la app está lista para publicar.**
