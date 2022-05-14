<script setup lang="ts">
import VHeading from "@/components/base/text/VHeading.vue";
import VColumn from "@/components/base/layout/VColumn.vue";
import VRow from "@/components/base/layout/VRow.vue";
import TagButton from "@/components/base/button/TagButton.vue";
import { contentSpacingConfig } from "@/config/content/spacing";
import type { Category } from "@/api/category";
import VCard from "../../base/layout/VCard.vue";

interface CategoriesListProps {
  categories: Category[];
}
defineProps<CategoriesListProps>();
</script>

<template>
  <VColumn :gap="contentSpacingConfig.xs" align="start" width="full">
    <VHeading is="h2" size="sm"> Categories </VHeading>

    <VCard
      :padding="{ x: contentSpacingConfig.sm, y: contentSpacingConfig.xs }"
      width="full"
      shadow="none"
      border-radius="base"
      :height="{ sm: 10, md: 14 }"
    >
      <VRow
        :gap="{ sm: contentSpacingConfig.xs, md: contentSpacingConfig.sm }"
        width="full"
        height="full"
        align="center"
      >
        <TagButton
          v-for="category in categories"
          :key="category.id"
          :style="{ pointerEvents: 'none' }"
          :label="category.name"
          :size="{ sm: 'sm', md: 'md' }"
        />
      </VRow>
    </VCard>
  </VColumn>
</template>
