import NewCategoryDialog from "../../../../components/author/categories/NewCategoryDialog.vue";
import { createContainerDecorator } from "@/stories/decorators/containerDecorator";

export default {
  component: NewCategoryDialog,
};

const Template = (args) => ({
  components: { NewCategoryDialog },
  setup() {
    return { args };
  },
  template: `<NewCategoryDialog v-bind="args" />`,
});

export const Primary = Template.bind({});

Primary.decorators = [createContainerDecorator("lg")];
