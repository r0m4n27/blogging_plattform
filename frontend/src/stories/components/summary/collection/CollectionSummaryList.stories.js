import CollectionSummaryList from "@/components/summary/collection/CollectionSummaryList.vue";
import { createContainerDecorator } from "@/stories/decorators/containerDecorator";
import { mockCollections } from "../../../data/collection";

export default {
  component: CollectionSummaryList,
};

const Template = (args) => ({
  components: { CollectionSummaryList },
  setup() {
    return { args };
  },
  template: `<CollectionSummaryList v-bind="args" />`,
});

export const Primary = Template.bind({});

Primary.decorators = [createContainerDecorator("lg")];
Primary.args = {
  title: "Archive",
  showTitleOnDesktop: true,
  collections: mockCollections,
};
