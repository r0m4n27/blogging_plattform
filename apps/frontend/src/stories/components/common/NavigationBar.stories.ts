import NavigationBar from "@blog/frontend/components/common/navigationBar/NavigationBar.vue";
import { visitorNavBarDestinations } from "@blog/frontend/config/components/navigationBar";
import { logoBase64 } from "@blog/frontend/stories/data/navigationBar";
import type { Meta, StoryFn } from "@storybook/vue3";

export default {
  component: NavigationBar,
  title: "frontend/common/NavigationBar",
} as Meta<typeof NavigationBar>;

const Template: StoryFn<typeof NavigationBar> = (args) => ({
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
