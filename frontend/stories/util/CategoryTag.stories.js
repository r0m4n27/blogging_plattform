import CategoryTag from "@/components/util/CategoryTag.vue";
import ProvideGlobals from "@/components/ProvideGlobals.vue";
import VRoot from "@/components/base/VRoot.vue";
import vueRouter from "storybook-vue3-router";

export default {
  component: CategoryTag,
};

const Template = (args) => ({
  components: { CategoryTag, ProvideGlobals, VRoot },
  setup() {
    return { args };
  },
  template: `
    <ProvideGlobals>
      <VRoot>
        <CategoryTag v-bind="args" />
      </VRoot>
    </ProvideGlobals>
  `,
});

export const Primary = Template.bind({});

Primary.decorators = [vueRouter()];
Primary.args = {
  category: {
    name: "Programming",
    id: "1",
  },
};
