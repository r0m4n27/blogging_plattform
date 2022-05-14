<script setup lang="ts">
import VBox from "./layout/VBox.vue";
import { getColor } from "@/config/theme/colors";
import type { PropType } from "vue";
import { systemProps } from "@/styling/props/systemProps";
import type { Responsive } from "@/lib/responsive";
import type { Color } from "@/styling/color";
import type { Spacing } from "@/styling/spacing";
import { contentSpacingConfig } from "@/config/content/spacing";
import { globalContentConfig } from "@/config/content/global";

const props = defineProps({
  showModal: {
    type: Boolean as PropType<boolean>,
    required: true,
  },
  modalBackground: {
    type: [Object, String] as PropType<Responsive<Color>>,
    default: () => ({
      light: getColor("blackAlpha", 600),
      dark: getColor("blackAlpha", 600),
    }),
  },
  ...systemProps,
  margin: {
    type: [Object, String, Number] as PropType<Responsive<Spacing>>,
    default: () => ({ x: contentSpacingConfig.sm, y: 20 }),
  },
  backgroundColor: {
    type: [Object, String] as PropType<Responsive<Color>>,
    default: () => globalContentConfig.backgroundColor,
  },
});
</script>

<template>
  <Teleport to="#app">
    <VBox
      width="full"
      height="full"
      class="modal"
      :hidden="!showModal"
      :background-color="modalBackground"
    >
      <VBox v-bind="props">
        <slot />
      </VBox>
    </VBox>
  </Teleport>
</template>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
}
</style>
