import SettingsList from "@/components/common/settings/SettingsList.vue";
import { createContainerDecorator } from "@/stories/decorators/containerDecorator";

export default {
  component: SettingsList,
};

const Template = (args) => ({
  components: { SettingsList },
  setup() {
    return { args };
  },
  template: `<SettingsList v-bind='args'/>`,
});

export const Primary = Template.bind({});
Primary.decorators = [createContainerDecorator("lg")];

export const Updated = Template.bind({});
Updated.decorators = [createContainerDecorator("lg")];
Updated.args = {
  passwordUpdated: true,
};
