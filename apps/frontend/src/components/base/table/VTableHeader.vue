<script setup lang="ts">
import { systemProps } from "@/styling/props/systemProps";
import { type PropType, computed } from "vue";
import { textProps } from "@/styling/props/textProps";
import { cx } from "@emotion/css";
import { createTextPropsCss } from "@/styling/props/textProps";
import { createSystemPropsCss } from "@/styling/props/systemProps";
import type { Responsive } from "@/lib/responsive";
import type { Alignment, FontSize, FontWeight } from "@/styling/text";
import type { Spacing } from "@/styling/spacing";
import type { Color } from "@/styling/color";
import { contentColorConfig } from "@/config/content/color";
import { contentSpacingConfig } from "@/config/content/spacing";

const props = defineProps({
  label: {
    type: String as PropType<string>,
    required: true,
  },
  ...systemProps,
  ...textProps,

  size: {
    type: [String, Object] as PropType<Responsive<FontSize>>,
    default: "lg",
  },
  weight: {
    type: [Object, String] as PropType<Responsive<FontWeight>>,
    default: "bold",
  },
  alignment: {
    type: [Object, String] as PropType<Responsive<Alignment>>,
    default: "left",
  },
  padding: {
    type: [Object, String, Number] as PropType<Responsive<Spacing>>,
    default: () => ({
      x: contentSpacingConfig.sm,
      y: contentSpacingConfig.xs,
    }),
  },

  color: {
    type: [Object, String] as PropType<Responsive<Color>>,
    default: () => contentColorConfig.mutedFg,
  },
});

const className = computed(() =>
  cx(createTextPropsCss(props), createSystemPropsCss(props))
);
</script>

<template>
  <th :class="className">
    {{ label }}
  </th>
</template>
