<script setup lang="ts">
import VColumn from "@/components/base/layout/VColumn.vue";
import { defaultContentSpacing } from "@/config/content/spacing";
import type { EditorType } from "./types";
import ArticleEditorHeader from "./ArticleEditorHeader.vue";
import VContainer from "../../base/layout/VContainer.vue";
import TextInputField from "../../input/TextInputField.vue";
import TextAreaInputField from "../../input/TextAreaInputField.vue";
import { useArticleEditorState } from "@/composables/articleEditor";
import type { AuthorArticle, NewArticlePayload } from "@/api/article";

interface ArticleEditorProps {
  editorType: EditorType;
  article?: AuthorArticle;
}
interface ArticleEditorEmits {
  (e: "newArticle", payload: NewArticlePayload): void;
  (e: "updateArticle", article: AuthorArticle): void;
  (e: "deleteArticle", article: AuthorArticle): void;
}

const props = defineProps<ArticleEditorProps>();
const emit = defineEmits<ArticleEditorEmits>();

const { title, summary, content, performAction } = useArticleEditorState(
  emit,
  props.article
);
</script>

<template>
  <VContainer size="md">
    <VColumn
      :padding="defaultContentSpacing"
      :gap="defaultContentSpacing"
      align="start"
      width="full"
      is="form"
    >
      <ArticleEditorHeader
        :editorType="editorType"
        @action="(action) => performAction(action)"
      />

      <TextInputField label="Title" v-model:input-value="title" width="full" />
      <TextAreaInputField
        label="Summary"
        v-model:input-value="summary"
        width="full"
      />
      <TextAreaInputField
        label="Content"
        v-model:input-value="content"
        width="full"
        height="md"
      />
    </VColumn>
  </VContainer>
</template>
