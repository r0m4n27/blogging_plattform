<script setup lang="ts">
import VColumn from "@blog/frontend/components/base/layout/VColumn.vue";
import type { Article } from "@blog/frontend/api/article";
import VHeading from "@blog/frontend/components/base/text/VHeading.vue";
import { defaultContentSpacing } from "@blog/frontend/config/content/spacing";
import CategoryList from "@blog/frontend/components/visitor/util/CategoryList.vue";
import ArticleContent from "./content/ArticleContent.vue";

interface BlogArticleProps {
  article: Article;
}

defineProps<BlogArticleProps>();
</script>

<template>
  <VColumn :padding="defaultContentSpacing" :gap="defaultContentSpacing" align="start">
    <VHeading is="h1" size="xl">
      {{ article.title }}
    </VHeading>

    <CategoryList :categories="article.categories" :size="{ sm: 'sm', md: 'md' }" />

    <ArticleContent :content="article.content" />
  </VColumn>
</template>
