<script setup lang="ts">
import CollectionSummaryCard from "./CollectionSummaryCard.vue";
import SummaryList from "../SummaryList.vue";
import type { Collection } from "@blog/frontend/lib/collection";

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
    :columns="{ sm: 2, md: 4 }"
  >
    <CollectionSummaryCard
      v-for="collection in collections"
      :key="collection.name"
      :collection="collection"
    />
  </SummaryList>
</template>
