import ArticlesTable from "../../../../components/author/articles/ArticlesTable.vue";
import { createContainerDecorator } from "@/stories/decorators/containerDecorator";
import { mockArticles } from "../../../data/article";

export default {
  component: ArticlesTable,
};

const Template = (args) => ({
  components: { ArticlesTable },
  setup() {
    return { args };
  },
  template: `<ArticlesTable v-bind="args" />`,
});

export const Primary = Template.bind({});

Primary.decorators = [createContainerDecorator("lg")];
Primary.args = {
  articles: mockArticles,
};
