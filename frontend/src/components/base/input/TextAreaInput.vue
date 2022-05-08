<script setup lang="ts">
import VBox from "../layout/VBox.vue";
import { systemProps } from "@/styling/props/systemProps";
import { computed, type PropType } from "vue";
import type { Responsive } from "@/lib/responsive";
import type { BorderRadius } from "@/styling/system";
import type { Color } from "@/styling/color";
import type { Spacing } from "@/styling/spacing";
import { contentColorConfig } from "@/config/content/color";
import { contentSpacingConfig } from "@/config/content/spacing";
import {
  textInputProps,
  createTextInputCss,
} from "@/styling/props/textInputProps";

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
      :style="{ width: '100%', height: '100%' }"
      v-model="inputModel"
    />
  </VBox>
</template>
