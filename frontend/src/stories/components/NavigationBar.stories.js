import NavigationBar from "@/components/navigationBar/NavigationBar.vue";
import { createVisitorNavBarDestinations } from "@/config/components/navigationBar";

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
  logoUrl: "/logo_sample.png",
  destinations: createVisitorNavBarDestinations(),
};
