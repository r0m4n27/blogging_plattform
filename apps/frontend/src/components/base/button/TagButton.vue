<script setup lang="ts">
import VButton from "./VButton.vue";
import { computed } from "vue";
import type { Color } from "@blog/frontend/styling/color";
import {
  type TagButtonSize,
  createTagButtonVButtonProps,
} from "@blog/frontend/styling/props/tagButton";
import type { Responsive } from "@blog/frontend/lib/responsive";
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
  createTagButtonVButtonProps(props.size, props.color),
);
</script>

<template>
  <VButton v-bind="buttonProps" :color="color">
    <TagButtonContent :size="size" :label="label" />
  </VButton>
</template>
