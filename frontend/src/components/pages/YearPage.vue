<script setup lang="ts">
import UserPageLayout from "@/components/layout/UserPageLayout.vue";
import ArticleSummaryList from "@/components/summary/article/ArticleSummaryList.vue";
import { mockArticles } from "@/api/article";
import { useRoute } from "vue-router";

import { computed } from "vue";

const route = useRoute();

const year = computed(() => route.params.id as string);

const articles = computed(() =>
  mockArticles.filter((article) => article.year == parseInt(year.value))
);
</script>

<template>
  <UserPageLayout>
    <ArticleSummaryList
      :title="year"
      :articles="articles"
      show-title-on-desktop
    />
  </UserPageLayout>
</template>
