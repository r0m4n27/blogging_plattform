<script setup lang="ts">
import type { AuthorCategory } from "@/api/category";
import VColumn from "@/components/base/layout/VColumn.vue";
import { contentColorConfig } from "@/config/content/color";
import { globalContentConfig } from "@/config/content/global";
import VText from "../../../base/text/VText.vue";
import { contentSpacingConfig } from "@/config/content/spacing";

interface CategoriesInputListProps {
  availableCategories: AuthorCategory[];
}

interface CategoriesInputListEmits {
  (e: "selectCategory", category: AuthorCategory): void;
}

defineProps<CategoriesInputListProps>();
const emit = defineEmits<CategoriesInputListEmits>();
</script>
<template>
  <VColumn
    :show-border="true"
    :border-color="contentColorConfig.border"
    border-radius="base"
    width="full"
    :style="{ zIndex: 10, position: 'absolute' }"
    :background-color="globalContentConfig.backgroundColor"
    align="start"
    :padding="{ x: contentSpacingConfig.sm, y: contentSpacingConfig.xs }"
    :gap="contentSpacingConfig.xs"
  >
    <VText
      is="button"
      v-for="category in availableCategories"
      :key="category.id"
      @click="emit('selectCategory', category)"
      :color="contentColorConfig.mutedFgWithHover"
      :size="{ sm: 'md', md: 'lg' }"
      weight="semibold"
    >
      {{ category.name }}
    </VText>
  </VColumn>
</template>
