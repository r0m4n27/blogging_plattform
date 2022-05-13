<script setup lang="ts">
import CategoriesTable from "@/components/author/categories/CategoriesTable.vue";
import { useCategoriesPageState } from "@/composables/pages/author/categoriesPage";

const { categories } = useCategoriesPageState();
</script>

<template>
  <CategoriesTable :categories="categories" />
</template>
