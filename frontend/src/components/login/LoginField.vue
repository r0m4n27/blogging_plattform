<script setup lang="ts">
import VColumn from "@/components/base/layout/VColumn.vue";
import VHeading from "../base/text/VHeading.vue";
import TextInput from "../base/input/TextInput.vue";
import { contentSpacingConfig } from "@/config/content/spacing";
import type { InputType } from "@/styling/props/textInputProps";
import { computed } from "vue";

interface LoginFieldProps {
  label: string;
  inputType?: InputType;
  inputValue: string;
}

const props = defineProps<LoginFieldProps>();

const emit = defineEmits(["update:inputValue"]);

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
  <VColumn :gap="contentSpacingConfig.xs" align="start" width="full">
    <VHeading is="h2" size="sm">
      {{ label }}
    </VHeading>

    <TextInput
      width="full"
      :input-type="inputType"
      v-model:input-value="inputModel"
    />
  </VColumn>
</template>
