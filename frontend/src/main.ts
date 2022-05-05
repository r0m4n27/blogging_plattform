import { createApp } from "vue";
import App from "./App.vue";
import "ress/dist/ress.min.css";
import "./main.css";
import { router } from "./lib/router";
import { createPinia } from "pinia";
import { createHead } from "@vueuse/head";

// The following warning: inject() can only be used inside setup() or functional components.
// Can be safely ignored, since it happens because of the router guards
// In the pinia examples the behavior is considered safe
// https://pinia.vuejs.org/core-concepts/outside-component-usage.html
const app = createApp(App).use(router).use(createPinia()).use(createHead());

router.isReady().then(() => app.mount("#app"));
