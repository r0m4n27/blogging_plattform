<script setup lang="ts">
import { useNewArticleState } from "@/composables/pages/author/newArticlePage";
import ArticleEditor from "../../author/articleEditor/ArticleEditor.vue";

const { publishArticle } = useNewArticleState();
</script>

<template>
  <ArticleEditor editor-type="new" @new-article="publishArticle" />
</template>
