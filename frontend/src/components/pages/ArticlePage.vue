<script setup lang="ts">
import UserPageLayout from "@/components/layout/UserPageLayout.vue";
import BlogArticle from "@/components/article/BlogArticle.vue";
import { useArticlePageState } from "@/composables/pages/useArticlePageState";

const { article } = useArticlePageState();
</script>

<template>
  <UserPageLayout container-size="md">
    <BlogArticle v-if="article !== undefined" :article="article" />
  </UserPageLayout>
</template>
