<script setup lang="ts">
import ArticlesTable from "@/components/author/articles/ArticlesTable.vue";
import { useHomePageState } from "@/composables/pages/author/homePage";

const { articles } = useHomePageState();
</script>

<template>
  <ArticlesTable :articles="articles" />
</template>
