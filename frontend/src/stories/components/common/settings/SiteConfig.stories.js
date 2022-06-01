import SiteConfigSettings from "@/components/common/settings/SiteConfigSettings.vue";
import { createContainerDecorator } from "@/stories/decorators/containerDecorator";

export default {
  component: SiteConfigSettings,
};

const Template = (args) => ({
  components: { SiteConfigSettings },
  setup() {
    return { args };
  },
  template: `<SiteConfigSettings v-bind='args'/>`,
});

export const Primary = Template.bind({});
Primary.decorators = [createContainerDecorator("lg")];
Primary.args = {
  showSuccess: false,
  error: undefined,
  initialTitle: "",
  isInitialized: true,
};

export const Updated = Template.bind({});
Updated.decorators = [createContainerDecorator("lg")];
Updated.args = {
  showSuccess: true,
  error: undefined,
  initialTitle: "",
  isInitialized: true,
};

export const Error = Template.bind({});
Error.decorators = [createContainerDecorator("lg")];
Error.args = {
  showSuccess: false,
  error: "Can't create Site Config",
  initialTitle: "",
  isInitialized: true,
};

export const Uninitialized = Template.bind({});
Uninitialized.decorators = [createContainerDecorator("lg")];
Uninitialized.args = {
  showSuccess: false,
  error: undefined,
  initialTitle: "",
  isInitialized: false,
};
