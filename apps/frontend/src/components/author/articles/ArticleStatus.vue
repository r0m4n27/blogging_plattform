<script setup lang="ts">
import type { AuthorArticle } from "@blog/frontend/api/article";
import { computed } from "vue";
import {
  orangeButtonBg,
  orangeButtonFg,
  greenButtonBg,
  greenButtonFg,
} from "@blog/frontend/config/content/color";
import TagButton from "../../base/button/TagButton.vue";

interface ArticleStatusProps {
  article: AuthorArticle;
}

const props = defineProps<ArticleStatusProps>();

const buttonProps = computed(() => {
  if (props.article.published) {
    return {
      label: "PUBLISHED",
      color: greenButtonFg,
      backgroundColor: greenButtonBg,
    };
  } else {
    return {
      label: "DRAFT",
      color: orangeButtonFg,
      backgroundColor: orangeButtonBg,
    };
  }
});
</script>

<template>
  <TagButton v-bind="buttonProps" :show-border="false" />
</template>
