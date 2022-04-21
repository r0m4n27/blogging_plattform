import ArticleSummaryList from "@/components/summary/article/ArticleSummaryList.vue";
import ProvideGlobals from "@/components/ProvideGlobals.vue";
import VRoot from "@/components/base/VRoot.vue";
import VContainer from "@/components/base/layout/VContainer.vue";
import vueRouter from "storybook-vue3-router";

export default {
  component: ArticleSummaryList,
};

const Template = (args) => ({
  components: { ArticleSummaryList, ProvideGlobals, VRoot, VContainer },
  setup() {
    return { args };
  },
  template: `
    <ProvideGlobals>
      <VRoot>
        <VContainer size="lg">
          <ArticleSummaryList v-bind="args" />
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
