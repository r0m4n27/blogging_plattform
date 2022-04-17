import { createApp } from "vue";
import App from "./App.vue";
import "ress/dist/ress.min.css";
import "./main.css";
import { router } from "./lib/router";

createApp(App).use(router).mount("#app");
