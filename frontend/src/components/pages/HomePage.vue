<script setup lang="ts">
import ArticleSummaryList from "@/components/summary/article/ArticleSummaryList.vue";
import VisitorPageLayout from "@/components/layout/VisitorPageLayout.vue";
import { useHomePageState } from "@/composables/pages/useHomePageState";

const { blogTitle, articles } = useHomePageState();
</script>

<template>
  <VisitorPageLayout>
    <ArticleSummaryList :title="blogTitle" :articles="articles" />
  </VisitorPageLayout>
</template>
