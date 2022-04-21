<script setup lang="ts">
import type { Article } from "@/api/article";
import ArticleSummaryCard from "./ArticleSummaryCard.vue";
import SummaryList from "../SummaryList.vue";

interface ArticleSummaryListProps {
  title: string;
  showTitleOnDesktop?: boolean;
  articles: Article[];
}

defineProps<ArticleSummaryListProps>();
</script>

<template>
  <SummaryList
    :title="title"
    :show-title-on-desktop="showTitleOnDesktop"
    :columns="{ sm: 1, md: 2 }"
  >
    <ArticleSummaryCard
      v-for="article in articles"
      :key="article.id"
      :article="article"
    />
  </SummaryList>
</template>
