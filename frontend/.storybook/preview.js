import "ress/dist/ress.min.css";
import "../src/main.css";
import VRoot from "../src/components/base/VRoot.vue";
import ProvideGlobals from "../src/components/ProvideGlobals.vue";
import vueRouter from "storybook-vue3-router";
import { routes } from "@/lib/router";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const vRootDecorator = (story) => ({
  components: { story, VRoot },
  template: `
      <VRoot>
        <story />
      </VRoot>
    `,
});
const provideGlobalsDecorator = (story) => ({
  components: { story, ProvideGlobals },
  template: `
      <ProvideGlobals>
        <story />
      </ProvideGlobals>
    `,
});

export const decorators = [
  vueRouter(routes),
  vRootDecorator,
  provideGlobalsDecorator,
];
