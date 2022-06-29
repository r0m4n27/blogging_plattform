import CategoryTag from "@/components/visitor/util/CategoryTag.vue";
import { jsCategory } from "@/stories/data/category";
import { createContainerDecorator } from "@/stories/decorators/containerDecorator";
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
