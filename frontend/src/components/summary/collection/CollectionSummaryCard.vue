<script setup lang="ts">
import VCard from "@/components/base/layout/VCard.vue";
import VColumn from "@/components/base/layout/VColumn.vue";
import VHeading from "@/components/base/text/VHeading.vue";
import VText from "@/components/base/text/VText.vue";
import { getColor } from "@/config/theme/colors";
import type { Collection } from "./collection";
import type { Color } from "@/lib/base/color";
import VLink from "../../base/VLink.vue";

interface CollectionSummaryCardProps {
  collection: Collection;
}

defineProps<CollectionSummaryCardProps>();

const textColor: Color = {
  default: { light: getColor("gray", 800), dark: getColor("whiteAlpha", 900) },
  hover: { light: getColor("gray", 600), dark: getColor("whiteAlpha", 700) },
};
</script>

<template>
  <VCard :padding="4">
    <VColumn>
      <VLink
        :to="collection.destination"
        :replace="collection.replace"
        :color="textColor"
      >
        <VHeading as="h3" size="xl">
          {{ collection.name }}
        </VHeading>
      </VLink>

      <VText as="p" size="xl">
        {{ `${collection.articleCount} Articles` }}
      </VText>
    </VColumn>
  </VCard>
</template>
