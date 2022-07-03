<script setup lang="ts">
import VText from "../text/VText.vue";
import { systemProps } from "@blog/frontend/styling/props/systemProps";
import { ref, type PropType } from "vue";
import { contentSpacingConfig } from "@blog/frontend/config/content/spacing";
import VRow from "../layout/VRow.vue";
import BoxedTagButton from "../button/BoxedTagButton.vue";

const props = defineProps({
  ...systemProps,
  inputId: {
    type: String as PropType<string>,
    required: true,
  },
  accept: {
    type: String as PropType<string>,
    required: true,
  },
});

interface TextInputEmits {
  (e: "newFile", file: File): void;
}

const emit = defineEmits<TextInputEmits>();

const inputElement = ref<HTMLInputElement | undefined>(undefined);

const fileName = ref("");

const handleInputChange = () => {
  if (inputElement.value !== undefined) {
    const file = inputElement.value.files?.item(0);

    if (file) {
      fileName.value = file.name;
      emit("newFile", file);
    }
  }
};
</script>

<template>
  <VRow justify="start" :gap="contentSpacingConfig.xs" v-bind="props">
    <BoxedTagButton label="Choose File" size="md" is="label" :for="inputId" />
    <input
      ref="inputElement"
      :id="inputId"
      :accept="accept"
      type="file"
      @change="handleInputChange"
    />

    <VText :max-lines="1" width="full">
      {{ fileName }}
    </VText>
  </VRow>
</template>
