<script setup lang="ts">
import UserPageLayout from "@/components/layout/UserPageLayout.vue";
import ArticleSummaryList from "@/components/summary/article/ArticleSummaryList.vue";
import { useCategoryPageState } from "@/composables/pages/useCategoryPageState";

const { title, articles } = useCategoryPageState();
</script>

<template>
  <UserPageLayout>
    <ArticleSummaryList
      :title="title"
      :articles="articles"
      show-title-on-desktop
    />
  </UserPageLayout>
</template>
