<script setup lang="ts">
import { useEditArticlePage } from "@blog/frontend/composables/pages/author/editArticlePage";
import ArticleEditor from "../../author/articleEditor/ArticleEditor.vue";

const { article, deleteArticle, updateArticle, existingCategories } =
  useEditArticlePage();
</script>

<template>
  <ArticleEditor
    v-if="article !== undefined"
    :article="article"
    :existing-categories="existingCategories"
    @delete-article="deleteArticle"
    @update-article="updateArticle"
  />
</template>
