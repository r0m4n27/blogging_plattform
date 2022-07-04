import UpdatePassword from "@blog/frontend/components/common/settings/UpdatePassword.vue";
import { createContainerDecorator } from "@blog/frontend/stories/decorators/containerDecorator";
import type { Meta, StoryFn } from "@storybook/vue3";

export default {
  component: UpdatePassword,
  title: "frontend/common/settings/UpdatePassword",
} as Meta<typeof UpdatePassword>;

const Template: StoryFn<typeof UpdatePassword> = (args) => ({
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
