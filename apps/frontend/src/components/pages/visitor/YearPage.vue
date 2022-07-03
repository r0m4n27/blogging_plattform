<script setup lang="ts">
import ArticleSummaryList from "@blog/frontend/components/visitor/summary/article/ArticleSummaryList.vue";
import { useYearPageState } from "@blog/frontend/composables/pages/visitor/yearPage";

const { title, articles } = useYearPageState();
</script>

<template>
  <ArticleSummaryList :title="title" :articles="articles" show-title-on-desktop />
</template>
