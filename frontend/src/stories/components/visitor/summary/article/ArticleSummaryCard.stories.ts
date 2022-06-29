import ArticleSummaryCard from "@/components/visitor/summary/article/ArticleSummaryCard.vue";
import { createContainerDecorator } from "@/stories/decorators/containerDecorator";
import { mockArticle } from "@/stories/data/article";
import type { Meta, StoryFn } from "@storybook/vue3";

export default {
  component: ArticleSummaryCard,
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
