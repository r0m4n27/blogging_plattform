import SummaryCard from "@/components/summary/SummaryCard.vue";
import ProvideGlobals from "@/components/ProvideGlobals.vue";
import VRoot from "@/components/base/VRoot.vue";
import VContainer from "../../src/components/base/layout/VContainer.vue";

export default {
  component: SummaryCard,
};

const Template = (args) => ({
  components: { SummaryCard, ProvideGlobals, VRoot, VContainer },
  setup() {
    return { args };
  },
  template: `
    <ProvideGlobals>
      <VRoot>
        <VContainer size="sm">
          <SummaryCard v-bind="args" />
        </VContainer>
      </VRoot>
    </ProvideGlobals>
  `,
});

export const Primary = Template.bind({});

Primary.args = {
  article: {
    title: "Why Next.js is the most AWESOME Framework!",
    summary: `Lorem ipsum dolor sit amet,
    consetetur sadipscing elitr, sed diam nonumy eirmod tempor
    invidunt ut labore et dolore magna aliquyam erat,
    sed diam voluptua.`,
    categories: [{ name: "Javascript" }, { name: "Programming" }],
  },
};
