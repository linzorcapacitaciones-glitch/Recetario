# Auditoría incremental — 30 de octubre de 2026

**Decisión: NO APROBADO / NO FUSIONAR / NO PUBLICAR.** Sin servicios de pago.

## Integridad y CI

- PR #7: abierto y borrador, `feature/ampliacion-recetas-lote-1` en `90faee5`, `mergeable=false` frente a `main`. No se fusionó.
- PR #8: abierto y borrador, rama de integración independiente. La rama de integración recibió las correcciones detalladas abajo.
- El catálogo tiene 500 títulos normalizados distintos según pruebas existentes, con estructura mínima validada. No equivale a 500 recetas semánticamente distintas ni a revisión humana exhaustiva de ingredientes, tiempos y técnicas.
- Se revisaron heurísticamente 454 fichas estructuradas de lotes 2–19; las coincidencias de ingredientes por sí solas no prueban duplicidad. Sigue pendiente verificar manualmente las 500 fichas.
- Las pruebas unitarias existentes cubren búsqueda, filtros, planificación, inventario y consolidación de compras. **No se ha ejecutado una prueba real E2E de interfaz en navegador y móvil**. Las pruebas CI y un Preview READY tampoco sustituyen esa validación.

## Correcciones de esta revisión

- **12 recetas con varias cocciones** en lotes 3, 4 y 5 tenían un único tiempo global de 35–40 minutos que subestimaba la secuencia de cocción (legumbres, papas, horno, pollo o arroz). Se añadieron tiempos orientativos por receta y prueba de regresión; son estimaciones editoriales, no mediciones culinarias.
- **Lote 18:** la ensalada de quinoa con zanahoria «asada» indicaba saltearla; ahora especifica hornearla. La pasta con tomate «asado» omitía asar y mezclar el tomate; ahora describe ambos pasos. El arroz «integral» no se especificaba en ingredientes ni pasos; se corrigió y se revisó su duración. Se corrigió la errata «pícalas hojas». Se añadieron pruebas de regresión para estos casos.
- Las correcciones se aplicaron solo a `integracion/recetario-cierre-2026-10-28`, **no a main ni al PR #7**.
- La demo Premium local permanece separada del acceso facturable, sin activar cobros ni consumo de IA de pago.

## Bloqueos de publicación

1. Revisión editorial completa de las 500 recetas: coherencia semántica, cantidades, seguridad alimentaria, tiempos y técnicas. El escaneo previo identificó 60 instrucciones de horno sin minutos explícitos en ese mismo paso; no todas son errores, pero requieren clasificación.
2. E2E real en navegador y móvil: búsqueda con y sin resultados, filtros, detalle, alérgenos, planificador, presupuesto, inventario, listas de compras, marcar/eliminar y persistencia tras recarga.
3. Confirmar CI y despliegue Preview **del último commit** tras los cambios de esta fecha. Al redactar este informe, las ejecuciones posteriores estaban en progreso.
4. Conciliar PR #7 con main y revisar PR #8 antes de cualquier integración. No fusionar sin autorización.
5. No habilitar pagos, publicidad comercial ni IA Premium hasta completar su implementación y validación.

**La aplicación no está certificada ni es segura de anunciar como lista para publicar.**
