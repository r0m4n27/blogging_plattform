import { createApp } from "vue";
import App from "./App.vue";
import "ress/dist/ress.min.css";
import "./main.css";
import { router } from "./lib/router";
import { createPinia } from "pinia";
import { createHead } from "@vueuse/head";

const app = createApp(App).use(router).use(createPinia()).use(createHead());

router.isReady().then(() => app.mount("#app"));
