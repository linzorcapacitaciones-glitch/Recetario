# Auditoría incremental — 4 de noviembre de 2026

**Decisión: NO APROBADO / NO FUSIONAR / NO PUBLICAR.** Sin servicios de pago.

## Origen y CI
- PR #7 (`feature/ampliacion-recetas-lote-1`): abierto, borrador, `mergeable=false`, SHA `90faee5`; no fusionado con `main`.
- PR #8 (`integracion/recetario-cierre-2026-10-28`): abierto, borrador y sin fusionar.
- El commit anterior `ed2f66c` aprobó tres verificaciones CI y su Preview figura READY.
- Las verificaciones CI del commit editorial `1cd9112` estaban en ejecución al efectuar esta revisión; su Preview figura READY. READY no sustituye pruebas funcionales E2E.

## Auditoría editorial incremental
- Se analizaron programáticamente las **454 fichas estructuradas de los lotes 2–19**. Todas sus claves de ingredientes `ids` tienen cantidad declarada en el mapa del lote y sus ingredientes principales aparecen en los pasos según cotejo léxico; esta regla no certifica suficiencia culinaria.
- Un filtro de semejanza (ingredientes y vocabulario de pasos) identificó tres parejas a revisar. Se inspeccionaron: frittata de brócoli / omelette de brócoli (horno frente a sartén); frittata de zapallo / huevos revueltos (cuajado frente a revuelto); arroz con arvejas / sopa de arroz (arroz seco frente a caldo). Las técnicas son distintas; no se eliminan.
- Se detectaron cuatro preparaciones con instrucciones de horno sin tiempo orientativo; una, «Berenjena asada con yogur», requería ajo cocido sin indicar cómo cocinarlo.
- Correcciones en lotes 9, 10, 11 y 17: frittata de brócoli (180 °C, 15–20 min), budín de brócoli y zanahoria (180 °C, 25–30 min), tofu con brócoli (200 °C, 20–25 min) y berenjena con yogur (200 °C, 30–35 min, más asado del ajo durante los últimos 15–20 min). Se añadió regresión en `tests/calidad-catalogo.test.mjs`.
- Persisten otras instrucciones de horno sin duración numérica en el mismo paso; algunas emplean temperaturas internas seguras o indicadores sensoriales, por lo que requieren clasificación y no pueden calificarse automáticamente como errores.

## Funcionalidad y bloqueos
- Las pruebas automáticas existentes cubren 500 títulos normalizados únicos, estructura mínima y lógica del buscador gratuito, planificador Premium local, inventario y compras. Esto no equivale a certificación editorial de 500 recetas ni prueba de interacción real.
- No se ejecutaron pruebas E2E de escritorio/móvil con interacción efectiva y persistencia: el entorno de inspección no pudo conectarse al Preview. No se ha validado el recorrido completo del buscador, filtros, fichas, planificador, inventario y lista de compras.
- PR #7 sigue con conflictos frente a `main`; no se ha conciliado.
- Mantener publicación bloqueada hasta que pasen CI del último commit, revisión editorial exhaustiva y pruebas E2E reales. No activar cobros ni IA facturable.

**No se modificó `main`, no se fusionaron PR ni se publicó producción.**
