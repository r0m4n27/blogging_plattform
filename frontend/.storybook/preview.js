import "ress/dist/ress.min.css";
import "../src/main.css";
import VRoot from "../src/components/base/VRoot.vue";
import vueRouter from "storybook-vue3-router";
import { routes } from "@/lib/router";
import { app } from "@storybook/vue3";
import { createPinia } from "pinia";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

app.use(createPinia());

const vRootDecorator = (story) => ({
  components: { story, VRoot },
  template: `
      <VRoot>
        <story />
      </VRoot>
    `,
});

export const decorators = [vueRouter(routes), vRootDecorator];
