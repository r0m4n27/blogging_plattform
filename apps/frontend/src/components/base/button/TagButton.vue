<script setup lang="ts">
import VButton from "./VButton.vue";
import { computed } from "vue";
import type { Color } from "@/styling/color";
import {
  type TagButtonSize,
  createTagButtonVButtonProps,
} from "@/styling/props/tagButton";
import type { Responsive } from "@/lib/responsive";
import TagButtonContent from "./TagButtonContent.vue";

interface SummaryTagProps {
  label: string;
  size?: Responsive<TagButtonSize>;
  color?: Responsive<Color>;
}

const props = withDefaults(defineProps<SummaryTagProps>(), {
  size: "sm",
});

const buttonProps = computed(() =>
  createTagButtonVButtonProps(props.size, props.color)
);
</script>

<template>
  <VButton v-bind="buttonProps" :color="color">
    <TagButtonContent :size="size" :label="label" />
  </VButton>
</template>
