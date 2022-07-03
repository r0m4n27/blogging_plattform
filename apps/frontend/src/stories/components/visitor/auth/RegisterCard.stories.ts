import RegisterCard from "@/components/visitor/auth/RegisterCard.vue";
import { createContainerDecorator } from "@/stories/decorators/containerDecorator";
import type { Meta, StoryFn } from "@storybook/vue3";

export default {
  component: RegisterCard,
} as Meta<typeof RegisterCard>;

const Template: StoryFn<typeof RegisterCard> = (args) => ({
  components: { RegisterCard },
  setup() {
    return { args };
  },
  template: `<RegisterCard v-bind='args'/>`,
});

export const Primary = Template.bind({});
Primary.decorators = [createContainerDecorator("lg")];
Primary.args = {
  showError: false,
};

export const Error = Template.bind({});
Error.decorators = [createContainerDecorator("lg")];
Error.args = {
  showError: true,
};
