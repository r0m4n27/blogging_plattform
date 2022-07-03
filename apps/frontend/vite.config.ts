import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { readdirSync } from "fs";

const pagePath = "./src/components/pages";

const pageFiles = (directory: string) =>
  readdirSync(`${pagePath}/${directory}`).map(
    (name) => `${pagePath}/${directory}/${name}`,
  );
const layoutFile = (name: string) => `${pagePath}/layout/${name}`;

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
    },
  },
  // See: https://router.vuejs.org/guide/advanced/lazy-loading.html#with-vite
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "group-visitor": [
            ...pageFiles("visitor"),
            layoutFile("VisitorPageLayout.vue"),
          ],
          "group-author": [...pageFiles("author"), layoutFile("AuthorPageLayout.vue")],
          "group-admin": [...pageFiles("admin"), layoutFile("AdminPageLayout.vue")],
        },
      },
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
