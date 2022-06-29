import ArticleSummaryList from "@/components/visitor/summary/article/ArticleSummaryList.vue";
import { createContainerDecorator } from "@/stories/decorators/containerDecorator";
import { mockArticles } from "@/stories/data/article";
import type { Meta, StoryFn } from "@storybook/vue3";

export default {
  component: ArticleSummaryList,
} as Meta<typeof ArticleSummaryList>;

const Template: StoryFn<typeof ArticleSummaryList> = (args) => ({
  components: { ArticleSummaryList },
  setup() {
    return { args };
  },
  template: `<ArticleSummaryList v-bind="args" />`,
});

export const Primary = Template.bind({});

Primary.decorators = [createContainerDecorator("lg")];
Primary.args = {
  title: "Latest Articles",
  showTitleOnDesktop: true,
  articles: mockArticles,
};
