<script setup lang="ts">
import ArticleSummaryList from "@blog/frontend/components/visitor/summary/article/ArticleSummaryList.vue";
import { useCategoryPageState } from "@blog/frontend/composables/pages/visitor/categoryPage";

const { title, articles } = useCategoryPageState();
</script>

<template>
  <ArticleSummaryList :title="title" :articles="articles" show-title-on-desktop />
</template>
