<script setup lang="ts">
import type { SVGProps } from "lucide-vue-next";
import { computed, type FunctionalComponent, type PropType } from "vue";
import VButton from "./VButton.vue";
import VBox from "../layout/VBox.vue";
import { colorWriter, type Color } from "@/styling/color";
import { css, type CSSObject } from "@emotion/css";
import {
  writeResponsivePropToStyle,
  type Responsive,
} from "@/styling/responsive";
import { systemProps } from "@/styling/props/systemProps";
import type { Spacing } from "@/styling/spacing";

// Type extracted from the lucide icon package
export type Icon = (props: SVGProps) => FunctionalComponent<SVGProps>;

const props = defineProps({
  icon: { type: Function as PropType<Icon>, required: true },
  fill: { type: [Object, String] as PropType<Responsive<Color>> },
  ...systemProps,
  padding: {
    type: [Object, String, Number] as PropType<Responsive<Spacing>>,
    default: () => 2,
  },

  showBorder: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
} as const);

const iconClass = computed(() => {
  const iconStyle: CSSObject = {};

  writeResponsivePropToStyle(iconStyle, "fill", colorWriter, props.fill);

  return css(iconStyle);
});
</script>

<template>
  <VButton v-bind="props">
    <VBox :width="6" :height="6">
      <component :is="icon" :class="iconClass" />
    </VBox>
  </VButton>
</template>
