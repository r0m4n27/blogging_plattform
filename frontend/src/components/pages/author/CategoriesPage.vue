<script setup lang="ts">
import CategoriesList from "@/components/author/categories/CategoriesList.vue";
import { useCategoriesPageState } from "@/composables/pages/author/categoriesPage";

const { categories } = useCategoriesPageState();
</script>

<template>
  <CategoriesList :categories="categories" />
</template>
