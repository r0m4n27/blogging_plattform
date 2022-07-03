<script setup lang="ts">
import VColumn from "@/components/base/layout/VColumn.vue";
import VHeading from "@/components/base/text/VHeading.vue";
import FileInput from "@/components/base/input/FileInput.vue";
import { contentSpacingConfig } from "@/config/content/spacing";
import type { PropType } from "vue";
import type { TextElementType } from "@/lib/elementType";
import { systemProps } from "@/styling/props/systemProps";

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
