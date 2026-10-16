# Mejora de personalización y aviso Premium

## Cambios
- Convertir “Personalizar búsqueda” en un botón compacto, contrastado y táctil, con icono de ajustes, contador de filtros y chevrón que refleje abierto/cerrado.
- Mantener el panel cerrado inicialmente y conservar exactamente sus opciones y el envío actual de preferencias al generador.
- Sustituir el botón Premium inactivo por un botón claro que abra una ventana accesible con el contenido solicitado, sin pagos.
- Mantener intactos buscador, 10 resultados, ranking, coincidencias, compartir, favoritos, reseñas y publicidad durante la carga.

## Validación
- Ejecutar el build.
- Probar en escritorio y móvil: apertura/cierre del panel, selección de filtros, búsqueda con Enter y botón, 10 resultados y ventana Premium.
- Comprobar que compartir, favoritos y reseñas continúan accesibles.

## Detalles técnicos
- Usar el diálogo accesible ya disponible en el proyecto y estilos semánticos existentes.
- No modificar el motor de recetas ni la estructura Free/Premium salvo la conexión visual necesaria.
