<script setup lang="ts">
import {
  systemProps,
  type BorderRadius,
  type Shadow,
} from "@/lib/base/props/systemProps";
import type { PropType } from "vue";
import VBox from "./VBox.vue";
import type { Responsive } from "@/lib/base/responsiveProp";
import type { Color } from "@/lib/base/color";
import { getColor } from "@/config/theme/colors";

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
    default: () => ({
      light: getColor("gray", 200),
      dark: getColor("whiteAlpha", 300),
    }),
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
