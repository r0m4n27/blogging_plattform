import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@blog/frontend": fileURLToPath(
        new URL("../../apps/frontend/src", import.meta.url),
      ),
      "@blog/backend": fileURLToPath(
        new URL("../../apps/backend/src", import.meta.url),
      ),
      "@blog/storybook": fileURLToPath(
        new URL("../../apps/storybook/src", import.meta.url),
      ),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:4000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
