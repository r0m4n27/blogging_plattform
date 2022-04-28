<script setup lang="ts">
import UserPageLayout from "@/components/layout/UserPageLayout.vue";
import CollectionSummaryList from "@/components/summary/collection/CollectionSummaryList.vue";
import { useCategoriesPageState } from "@/composables/pages/useCategoriesPageState";

const { categoriesCollections } = useCategoriesPageState();
</script>

<template>
  <UserPageLayout>
    <CollectionSummaryList
      title="Categories"
      :collections="categoriesCollections"
      show-title-on-desktop
    />
  </UserPageLayout>
</template>
