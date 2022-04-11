import IconButton from "../../src/components/base/IconButton.vue";
import { Menu } from "lucide-vue-next";

export default {
  component: IconButton,
};

const Template = (args) => ({
  components: { IconButton, Menu },
  setup() {
    return { args };
  },
  template: "<IconButton v-bind='args'/>",
});

export const Primary = Template.bind({});

Primary.args = {
  onClick: () => ({}),
  icon: Menu,
};

export const Custom = Template.bind({});

Custom.args = {
  onClick: () => ({}),
  icon: Menu,
  buttonClasses: [
    "bg-violet-400",
    "dark:bg-orange-300",
    "hover:bg-violet-500",
    "dark:hover:bg-orange-200",
  ],
  iconClasses: [
    "text-white",
    "fill-white",
    "dark:text-gray-700",
    "dark:fill-gray-700",
  ],
  dontShowBorder: true,
};
