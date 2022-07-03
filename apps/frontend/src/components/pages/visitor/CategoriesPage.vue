<script setup lang="ts">
import CollectionSummaryList from "@blog/frontend/components/visitor/summary/collection/CollectionSummaryList.vue";
import { useCategoriesPageState } from "@blog/frontend/composables/pages/visitor/categoriesPage";

const { categoriesCollections } = useCategoriesPageState();
</script>

<template>
  <CollectionSummaryList
    title="Categories"
    :collections="categoriesCollections"
    show-title-on-desktop
  />
</template>
