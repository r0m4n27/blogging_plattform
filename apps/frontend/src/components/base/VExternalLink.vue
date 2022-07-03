<script setup lang="ts">
import { globalContentConfig } from "@/config/content/global";
import type { Responsive } from "@/lib/responsive";
import type { Color } from "@/styling/color";
import { createSystemPropsCss } from "@/styling/props/systemProps";
import { systemProps } from "@/styling/props/systemProps";
import { createTextPropsCss, textProps } from "@/styling/props/textProps";
import { cx } from "@emotion/css";
import { computed, type PropType } from "vue";

const props = defineProps({
  ...systemProps,
  ...textProps,
  href: {
    type: String as PropType<string>,
    required: true,
  },
  // If this default color is not specified and the theme is switched
  // the color will be somehow not updated
  color: {
    type: [Object, String] as PropType<Responsive<Color>>,
    default: globalContentConfig.color,
  },
});

const className = computed(() =>
  cx(createSystemPropsCss(props), createTextPropsCss(props))
);
</script>

<template>
  <a :href="props.href" :class="className">
    <slot />
  </a>
</template>
