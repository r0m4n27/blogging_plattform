import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { readdirSync } from "fs";

import { createResolveConfig } from "../../packages/config/src/vite.config";

const pagePath = "./src/components/pages";

const pageFiles = (directory: string) =>
  readdirSync(`${pagePath}/${directory}`).map(
    (name) => `${pagePath}/${directory}/${name}`,
  );
const layoutFile = (name: string) => `${pagePath}/layout/${name}`;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: createResolveConfig(__dirname),
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
