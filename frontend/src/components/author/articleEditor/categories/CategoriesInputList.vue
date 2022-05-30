<script setup lang="ts">
import type { AuthorCategory } from "@/api/category";
import VColumn from "@/components/base/layout/VColumn.vue";
import { contentColorConfig } from "@/config/content/color";
import { globalContentConfig } from "@/config/content/global";
import VText from "../../../base/text/VText.vue";
import { contentSpacingConfig } from "@/config/content/spacing";
import VBox from "../../../base/layout/VBox.vue";

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
    v-if="availableCategories.length !== 0"
    :show-border="true"
    :border-color="contentColorConfig.border"
    border-radius="base"
    width="full"
    :style="{ zIndex: 10, position: 'absolute' }"
    :background-color="globalContentConfig.backgroundColor"
    align="start"
    :gap="contentSpacingConfig.xs"
    :padding="{ x: contentSpacingConfig.sm, y: contentSpacingConfig.xs }"
  >
    <VBox
      v-for="category in availableCategories"
      :key="category.id"
      width="full"
      @click="emit('selectCategory', category)"
      is="button"
    >
      <VText
        :color="contentColorConfig.mutedFgWithHover"
        :size="{ sm: 'md', md: 'lg' }"
        weight="semibold"
        width="full"
        align="start"
        :style="{ display: 'block' }"
      >
        {{ category.name }}
      </VText>
    </VBox>
  </VColumn>
</template>
