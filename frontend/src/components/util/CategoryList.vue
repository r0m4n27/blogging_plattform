<script setup lang="ts">
import { contentSpacingConfig } from "@/config/content/spacing";
import type { Category } from "@/api/category";
import type { PropType } from "vue";
import { flexProps } from "@/styling/props/flexProps";
import CategoryTag from "./CategoryTag.vue";
import VRow from "@/components/base/layout/VRow.vue";
import type { Responsive } from "@/lib/responsive";
import type { Spacing } from "@/styling/spacing";
import type { CategoryTagSize } from "@/config/components/categoryTag";

const props = defineProps({
  size: {
    type: [String, Object] as PropType<Responsive<CategoryTagSize>>,
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
