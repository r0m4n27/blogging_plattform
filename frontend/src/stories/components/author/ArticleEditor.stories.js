import ArticleEditor from "../../../components/author/articleEditor/ArticleEditor.vue";
import { createContainerDecorator } from "@/stories/decorators/containerDecorator";
import { mockArticle, mockArticleDraft } from "../../data/article";

export default {
  component: ArticleEditor,
};

const Template = (args) => ({
  components: { ArticleEditor },
  setup() {
    return { args };
  },
  template: `<ArticleEditor v-bind="args" />`,
});

export const New = Template.bind({});
New.decorators = [createContainerDecorator("lg")];

export const PublishedArticle = Template.bind({});
PublishedArticle.decorators = [createContainerDecorator("lg")];
PublishedArticle.args = {
  article: mockArticle,
};

export const DraftArticle = Template.bind({});
DraftArticle.decorators = [createContainerDecorator("lg")];
DraftArticle.args = {
  article: mockArticleDraft,
};
