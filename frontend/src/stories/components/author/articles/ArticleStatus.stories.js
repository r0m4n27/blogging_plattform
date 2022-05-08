import ArticleStatus from "../../../../components/author/articles/ArticleStatus.vue";
import { createContainerDecorator } from "@/stories/decorators/containerDecorator";
import { mockArticle, mockArticleDraft } from "../../../data/article";

export default {
  component: ArticleStatus,
};

const Template = (args) => ({
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
