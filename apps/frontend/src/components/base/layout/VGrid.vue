<script setup lang="ts">
import {
  systemProps,
  createSystemPropsCss,
} from "@blog/frontend/styling/props/systemProps";
import { computed, type PropType } from "vue";
import { cx } from "@emotion/css";
import type { Responsive } from "@blog/frontend/lib/responsive";
import { flexProps, createGridCss } from "@blog/frontend/styling/props/flexProps";

const props = defineProps({
  columns: {
    type: [Number, Object] as PropType<Responsive<number>>,
    required: true,
  },
  ...flexProps,
  ...systemProps,
});

const classes = computed(() =>
  cx(createGridCss(props, props.columns), createSystemPropsCss(props)),
);
</script>

<template>
  <component :is="is" :class="classes">
    <slot />
  </component>
</template>
