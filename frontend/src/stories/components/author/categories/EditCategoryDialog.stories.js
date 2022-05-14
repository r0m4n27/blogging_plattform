import EditCategoryDialog from "../../../../components/author/categories/EditCategoryDialog.vue";
import { createContainerDecorator } from "@/stories/decorators/containerDecorator";

export default {
  component: EditCategoryDialog,
};

const Template = (args) => ({
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
