import TextButton from "@/components/base/button/TextButton.vue";
import ProvideGlobals from "@/components/ProvideGlobals.vue";
import VRoot from "@/components/base/VRoot.vue";

export default {
  component: TextButton,
};

const Template = (args) => ({
  components: { TextButton, ProvideGlobals, VRoot },
  setup() {
    return { args };
  },
  template: `
    <ProvideGlobals>
      <VRoot>
        <TextButton v-bind="args" />
      </VRoot>
    </ProvideGlobals>
  `,
});

export const Primary = Template.bind({});

Primary.args = {
  label: "Archive",
};
