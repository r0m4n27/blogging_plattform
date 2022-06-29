import TagButton from "@/components/base/button/TagButton.vue";
import { createContainerDecorator } from "@/stories/decorators/containerDecorator";
import type { Meta, StoryFn } from "@storybook/vue3";

export default {
  component: TagButton,
} as Meta<typeof TagButton>;

const Template: StoryFn<typeof TagButton> = (args) => ({
  components: { TagButton },
  setup() {
    return { args };
  },
  template: `<TagButton v-bind="args" />`,
});

export const Small = Template.bind({});
Small.decorators = [createContainerDecorator("md")];
Small.args = {
  label: "Archive",
  size: "sm",
};

export const Medium = Template.bind({});
Medium.decorators = [createContainerDecorator("md")];
Medium.args = {
  label: "Archive",
  size: "md",
};
