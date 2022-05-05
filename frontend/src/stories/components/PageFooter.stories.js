import PageFooter from "@/components/footer/PageFooter.vue";

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
