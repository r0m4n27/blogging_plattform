<script setup lang="ts">
import type { TextProps } from "@/lib/base/textProps";
import VText from "./VText.vue";

type HeadingSizes =
  | "xs"
  | "sm"
  | "md"
  | "xl"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl";

interface VHeadingProps {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size: HeadingSizes;
}

// Values taken from: https://github.com/chakra-ui/chakra-ui/blob/next/packages/theme/src/components/heading.ts
const sizes: Record<HeadingSizes, TextProps> = {
  "4xl": {
    size: { sm: "6xl", md: "7xl" },
  },
  "3xl": {
    size: { sm: "5xl", md: "6xl" },
  },
  "2xl": {
    size: { sm: "4xl", md: "5xl" },
    lineHeight: { sm: "shorter", md: "none" },
  },
  xl: {
    size: { sm: "3xl", md: "4xl" },
    lineHeight: { sm: "short", md: "shorter" },
  },
  lg: {
    size: { sm: "2xl", md: "3xl" },
    lineHeight: { sm: "short", md: "shorter" },
  },
  md: { size: "xl", lineHeight: "shorter" },
  sm: { size: "md", lineHeight: "shorter" },
  xs: { size: "sm", lineHeight: "shorter" },
};

const props = defineProps<VHeadingProps>();
</script>

<template>
  <VText :as="as" family="heading" weight="bold" v-bind="sizes[props.size]">
    <slot />
  </VText>
</template>
