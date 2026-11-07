# Auditoría incremental — 20 de octubre de 2026

**Decisión: BLOQUEADO / NO PUBLICAR.** Se mantiene PR #7 como borrador, sin fusionar a main. No activar anuncios, pagos ni servicios facturables.

## Controles de código
- Rama: `feature/ampliacion-recetas-lote-1`; PR #7 abierto y sin fusionar.
- El commit `4c783a11c910ac1e886aec0599c7fa781233eea2` obtuvo comprobaciones `validar` y `test-build` exitosas el 20/10/2026. La aprobación CI es solo técnica y no demuestra la calidad culinaria ni un recorrido real de usuario.
- Se incorporó una utilidad de consolidación de cantidades para listas de compras: suma compras de planes distintos y evita volver a sumar el mismo plan. Hay pruebas unitarias para estos casos. Falta comprobarla en navegador móvil, persistencia tras refrescar y compatibilidad con entradas libres previas.
- Vercel informó estado exitoso en GitHub para la revisión anterior. La API del equipo de Vercel devolvió 403 al intentar consultar despliegues; el Preview no pudo verificarse mediante navegación real.

## Inventario del catálogo
- Lotes adicionales y lotes 2 a 19: **474 fichas** y 474 títulos normalizados diferentes.
- Recetas de demostración: 10. Platos base del planificador: 18. Dos títulos coinciden entre estos últimos grupos, lo que explica un total nominal de **500 títulos distintos** tras deduplicación.
- **No se ha validado la unicidad semántica de 500 recetas.** El criterio automático de título no detecta recetas equivalentes con nombre distinto.

## Hallazgos editoriales
- Lote 2: 54 fichas construidas a partir de combinaciones de ingredientes; 42 repiten literalmente «Saltea el acompañamiento ... ingrediente principal» y 35 «Calienta todo junto ...». Otras 12 incluyen la instrucción vaga «tritúralo si corresponde».
- Se corrigieron concordancias evidentes de títulos de papas y lentejas. Esto no constituye una revisión culinaria.
- Las instrucciones genéricas impiden asegurar correspondencia ingrediente-paso, técnica de cocción, seguridad alimentaria y tiempos realistas. El catálogo completo aún requiere revisión editorial individual y de alérgenos.

## Alcance funcional pendiente
- Buscador gratuito: catálogo local sin IA de pago; falta probar en interfaz búsquedas, ingredientes compuestos, preferencias, relevancia y casos sin resultados.
- Planificador Premium: demo determinista basada en 18 platos, no en los 500; precios simulados. No hay suscripción comercial ni validación de identidad.
- Lista de compras: corrección cuantificada incorporada; aún falta prueba E2E de combinar varios planes y recetas, marcar, eliminar, recargar y conservar datos.
- E2E en móvil: **NO APROBADO**. No se ejecutó recorrido interactivo completo ni se comprobó el Preview vigente.
- Hosting comercial: confirmar alojamiento y condiciones antes de monetizar; el plan Hobby de Vercel no es apto para explotación comercial.

## Próxima acción de auditoría
Revisar culinariamente el lote 2 y luego el resto de las 500 fichas; corregir técnicas, tiempos, ingredientes, alérgenos y duplicados semánticos. Ejecutar CI del último commit y prueba de extremo a extremo en un Preview autorizado, sin publicar.
