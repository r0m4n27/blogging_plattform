<script setup lang="ts">
import type { AuthorArticle } from "@blog/frontend/api/article";
import VTableRow from "@blog/frontend/components/base/table/VTableRow.vue";
import VTableData from "@blog/frontend/components/base/table/VTableData.vue";
import { contentColorConfig } from "@blog/frontend/config/content/color";
import VLink from "../../base/VLink.vue";
import { authorRoutes } from "@blog/frontend/lib/router/author";
import ArticleStatus from "./ArticleStatus.vue";
import { computed } from "vue";
import VTableTextEntry from "../../base/table/VTableTextEntry.vue";

interface ArticlesTableEntryProps {
  article: AuthorArticle;
}
const props = defineProps<ArticlesTableEntryProps>();

const editRoute = computed(() => authorRoutes.editArticle.createRoute(props.article));
</script>
<template>
  <VTableRow>
    <VTableData>
      <VLink :to="editRoute">
        <VTableTextEntry
          :label="article.title"
          :color="contentColorConfig.mutedFgWithHover"
        />
      </VLink>
    </VTableData>
    <VTableData>
      <VLink :to="editRoute">
        <ArticleStatus :article="article" />
      </VLink>
    </VTableData>
  </VTableRow>
</template>
