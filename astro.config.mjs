// @ts-check
import { defineConfig } from "astro/config";

// En GitHub Actions, `actions/configure-pages` entrega la URL y el path reales del sitio
// (sirve para cualquier cuenta o dominio propio). En local se usan los valores por defecto.
export default defineConfig({
  site: process.env.SITE_URL || "http://localhost:4321",
  base: process.env.BASE_PATH ?? "/disfrute",
});
