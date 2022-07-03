import CollectionSummaryCard from "@blog/frontend/components/visitor/summary/collection/CollectionSummaryCard.vue";
import { createContainerDecorator } from "@blog/frontend/stories/decorators/containerDecorator";
import { mockCollection } from "@blog/frontend/stories/data/collection";
import type { Meta, StoryFn } from "@storybook/vue3";

export default {
  component: CollectionSummaryCard,
  title: "frontend/visitor/summary/collection/CollectionSummaryCard",
} as Meta<typeof CollectionSummaryCard>;

const Template: StoryFn<typeof CollectionSummaryCard> = (args) => ({
  components: { CollectionSummaryCard },
  setup() {
    return { args };
  },
  template: `<CollectionSummaryCard v-bind="args" />`,
});

export const Primary = Template.bind({});

Primary.decorators = [createContainerDecorator("sm")];
Primary.args = {
  collection: mockCollection,
};
