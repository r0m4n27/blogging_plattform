<script setup lang="ts">
import { systemProps } from "@blog/frontend/styling/props/systemProps";
import type { PropType } from "vue";
import VBox from "./VBox.vue";
import type { Responsive } from "@blog/frontend/lib/responsive";
import type { Color } from "@blog/frontend/styling/color";
import type { BorderRadius, Shadow } from "@blog/frontend/styling/system";
import { contentColorConfig } from "@blog/frontend/config/content/color";

const props = defineProps({
  ...systemProps,
  showBorder: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
  borderRadius: {
    type: [Object, String] as PropType<Responsive<BorderRadius>>,
    default: "lg",
  },
  borderColor: {
    type: [Object, String] as PropType<Responsive<Color>>,
    default: () => contentColorConfig.border,
  },
  shadow: {
    type: [Object, String] as PropType<Responsive<Shadow>>,
    default: "base",
  },
});
</script>

<template>
  <VBox v-bind="props">
    <slot />
  </VBox>
</template>
