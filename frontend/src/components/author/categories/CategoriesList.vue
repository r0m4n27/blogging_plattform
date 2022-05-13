<script setup lang="ts">
import CategoriesTable from "./table/CategoriesTable.vue";
import CategoriesListHeader from "./CategoriesListHeader.vue";
import VColumn from "@/components/base/layout/VColumn.vue";
import { defaultContentSpacing } from "@/config/content/spacing";
import type { Category } from "@/api/category";

interface CategoriesListProps {
  categories: Category[];
}

defineProps<CategoriesListProps>();
</script>

<template>
  <VColumn :padding="defaultContentSpacing" :gap="defaultContentSpacing">
    <CategoriesListHeader />

    <CategoriesTable :categories="categories" />
  </VColumn>
</template>
