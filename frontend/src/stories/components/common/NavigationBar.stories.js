import NavigationBar from "@/components/common/navigationBar/NavigationBar.vue";
import { visitorNavBarDestinations } from "@/config/components/navigationBar";
import { logoBase64 } from "@/stories/data/navigationBar";

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
  logoUrl: logoBase64,
  destinations: visitorNavBarDestinations,
  headingDestination: "",
};
