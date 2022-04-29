<script setup lang="ts">
import { systemProps, createSystemPropsCss } from "@/styling/props/systemProps";
import { computed, type PropType } from "vue";
import { cx } from "@emotion/css";
import { flexProps, createFlexCss } from "@/styling/props/flexProps";

const props = defineProps({
  direction: {
    type: String as PropType<"row" | "column">,
    required: true,
  },
  ...flexProps,
  ...systemProps,
});

const classes = computed(() =>
  cx(createFlexCss(props, props.direction), createSystemPropsCss(props))
);
</script>

<template>
  <component :is="is" :class="classes">
    <slot />
  </component>
</template>
