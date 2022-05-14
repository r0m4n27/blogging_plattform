import CategoriesTable from "../../../../components/author/categories/CategoriesTable.vue";
import { createContainerDecorator } from "@/stories/decorators/containerDecorator";
import { mockCategories } from "../../../data/category";

export default {
  component: CategoriesTable,
};

const Template = (args) => ({
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
