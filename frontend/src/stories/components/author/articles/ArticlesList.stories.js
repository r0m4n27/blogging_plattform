import ArticlesList from "../../../../components/author/articles/ArticlesList.vue";
import { createContainerDecorator } from "@/stories/decorators/containerDecorator";
import { mockArticles } from "../../../data/article";

export default {
  component: ArticlesList,
};

const Template = (args) => ({
  components: { ArticlesList },
  setup() {
    return { args };
  },
  template: `<ArticlesList v-bind="args" />`,
});

export const Primary = Template.bind({});

Primary.decorators = [createContainerDecorator("lg")];
Primary.args = {
  articles: mockArticles,
};
