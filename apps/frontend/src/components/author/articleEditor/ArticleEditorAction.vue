<script setup lang="ts">
import IconButton from "@blog/frontend/components/base/button/IconButton.vue";
import { Archive, Upload, Trash2, Save } from "lucide-vue-next";
import { computed } from "vue";
import {
  greenButtonBg,
  orangeButtonBg,
  darkColoredButtonFg,
  redButtonBg,
  blueButtonBg,
} from "@blog/frontend/config/content/color";
import type { EditorAction } from "@blog/frontend/composables/author/articleEditor/articleEditor";

interface ArticleEditorActionProps {
  actionType: EditorAction;
}
const props = defineProps<ArticleEditorActionProps>();

const iconProps = computed(() => {
  switch (props.actionType) {
    case "publish":
      return {
        icon: Upload,
        color: darkColoredButtonFg,
        backgroundColor: greenButtonBg,
      };
    case "draft":
      return {
        icon: Archive,
        color: darkColoredButtonFg,
        backgroundColor: orangeButtonBg,
      };
    case "delete":
      return {
        icon: Trash2,
        color: darkColoredButtonFg,
        backgroundColor: redButtonBg,
      };
    case "save":
      return {
        icon: Save,
        color: darkColoredButtonFg,
        backgroundColor: blueButtonBg,
      };
    default:
      throw new Error("All cases exhausted!");
  }
});
</script>

<template>
  <IconButton
    :icon="iconProps.icon"
    :show-border="false"
    :color="iconProps.color"
    :background-color="iconProps.backgroundColor"
  />
</template>
