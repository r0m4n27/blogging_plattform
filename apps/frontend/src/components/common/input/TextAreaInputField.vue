<script setup lang="ts">
import VColumn from "@blog/frontend/components/base/layout/VColumn.vue";
import VHeading from "@blog/frontend/components/base/text/VHeading.vue";
import TextAreaInput from "@blog/frontend/components/base/input/TextAreaInput.vue";
import { contentSpacingConfig } from "@blog/frontend/config/content/spacing";
import type { InputType } from "@blog/frontend/styling/props/textInputProps";
import { computed, type PropType } from "vue";
import type { TextElementType } from "@blog/frontend/lib/elementType";
import { systemProps } from "@blog/frontend/styling/props/systemProps";

interface TextAreaInputFieldEmits {
  (e: "update:inputValue", newValue: string): void;
}

const props = defineProps({
  label: {
    type: String as PropType<string>,
    required: true,
  },
  inputType: {
    type: String as PropType<InputType>,
  },
  inputValue: {
    type: String as PropType<string>,
    required: true,
  },
  isHeading: {
    type: String as PropType<TextElementType>,
    default: "h2",
  },
  ...systemProps,
});

const emit = defineEmits<TextAreaInputFieldEmits>();

const inputModel = computed({
  get() {
    return props.inputValue;
  },
  set(newValue: string) {
    return emit("update:inputValue", newValue);
  },
});
</script>

<template>
  <VColumn :gap="contentSpacingConfig.xs" align="start" v-bind="props">
    <VHeading :is="isHeading" size="sm">
      {{ label }}
    </VHeading>

    <TextAreaInput
      width="full"
      height="full"
      :input-type="inputType"
      v-model:input-value="inputModel"
    />
  </VColumn>
</template>
