<script setup lang="ts">
import { createTextPropsCss, textProps } from "@/styling/props/textProps";
import type { PropType } from "vue";

type ConversionType = "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

const props = defineProps({
  ...textProps,
  as: {
    type: String as PropType<ConversionType>,
    required: true,
  },
});
</script>

<template>
  <component :is="as" :class="createTextPropsCss(props)">
    <slot />
  </component>
</template>
