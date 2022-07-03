<script setup lang="ts">
import type { Responsive } from "@blog/frontend/lib/responsive";
import {
  type TagButtonSize,
  createTagButtonTextProps,
} from "@blog/frontend/styling/props/tagButton";
import { computed } from "vue";
import VCenter from "@blog/frontend/components/base/layout/VCenter.vue";
import VText from "@blog/frontend/components/base/text/VText.vue";

interface TagButtonContentProps {
  label: string;
  size: Responsive<TagButtonSize>;
}

const props = defineProps<TagButtonContentProps>();

const textProps = computed(() => createTagButtonTextProps(props.size));
</script>
<template>
  <VCenter>
    <VText is="span" weight="medium" v-bind="textProps" width="max">
      {{ label }}
    </VText>
  </VCenter>
</template>
