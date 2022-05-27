import RegisterCard from "@/components/visitor/auth/RegisterCard.vue";
import { createContainerDecorator } from "@/stories/decorators/containerDecorator";

export default {
  component: RegisterCard,
};

const Template = (args) => ({
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
