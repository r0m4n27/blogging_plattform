<script setup lang="ts">
import VCard from "@/components/base/layout/VCard.vue";
import VColumn from "@/components/base/layout/VColumn.vue";
import VHeading from "@/components/base/text/VHeading.vue";
import VText from "@/components/base/text/VText.vue";
import type { Collection } from "./collection";
import VLink from "@/components/base/VLink.vue";
import { contentSpacingConfig } from "@/config/content/spacing";
import { contentColorConfig } from "@/config/content/color";

interface CollectionSummaryCardProps {
  collection: Collection;
}

defineProps<CollectionSummaryCardProps>();
</script>

<template>
  <VCard :padding="contentSpacingConfig.sm">
    <VColumn>
      <VLink
        :to="collection.destination"
        :replace="collection.replace"
        :color="contentColorConfig.fgWithHover"
      >
        <VHeading is="h2" size="lg">
          {{ collection.name }}
        </VHeading>
      </VLink>

      <VText is="p" size="md">
        {{ `${collection.articleCount} Articles` }}
      </VText>
    </VColumn>
  </VCard>
</template>
