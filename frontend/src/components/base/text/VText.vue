<script setup lang="ts">
import { type TextProps, createTextPropsCss } from "@/lib/base/props/textProps";

interface VTextProps {
  as: "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

  family?: TextProps["family"];
  size?: TextProps["size"];
  weight?: TextProps["weight"];
  lineHeight?: TextProps["lineHeight"];
  letterSpacing?: TextProps["letterSpacing"];
  alignment?: TextProps["alignment"];
  wordWrap?: TextProps["wordWrap"];
}

const props = defineProps<VTextProps>();
</script>

<template>
  <component :is="as" :class="createTextPropsCss(props)">
    <slot />
  </component>
</template>
