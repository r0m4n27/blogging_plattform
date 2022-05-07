<script setup lang="ts">
import ArticleSummaryList from "@/components/summary/article/ArticleSummaryList.vue";
import { useHomePageState } from "@/composables/pages/visitor/homePage";

const { blogTitle, articles } = useHomePageState();
</script>

<template>
  <ArticleSummaryList :title="blogTitle" :articles="articles" />
</template>
