import PageFooter from "@/components/footer/PageFooter.vue";
import {
  createContactLink,
  createLoginLink,
} from "@/config/components/pageFooter";

export default {
  component: PageFooter,
};

const Template = (args) => ({
  components: { PageFooter },
  setup() {
    return { args };
  },
  template: `<PageFooter v-bind="args" />`,
});

export const Primary = Template.bind({});
Primary.args = {
  links: [createContactLink(), createLoginLink()],
};
