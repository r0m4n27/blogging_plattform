<script setup lang="ts">
import ArticleSummaryList from "@/components/summary/article/ArticleSummaryList.vue";
import { fetchArticles } from "@/api/article";
import UserPageLayout from "@/components/layout/UserPageLayout.vue";
import { useSiteConfig } from "@/composables/useSiteConfig";
import { useEndpoint } from "@/composables/useEndpoint";

const siteConfig = useSiteConfig();
const articles = useEndpoint(fetchArticles, []);
</script>

<template>
  <UserPageLayout>
    <ArticleSummaryList :title="siteConfig.blogTitle" :articles="articles" />
  </UserPageLayout>
</template>
