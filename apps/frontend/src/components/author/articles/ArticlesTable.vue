<script setup lang="ts">
import type { AuthorArticle } from "@blog/frontend/api/article";
import ActionableTableLayout from "@blog/frontend/components/common/layout/ActionableTableLayout.vue";
import VTableHeader from "@blog/frontend/components/base/table/VTableHeader.vue";
import ArticlesTableEntry from "./ArticlesTableEntry.vue";
import { useRouter } from "vue-router";
import { authorRoutes } from "@blog/frontend/lib/router/author";

interface ArticlesListProps {
  articles: AuthorArticle[];
}

defineProps<ArticlesListProps>();
const router = useRouter();
const routeToNewArticle = () => {
  router.push(authorRoutes.newArticle.route);
};
</script>

<template>
  <ActionableTableLayout
    title="Articles"
    add-button-label="New Article"
    @add-button-click="routeToNewArticle"
  >
    <template #head>
      <VTableHeader label="TITLE" width="full" />
      <VTableHeader label="STATUS" />
    </template>
    <template #body>
      <ArticlesTableEntry
        v-for="article in articles"
        :key="article.id"
        :article="article"
      />
    </template>
  </ActionableTableLayout>
</template>
