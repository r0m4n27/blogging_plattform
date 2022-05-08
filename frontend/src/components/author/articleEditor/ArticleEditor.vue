<script setup lang="ts">
import VColumn from "@/components/base/layout/VColumn.vue";
import { defaultContentSpacing } from "@/config/content/spacing";
import type { EditorType } from "./types";
import ArticleEditorHeader from "./ArticleEditorHeader.vue";
import VContainer from "../../base/layout/VContainer.vue";
import TextInputField from "../../input/TextInputField.vue";
import { ref } from "vue";
import TextAreaInputField from "../../input/TextAreaInputField.vue";

interface ArticleEditorProps {
  editorType: EditorType;
  startTitleValue?: string;
  startSummaryValue?: string;
  startContentValue?: string;
}

const props = defineProps<ArticleEditorProps>();

const title = ref(props.startTitleValue ?? "");
const summary = ref(props.startSummaryValue ?? "");
const content = ref(props.startContentValue ?? "");
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
      <ArticleEditorHeader :editorType="editorType" />

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
