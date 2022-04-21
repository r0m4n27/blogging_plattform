import TextButton from "@/components/base/button/TextButton.vue";

export default {
  component: TextButton,
};

const Template = (args) => ({
  components: { TextButton },
  setup() {
    return { args };
  },
  template: `<TextButton v-bind="args" />`,
});

export const Primary = Template.bind({});

Primary.args = {
  label: "Archive",
};
