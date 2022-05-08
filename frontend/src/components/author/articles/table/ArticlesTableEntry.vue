<script setup lang="ts">
import type { AuthorArticle } from "@/api/article";
import VTableRow from "@/components/base/table/VTableRow.vue";
import VTableData from "@/components/base/table/VTableData.vue";
import VText from "../../../base/text/VText.vue";
import { contentColorConfig } from "@/config/content/color";
import VLink from "../../../base/VLink.vue";
import { authorRoutes } from "@/lib/router/author";
import ArticleStatus from "../ArticleStatus.vue";

interface ArticlesTableEntryProps {
  article: AuthorArticle;
}
defineProps<ArticlesTableEntryProps>();
</script>
<template>
  <VTableRow>
    <VTableData>
      <VLink :to="authorRoutes.home.route">
        <VText
          size="md"
          weight="medium"
          :max-lines="1"
          :color="contentColorConfig.mutedFgWithHover"
        >
          {{ article.title }}
        </VText>
      </VLink>
    </VTableData>
    <VTableData>
      <VLink :to="authorRoutes.home.route">
        <ArticleStatus :article="article" />
      </VLink>
    </VTableData>
  </VTableRow>
</template>
