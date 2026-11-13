# Auditoría incremental — 6 de noviembre de 2026

**Decisión: NO APROBADO / NO FUSIONAR / NO PUBLICAR.** No se utilizaron servicios de pago ni IA facturable.

## Estado del repositorio y del despliegue
- PR #7, rama `feature/ampliacion-recetas-lote-1`: abierto, borrador, `mergeable=false`, HEAD `90faee5`. Sus dos verificaciones de validación y el comentario de Preview anteriores aprobaron; existen conflictos frente a `main`.
- PR #8, rama `integracion/recetario-cierre-2026-10-28`: abierto, borrador, sin fusionar. Se preserva `main`.
- El commit de código `2ba3eed` pasó sus tres verificaciones CI (dos validaciones y compilación), y su despliegue Preview de Vercel figura READY. Los commits posteriores de la demo y de este informe requieren verificar nuevamente CI y Preview.
- El cliente de inspección web no pudo abrir el Preview, y el entorno de ejecución local no tiene acceso DNS externo. **No se han realizado pruebas E2E reales en navegador ni móvil**.

## Hallazgos comprobados y correcciones
1. **Buscador gratuito, ingredientes compuestos:** la indexación de fichas trataba «leche de coco» como leche láctea + coco, y podía contabilizar por separado «carne» y «carne molida». Se unificó la extracción de ingredientes con el parser que consume primero los alias completos. Se agregaron pruebas de regresión.
2. **Lista de compras del plan gratuito:** el botón guardaba cantidades dentro de cadenas de texto y deduplicaba por nombre completo, lo que podía generar filas separadas del mismo producto si cambiaba su cantidad. Ahora usa el consolidador cuantificado y una firma estable del plan, compartidos con Premium local. Se agregó prueba de regresión para pulsaciones repetidas.
3. **Revisión editorial:** se precisaron tiempos y temperaturas de horno en siete preparaciones de los lotes 14, 15, 17 y 19. En «Pasta con zapallo asado» se añadió la cocción efectiva del ajo que antes se utilizaba asado sin indicar cómo prepararlo. En «Tacos de tofu con pimentón y palta» se corrigió la duración de cocción de 18 a 30 minutos, compatible con el asado indicado. Se agregaron pruebas de regresión.
4. **Interfaz de demostración:** se sustituyó el enlace «Volver a generación con IA» por «Volver al buscador gratuito» y se aclaró que las funciones IA permanecen desactivadas. Se añadió prueba de regresión.

## Cobertura editorial y funcional
- Se examinaron heurísticamente las 454 fichas estructuradas de los lotes 2–19, buscando ingredientes idénticos y pasos muy similares. Tres parejas requieren evaluación humana; sus títulos y técnicas apuntan a preparaciones diferentes, por lo que **no se declaró ninguna duplicación semántica confirmada**.
- Las pruebas del catálogo comprueban títulos normalizados únicos, cantidades y pasos mínimos, pero no certifican la coherencia culinaria de cada receta ni la seguridad de todos los tiempos.
- Los tests automatizados del buscador, planificador, inventario, compras y persistencia no sustituyen la ejecución de los recorridos reales en navegador y móvil.
- No se validaron de extremo a extremo búsquedas con filtros, tarjetas, favoritos, planificación Premium local, inventario, compras, recarga y persistencia en móvil y escritorio.

## Bloqueos para autorización de publicación
1. Resolver los conflictos del PR #7 y conciliar las ramas sin fusionar hasta contar con autorización.
2. Completar revisión editorial individual de las 500 recetas y resolver ambigüedades de cocción restantes.
3. Ejecutar y aprobar pruebas E2E reales en navegadores de escritorio y móvil.
4. Confirmar CI y Preview del último commit de la rama de integración, no solo de commits anteriores.

**Restricciones respetadas:** no se fusionó con `main`, no se publicó en producción, no se activaron cobros ni se utilizaron servicios de pago.
