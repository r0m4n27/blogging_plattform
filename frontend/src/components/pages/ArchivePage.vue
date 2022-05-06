<script setup lang="ts">
import VisitorPageLayout from "@/components/layout/VisitorPageLayout.vue";
import CollectionSummaryList from "@/components/summary/collection/CollectionSummaryList.vue";
import { useArchivePageState } from "@/composables/pages/useArchivePageState";

const { yearsCollections } = useArchivePageState();
</script>

<template>
  <VisitorPageLayout>
    <CollectionSummaryList
      title="Archive"
      :collections="yearsCollections"
      show-title-on-desktop
    />
  </VisitorPageLayout>
</template>
