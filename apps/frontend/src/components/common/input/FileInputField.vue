<script setup lang="ts">
import VColumn from "@blog/frontend/components/base/layout/VColumn.vue";
import VHeading from "@blog/frontend/components/base/text/VHeading.vue";
import FileInput from "@blog/frontend/components/base/input/FileInput.vue";
import { contentSpacingConfig } from "@blog/frontend/config/content/spacing";
import type { PropType } from "vue";
import type { TextElementType } from "@blog/frontend/lib/elementType";
import { systemProps } from "@blog/frontend/styling/props/systemProps";

interface FileInputFieldEmits {
  (e: "newFile", file: File): void;
}

const props = defineProps({
  label: {
    type: String as PropType<string>,
    required: true,
  },
  inputId: {
    type: String as PropType<string>,
    required: true,
  },
  accept: {
    type: String as PropType<string>,
    required: true,
  },
  isHeading: {
    type: String as PropType<TextElementType>,
    default: "h2",
  },
  ...systemProps,
});

const emit = defineEmits<FileInputFieldEmits>();
</script>

<template>
  <VColumn :gap="contentSpacingConfig.xs" align="start" v-bind="props">
    <VHeading :is="isHeading" size="sm">
      {{ label }}
    </VHeading>

    <FileInput
      width="full"
      :input-id="inputId"
      :accept="accept"
      @new-file="(file) => emit('newFile', file)"
    />
  </VColumn>
</template>
