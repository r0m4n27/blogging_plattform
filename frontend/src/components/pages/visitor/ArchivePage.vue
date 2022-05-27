<script setup lang="ts">
import CollectionSummaryList from "@/components/visitor/summary/collection/CollectionSummaryList.vue";
import { useArchivePageState } from "@/composables/pages/visitor/archivePage";

const { yearsCollections } = useArchivePageState();
</script>

<template>
  <CollectionSummaryList
    title="Archive"
    :collections="yearsCollections"
    show-title-on-desktop
  />
</template>
