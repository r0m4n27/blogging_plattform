import CategoryList from "@blog/frontend/components/visitor/util/CategoryList.vue";
import { mockCategories } from "@blog/frontend/stories/data/category";
import { createContainerDecorator } from "@blog/frontend/stories/decorators/containerDecorator";
import { cardDecorator } from "@blog/frontend/stories/decorators/cardDecorator";
import type { Meta, StoryFn } from "@storybook/vue3";

export default {
  component: CategoryList,
} as Meta<typeof CategoryList>;

const Template: StoryFn<typeof CategoryList> = (args) => ({
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
