import "ress/dist/ress.min.css";
import "../src/main.css";
import vueRouter from "storybook-vue3-router";
import { routes } from "@/lib/router/router";
import { app } from "@storybook/vue3";
import { createPinia } from "pinia";
import StoryRoot from "@/stories/components/StoryRoot.vue";

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

const storyRootDecorator = (story) => ({
  components: { story, StoryRoot },
  template: `
      <StoryRoot>
        <story />
      </StoryRoot>
    `,
});

export const decorators = [vueRouter(routes), storyRootDecorator];
