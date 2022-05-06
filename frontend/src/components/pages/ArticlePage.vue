<script setup lang="ts">
import VisitorPageLayout from "@/components/layout/VisitorPageLayout.vue";
import BlogArticle from "@/components/article/BlogArticle.vue";
import { useArticlePageState } from "@/composables/pages/useArticlePageState";

const { article } = useArticlePageState();
</script>

<template>
  <VisitorPageLayout container-size="md">
    <BlogArticle v-if="article !== undefined" :article="article" />
  </VisitorPageLayout>
</template>
