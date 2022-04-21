import CollectionSummaryList from "@/components/summary/collection/CollectionSummaryList.vue";
import { createContainerDecorator } from "../../decorators/ containerDecorator";

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

const collection = {
  name: "2022",
  articleCount: 10,
  destination: "",
};

Primary.decorators = [createContainerDecorator("lg")];
Primary.args = {
  title: "Archive",
  showTitleOnDesktop: true,
  collections: [...Array(10).keys()].map(() => collection),
};
