<script setup lang="ts">
import UserPageLayout from "@/components/layout/UserPageLayout.vue";
import CollectionSummaryList from "@/components/summary/collection/CollectionSummaryList.vue";
import { useArchivePageState } from "@/composables/pages/useArchivePageState";

const { yearsCollections } = useArchivePageState();
</script>

<template>
  <UserPageLayout>
    <CollectionSummaryList
      title="Archive"
      :collections="yearsCollections"
      show-title-on-desktop
    />
  </UserPageLayout>
</template>
