import CategoryTag from "@/components/util/CategoryTag.vue";
import { jsCategory } from "@/stories/data/category";

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
  category: jsCategory,
};
