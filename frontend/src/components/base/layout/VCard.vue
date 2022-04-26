<script setup lang="ts">
import { systemProps } from "@/styling/props/systemProps";
import type { PropType } from "vue";
import VBox from "./VBox.vue";
import type { Responsive } from "@/lib/responsive";
import type { Color } from "@/styling/color";
import type { BorderRadius, Shadow } from "@/styling/system";
import { contentColorConfig } from "@/config/content/color";

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
