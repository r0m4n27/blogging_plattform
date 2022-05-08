<script setup lang="ts">
import IconButton from "@/components/base/button/IconButton.vue";
import { Archive, Upload, Trash2 } from "lucide-vue-next";
import { computed } from "vue";
import {
  greenButtonBg,
  orangeButtonBg,
  darkColoredButtonFg,
  redButtonBg,
} from "@/config/content/color";
import type { ActionType } from "./types";

interface ArticleEditorActionProps {
  actionType: ActionType;
}
const props = defineProps<ArticleEditorActionProps>();

const iconProps = computed(() => {
  if (props.actionType === "publish") {
    return {
      icon: Upload,
      color: darkColoredButtonFg,
      backgroundColor: greenButtonBg,
    };
  } else if (props.actionType === "draft") {
    return {
      icon: Archive,
      color: darkColoredButtonFg,
      backgroundColor: orangeButtonBg,
    };
  } else {
    return {
      icon: Trash2,
      color: darkColoredButtonFg,
      backgroundColor: redButtonBg,
    };
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
