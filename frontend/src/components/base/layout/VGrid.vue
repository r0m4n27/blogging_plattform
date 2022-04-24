<script setup lang="ts">
import { systemProps, createSystemPropsCss } from "@/styling/props/systemProps";
import { computed, type PropType } from "vue";
import { cx } from "@emotion/css";
import { createGridCss, flexProps } from "@/styling/flex";
import type { Responsive } from "@/styling/responsiveProp";

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
