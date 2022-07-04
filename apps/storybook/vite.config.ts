import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import { createResolveConfig } from "../../packages/config/src/vite.config";

export default defineConfig({
  plugins: [vue()],
  resolve: createResolveConfig(__dirname),
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
