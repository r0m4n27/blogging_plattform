<script setup lang="ts">
import UserPageLayout from "@/components/layout/UserPageLayout.vue";
import ArticleSummaryList from "@/components/summary/article/ArticleSummaryList.vue";
import { useYearPageState } from "@/composables/pages/useYearPageState";

const { title, articles } = useYearPageState();
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
