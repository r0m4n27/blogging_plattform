import LoginCard from "@/components/visitor/auth/LoginCard.vue";
import { createContainerDecorator } from "@/stories/decorators/containerDecorator";

export default {
  component: LoginCard,
};

const Template = (args) => ({
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
