import PageFooter from "@/components/common/footer/PageFooter.vue";
import { contactLink, loginLink } from "@/config/components/pageFooter";
import type { Meta, StoryFn } from "@storybook/vue3";

export default {
  component: PageFooter,
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
