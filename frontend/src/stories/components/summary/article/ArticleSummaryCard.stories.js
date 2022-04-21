import ArticleSummaryCard from "@/components/summary/article/ArticleSummaryCard.vue";
import { createContainerDecorator } from "@/stories/decorators/containerDecorator";
import { mockArticle } from "@/stories/data/article";

export default {
  component: ArticleSummaryCard,
};

const Template = (args) => ({
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
