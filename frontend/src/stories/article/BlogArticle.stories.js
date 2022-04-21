import BlogArticle from "@/components/article/BlogArticle.vue";
import { createContainerDecorator } from "../decorators/ containerDecorator";

export default {
  component: BlogArticle,
};

const Template = (args) => ({
  components: { BlogArticle },
  setup() {
    return { args };
  },
  template: `<BlogArticle v-bind="args" />`,
});

export const Primary = Template.bind({});

Primary.decorators = [createContainerDecorator("md")];
Primary.args = {
  article: {
    id: "1",
    title: "Why Next.js is the most AWESOME Framework!",
    summary: `Lorem ipsum dolor sit amet,
    consetetur sadipscing elitr, sed diam nonumy eirmod tempor
    invidunt ut labore et dolore magna aliquyam erat,
    sed diam voluptua.`,
    content: `Lorem ipsum dolor sit amet,
    consetetur sadipscing elitr, sed diam nonumy eirmod tempor
    invidunt ut labore et dolore magna aliquyam erat,
    sed diam voluptua.

    Lorem ipsum dolor sit amet,
    consetetur sadipscing elitr, sed diam nonumy eirmod tempor
    invidunt ut labore et dolore magna aliquyam erat,
    sed diam voluptua.

    Lorem ipsum dolor sit amet,
    consetetur sadipscing elitr, sed diam nonumy eirmod tempor
    invidunt ut labore et dolore magna aliquyam erat,
    sed diam voluptua.`,
    categories: [
      { name: "Javascript", id: "1" },
      { name: "Programming", id: "2" },
    ],
  },
};
