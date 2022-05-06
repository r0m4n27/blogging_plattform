<script setup lang="ts">
import VisitorPageLayout from "@/components/layout/VisitorPageLayout.vue";
import CollectionSummaryList from "@/components/summary/collection/CollectionSummaryList.vue";
import { useCategoriesPageState } from "@/composables/pages/useCategoriesPageState";

const { categoriesCollections } = useCategoriesPageState();
</script>

<template>
  <VisitorPageLayout>
    <CollectionSummaryList
      title="Categories"
      :collections="categoriesCollections"
      show-title-on-desktop
    />
  </VisitorPageLayout>
</template>
