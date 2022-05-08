<script setup lang="ts">
import ArticlesListHeader from "./ArticlesListHeader.vue";
import VColumn from "@/components/base/layout/VColumn.vue";
import { defaultContentSpacing } from "@/config/content/spacing";
import type { AuthorArticle } from "@/api/article";
import ArticlesTable from "./table/ArticlesTable.vue";

interface ArticlesListProps {
  articles: AuthorArticle[];
}

defineProps<ArticlesListProps>();
</script>

<template>
  <VColumn :padding="defaultContentSpacing" :gap="defaultContentSpacing">
    <ArticlesListHeader />
    <ArticlesTable :articles="articles" />
  </VColumn>
</template>
