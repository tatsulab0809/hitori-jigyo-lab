import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://hitori-jigyo-lab.com",
  adapter: cloudflare()
});