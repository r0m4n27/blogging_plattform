import NewCategoryDialog from "../../../../components/author/categories/NewCategoryDialog.vue";
import { createContainerDecorator } from "@blog/frontend/stories/decorators/containerDecorator";
import type { Meta, StoryFn } from "@storybook/vue3";

export default {
  component: NewCategoryDialog,
} as Meta<typeof NewCategoryDialog>;

const Template: StoryFn<typeof NewCategoryDialog> = (args) => ({
  components: { NewCategoryDialog },
  setup() {
    return { args };
  },
  template: `<NewCategoryDialog v-bind="args" />`,
});

export const Primary = Template.bind({});

Primary.decorators = [createContainerDecorator("lg")];
