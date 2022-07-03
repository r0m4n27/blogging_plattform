import CollectionSummaryList from "@/components/visitor/summary/collection/CollectionSummaryList.vue";
import { createContainerDecorator } from "@/stories/decorators/containerDecorator";
import { mockCollections } from "@/stories/data/collection";
import type { Meta, StoryFn } from "@storybook/vue3";

export default {
  component: CollectionSummaryList,
} as Meta<typeof CollectionSummaryList>;

const Template: StoryFn<typeof CollectionSummaryList> = (args) => ({
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
