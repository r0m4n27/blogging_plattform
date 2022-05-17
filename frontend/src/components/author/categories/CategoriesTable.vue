<script setup lang="ts">
import type { Category } from "@/api/category";
import ActionableTableLayout from "@/components/common/layout/ActionableTableLayout.vue";
import CategoriesTableEntry from "./CategoriesTableEntry.vue";
import VTableHeader from "@/components/base/table/VTableHeader.vue";

interface CategoriesTableProps {
  categories: Category[];
}

interface CategoriesTableEmits {
  (e: "createCategory"): void;
  (e: "renameCategory", category: Category): void;
  (e: "deleteCategory", category: Category): void;
}

defineProps<CategoriesTableProps>();
const emit = defineEmits<CategoriesTableEmits>();
</script>

<template>
  <ActionableTableLayout
    add-button-label="New Category"
    title="Categories"
    @add-button-click="emit('createCategory')"
  >
    <template #head>
      <VTableHeader label="TITLE" width="full" />
      <VTableHeader label="ACTIONS" alignment="center" />
    </template>
    <template #body>
      <CategoriesTableEntry
        v-for="category in categories"
        :key="category.id"
        :category="category"
        @delete-category="(c) => emit('deleteCategory', c)"
        @rename-category="(c) => emit('renameCategory', c)"
      />
    </template>
  </ActionableTableLayout>
</template>
