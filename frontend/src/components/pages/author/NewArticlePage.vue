<script setup lang="ts">
import { useNewArticleState } from "@/composables/pages/author/newArticlePage";
import ArticleEditor from "../../author/articleEditor/ArticleEditor.vue";

const { publishArticle } = useNewArticleState();
</script>

<template>
  <ArticleEditor @new-article="publishArticle" />
</template>
