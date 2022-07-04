<script setup lang="ts">
import ArticlesTable from "@blog/frontend/components/author/articles/ArticlesTable.vue";
import { useHomePageState } from "@blog/frontend/composables/pages/author/homePage";

const { articles } = useHomePageState();
</script>

<template>
  <ArticlesTable :articles="articles" />
</template>
