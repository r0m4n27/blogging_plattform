<script setup lang="ts">
import ArticleSummaryList from "@/components/summary/article/ArticleSummaryList.vue";
import { useYearPageState } from "@/composables/pages/visitor/yearPage";

const { title, articles } = useYearPageState();
</script>

<template>
  <ArticleSummaryList
    :title="title"
    :articles="articles"
    show-title-on-desktop
  />
</template>
