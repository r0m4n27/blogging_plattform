<script setup lang="ts">
import VColumn from "@/components/base/layout/VColumn.vue";
import VHeading from "@/components/base/text/VHeading.vue";
import VText from "@/components/base/text/VText.vue";
import type { Article } from "@/api/article";
import VCard from "@/components/base/layout/VCard.vue";
import VLink from "@/components/base/VLink.vue";
import { computed } from "@vue/reactivity";
import { contentSpacingConfig } from "@/config/content/spacing";
import CategoryList from "../../util/CategoryList.vue";
import { contentColorConfig } from "@/config/content/color";
import { createArticleDestination } from "@/lib/router";

interface ArticleCategoryTagProps {
  article: Article;
}

const props = defineProps<ArticleCategoryTagProps>();

const articleDestination = computed(() =>
  createArticleDestination(props.article)
);
</script>

<template>
  <VCard :padding="contentSpacingConfig.md">
    <VColumn :gap="contentSpacingConfig.sm" align="start">
      <VLink :to="articleDestination" :color="contentColorConfig.fgWithHover">
        <VHeading as="h3" size="md">
          {{ article.title }}
        </VHeading>
      </VLink>

      <VLink :to="articleDestination" :color="contentColorConfig.fgWithHover">
        <VText as="span" size="sm">
          {{ article.summary }}
        </VText>
      </VLink>

      <CategoryList
        :categories="article.categories"
        justify="end"
        width="full"
      />
    </VColumn>
  </VCard>
</template>
