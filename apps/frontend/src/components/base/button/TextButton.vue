<script setup lang="ts">
import VButton from "./VButton.vue";
import VText from "../text/VText.vue";
import type { PropType } from "vue";
import { systemProps } from "@/styling/props/systemProps";
import type { Responsive } from "@/lib/responsive";
import type { Spacing } from "@/styling/spacing";

const props = defineProps({
  label: {
    type: String as PropType<string>,
    required: true,
  },
  ...systemProps,
  padding: {
    type: [Object, String, Number] as PropType<Responsive<Spacing>>,
    default: () => ({ x: 4, y: 2 }),
  },
  // Because how vue handles defaults we have to provide the default again
  showBorder: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
});
</script>

<template>
  <VButton v-bind="props">
    <VText as="span" weight="semibold" line-height="6" size="md">
      {{ label }}
    </VText>
  </VButton>
</template>
