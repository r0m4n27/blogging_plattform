<script setup lang="ts">
import ArticleSummaryList from "@/components/summary/article/ArticleSummaryList.vue";
import UserPageLayout from "@/components/layout/UserPageLayout.vue";
import { useHomePageState } from "@/composables/pages/useHomePageState";

const { blogTitle, articles } = useHomePageState();
</script>

<template>
  <UserPageLayout>
    <ArticleSummaryList :title="blogTitle" :articles="articles" />
  </UserPageLayout>
</template>
