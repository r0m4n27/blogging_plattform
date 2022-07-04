import ArticlesTable from "../../../../components/author/articles/ArticlesTable.vue";
import { createContainerDecorator } from "@blog/frontend/stories/decorators/containerDecorator";
import { mockArticles } from "../../../data/article";
import type { Meta, StoryFn } from "@storybook/vue3";

export default {
  component: ArticlesTable,
  title: "frontend/author/articles/ArticlesTable",
} as Meta<typeof ArticlesTable>;

const Template: StoryFn<typeof ArticlesTable> = (args) => ({
  components: { ArticlesTable },
  setup() {
    return { args };
  },
  template: `<ArticlesTable v-bind="args" />`,
});

export const Primary = Template.bind({});

Primary.decorators = [createContainerDecorator("lg")];
Primary.args = {
  articles: mockArticles,
};
