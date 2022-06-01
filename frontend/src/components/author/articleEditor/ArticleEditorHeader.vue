<script setup lang="ts">
import VRow from "@/components/base/layout/VRow.vue";
import type { EditorAction } from "@/composables/author/articleEditor/articleEditor";
import VHeading from "../../base/text/VHeading.vue";
import { computed } from "vue";
import ArticleEditorAction from "./ArticleEditorAction.vue";
import { contentSpacingConfig } from "@/config/content/spacing";
import type { AuthorArticle } from "@/api/article";

interface ArticleEditorHeaderProps {
  article?: AuthorArticle;
}

interface ArticleEditorHeaderEmits {
  (e: "action", type: EditorAction): void;
}

const props = defineProps<ArticleEditorHeaderProps>();
const emit = defineEmits<ArticleEditorHeaderEmits>();

const title = computed(() =>
  props.article === undefined ? "New Article" : "Edit Article"
);

const actions = computed<EditorAction[]>(() => {
  if (props.article === undefined) {
    return ["draft", "publish"];
  } else {
    const actions: EditorAction[] = ["delete", "save"];
    actions.push(props.article.published ? "draft" : "publish");

    return actions;
  }
});
</script>
<template>
  <VRow justify="space-between" width="full">
    <VHeading is="h1" size="lg">
      {{ title }}
    </VHeading>

    <VRow :gap="{ sm: contentSpacingConfig.xs, md: contentSpacingConfig.sm }">
      <ArticleEditorAction
        v-for="action in actions"
        :key="action"
        :action-type="action"
        @click="emit('action', action)"
      />
    </VRow>
  </VRow>
</template>
