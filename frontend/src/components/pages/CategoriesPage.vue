<script setup lang="ts">
import UserPageLayout from "@/components/layout/UserPageLayout.vue";
import { fetchCategories } from "@/api/category";
import CollectionSummaryList from "@/components/summary/collection/CollectionSummaryList.vue";
import { categoryToCollection } from "@/lib/collection";
import { useEndpoint } from "@/composables/useEndpoint";
import { computed } from "vue";

const categories = useEndpoint(fetchCategories, []);
const collections = computed(() => categories.value.map(categoryToCollection));
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
