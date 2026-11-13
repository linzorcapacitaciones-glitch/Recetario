# Auditoría incremental — 31 de octubre de 2026

**Decisión: NO APROBADO / NO FUSIONAR / NO PUBLICAR.** Sin servicios de pago.

## Estado comprobado
- PR #7 (feature/ampliacion-recetas-lote-1): abierto, borrador, head `90faee5`, `mergeable=false` frente a main. Sus dos validaciones más recientes aprobaron; su Preview del mismo SHA está READY. No se fusionó.
- PR #8 (integracion/recetario-cierre-2026-10-28): abierto, borrador y sin fusionar. Antes de los nuevos cambios, el commit `41996f5` tenía tres verificaciones aprobadas y Preview READY.
- Las pruebas de catálogo existentes confirman 500 títulos normalizados únicos y mínimos estructurales (ingredientes, pasos y tiempos dentro de rango), **no** equivalencia semántica ni validación culinaria exhaustiva.
- Revisión heurística adicional de 454 fichas de lotes 2–19: una pareja de preparaciones compartía todos los ingredientes y el 81% del vocabulario técnico de los pasos: «Salteado de tofu y champiñones» (lote 11) y «Arroz con champiñones y tofu» (lote 16). Se diferenciaban principalmente por presentar el salteado sobre el arroz o mezclado con él.
- Se corrigió la segunda receta: ahora se dora el tofu por separado y se cuece el arroz en la sartén con champiñones y ajo; el tiempo de cocción estimado pasó de 20 a 30 minutos. Se añadió prueba de regresión.
- Se corrigió una causa de duplicación en la lista de compras: la firma de una planificación incluía precios y presupuesto, por lo que cambiar solo un precio podía volver a agregar los mismos ingredientes. Ahora la firma depende de las cantidades compradas, los platos y las personas; se añadió prueba de regresión. Sigue pendiente verificar el flujo real en navegador.
- Las correcciones están únicamente en la rama de integración; no se modificó main ni la rama del PR #7.

## Controles no superados
1. **Editorial**: todavía no hay verificación culinaria manual de las 500 fichas ni clasificación exhaustiva de los pasos de horno sin duración. La heurística de duplicados no certifica que las demás recetas sean distintas.
2. **Funcional E2E**: no se logró acceder a la Preview desde el navegador de auditoría. Siguen sin comprobarse interacciones reales en escritorio y móvil: buscador gratuito, filtros, detalles, planificador local Premium, inventario, listas de compras y persistencia.
3. **Integración**: PR #7 sigue sin ser fusionable contra main. PR #8 necesita conciliación y revisión antes de integración.
4. **Últimos cambios**: ejecutar y confirmar CI y Preview del commit final de esta auditoría. Los checks de commits anteriores no sustituyen los de la revisión actual.
5. **Comercial**: Premium de pago, cobros, publicidad comercial y uso de API de IA siguen fuera de alcance y no se deben activar.

**Conclusión:** el catálogo puede usarse en Preview para pruebas, pero no está certificado para lanzamiento. No autorizar publicación ni fusión.
