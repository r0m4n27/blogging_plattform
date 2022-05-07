<script setup lang="ts">
import VisitorPageLayout from "../layout/VisitorPageLayout.vue";
import CollectionSummaryList from "@/components/summary/collection/CollectionSummaryList.vue";
import { useArchivePageState } from "@/composables/pages/visitor/archivePage";

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
