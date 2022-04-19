<script setup lang="ts">
import { systemProps } from "@/lib/base/props/systemProps";
import { computed, type PropType } from "vue";
import { cx } from "@emotion/css";
import { createSystemPropsCss } from "@/lib/base/props/systemProps";
import { createGridCss, flexProps } from "@/lib/base/flex";
import type { Responsive } from "@/lib/base/responsiveProp";

const props = defineProps({
  columns: {
    type: [Number, Object] as PropType<Responsive<number>>,
    required: true,
  },
  ...flexProps,
  ...systemProps,
});

const classes = computed(() =>
  cx(createGridCss(props, props.columns), createSystemPropsCss(props))
);
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>
