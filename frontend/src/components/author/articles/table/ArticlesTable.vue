<script setup lang="ts">
import type { AuthorArticle } from "@/api/article";
import VCard from "../../../base/layout/VCard.vue";
import VTable from "../../../base/table/VTable.vue";
import VTableBody from "../../../base/table/VTableBody.vue";
import ArticlesTableHead from "./ArticlesTableHead.vue";
import ArticlesTableEntry from "./ArticlesTableEntry.vue";

interface ArticlesListTableProps {
  articles: AuthorArticle[];
}

defineProps<ArticlesListTableProps>();
</script>
<template>
  <VCard :padding="3" width="full">
    <VTable width="full">
      <ArticlesTableHead />

      <VTableBody>
        <ArticlesTableEntry
          v-for="article in articles"
          :key="article.id"
          :article="article"
        />
      </VTableBody>
    </VTable>
  </VCard>
</template>
