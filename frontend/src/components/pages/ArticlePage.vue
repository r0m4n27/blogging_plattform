<script setup lang="ts">
import UserPageLayout from "@/components/layout/UserPageLayout.vue";
import { useRoute } from "vue-router";
import { fetchArticle } from "@/api/article";
import BlogArticle from "@/components/article/BlogArticle.vue";
import { useEndpoint } from "@/composables/useEndpoint";

const route = useRoute();
const article = useEndpoint(async () =>
  fetchArticle(route.params.id as string)
);
</script>

<template>
  <UserPageLayout container-size="md">
    <BlogArticle v-if="article !== undefined" :article="article" />
  </UserPageLayout>
</template>
