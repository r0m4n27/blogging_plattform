import BlogArticle from "@blog/frontend/components/visitor/article/BlogArticle.vue";
import { createContainerDecorator } from "@blog/frontend/stories/decorators/containerDecorator";
import { mockArticle } from "@blog/frontend/stories/data/article";
import type { Meta, StoryFn } from "@storybook/vue3";

export default {
  component: BlogArticle,
  title: "frontend/visitor/summary/BlogArticle",
} as Meta<typeof BlogArticle>;

const Template: StoryFn<typeof BlogArticle> = (args) => ({
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
