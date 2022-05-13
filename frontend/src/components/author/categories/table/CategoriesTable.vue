<script setup lang="ts">
import CategoriesTableHead from "./CategoriesTableHead.vue";
import VCard from "../../../base/layout/VCard.vue";
import VTable from "../../../base/table/VTable.vue";
import VTableBody from "../../../base/table/VTableBody.vue";
import type { Category } from "@/api/category";
import CategoriesTableEntry from "./CategoriesTableEntry.vue";

interface CategoriesListProps {
  categories: Category[];
}

defineProps<CategoriesListProps>();
</script>
<template>
  <VCard :padding="3" width="full">
    <VTable width="full">
      <CategoriesTableHead />

      <VTableBody>
        <CategoriesTableEntry
          v-for="category in categories"
          :key="category.id"
          :category="category"
        />
      </VTableBody>
    </VTable>
  </VCard>
</template>
