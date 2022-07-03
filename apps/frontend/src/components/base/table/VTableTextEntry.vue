<script setup lang="ts">
import { contentColorConfig } from "@/config/content/color";
import type { Responsive } from "@/lib/responsive";
import type { Color } from "@/styling/color";
import { systemProps } from "@/styling/props/systemProps";
import { textProps } from "@/styling/props/textProps";
import type { FontSize, FontWeight } from "@/styling/text";
import type { PropType } from "vue";
import VText from "../text/VText.vue";

const props = defineProps({
  label: {
    type: String as PropType<string>,
    required: true,
  },
  ...systemProps,
  ...textProps,
  size: {
    type: [Object, String] as PropType<Responsive<FontSize>>,
    default: "md",
  },
  weight: {
    type: [Object, String] as PropType<Responsive<FontWeight>>,
    default: "medium",
  },
  maxLines: {
    type: [Object, Number] as PropType<Responsive<number>>,
    default: 1,
  },

  color: {
    type: [Object, String] as PropType<Responsive<Color>>,
    default: () => contentColorConfig.mutedFg,
  },
});
</script>

<template>
  <VText v-bind="props">
    {{ label }}
  </VText>
</template>
