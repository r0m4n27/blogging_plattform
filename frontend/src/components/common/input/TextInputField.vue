<script setup lang="ts">
import VColumn from "@/components/base/layout/VColumn.vue";
import VHeading from "@/components/base/text/VHeading.vue";
import TextInput from "@/components/base/input/TextInput.vue";
import { contentSpacingConfig } from "@/config/content/spacing";
import type { InputType } from "@/styling/props/textInputProps";
import { computed, type PropType } from "vue";
import type { TextElementType } from "@/lib/elementType";
import { systemProps } from "@/styling/props/systemProps";

// The creation of a BaseInputField would be possible
// but there would be still to many duplication.
// So it is omitted here

interface LoginFieldEmits {
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

const emit = defineEmits<LoginFieldEmits>();

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

    <TextInput
      width="full"
      :input-type="inputType"
      v-model:input-value="inputModel"
    />
  </VColumn>
</template>
