import ArticleSummaryList from "@/components/summary/article/ArticleSummaryList.vue";
import { createContainerDecorator } from "@/stories/decorators/containerDecorator";

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

const article = {
  id: "1",
  title: "Why Next.js is the most AWESOME Framework!",
  summary: `Lorem ipsum dolor sit amet,
  consetetur sadipscing elitr, sed diam nonumy eirmod tempor
  invidunt ut labore et dolore magna aliquyam erat,
  sed diam voluptua.`,
  categories: [
    { name: "Javascript", id: "1" },
    { name: "Programming", id: "2" },
  ],
};

Primary.decorators = [createContainerDecorator("lg")];
Primary.args = {
  title: "Latest Articles",
  showTitleOnDesktop: true,
  articles: [...Array(10).keys()].map(() => article),
};
