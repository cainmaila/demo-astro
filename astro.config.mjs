// @ts-check
import { defineConfig } from "astro/config";
import AstroPWA from "@vite-pwa/astro";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [
    svelte(),
    AstroPWA({
      manifest: {
        name: "Demo Astro App",
        short_name: "DemoAstro",
        description: "A demo Astro PWA app",
        theme_color: "#42b883",
        icons: [
          {
            src: "/android-launchericon-192-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/android-launchericon-192-192.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
