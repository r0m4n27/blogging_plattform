<script setup lang="ts">
import type { Responsive } from "@blog/frontend/lib/responsive";
import { systemProps } from "@blog/frontend/styling/props/systemProps";
import type { Spacing } from "@blog/frontend/styling/spacing";
import type { PropType } from "vue";
import VBox from "../layout/VBox.vue";
import { contentSpacingConfig } from "@blog/frontend/config/content/spacing";

const props = defineProps({
  ...systemProps,
  padding: {
    type: [Object, String, Number] as PropType<Responsive<Spacing>>,
    default: () => ({
      x: contentSpacingConfig.sm,
      y: contentSpacingConfig.xs,
    }),
  },
});
</script>

<template>
  <VBox v-bind="props" is="td">
    <slot />
  </VBox>
</template>
