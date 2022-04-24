<script setup lang="ts">
import VColumn from "@/components/base/layout/VColumn.vue";
import VRow from "@/components/base/layout/VRow.vue";
import VHeading from "@/components/base/text/VHeading.vue";
import VText from "@/components/base/text/VText.vue";
import CategoryTag from "@/components/util/CategoryTag.vue";
import type { Article } from "@/api/article";
import VCard from "@/components/base/layout/VCard.vue";
import VLink from "@/components/base/VLink.vue";
import { computed } from "@vue/reactivity";
import type { Color } from "@/styling/color";
import { getColor } from "@/config/theme/colors";

interface ArticleCategoryTagProps {
  article: Article;
}

const props = defineProps<ArticleCategoryTagProps>();

const articleDestination = computed(() => `/articles/${props.article.id}`);

const textColor: Color = {
  default: { light: getColor("gray", 800), dark: getColor("whiteAlpha", 900) },
  hover: { light: getColor("gray", 600), dark: getColor("whiteAlpha", 700) },
};
</script>

<template>
  <VCard :padding="6">
    <VColumn :gap="4" align="start">
      <VLink :to="articleDestination" :color="textColor">
        <VHeading as="h3" size="md">
          {{ article.title }}
        </VHeading>
      </VLink>

      <VLink :to="articleDestination" :color="textColor">
        <VText as="span" size="sm">
          {{ article.summary }}
        </VText>
      </VLink>

      <VRow :gap="3" justify="end" width="full">
        <CategoryTag
          v-for="category in article.categories"
          :key="category.name"
          :category="category"
        />
      </VRow>
    </VColumn>
  </VCard>
</template>
