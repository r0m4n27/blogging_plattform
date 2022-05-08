<script setup lang="ts">
import VRow from "@/components/base/layout/VRow.vue";
import type { EditorAction, EditorType } from "./types";
import VHeading from "../../base/text/VHeading.vue";
import { computed } from "vue";
import ArticleEditorAction from "./ArticleEditorAction.vue";
import { contentSpacingConfig } from "@/config/content/spacing";

interface ArticleEditorHeaderProps {
  editorType: EditorType;
}

interface ArticleEditorHeaderEmits {
  (e: "action", type: EditorAction): void;
}

const props = defineProps<ArticleEditorHeaderProps>();
const emit = defineEmits<ArticleEditorHeaderEmits>();

const title = computed(() =>
  props.editorType === "new" ? "New Article" : "Edit Article"
);

const actionTypes = computed<[EditorAction, EditorAction]>(() => {
  if (props.editorType === "new") {
    return ["draft", "publish"];
  } else if (props.editorType === "draft") {
    return ["delete", "publish"];
  } else {
    return ["delete", "draft"];
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
        :action-type="actionTypes[0]"
        @click="emit('action', actionTypes[0])"
      />
      <ArticleEditorAction
        :action-type="actionTypes[1]"
        @click="emit('action', actionTypes[1])"
      />
    </VRow>
  </VRow>
</template>
