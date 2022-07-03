import IconButton from "@blog/frontend/components/base/button/IconButton.vue";
import { Menu, Moon } from "lucide-vue-next";
import { getColor } from "@blog/frontend/config/theme/colors";
import type { Meta, StoryFn } from "@storybook/vue3";
import { createContainerDecorator } from "@blog/frontend/stories/decorators/containerDecorator";

export default {
  component: IconButton,
} as Meta<typeof IconButton>;

const Template: StoryFn<typeof IconButton> = (args) => ({
  components: { IconButton, Menu, Moon },
  setup() {
    return { args };
  },
  template: `<IconButton v-bind='args'/>`,
});

export const Primary = Template.bind({});
Primary.decorators = [createContainerDecorator("md")];
Primary.args = {
  icon: Menu,
};

export const Custom = Template.bind({});
Custom.decorators = [createContainerDecorator("md")];
Custom.args = {
  icon: Moon,
  backgroundColor: {
    default: {
      light: getColor("purple", 400),
      dark: getColor("orange", 300),
    },
    hover: {
      light: getColor("purple", 500),
      dark: getColor("orange", 200),
    },
  },
  color: {
    light: getColor("white"),
    dark: getColor("gray", 700),
  },
  fill: {
    light: getColor("white"),
    dark: getColor("gray", 700),
  },
  showBorder: false,
};
