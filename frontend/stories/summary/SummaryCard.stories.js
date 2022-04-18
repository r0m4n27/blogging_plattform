import SummaryCard from "@/components/summary/SummaryCard.vue";
import ProvideGlobals from "@/components/ProvideGlobals.vue";
import VRoot from "@/components/base/VRoot.vue";
import VContainer from "../../src/components/base/layout/VContainer.vue";
import vueRouter from "storybook-vue3-router";

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

Primary.decorators = [vueRouter()];
Primary.args = {
  article: {
    id: "1",
    title: "Why Next.js is the most AWESOME Framework!",
    summary: `Lorem ipsum dolor sit amet,
    consetetur sadipscing elitr, sed diam nonumy eirmod tempor
    invidunt ut labore et dolore magna aliquyam erat,
    sed diam voluptua.`,
    categories: [
      { name: "Javascript", id: "1" },
      { name: "Programming", id: "2" },
    ],
  },
};
