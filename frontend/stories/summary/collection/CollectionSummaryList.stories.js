import CollectionSummaryList from "@/components/summary/collection/CollectionSummaryList.vue";
import ProvideGlobals from "@/components/ProvideGlobals.vue";
import VRoot from "@/components/base/VRoot.vue";
import VContainer from "@/components/base/layout/VContainer.vue";
import vueRouter from "storybook-vue3-router";

export default {
  component: CollectionSummaryList,
};

const Template = (args) => ({
  components: { CollectionSummaryList, ProvideGlobals, VRoot, VContainer },
  setup() {
    return { args };
  },
  template: `
    <ProvideGlobals>
      <VRoot>
        <VContainer size="lg">
          <CollectionSummaryList v-bind="args" />
        </VContainer>
      </VRoot>
    </ProvideGlobals>
  `,
});

export const Primary = Template.bind({});

const collection = {
  name: "2022",
  articleCount: 10,
  destination: "",
};

Primary.decorators = [vueRouter()];
Primary.args = {
  title: "Archive",
  showTitleOnDesktop: true,
  collections: [...Array(10).keys()].map(() => collection),
};
