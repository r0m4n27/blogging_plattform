<script setup lang="ts">
import VColumn from "@blog/frontend/components/base/layout/VColumn.vue";
import { defaultContentSpacing } from "@blog/frontend/config/content/spacing";
import ArticleEditorHeader from "./ArticleEditorHeader.vue";
import TextInputField from "@blog/frontend/components/common/input/TextInputField.vue";
import TextAreaInputField from "@blog/frontend/components/common/input/TextAreaInputField.vue";
import { useArticleEditorState } from "@blog/frontend/composables/author/articleEditor/articleEditor";
import type { AuthorArticle, NewArticlePayload } from "@blog/frontend/api/article";
import type { AuthorCategory } from "@blog/frontend/api/category";
import CategoriesInput from "./categories/CategoriesInput.vue";

interface ArticleEditorProps {
  existingCategories: AuthorCategory[];
  article?: AuthorArticle;
}
interface ArticleEditorEmits {
  (e: "newArticle", payload: NewArticlePayload): void;
  (e: "updateArticle", article: AuthorArticle): void;
  (e: "deleteArticle"): void;
}

const props = defineProps<ArticleEditorProps>();
const emit = defineEmits<ArticleEditorEmits>();

const { title, summary, content, performAction, categories } = useArticleEditorState(
  emit,
  props.article,
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

    <CategoriesInput
      :existing-categories="existingCategories"
      v-model:selected-categories="categories"
    />

    <TextAreaInputField
      label="Summary"
      v-model:input-value="summary"
      width="full"
      :height="36"
    />
    <TextAreaInputField
      label="Content"
      v-model:input-value="content"
      width="full"
      height="md"
    />
  </VColumn>
</template>
