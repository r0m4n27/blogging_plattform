<script setup lang="ts">
import {
  type HeadingSize,
  headingConfig,
} from "@blog/frontend/config/components/heading";
import type { TextElementType } from "@blog/frontend/lib/elementType";
import VText from "./VText.vue";

interface VHeadingProps {
  is: TextElementType;
  size: HeadingSize;
}

const props = defineProps<VHeadingProps>();
</script>

<template>
  <VText :is="is" family="heading" weight="bold" v-bind="headingConfig[props.size]">
    <slot />
  </VText>
</template>
