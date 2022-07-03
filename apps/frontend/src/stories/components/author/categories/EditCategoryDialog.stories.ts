import EditCategoryDialog from "../../../../components/author/categories/EditCategoryDialog.vue";
import { createContainerDecorator } from "@blog/frontend/stories/decorators/containerDecorator";
import type { Meta, StoryFn } from "@storybook/vue3";

export default {
  component: EditCategoryDialog,
} as Meta<typeof EditCategoryDialog>;

const Template: StoryFn<typeof EditCategoryDialog> = (args) => ({
  components: { EditCategoryDialog },
  setup() {
    return { args };
  },
  template: `<EditCategoryDialog v-bind="args" />`,
});

export const Primary = Template.bind({});

Primary.decorators = [createContainerDecorator("lg")];
Primary.args = {
  initialName: "Test",
};
