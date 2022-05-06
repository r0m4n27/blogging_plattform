<script setup lang="ts">
import VisitorPageLayout from "@/components/layout/VisitorPageLayout.vue";
import ArticleSummaryList from "@/components/summary/article/ArticleSummaryList.vue";
import { useYearPageState } from "@/composables/pages/useYearPageState";

const { title, articles } = useYearPageState();
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
