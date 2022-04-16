<script setup lang="ts">
import { systemProps } from "@/lib/base/props/systemProps";
import type { Responsive } from "@/lib/base/responsiveProp";
import type { Spacing } from "@/lib/base/spacing";
import type { PropType } from "vue";
import VStack from "./VStack.vue";

const props = defineProps({
  gap: {
    type: Object as PropType<Responsive<Spacing>>,
  },
  ...systemProps,
});
</script>

<template>
  <VStack direction="column" v-bind="props">
    <slot />
  </VStack>
</template>
