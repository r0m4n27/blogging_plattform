<script setup lang="ts">
import UserPageLayout from "@/components/layout/UserPageLayout.vue";
import { mockYears } from "@/api/year";
import CollectionSummaryList from "@/components/summary/collection/CollectionSummaryList.vue";
import { yearToCollection } from "@/lib/collection";

const collections = mockYears.map(yearToCollection);
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
