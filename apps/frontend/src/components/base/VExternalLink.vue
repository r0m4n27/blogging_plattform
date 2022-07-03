<script setup lang="ts">
import { globalContentConfig } from "@blog/frontend/config/content/global";
import type { Responsive } from "@blog/frontend/lib/responsive";
import type { Color } from "@blog/frontend/styling/color";
import { createSystemPropsCss } from "@blog/frontend/styling/props/systemProps";
import { systemProps } from "@blog/frontend/styling/props/systemProps";
import { createTextPropsCss, textProps } from "@blog/frontend/styling/props/textProps";
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
  cx(createSystemPropsCss(props), createTextPropsCss(props)),
);
</script>

<template>
  <a :href="props.href" :class="className">
    <slot />
  </a>
</template>
