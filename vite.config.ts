// La configuración de Lovable ya integra TanStack Start, React, Tailwind y Nitro.
// No se deben duplicar esos plugins.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Nitro debe generar funciones de Vercel en producción, en lugar del preset
// Cloudflare utilizado por el entorno original de Lovable.
const isVercel = Boolean(process.env.VERCEL && process.env.VERCEL !== "0")
  || Boolean(process.env.VERCEL_URL);

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  nitro: isVercel
    ? {
        preset: "vercel",
        output: {
          dir: ".vercel/output",
          serverDir: ".vercel/output/functions/__server.func",
          publicDir: ".vercel/output/static",
        },
      }
    : true,
});
