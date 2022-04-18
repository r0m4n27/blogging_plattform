<script setup lang="ts">
import VColumn from "../base/layout/VColumn.vue";
import VRow from "../base/layout/VRow.vue";
import VHeading from "../base/text/VHeading.vue";
import VText from "../base/text/VText.vue";
import SummaryTag from "./SummaryTag.vue";
import type { Article } from "@/api/article";
import VCard from "../base/layout/VCard.vue";

interface SummaryCardProps {
  article: Article;
}

defineProps<SummaryCardProps>();
</script>

<template>
  <VCard :padding="6">
    <VColumn :gap="4" align="start">
      <VHeading as="h3" size="md">
        {{ article.title }}
      </VHeading>

      <VText as="span" size="sm">
        {{ article.summary }}
      </VText>

      <VRow :gap="3" justify="end" width="full">
        <SummaryTag
          v-for="category in article.categories"
          :key="category.name"
          :category="category"
        />
      </VRow>
    </VColumn>
  </VCard>
</template>
