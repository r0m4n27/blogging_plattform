<script setup lang="ts">
import { systemProps } from "@/lib/base/props/systemProps";
import { computed, type PropType } from "vue";
import { cx } from "@emotion/css";
import { createSystemPropsCss } from "@/lib/base/props/systemProps";
import { writeFlexPropsToCss, flexProps } from "@/lib/base/flex";

const props = defineProps({
  direction: {
    type: String as PropType<"row" | "column">,
    required: true,
  },
  ...flexProps,
  ...systemProps,
});

const classes = computed(() =>
  cx(writeFlexPropsToCss(props, props.direction), createSystemPropsCss(props))
);
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>
