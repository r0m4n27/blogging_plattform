import PageFooter from "@blog/frontend/components/common/footer/PageFooter.vue";
import { contactLink, loginLink } from "@blog/frontend/config/components/pageFooter";
import type { Meta, StoryFn } from "@storybook/vue3";

export default {
  component: PageFooter,
  title: "frontend/common/PageFooter",
} as Meta<typeof PageFooter>;

const Template: StoryFn<typeof PageFooter> = (args) => ({
  components: { PageFooter },
  setup() {
    return { args };
  },
  template: `<PageFooter v-bind="args" />`,
});

export const Primary = Template.bind({});
Primary.args = {
  links: [contactLink, loginLink],
};
