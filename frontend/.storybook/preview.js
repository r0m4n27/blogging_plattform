import "ress/dist/ress.min.css";
import "../src/main.css";
import vueRouter from "storybook-vue3-router";
import { visitorRootRoute } from "@/lib/router/visitor";
import { authorRootRoute } from "@/lib/router/author";
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

export const decorators = [
  vueRouter([visitorRootRoute, authorRootRoute]),
  storyRootDecorator,
];
