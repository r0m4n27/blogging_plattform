import ArticleStatus from "../../../../components/author/articles/ArticleStatus.vue";
import { createContainerDecorator } from "@/stories/decorators/containerDecorator";
import { mockArticle, mockArticleDraft } from "../../../data/article";
import type { Meta, StoryFn } from "@storybook/vue3";

export default {
  component: ArticleStatus,
} as Meta<typeof ArticleStatus>;

const Template: StoryFn<typeof ArticleStatus> = (args) => ({
  components: { ArticleStatus },
  setup() {
    return { args };
  },
  template: `<ArticleStatus v-bind="args" />`,
});

export const Published = Template.bind({});

Published.decorators = [createContainerDecorator("md")];
Published.args = {
  article: mockArticle,
};

export const Draft = Template.bind({});

Draft.decorators = [createContainerDecorator("md")];
Draft.args = {
  article: mockArticleDraft,
};
