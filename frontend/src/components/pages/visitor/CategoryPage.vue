<script setup lang="ts">
import ArticleSummaryList from "@/components/summary/article/ArticleSummaryList.vue";
import { useCategoryPageState } from "@/composables/pages/visitor/categoryPage";

const { title, articles } = useCategoryPageState();
</script>

<template>
  <ArticleSummaryList
    :title="title"
    :articles="articles"
    show-title-on-desktop
  />
</template>
