import Button from "../../src/components/base/Button.vue";

export default {
  component: Button,
};

const Template = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args" />',
});

export const Primary = Template.bind({});

Primary.args = {
  label: "Archive",
  onClick: () => ({}),
};
