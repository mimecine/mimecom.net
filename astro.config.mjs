// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import alpinejs from "@astrojs/alpinejs";
import cloudflare from "@astrojs/cloudflare";
// https://astro.build/config
export default defineConfig({
  site: "https://mimecom.net",
  output: "server",
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [alpinejs()],
  adapter: cloudflare(),
  
});