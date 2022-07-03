import CategoryTag from "@blog/frontend/components/visitor/util/CategoryTag.vue";
import { jsCategory } from "@blog/frontend/stories/data/category";
import { createContainerDecorator } from "@blog/frontend/stories/decorators/containerDecorator";
import type { Meta, StoryFn } from "@storybook/vue3";

export default {
  component: CategoryTag,
} as Meta<typeof CategoryTag>;

const Template: StoryFn<typeof CategoryTag> = (args) => ({
  components: { CategoryTag },
  setup() {
    return { args };
  },
  template: `<CategoryTag v-bind="args" />`,
});

export const Primary = Template.bind({});
Primary.decorators = [createContainerDecorator("md")];
Primary.args = {
  category: jsCategory,
};
