<script setup lang="ts">
import VBox from "../layout/VBox.vue";
import { systemProps } from "@blog/frontend/styling/props/systemProps";
import { computed, type PropType } from "vue";
import type { Responsive } from "@blog/frontend/lib/responsive";
import type { BorderRadius } from "@blog/frontend/styling/system";
import type { Color } from "@blog/frontend/styling/color";
import type { Spacing } from "@blog/frontend/styling/spacing";
import { contentColorConfig } from "@blog/frontend/config/content/color";
import { contentSpacingConfig } from "@blog/frontend/config/content/spacing";
import {
  textInputProps,
  createTextInputCss,
} from "@blog/frontend/styling/props/textInputProps";

const props = defineProps({
  ...systemProps,
  ...textInputProps,
  showBorder: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
  borderRadius: {
    type: [Object, String] as PropType<Responsive<BorderRadius>>,
    default: "base",
  },
  borderColor: {
    type: [Object, String] as PropType<Responsive<Color>>,
    default: contentColorConfig.border,
  },
  padding: {
    type: [Object, String, Number] as PropType<Responsive<Spacing>>,
    default: () => ({
      x: contentSpacingConfig.sm,
      y: contentSpacingConfig.xs,
    }),
  },

  color: {
    type: [Object, String] as PropType<Responsive<Color>>,
    default: () => contentColorConfig.mutedFg,
  },
});

interface TextAreaEmits {
  (e: "update:inputValue", newValue: string): void;
}

const emit = defineEmits<TextAreaEmits>();

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
  <VBox v-bind="props" is="div">
    <textarea
      :class="createTextInputCss(props)"
      :style="{ width: '100%', height: '100%', resize: 'none' }"
      v-model="inputModel"
    />
  </VBox>
</template>
