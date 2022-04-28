<script setup lang="ts">
import UserPageLayout from "@/components/layout/UserPageLayout.vue";
import { mockCategories } from "@/api/category";
import ArticleSummaryList from "@/components/summary/article/ArticleSummaryList.vue";
import { mockArticles } from "@/api/article";
import { useRoute } from "vue-router";
import type { Category } from "@/api/category";
import { computed } from "vue";

const route = useRoute();

const categoryId = computed(() => route.params.id as string);

const category = computed(
  () =>
    mockCategories.find(
      (category) => category.id == categoryId.value
    ) as Category
);

const articles = computed(() =>
  mockArticles.filter((article) => {
    const categoryIds = article.categories.map((c) => c.id);
    return categoryIds.includes(categoryId.value);
  })
);
</script>

<template>
  <UserPageLayout>
    <ArticleSummaryList
      :title="category.name"
      :articles="articles"
      show-title-on-desktop
    />
  </UserPageLayout>
</template>
