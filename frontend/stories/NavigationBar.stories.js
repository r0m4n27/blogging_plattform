import NavigationBar from "../src/components/navigationBar/NavigationBar.vue";
import logo from "../src/static/logo_sample.png";
import ProvideTheme from "../src/components/base/ProvideTheme";

export default {
  component: NavigationBar,
};

const Template = (args) => ({
  components: { NavigationBar, ProvideTheme },
  setup() {
    return { args };
  },
  template: `
    <ProvideTheme>
      <NavigationBar v-bind='args'/>
    <ProvideTheme/>
  `,
});

export const Primary = Template.bind({});

Primary.args = {
  title: "My AWESOME Website",
  logoUrl: logo,
};
