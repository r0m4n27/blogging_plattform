<script setup lang="ts">
import VColumn from "@/components/base/layout/VColumn.vue";
import type { Article } from "@/api/article";
import VHeading from "@/components/base/text/VHeading.vue";
import { defaultContentSpacing } from "@/config/content/spacing";
import CategoryList from "@/components/util/CategoryList.vue";
import { NewArticleContent } from "./content/NewArticleContent";

interface BlogArticleProps {
  article: Article;
}

defineProps<BlogArticleProps>();
</script>

<template>
  <VColumn
    :padding="defaultContentSpacing"
    :gap="defaultContentSpacing"
    align="start"
  >
    <VHeading is="h1" size="xl">
      {{ article.title }}
    </VHeading>

    <CategoryList
      :categories="article.categories"
      :size="{ sm: 'sm', md: 'md' }"
    />

    <NewArticleContent :content="article.content" />
  </VColumn>
</template>
