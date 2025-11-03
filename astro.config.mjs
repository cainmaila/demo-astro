// @ts-check
import { defineConfig } from "astro/config";
import AstroPWA from "@vite-pwa/astro";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), AstroPWA()],
});
