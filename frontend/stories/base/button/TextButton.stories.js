import TextButton from "@/components/base/button/TextButton.vue";
import ProvideGlobals from "@/components/ProvideGlobals.vue";
import VTheme from "@/components/base/VTheme.vue";

export default {
  component: TextButton,
};

const Template = (args) => ({
  components: { TextButton, ProvideGlobals, VTheme },
  setup() {
    return { args };
  },
  template: `
    <ProvideGlobals>
      <VTheme>
        <TextButton v-bind="args" />
      </VTheme>
    </ProvideGlobals>
  `,
});

export const Primary = Template.bind({});

Primary.args = {
  label: "Archive",
};
