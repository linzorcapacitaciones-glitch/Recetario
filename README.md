# Recetario de la Alacena

Proyecto restaurado desde el repositorio original `linzorcapacitaciones-glitch/pantry-to-plate-pro-86` (React, TypeScript, TanStack Start, Vite).

La web anterior sigue funcionando: https://pantry-to-plate-pro-86.lovable.app/

## Instalación y pruebas

```sh
npm install
npm run lint
npm run build
```

## Generación de recetas con IA

`src/lib/recipes.functions.ts` recibe los ingredientes, solicita diez recetas y valida que sean exactamente diez. Para ejecutarla fuera de Lovable, configure `OPENAI_API_KEY` como variable de **servidor** en el alojamiento. También acepta `LOVABLE_API_KEY` del gateway anterior. No publique claves API, no las ponga en variables `VITE_*`.

`src/lib/chef.functions.ts` contiene funciones premium que todavía requieren Lovable Gateway y necesitarán adaptación si se quiere independencia total.

## Despliegue y recursos gráficos

La fotografía principal se sirve **temporalmente** desde el sitio original de Lovable; se mantiene para preservar el diseño mientras se incorpora la imagen local. Se sustituyó el favicon binario por un SVG local. No retirar el sitio anterior hasta haber migrado todos los recursos.

La aplicación nueva no se considera publicada ni validada hasta completar instalaciones, pruebas, secretos y compilación de producción.
