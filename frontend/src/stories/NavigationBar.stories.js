import NavigationBar from "@/components/navigationBar/NavigationBar.vue";
import logo from "@/static/logo_sample.png";
import ProvideGlobals from "@/components/ProvideGlobals.vue";
import VRoot from "@/components/base/VRoot.vue";
import vueRouter from "storybook-vue3-router";

export default {
  component: NavigationBar,
};

const Template = (args) => ({
  components: { NavigationBar, ProvideGlobals, VRoot },
  setup() {
    return { args };
  },
  template: `
  <ProvideGlobals>
  <VRoot>
  <NavigationBar v-bind='args'/>
  </VRoot>
</ProvideGlobals>`,
});

export const Primary = Template.bind({});

Primary.args = {
  title: "My AWESOME Website",
  logoUrl: logo,
};
Primary.decorators = [vueRouter()];
