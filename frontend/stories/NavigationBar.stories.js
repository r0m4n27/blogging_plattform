import NavigationBar from "../src/components/navigationBar/NavigationBar.vue";
import logo from "../src/static/logo_sample.png";
import ProvideGlobals from "@/components/ProvideGlobals.vue";
import VTheme from "@/components/base/VTheme.vue";

export default {
  component: NavigationBar,
};

const Template = (args) => ({
  components: { NavigationBar, ProvideGlobals, VTheme },
  setup() {
    return { args };
  },
  template: `
  <ProvideGlobals>
  <VTheme>
  <NavigationBar v-bind='args'/>
  </VTheme>
</ProvideGlobals>`,
});

export const Primary = Template.bind({});

Primary.args = {
  title: "My AWESOME Website",
  logoUrl: logo,
};
