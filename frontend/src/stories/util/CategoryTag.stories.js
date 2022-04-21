import CategoryTag from "@/components/util/CategoryTag.vue";

export default {
  component: CategoryTag,
};

const Template = (args) => ({
  components: { CategoryTag },
  setup() {
    return { args };
  },
  template: `<CategoryTag v-bind="args" />`,
});

export const Primary = Template.bind({});

Primary.args = {
  category: {
    name: "Programming",
    id: "1",
  },
};
