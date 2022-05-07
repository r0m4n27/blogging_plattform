import { createApp } from "vue";
import App from "./App.vue";
import "ress/dist/ress.min.css";
import "./main.css";
import { createRouter } from "./lib/router/router";
import { createPinia } from "./lib/pinia";
import { createHead } from "@vueuse/head";

// @ts-expect-error: This has no types
import values from "object.values";

if (!Object.values) {
  values.shim();
}

const router = createRouter();
const pinia = createPinia(router);
const head = createHead();
const app = createApp(App).use(router).use(pinia).use(head);

router.isReady().then(() => app.mount("#app"));
