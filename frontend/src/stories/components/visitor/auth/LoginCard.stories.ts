import LoginCard from "@/components/visitor/auth/LoginCard.vue";
import { createContainerDecorator } from "@/stories/decorators/containerDecorator";
import type { Meta, StoryFn } from "@storybook/vue3";

export default {
  component: LoginCard,
} as Meta<typeof LoginCard>;

const Template: StoryFn<typeof LoginCard> = (args) => ({
  components: { LoginCard },
  setup() {
    return { args };
  },
  template: `<LoginCard v-bind='args'/>`,
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
