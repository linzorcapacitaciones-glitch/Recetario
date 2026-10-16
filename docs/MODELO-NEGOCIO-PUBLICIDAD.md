# Estrategia publicidad primero y Premium real (diseño inicial)

## Principio económico
Las consultas habituales deben apoyarse en un catálogo reutilizable y búsquedas deterministas o cacheadas; una solicitud a OpenAI por cada búsqueda gratuita puede consumir más que los ingresos publicitarios.
Antes de introducir AdSense: alojamiento comercial permitido, consentimiento de cookies/datos cuando corresponda, aviso de privacidad, sitio original de calidad y aprobación de AdSense.
El RPM es variable. No presentar ejemplos como ingresos garantizados.

## Función Premium diferenciada implementada
`PlanificadorSemanal`: 3, 5 o 7 días, 1 o 2 platos diarios, número de personas, despensa, presupuesto CLP y precios de referencia editables, con resumen total, diferencia contra presupuesto y lista de compras consolidada.
La lógica corre en el navegador y NO usa tokens ni llamadas a OpenAI. El motor usa un catálogo limitado de 18 platos como primera iteración.
Los precios preestablecidos NO son precios verificados de comercios: simulación editable.
No se controla cantidad real disponible de alimentos, ni tamaños de envases, condimentos, agua/energía ni stock: no se deben vender los costos como una cotización precisa.

## Modelo de producto propuesto
Gratis financiado con publicidad no invasiva: buscar recetas del catálogo, favoritos, compartir y planificación corta con límites razonables. El valor gratuito se mantiene alto para crear audiencia.
Premium: 7 días, 2 comidas al día, presupuesto, shopping agrupado, preparaciones por lote, menús personalizados y herramientas avanzadas de IA con cuotas mensuales.
Hasta construir cobros/autenticación, el botón de prueba solo muestra las funcionalidades; el backend facturable Premium sigue cerrado.
No desplegar anuncios reales en Vercel Hobby, restringido a uso no comercial.

## Próximas entregas
1. Sustituir "demostración con diez recetas estáticas" por buscador de catálogo local configurable para versión gratuita.
2. Ampliar catálogo a decenas de recetas diversas, medidas y alérgenos.
3. Sistema de caché a nivel servidor para consultas IA no repetidas + rate limiting de endpoints.
4. Analítica de sesiones, vistas, retención y costo por cada 1.000 vistas; entonces validar publicidad.
5. En futura monetización, aplicar Premium mediante cobro confirmado por webhook y autorizaciones de servidor.
