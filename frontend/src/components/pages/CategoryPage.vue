<script setup lang="ts">
import UserPageLayout from "@/components/layout/UserPageLayout.vue";
import { fetchCategory } from "@/api/category";
import ArticleSummaryList from "@/components/summary/article/ArticleSummaryList.vue";
import { fetchArticles } from "@/api/article";
import { useRoute } from "vue-router";
import { computed } from "vue";
import { useEndpoint } from "@/composables/useEndpoint";

const route = useRoute();

const categoryId = computed(() => route.params.id as string);
const category = useEndpoint(async () => fetchCategory(categoryId.value));
const articles = useEndpoint(
  async () => fetchArticles("category", categoryId.value),
  []
);

const title = computed(() => category.value?.name ?? "");
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
