import ArticleSummaryList from "@/components/summary/article/ArticleSummaryList.vue";
import { createContainerDecorator } from "@/stories/decorators/containerDecorator";
import { mockArticles } from "@/stories/data/article";

export default {
  component: ArticleSummaryList,
};

const Template = (args) => ({
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
