<script setup lang="ts">
import BlogArticle from "@/components/visitor/article/BlogArticle.vue";
import { useArticlePageState } from "@/composables/pages/visitor/articlePage";
import VContainer from "../../base/layout/VContainer.vue";

const { article } = useArticlePageState();
</script>

<template>
  <VContainer size="md">
    <BlogArticle v-if="article !== undefined" :article="article" />
  </VContainer>
</template>
