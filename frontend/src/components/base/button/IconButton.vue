<script setup lang="ts">
import type { SVGProps } from "lucide-vue-next";
import { computed, type FunctionalComponent } from "vue";
import VButton from "./VButton.vue";
import VBox from "../layout/VBox.vue";
import { colorWriter, type Color } from "@/lib/base/color";
import { css, type CSSObject } from "@emotion/css";
import {
  writeResponsivePropToStyle,
  type Responsive,
} from "@/lib/base/responsiveProp";

// Type extracted from the lucide icon package
export type Icon = (props: SVGProps) => FunctionalComponent<SVGProps>;

interface IconButtonProps {
  icon: Icon;

  fill?: Responsive<Color>;
  color?: Responsive<Color>;
  backgroundColor?: Responsive<Color>;

  // Negate showBorder because of:
  // https://vuejs.org/guide/components/props.html#boolean-casting
  //
  // Needs still to be optional otherwise the compiler gets sometime confused
  dontShowBorder?: boolean;
  borderColor?: Responsive<Color>;
}

const props = defineProps<IconButtonProps>();

const iconClass = computed(() => {
  const iconStyle: CSSObject = {};

  writeResponsivePropToStyle(iconStyle, "fill", colorWriter, props.fill);

  return css(iconStyle);
});
</script>

<template>
  <VButton
    :padding="2"
    :color="color"
    :background-color="backgroundColor"
    :show-border="!dontShowBorder"
    :border-color="borderColor"
  >
    <VBox :width="6" :height="6">
      <component :is="icon" :class="iconClass" />
    </VBox>
  </VButton>
</template>
