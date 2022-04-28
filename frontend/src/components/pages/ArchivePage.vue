<script setup lang="ts">
import UserPageLayout from "@/components/layout/UserPageLayout.vue";
import { fetchYears } from "@/api/year";
import CollectionSummaryList from "@/components/summary/collection/CollectionSummaryList.vue";
import { yearToCollection } from "@/lib/collection";
import { useEndpoint } from "@/composables/useEndpoint";
import { computed } from "vue";

const years = useEndpoint(fetchYears, []);
const collections = computed(() => years.value.map(yearToCollection));
</script>

<template>
  <UserPageLayout>
    <CollectionSummaryList
      title="Archive"
      :collections="collections"
      show-title-on-desktop
    />
  </UserPageLayout>
</template>
