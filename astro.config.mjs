import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://www.tinle.work",
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "hover",
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
