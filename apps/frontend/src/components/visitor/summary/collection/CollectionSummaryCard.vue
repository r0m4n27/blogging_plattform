<script setup lang="ts">
import VCard from "@blog/frontend/components/base/layout/VCard.vue";
import VColumn from "@blog/frontend/components/base/layout/VColumn.vue";
import VHeading from "@blog/frontend/components/base/text/VHeading.vue";
import VText from "@blog/frontend/components/base/text/VText.vue";
import type { Collection } from "@blog/frontend/lib/collection";
import VLink from "@blog/frontend/components/base/VLink.vue";
import { contentSpacingConfig } from "@blog/frontend/config/content/spacing";
import { contentColorConfig } from "@blog/frontend/config/content/color";
import { computed } from "@vue/reactivity";

interface CollectionSummaryCardProps {
  collection: Collection;
}

const props = defineProps<CollectionSummaryCardProps>();

const articleCountEnding = computed(() => {
  if (props.collection.articleCount === 1) {
    return "Article";
  } else {
    return "Articles";
  }
});
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
        {{ `${collection.articleCount} ${articleCountEnding}` }}
      </VText>
    </VColumn>
  </VCard>
</template>
