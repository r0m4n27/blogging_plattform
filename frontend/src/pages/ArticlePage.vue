<script setup lang="ts">
import UserPageLayout from "@/components/layout/UserPageLayout.vue";
import { useRoute } from "vue-router";
import { mockArticles, type Article } from "@/api/article";
import BlogArticle from "@/components/article/BlogArticle.vue";
import { computed } from "@vue/reactivity";

const route = useRoute();

const article = computed(() => {
  const articleId = route.params.id as string;
  return mockArticles.find((article) => article.id == articleId) as Article;
});
</script>

<template>
  <UserPageLayout>
    <BlogArticle :article="article" />
  </UserPageLayout>
</template>
