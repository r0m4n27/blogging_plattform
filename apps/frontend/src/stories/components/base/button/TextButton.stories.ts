import TextButton from "@/components/base/button/TextButton.vue";
import { createContainerDecorator } from "@/stories/decorators/containerDecorator";
import type { Meta, StoryFn } from "@storybook/vue3";

export default {
  component: TextButton,
} as Meta<typeof TextButton>;

const Template: StoryFn<typeof TextButton> = (args) => ({
  components: { TextButton },
  setup() {
    return { args };
  },
  template: `<TextButton v-bind="args" />`,
});

export const Primary = Template.bind({});
Primary.decorators = [createContainerDecorator("md")];
Primary.args = {
  label: "Archive",
};
