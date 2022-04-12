import VButton from "../../src/components/base/VButton.vue";

export default {
  component: VButton,
};

const Template = (args) => ({
  components: { VButton },
  setup() {
    return { args };
  },
  template: '<VButton v-bind="args" />',
});

export const Primary = Template.bind({});

Primary.args = {
  label: "Archive",
  onClick: () => ({}),
};
