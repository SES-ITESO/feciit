// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  // 1. Add your domain here
  site: "https://feciit.org",

  // 2. Set the base (optional, but good practice for root domains)
  base: "/",

  // Keep your existing settings below
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
});
