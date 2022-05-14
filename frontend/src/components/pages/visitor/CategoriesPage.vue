<script setup lang="ts">
import CollectionSummaryList from "@/components/summary/collection/CollectionSummaryList.vue";
import { useCategoriesPageState } from "@/composables/pages/visitor/categoriesPage";

const { categoriesCollections } = useCategoriesPageState();
</script>

<template>
  <CollectionSummaryList
    title="Categories"
    :collections="categoriesCollections"
    show-title-on-desktop
  />
</template>
