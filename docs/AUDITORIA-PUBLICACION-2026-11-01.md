# Auditoría incremental — 1 de noviembre de 2026

**Decisión: NO APROBADO / NO FUSIONAR / NO PUBLICAR.** Sin servicios de pago.

## Estado verificado
- PR #7: rama `feature/ampliacion-recetas-lote-1`, abierto, borrador, `mergeable=false` respecto de `main`, head `90faee5`. Dos verificaciones «Validar Recetario» de ese SHA aprobaron; su despliegue Preview en Vercel está READY. Ninguna de estas señales constituye aprobación E2E.
- PR #8: rama `integracion/recetario-cierre-2026-10-28`, abierto, borrador, sin fusionar. El commit previo `46fae3c` tuvo tres verificaciones exitosas y Preview READY.
- Las pruebas existentes certifican 500 títulos normalizados únicos, mínimos estructurales, búsqueda y lógica de planificación/compras en pruebas unitarias. No certifican singularidad culinaria de todas las preparaciones ni interacción real en navegador.

## Correcciones realizadas solo en la rama de integración
1. Dos pizzas del lote 11 incluían levadura en los pasos, pero **no en los ingredientes**. Se agregó la levadura seca, fermentación orientativa de 45 minutos, preparación de 60 minutos y horneado de 15–20 minutos a 220 °C. Pruebas de regresión añadidas.
2. «Porotos con verduras asadas» (lote 8) exigía cocer porotos remojados dentro de un tiempo estimado de 45 minutos. Ahora utiliza porotos ya cocidos y escurridos y especifica 20–25 minutos para asar las verduras. Se ajustó la duración global a 30 minutos.
3. «Papas asadas con atún y yogur» indica 45–55 minutos de horno y duración estimada de 55 minutos. «Pollo al horno con brócoli» incorpora duración orientativa de horno y conserva el criterio de 74 °C en el centro. Pruebas añadidas.
4. Duplicidad editorial de recetas con iguales ingredientes y técnicas muy similares: «Crema de zanahoria y coco» frente a «Crema de zanahoria y jengibre con coco». La primera ahora asa las zanahorias, elimina el jengibre y ajusta el tiempo a 40 minutos; la segunda conserva el método de cocción en agua con jengibre. Asimismo, «Omelette de queso y tomate» deja de incluir albahaca, que sí distingue al «Omelette de tomate y albahaca». Se añadieron pruebas de regresión.
5. Revisión heurística de 385 fichas estructuradas de los lotes 4–19 identificó 11 parejas con los mismos IDs de ingredientes y similitud léxica de pasos superior a 0,32; no todas son duplicados, y la revisión manual de pares restantes continúa pendiente.

## Bloqueos pendientes
- Confirmar CI y Preview del último commit de esta jornada, no solo los anteriores.
- Completar revisión editorial exhaustiva de las 500 recetas, con equivalencia semántica, tiempos reales, ingredientes y pasos; clasificar instrucciones de horno restantes sin duración.
- Pruebas funcionales E2E reales en navegador de escritorio y móvil: buscador gratuito, filtros, detalles, planificador Premium de demostración, inventario, lista de compras y persistencia. No fue posible acceder al despliegue Preview desde el navegador disponible para la auditoría; READY solo confirma compilación/despliegue.
- Conciliar PR #7 con main y revisar PR #8 antes de considerar fusión. Ningún PR fue fusionado.
- Cobros, publicidad y API de IA facturable permanecen fuera de alcance; no se activaron.

**Conclusión:** No autorizar lanzamiento. Seguir auditando sin modificar `main` ni publicar producción.
