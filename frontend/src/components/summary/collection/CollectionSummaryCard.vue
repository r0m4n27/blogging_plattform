<script setup lang="ts">
import VCard from "@/components/base/layout/VCard.vue";
import VColumn from "@/components/base/layout/VColumn.vue";
import VHeading from "@/components/base/text/VHeading.vue";
import VText from "@/components/base/text/VText.vue";
import type { Collection } from "./collection";

interface CollectionSummaryCardProps {
  collection: Collection;
}

defineProps<CollectionSummaryCardProps>();
</script>

<template>
  <VCard :padding="4">
    <VColumn>
      <VHeading as="h3" size="xl">
        {{ collection.name }}
      </VHeading>

      <VText as="p" size="xl">
        {{ `${collection.articleCount} Articles` }}
      </VText>
    </VColumn>
  </VCard>
</template>
