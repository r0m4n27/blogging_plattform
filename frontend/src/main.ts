import { createApp } from "vue";
import App from "./App.vue";
import "ress/dist/ress.min.css";
import "./main.css";
import { router } from "./lib/router";
import { createPinia } from "pinia";

createApp(App).use(router).use(createPinia()).mount("#app");
