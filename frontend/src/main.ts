import { createApp } from "vue";
import App from "./App.vue";
import "ress/dist/ress.min.css";
import "./main.css";
import { router } from "./lib/router";
import { createPinia } from "./lib/pinia";
import { createHead } from "@vueuse/head";

const pinia = createPinia(router);
const app = createApp(App).use(router).use(pinia).use(createHead());

router.isReady().then(() => app.mount("#app"));
