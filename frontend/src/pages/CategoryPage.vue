<script setup lang="ts">
import UserPageLayout from "@/components/layout/UserPageLayout.vue";
import { mockCategories } from "@/api/category";
import ArticleSummaryList from "@/components/summary/article/ArticleSummaryList.vue";
import { mockArticles } from "@/api/article";
import { useRoute } from "vue-router";
import type { Category } from "@/api/category";

const route = useRoute();
const categoryId = route.params.id as string;
const category = mockCategories.find(
  (category) => category.id == categoryId
) as Category;

const articles = mockArticles.filter((article) => {
  const categoryIds = article.categories.map((c) => c.id);
  return categoryIds.includes(categoryId);
});
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
