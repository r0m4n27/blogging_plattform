import SummaryList from "@/components/summary/SummaryList.vue";
import ProvideGlobals from "@/components/ProvideGlobals.vue";
import VRoot from "@/components/base/VRoot.vue";
import VContainer from "../../src/components/base/layout/VContainer.vue";
import vueRouter from "storybook-vue3-router";

export default {
  component: SummaryList,
};

const Template = (args) => ({
  components: { SummaryList, ProvideGlobals, VRoot, VContainer },
  setup() {
    return { args };
  },
  template: `
    <ProvideGlobals>
      <VRoot>
        <VContainer size="lg">
          <SummaryList v-bind="args" />
        </VContainer>
      </VRoot>
    </ProvideGlobals>
  `,
});

export const Primary = Template.bind({});

const article = {
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
};

Primary.decorators = [vueRouter()];
Primary.args = {
  title: "Latest Articles",
  showTitleOnDesktop: true,
  articles: [...Array(10).keys()].map(() => article),
};
