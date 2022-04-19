<script setup lang="ts">
import type { Article } from "@/api/article";
import VGrid from "@/components/base/layout/VGrid.vue";
import SummaryCard from "./SummaryCard.vue";
import VColumn from "../base/layout/VColumn.vue";
import VHeading from "../base/text/VHeading.vue";
import VBox from "../base/layout/VBox.vue";

interface SummaryListProps {
  title: string;
  showTitleOnDesktop?: boolean;
  articles: Article[];
}

withDefaults(defineProps<SummaryListProps>(), {
  showTitleOnDesktop: false,
});
</script>

<template>
  <VColumn :padding="{ sm: 4, md: 6 }" :gap="{ sm: 4, md: 6 }">
    <VBox :hidden="{ sm: false, md: !showTitleOnDesktop }">
      <VHeading as="h2" size="2xl">
        {{ title }}
      </VHeading>
    </VBox>

    <VGrid :columns="{ sm: 1, md: 2 }" :gap="{ sm: 4, md: 6 }">
      <SummaryCard
        v-for="article in articles"
        :key="article.id"
        :article="article"
      />
    </VGrid>
  </VColumn>
</template>
