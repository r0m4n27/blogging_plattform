import CollectionSummaryCard from "@/components/summary/collection/CollectionSummaryCard.vue";
import { createContainerDecorator } from "@/stories/decorators/containerDecorator";

export default {
  component: CollectionSummaryCard,
};

const Template = (args) => ({
  components: { CollectionSummaryCard },
  setup() {
    return { args };
  },
  template: `<CollectionSummaryCard v-bind="args" />`,
});

export const Primary = Template.bind({});

Primary.decorators = [createContainerDecorator("sm")];
Primary.args = {
  collection: {
    name: "2022",
    articleCount: 10,
    destination: "",
  },
};
