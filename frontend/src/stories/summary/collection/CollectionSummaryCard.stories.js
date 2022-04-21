import CollectionSummaryCard from "@/components/summary/collection/CollectionSummaryCard.vue";
import ProvideGlobals from "@/components/ProvideGlobals.vue";
import VRoot from "@/components/base/VRoot.vue";
import VContainer from "@/components/base/layout/VContainer.vue";
import vueRouter from "storybook-vue3-router";

export default {
  component: CollectionSummaryCard,
};

const Template = (args) => ({
  components: { CollectionSummaryCard, ProvideGlobals, VRoot, VContainer },
  setup() {
    return { args };
  },
  template: `
    <ProvideGlobals>
      <VRoot>
        <VContainer size="sm">
          <CollectionSummaryCard v-bind="args" />
        </VContainer>
      </VRoot>
    </ProvideGlobals>
  `,
});

export const Primary = Template.bind({});

Primary.decorators = [vueRouter()];
Primary.args = {
  collection: {
    name: "2022",
    articleCount: 10,
    destination: "",
  },
};
