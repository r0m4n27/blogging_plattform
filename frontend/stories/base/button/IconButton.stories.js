import IconButton from "@/components/base/button/IconButton.vue";
import ProvideGlobals from "@/components/ProvideGlobals.vue";
import VTheme from "@/components/base/VTheme.vue";
import { Menu, Moon } from "lucide-vue-next";
import { getColor } from "@/config/theme/colors";

export default {
  component: IconButton,
};

const Template = (args) => ({
  components: { IconButton, Menu, Moon, ProvideGlobals, VTheme },
  setup() {
    return { args };
  },
  template: `
  <ProvideGlobals>
    <VTheme>
      <IconButton v-bind='args'/>
    </VTheme>
  </ProvideGlobals>
`,
});

export const Primary = Template.bind({});

Primary.args = {
  icon: Menu,
};

export const Custom = Template.bind({});

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
