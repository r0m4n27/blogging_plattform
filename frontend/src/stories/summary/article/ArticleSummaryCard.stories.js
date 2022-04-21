import ArticleSummaryCard from "@/components/summary/article/ArticleSummaryCard.vue";
import { createContainerDecorator } from "../../decorators/ containerDecorator";

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
  article: {
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
  },
};
