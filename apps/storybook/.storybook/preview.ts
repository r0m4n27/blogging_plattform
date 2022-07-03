import "ress/dist/ress.min.css";
import "@blog/frontend/main.css";
import vueRouter from "storybook-vue3-router";
import { visitorRootRoute } from "@blog/frontend/lib/router/visitor";
import { authorRootRoute } from "@blog/frontend/lib/router/author";
import { adminRootRoute } from "@blog/frontend/lib/router/admin";
import { app } from "@storybook/vue3";
import { createPinia } from "pinia";
import StoryRoot from "@blog/storybook/StoryRoot.vue";

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
  vueRouter([visitorRootRoute, authorRootRoute, adminRootRoute]),
  storyRootDecorator,
];
