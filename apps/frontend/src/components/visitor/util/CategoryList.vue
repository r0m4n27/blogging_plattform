<script setup lang="ts">
import { contentSpacingConfig } from "@blog/frontend/config/content/spacing";
import type { Category } from "@blog/frontend/api/category";
import type { PropType } from "vue";
import { flexProps } from "@blog/frontend/styling/props/flexProps";
import CategoryTag from "./CategoryTag.vue";
import VRow from "@blog/frontend/components/base/layout/VRow.vue";
import type { Responsive } from "@blog/frontend/lib/responsive";
import type { Spacing } from "@blog/frontend/styling/spacing";
import type { TagButtonSize } from "@blog/frontend/styling/props/tagButton";

const props = defineProps({
  size: {
    type: [String, Object] as PropType<Responsive<TagButtonSize>>,
    default: "sm",
  },
  categories: {
    required: true,
    type: Array as PropType<Category[]>,
  },
  ...flexProps,
  gap: {
    type: [Number, Object] as PropType<Responsive<Spacing>>,
    default: contentSpacingConfig.xs,
  },
});
</script>

<template>
  <VRow v-bind="props">
    <CategoryTag
      v-for="category in categories"
      :key="category.name"
      :category="category"
      :size="size"
    />
  </VRow>
</template>
