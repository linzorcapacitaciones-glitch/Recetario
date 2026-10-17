# Estado operativo — 16 octubre 2026

## Función gratuita implementada
La página principal busca en un catálogo editorial local con instrucciones, ingredientes y coincidencia real, sin API de OpenAI. No es un menú fijo ni diez resultados inventados. Reconoce un vocabulario limitado de ingredientes, y comunica los no reconocidos. Muestra hasta diez recetas pertinentes, nunca obliga a mostrar diez irrelevantes.
Se combinan 10 recetas de demostración revisadas y 18 recetas del planificador (deduplicadas por título), con tiempos editoriales aproximados.
La opción Premium sigue siendo una vista de prueba; planificador 3-7 días y costos orientativos en CLP, con lista de compras. No hay pagos activos.
El endpoint de generación con IA ahora requiere la variable de entorno `RECIPE_AI_ENABLED=true`, ausente por defecto. Esto evita costos inesperados. No habilitarla hasta añadir autenticación, cuotas por usuario, rate limiting, caching y un presupuesto máximo por cuenta.
El buscador gratuito no procesa ingredientes fuera de su vocabulario. Las recetas base son para 2 personas y aún no hay recálculo de cantidades. Revisar tiempos, instrucciones y seguridad alimentaria antes de comercializar.

## Siguiente fase
1. Probar desde móvil búsquedas y planificador con distintos ingredientes, tiempos y presupuesto.
2. Ampliar catálogo a 100+ recetas verificadas y etiquetas de alérgenos.
3. Añadir controles de stock por cantidad real y precio por formato comercial.
4. Integrar medición agregada de uso y después anuncios en alojamiento apto para uso comercial.
5. Diseñar Premium con autenticación y cuotas reales antes de habilitar API.

## Publicidad y finanzas
Ingresos aproximados = vistas monetizables / 1000 * RPM neto. No confundir usuarios activos con vistas.
Costos = alojamiento + analítica + IA (cuando se habilite) + dominio + cumplimiento legal.
Para simular: 50.000 vistas/mes * US$1 de RPM = US$50 brutos; 200.000 vistas * US$2 = US$400. Son escenarios, no estimaciones garantizadas.
El plan Hobby de Vercel no permite explotación comercial. No activar anuncios hasta resolver hosting y políticas de privacidad.
