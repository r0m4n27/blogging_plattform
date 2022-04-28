<script setup lang="ts">
import UserPageLayout from "@/components/layout/UserPageLayout.vue";
import ArticleSummaryList from "@/components/summary/article/ArticleSummaryList.vue";
import { fetchArticles } from "@/api/article";
import { useRoute } from "vue-router";

import { computed } from "vue";
import { useEndpoint } from "@/composables/useEndpoint";

const route = useRoute();

const year = computed(() => route.params.id as string);
const articles = useEndpoint(
  async () => fetchArticles("year", parseInt(year.value)),
  []
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
