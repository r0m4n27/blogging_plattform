import BlogArticle from "@/components/visitor/article/BlogArticle.vue";
import { createContainerDecorator } from "@/stories/decorators/containerDecorator";
import { mockArticle } from "@/stories/data/article";
import type { Meta, StoryFn } from "@storybook/vue3";

export default {
  component: BlogArticle,
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
