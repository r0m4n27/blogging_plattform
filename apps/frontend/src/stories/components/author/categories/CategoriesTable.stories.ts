import CategoriesTable from "../../../../components/author/categories/CategoriesTable.vue";
import { createContainerDecorator } from "@blog/frontend/stories/decorators/containerDecorator";
import { mockCategories } from "../../../data/category";
import type { Meta, StoryFn } from "@storybook/vue3";

export default {
  component: CategoriesTable,
  title: "frontend/author/categories/CategoriesTable",
} as Meta<typeof CategoriesTable>;

const Template: StoryFn<typeof CategoriesTable> = (args) => ({
  components: { CategoriesTable },
  setup() {
    return { args };
  },
  template: `<CategoriesTable v-bind="args" />`,
});

export const Primary = Template.bind({});

Primary.decorators = [createContainerDecorator("lg")];
Primary.args = {
  categories: mockCategories,
};
