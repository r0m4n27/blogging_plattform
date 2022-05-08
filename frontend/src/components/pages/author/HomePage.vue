<script setup lang="ts">
import ArticlesList from "@/components/author/articles/ArticlesList.vue";
import { useHomePageState } from "@/composables/pages/author/homePage";

const { articles } = useHomePageState();
</script>

<template>
  <ArticlesList :articles="articles" />
</template>
