# Auditoría incremental — 5 de noviembre de 2026

**Decisión: NO APROBADO / NO FUSIONAR / NO PUBLICAR.** No se usaron servicios de pago.

## Estado verificado
- PR #7: abierto, borrador, `mergeable=false`, commit `90faee5`. Dos checks `validar` y Vercel Preview Comments aprobados en ese commit; no representa aprobación E2E.
- PR #8: abierto, borrador, `mergeable=true` antes de esta actualización; cambios exclusivos de la rama `integracion/recetario-cierre-2026-10-28`.
- Commit de integración anterior `0cb1d99`: tres verificaciones CI aprobadas y Preview Vercel READY.
- Los commits de hoy modifican exclusivamente la rama de integración. La aprobación CI y el Preview del último commit deben verificarse nuevamente después de esta auditoría.
- El Preview del commit anterior no fue accesible con el cliente web de inspección; no se pudieron ejecutar pruebas interactivas E2E.

## Hallazgos y correcciones del 5 de noviembre
Se detectaron recetas que indicaban cocer garbanzos o porotos desde cero con duraciones totales de 15 a 25 minutos, insuficientes sin precocción. Se sustituyeron esas instrucciones por el uso explícito de legumbres ya cocidas y escurridas, y se sincronizó la declaración de ingredientes. También se clarificó el estado precocido de las lentejas en preparaciones rápidas y se eliminó tiempo de cocción ficticio en dos ensaladas frías.

Recetas corregidas: Tostadas con hummus y tomate; Ensalada tibia de lentejas y zapallo; Hamburguesas de garbanzos y zanahoria; Ensalada de choclo con porotos; Arroz con lentejas y cebolla dorada; Ensalada de lentejas y pimentón asado; Ensalada de lentejas con pera; Ensalada de lentejas con pepino y menta; Arroz con lentejas y zanahoria salteada; Zapallitos rellenos de lentejas.

Se precisaron tiempos y temperaturas orientativos de horno en: Ensalada tibia de lentejas y zapallo; Papas rústicas con salsa de yogur; Tortitas de zapallo y avena; Ensalada de lentejas y pimentón asado; Puré de coliflor con ajo asado; Papas gratinadas con puerro; Arroz con berenjena y tofu al ajo; Cuscús con zapallo y garbanzos; Zapallitos rellenos de lentejas. En Tortitas de zapallo y avena se aumentó la duración total de cocción de 25 a 40 minutos para reflejar la cocción previa del zapallo más el horneado.

Se añadieron dos pruebas de regresión a `tests/calidad-catalogo.test.mjs` para verificar estado precocido en diez recetas, duración nula de dos ensaladas y tiempos de horno en nueve preparaciones.

## Bloqueos vigentes
1. La unicidad de los 500 títulos se comprueba mediante tests, pero no existe certificación culinaria individual de las 500 fichas; faltan duplicidades semánticas, concordancia completa de ingredientes, técnicas y tiempos.
2. No se han ejecutado pruebas reales de extremo a extremo en navegador y móvil del buscador gratuito, fichas, planificador Premium local, inventario, listas de compras, persistencia y errores de navegación. Los tests unitarios y Preview READY no reemplazan esos recorridos.
3. El PR #7 mantiene conflictos frente a `main`; no se ha conciliado ni fusionado.
4. Se requiere confirmar que todas las verificaciones CI del último commit y su Preview hayan finalizado satisfactoriamente.

**Acciones prohibidas respetadas:** no se modificó `main`, no se fusionaron PR, no se publicó producción, no se activaron cobros ni servicios de IA de pago.
