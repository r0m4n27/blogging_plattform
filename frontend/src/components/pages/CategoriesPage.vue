<script setup lang="ts">
import UserPageLayout from "@/components/layout/UserPageLayout.vue";
import { mockCategories } from "@/api/category";
import CollectionSummaryList from "@/components/summary/collection/CollectionSummaryList.vue";
import { categoryToCollection } from "@/lib/collection";

const collections = mockCategories.map(categoryToCollection);
</script>

<template>
  <UserPageLayout>
    <CollectionSummaryList
      title="Categories"
      :collections="collections"
      show-title-on-desktop
    />
  </UserPageLayout>
</template>
