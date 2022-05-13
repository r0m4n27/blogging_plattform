<script setup lang="ts">
import type { Category } from "@/api/category";
import ActionableTableLayout from "../../layout/ActionableTableLayout.vue";
import CategoriesTableEntry from "./CategoriesTableEntry.vue";
import VTableHeader from "@/components/base/table/VTableHeader.vue";

interface CategoriesListProps {
  categories: Category[];
}

defineProps<CategoriesListProps>();
</script>

<template>
  <ActionableTableLayout add-button-label="New Category" title="Categories">
    <template #head>
      <VTableHeader label="TITLE" width="full" />
      <VTableHeader label="ACTIONS" alignment="center" />
    </template>
    <template #body>
      <CategoriesTableEntry
        v-for="category in categories"
        :key="category.id"
        :category="category"
      />
    </template>
  </ActionableTableLayout>
</template>
