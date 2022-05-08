<script setup lang="ts">
import type { AuthorArticle } from "@/api/article";
import VButton from "@/components/base/button/VButton.vue";
import VText from "@/components/base/text/VText.vue";
import { computed } from "vue";
import VCenter from "../../base/layout/VCenter.vue";
import {
  orangeButtonBg,
  orangeButtonFg,
  greenButtonBg,
  greenButtonFg,
} from "@/config/content/color";

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
  <VButton
    :padding="{ x: 2, y: 0 }"
    :show-border="false"
    :height="6"
    :color="buttonProps.color"
    :background-color="buttonProps.backgroundColor"
  >
    <VCenter>
      <VText size="sm" line-height="5" weight="semibold">
        {{ buttonProps.label }}
      </VText>
    </VCenter>
  </VButton>
</template>
