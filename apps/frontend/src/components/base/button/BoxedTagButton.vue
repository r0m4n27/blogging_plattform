<script setup lang="ts">
import { computed } from "vue";
import type { Color } from "@/styling/color";
import {
  type TagButtonSize,
  createTagButtonVBoxProps,
} from "@/styling/props/tagButton";
import type { Responsive } from "@/lib/responsive";
import TagButtonContent from "./TagButtonContent.vue";
import type { ElementType } from "@/lib/elementType";
import VCenter from "../layout/VCenter.vue";

interface SummaryTagProps {
  label: string;
  size?: Responsive<TagButtonSize>;
  color?: Responsive<Color>;
  is?: ElementType;
}

const props = withDefaults(defineProps<SummaryTagProps>(), {
  size: "sm",
  is: "div",
});

const boxProps = computed(() =>
  createTagButtonVBoxProps(props.size, props.is, props.color)
);
</script>

<template>
  <VCenter v-bind="boxProps">
    <TagButtonContent :size="size" :label="label" />
  </VCenter>
</template>
