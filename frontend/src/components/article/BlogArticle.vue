<script setup lang="ts">
import VColumn from "@/components/base/layout/VColumn.vue";
import type { Article } from "@/api/article";
import VHeading from "../base/text/VHeading.vue";
import VRow from "../base/layout/VRow.vue";
import CategoryTag from "../util/CategoryTag.vue";
import ArticleContent from "./ArticleContent.vue";

interface BlogArticleProps {
  article: Article;
}

defineProps<BlogArticleProps>();
</script>

<template>
  <VColumn :padding="{ sm: 4, md: 6 }" :gap="{ sm: 4, md: 6 }" align="start">
    <VHeading as="h1" size="xl">
      {{ article.title }}
    </VHeading>

    <VRow :gap="3">
      <CategoryTag
        v-for="category in article.categories"
        :key="category.name"
        :category="category"
      />
    </VRow>

    <ArticleContent :content="article.content" />
  </VColumn>
</template>
