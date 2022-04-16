<script setup lang="ts">
import { systemProps } from "@/lib/base/props/systemProps";
import {
  writeResponsivePropToStyle,
  type Responsive,
} from "@/lib/base/responsiveProp";
import { spacingWriter, type Spacing } from "@/lib/base/spacing";
import { css, type CSSObject } from "@emotion/css";
import { computed, type PropType } from "vue";
import { cx } from "@emotion/css";
import { createSystemPropsCss } from "@/lib/base/props/systemProps";
import { flexAlignmentWriter, type FlexAlignment } from "@/lib/base/flex";

const props = defineProps({
  direction: {
    type: String as PropType<"row" | "column">,
    required: true,
  },
  gap: {
    type: Object as PropType<Responsive<Spacing>>,
  },
  align: {
    type: [Object, String] as PropType<Responsive<FlexAlignment>>,
    default: () => "center",
  },
  ...systemProps,
});

const flexClassName = computed(() => {
  const style: CSSObject = {};

  writeResponsivePropToStyle(style, "gridGap", spacingWriter, props.gap);
  style["display"] = "flex";
  style["flexDirection"] = props.direction;
  writeResponsivePropToStyle(
    style,
    "alignItems",
    flexAlignmentWriter,
    props.align
  );

  return css(style);
});
</script>

<template>
  <div :class="cx(flexClassName, createSystemPropsCss(props))">
    <slot />
  </div>
</template>
