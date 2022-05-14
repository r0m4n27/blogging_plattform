import TagButton from "@/components/base/button/TagButton.vue";

export default {
  component: TagButton,
};

const Template = (args) => ({
  components: { TagButton },
  setup() {
    return { args };
  },
  template: `<TagButton v-bind="args" />`,
});

export const Small = Template.bind({});

Small.args = {
  label: "Archive",
  size: "sm",
};

export const Medium = Template.bind({});

Medium.args = {
  label: "Archive",
  size: "md",
};
