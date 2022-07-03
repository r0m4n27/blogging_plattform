<script setup lang="ts">
import VCard from "@/components/base/layout/VCard.vue";
import VColumn from "@/components/base/layout/VColumn.vue";
import TextButton from "@/components/base/button/TextButton.vue";
import VText from "@/components/base/text/VText.vue";
import VHeading from "@/components/base/text/VHeading.vue";
import { contentSpacingConfig } from "@/config/content/spacing";
import { getColor } from "@/config/theme/colors";
import { blueButtonBg, blueButtonFg } from "@/config/content/color";
import { computed } from "vue";
import type { Color } from "@/styling/color";

// Layout for simple forms that require input
//
// It contains: The card, title and the the button to send the form

interface InputFormLayoutProps {
  title: string;
  successText?: string;
  errorText?: string;
  submitButtonLabel: string;
  submitButtonFgColor?: Color;
  submitButtonBgColor?: Color;
}

// Vue thinks that both props are 'LightAndDarkColor' and not Color
const props = withDefaults(defineProps<InputFormLayoutProps>(), {
  // @ts-expect-error Vue doesn't seem to get the types right
  submitButtonBgColor: () => blueButtonBg,
  submitButtonFgColor: () => blueButtonFg,
});

interface InputFormLayoutEmits {
  (e: "click"): void;
}

const emit = defineEmits<InputFormLayoutEmits>();

const additionalInfoColor = computed(() =>
  props.errorText
    ? {
        light: getColor("red", 400),
        dark: getColor("red", 400),
      }
    : {
        light: getColor("green", 400),
        dark: getColor("green", 400),
      }
);

const additionalInfoText = computed(() =>
  props.errorText ? props.errorText : props.successText ?? ""
);
const showAdditionalText = computed(
  () => props.errorText !== undefined || props.successText !== undefined
);
</script>
<template>
  <VCard :width="{ sm: 'sm', md: 'md' }" :padding="contentSpacingConfig.md">
    <VColumn :gap="contentSpacingConfig.sm" align="start" is="form">
      <VColumn width="full">
        <VHeading is="h1" size="lg">{{ title }}</VHeading>
      </VColumn>

      <slot />

      <VText :color="additionalInfoColor" v-if="showAdditionalText">
        {{ additionalInfoText }}
      </VText>

      <slot name="extra" />

      <TextButton
        @click="emit('click')"
        :label="submitButtonLabel"
        width="full"
        :show-border="false"
        :background-color="submitButtonBgColor"
        :color="submitButtonFgColor"
      />
    </VColumn>
  </VCard>
</template>
