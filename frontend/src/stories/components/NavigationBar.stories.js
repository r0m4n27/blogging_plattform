import NavigationBar from "@/components/navigationBar/NavigationBar.vue";
import logo from "@/static/logo_sample.png";

export default {
  component: NavigationBar,
};

const Template = (args) => ({
  components: { NavigationBar },
  setup() {
    return { args };
  },
  template: `<NavigationBar v-bind='args'/>`,
});

export const Primary = Template.bind({});

Primary.args = {
  title: "My AWESOME Website",
  logoUrl: logo,
};
