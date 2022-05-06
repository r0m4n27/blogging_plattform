<script setup lang="ts">
import VisitorPageLayout from "@/components/layout/VisitorPageLayout.vue";
import ArticleSummaryList from "@/components/summary/article/ArticleSummaryList.vue";
import { useCategoryPageState } from "@/composables/pages/useCategoryPageState";

const { title, articles } = useCategoryPageState();
</script>

<template>
  <VisitorPageLayout>
    <ArticleSummaryList
      :title="title"
      :articles="articles"
      show-title-on-desktop
    />
  </VisitorPageLayout>
</template>
