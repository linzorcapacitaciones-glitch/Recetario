# Auditoría de publicación — 19 de octubre de 2026

**Estado: NO APROBADO PARA PUBLICACIÓN.** PR #7 sigue abierto en borrador. No fusionar a main ni activar anuncios, pagos o API facturables.

## Verificaciones confirmadas
- La revisión del commit `bcfd14ae6dd893197a2b80a6b897cbc18f1a72f5` tuvo GitHub Actions exitoso (validar/test-build) y un Preview Vercel READY. Esto prueba compilación y tests automatizados, **no** un recorrido funcional completo.
- Los tests del catálogo exigen al menos 500 fichas, títulos normalizados no duplicados, cuatro pasos y tiempos numéricos. Esas condiciones no garantizan singularidad culinaria ni calidad editorial.
- Se inspeccionaron los archivos de lotes 2 a 19 y recetas adicionales: 484 fichas de esos archivos sin títulos exactamente repetidos. El catálogo suma también demo y recetas del planificador, con deduplicación por título.
- El buscador gratuito es local y no necesita una API de pago. El planificador Premium es determinista y utiliza 18 platos base, no el conjunto de 500.
- Los endpoints de IA Premium permanecen bloqueados por `exigirAccesoPremium()`; no se activaron gastos.

## Problemas editoriales comprobados
- En lote 2 hay instrucciones genéricas repetidas decenas de veces; la frase «Saltea el acompañamiento ... incorpora el ingrediente principal» aparece en 42 recetas y «Calienta todo junto ...» en 35. Un título distinto no convierte necesariamente dos fichas en recetas editorialmente distintas.
- Se observaron títulos con concordancia incorrecta («Lentejas salteados con tomate», «Papas salteados con tomate») y recetas cuyos pasos no explican claramente cómo combinar los ingredientes.
- Ejemplo lote 19: «Guiso de garbanzos con acelga y tomate» enumera operaciones aisladas sin paso de integración final. Se requiere revisión culinaria receta por receta, tiempos reales y alérgenos.
- La comprobación automática actual solo valida estructura, no correspondencia semántica entre ingredientes, pasos y resultado final.

## Problemas funcionales y límites
- Se corrigió el reconocimiento de ingredientes compuestos en `src/lib/buscador-gratis.ts` para evitar que «leche de coco» se contabilice como leche y coco; regresión en `tests/ingredientes-compuestos.test.mjs`.
- Se corrigió la deduplicación dentro de una misma incorporación a la lista de compras y su normalización en `src/lib/listaCompras.ts`. Aún falta comprobar la consolidación de cantidades entre varias recetas o planificaciones distintas y la persistencia real en navegador.
- La planificación Premium muestra costos estimados con precios simulados, no precios comerciales de envases.
- Falta prueba de extremo a extremo en móvil: búsqueda, filtros, resultados, guardar/recuperar plan, descuentos de inventario, lista de compras y refresco de página.
- Revisar el tipo de alojamiento y sus términos antes de cualquier explotación comercial.

## Criterio de salida
No publicar hasta: (1) revisión editorial integral de 500 recetas y corrección de duplicados semánticos; (2) pruebas de tiempos, ingredientes y alérgenos; (3) CI del último commit aprobado; (4) Preview del último commit READY y probado en navegador real/móvil; (5) flujo Premium e inventario/listas probado extremo a extremo; (6) confirmación de alojamiento apto para monetización.
