<script setup lang="ts">
import NewArticleEditor from "@/components/author/articleEditor/NewArticleEditor.vue";
import { useNewArticleState } from "@/composables/pages/author/newArticlePage";

const { publishArticle } = useNewArticleState();
</script>

<template>
  <NewArticleEditor />
</template>
