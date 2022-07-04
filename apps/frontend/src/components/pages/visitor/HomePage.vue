<script setup lang="ts">
import ArticleSummaryList from "@blog/frontend/components/visitor/summary/article/ArticleSummaryList.vue";
import { useHomePageState } from "@blog/frontend/composables/pages/visitor/homePage";

const { blogTitle, articles } = useHomePageState();
</script>

<template>
  <ArticleSummaryList :title="blogTitle" :articles="articles" />
</template>
