import UpdatePassword from "@/components/common/settings/UpdatePassword.vue";
import { createContainerDecorator } from "@/stories/decorators/containerDecorator";

export default {
  component: UpdatePassword,
};

const Template = (args) => ({
  components: { UpdatePassword },
  setup() {
    return { args };
  },
  template: `<UpdatePassword v-bind='args'/>`,
});

export const Primary = Template.bind({});
Primary.decorators = [createContainerDecorator("lg")];
Primary.args = {
  showSuccess: false,
};

export const Updated = Template.bind({});
Updated.decorators = [createContainerDecorator("lg")];
Updated.args = {
  showSuccess: true,
};
