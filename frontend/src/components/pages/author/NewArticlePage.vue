<script setup lang="ts">
import { useNewArticleState } from "@/composables/pages/author/newArticlePage";
import ArticleEditor from "../../author/articleEditor/ArticleEditor.vue";

const { publishArticle, existingCategories } = useNewArticleState();
</script>

<template>
  <ArticleEditor
    :existing-categories="existingCategories"
    @new-article="publishArticle"
  />
</template>
