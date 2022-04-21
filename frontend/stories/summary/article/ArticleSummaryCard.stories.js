import ArticleSummaryCard from "@/components/summary/article/ArticleSummaryCard.vue";
import ProvideGlobals from "@/components/ProvideGlobals.vue";
import VRoot from "@/components/base/VRoot.vue";
import VContainer from "@/components/base/layout/VContainer.vue";
import vueRouter from "storybook-vue3-router";

export default {
  component: ArticleSummaryCard,
};

const Template = (args) => ({
  components: { ArticleSummaryCard, ProvideGlobals, VRoot, VContainer },
  setup() {
    return { args };
  },
  template: `
    <ProvideGlobals>
      <VRoot>
        <VContainer size="sm">
          <ArticleSummaryCard v-bind="args" />
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
