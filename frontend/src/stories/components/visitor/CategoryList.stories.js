import CategoryList from "@/components/visitor/util/CategoryList.vue";
import { mockCategories } from "@/stories/data/category";
import { createContainerDecorator } from "@/stories/decorators/containerDecorator";
import { cardDecorator } from "@/stories/decorators/cardDecorator";

export default {
  component: CategoryList,
};

const Template = (args) => ({
  components: { CategoryList },
  setup() {
    return { args };
  },
  template: `<CategoryList v-bind="args" />`,
});

export const Primary = Template.bind({});
Primary.decorators = [cardDecorator, createContainerDecorator("sm")];
Primary.args = {
  categories: mockCategories,
};

export const Custom = Template.bind({});
Custom.decorators = [cardDecorator, createContainerDecorator("sm")];
Custom.args = {
  categories: mockCategories,
  width: "full",
  justify: "end",
};
