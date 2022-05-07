<script setup lang="ts">
import VisitorPageLayout from "../layout/VisitorPageLayout.vue";
import ArticleSummaryList from "@/components/summary/article/ArticleSummaryList.vue";
import { useYearPageState } from "@/composables/pages/visitor/yearPage";

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
