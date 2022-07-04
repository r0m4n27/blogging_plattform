import ArticleSummaryCard from "@blog/frontend/components/visitor/summary/article/ArticleSummaryCard.vue";
import { createContainerDecorator } from "@blog/frontend/stories/decorators/containerDecorator";
import { mockArticle } from "@blog/frontend/stories/data/article";
import type { Meta, StoryFn } from "@storybook/vue3";

export default {
  component: ArticleSummaryCard,
  title: "frontend/visitor/summary/article/ArticleSummaryCard",
} as Meta<typeof ArticleSummaryCard>;

const Template: StoryFn<typeof ArticleSummaryCard> = (args) => ({
  components: { ArticleSummaryCard },
  setup() {
    return { args };
  },
  template: `  <ArticleSummaryCard v-bind="args" />`,
});

export const Primary = Template.bind({});

Primary.decorators = [createContainerDecorator("sm")];
Primary.args = {
  article: mockArticle,
};
