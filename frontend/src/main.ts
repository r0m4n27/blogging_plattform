import { createApp } from "vue";
import App from "./App.vue";
import "ress/dist/ress.min.css";
import "./main.css";
import { router } from "./lib/router";
import { createPinia } from "pinia";
import { createMetaManager, defaultConfig, deepestResolver } from "vue-meta";

const app = createApp(App)
  .use(router)
  .use(createPinia())
  .use(createMetaManager(defaultConfig, deepestResolver.resolve));

router.isReady().then(() => app.mount("#app"));
