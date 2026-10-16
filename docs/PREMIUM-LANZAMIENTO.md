# Chef IA Premium: preparación de lanzamiento

## Estado
- Precios **orientativos**: $3.990 CLP/mes y $29.990 CLP/año, sin pagos activos.
- Página Premium: demostración **estática y claramente identificada**, sin tokens.
- Código de Chef IA preparado para usar `OPENAI_API_KEY` y `OPENAI_MODEL` para siete funciones de texto (preguntas, adaptación, costos, nutrición, sobras y menú), y `OPENAI_IMAGE_MODEL` con OpenAI Image API para imagen referencial.
- Acceso a endpoints Premium **cerrado en el servidor**. El botón local "vista de prueba" no autoriza IA ni compras.
- Cocina guiada paso a paso y lista de compras pueden evaluarse sin IA.
- No introducir claves en variables públicas `VITE_*`.

## Para activar las suscripciones de forma segura
1. Elegir proveedor de pagos apropiado a Chile (Mercado Pago/Stripe y, para tiendas, las compras integradas requeridas).
2. Implementar cuentas autenticadas y una tabla de suscripciones persistida en la base de datos.
3. Crear Checkout y webhooks firmados, validación de eventos, idempotencia y conciliación.
4. En **cada** acción premium, verificar en servidor la sesión real y una suscripción activa. Nunca confiar en plan enviado por navegador/localStorage.
5. Limitar solicitudes por usuario, consumo diario de tokens, límites de salida y presupuestos de imágenes.
6. Aplicar pruebas automáticas de seguridad, cuotas y uso comercial antes de habilitar la ruta de IA.
7. Publicar bajo plan de hosting que autorice uso comercial, con privacidad y términos.

## Nota de pruebas
La API OpenAI de la cuenta actual devolvió 429; la generación real no está validada. La demo no debe presentarse como motor IA operativo.
