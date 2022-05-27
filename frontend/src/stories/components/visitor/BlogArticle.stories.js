import BlogArticle from "@/components/visitor/article/BlogArticle.vue";
import { createContainerDecorator } from "@/stories/decorators/containerDecorator";
import { mockArticle } from "@/stories/data/article";

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
  article: mockArticle,
};
