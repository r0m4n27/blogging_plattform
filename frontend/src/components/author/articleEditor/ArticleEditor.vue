<script setup lang="ts">
import VColumn from "@/components/base/layout/VColumn.vue";
import { defaultContentSpacing } from "@/config/content/spacing";
import ArticleEditorHeader from "./ArticleEditorHeader.vue";
import TextInputField from "../../input/TextInputField.vue";
import TextAreaInputField from "../../input/TextAreaInputField.vue";
import { useArticleEditorState } from "@/composables/articleEditor";
import type { AuthorArticle, NewArticlePayload } from "@/api/article";

interface ArticleEditorProps {
  article?: AuthorArticle;
}
interface ArticleEditorEmits {
  (e: "newArticle", payload: NewArticlePayload): void;
  (e: "updateArticle", article: AuthorArticle): void;
  (e: "deleteArticle"): void;
}

const props = defineProps<ArticleEditorProps>();
const emit = defineEmits<ArticleEditorEmits>();

const { title, summary, content, performAction } = useArticleEditorState(
  emit,
  props.article
);
</script>

<template>
  <VColumn
    :padding="defaultContentSpacing"
    :gap="defaultContentSpacing"
    align="start"
    width="full"
    is="form"
  >
    <ArticleEditorHeader
      :article="article"
      @action="(action) => performAction(action)"
    />

    <TextInputField label="Title" v-model:input-value="title" width="full" />
    <TextAreaInputField
      label="Summary"
      v-model:input-value="summary"
      width="full"
      :height="40"
    />
    <TextAreaInputField
      label="Content"
      v-model:input-value="content"
      width="full"
      height="md"
    />
  </VColumn>
</template>
