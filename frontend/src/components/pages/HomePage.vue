<script setup lang="ts">
import { mockSiteConfig } from "@/api/siteConfig";
import ArticleSummaryList from "@/components/summary/article/ArticleSummaryList.vue";
import { mockArticles } from "@/api/article";
import UserPageLayout from "@/components/layout/UserPageLayout.vue";
</script>

<template>
  <UserPageLayout>
    <ArticleSummaryList
      :title="mockSiteConfig.blogTitle"
      :articles="mockArticles"
    />
  </UserPageLayout>
</template>
