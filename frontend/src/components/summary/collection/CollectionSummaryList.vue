<script setup lang="ts">
import CollectionSummaryCard from "./CollectionSummaryCard.vue";
import SummaryList from "../SummaryList.vue";
import type { Collection } from "./collection";

interface ArticleSummaryListProps {
  title: string;
  showTitleOnDesktop?: boolean;
  collections: Collection[];
}

defineProps<ArticleSummaryListProps>();
</script>

<template>
  <SummaryList
    :title="title"
    :show-title-on-desktop="showTitleOnDesktop"
    :columns="{ sm: 1, md: 2 }"
  >
    <CollectionSummaryCard
      v-for="collection in collections"
      :key="collection.name"
      :collection="collection"
    />
  </SummaryList>
</template>
