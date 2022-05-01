<script setup lang="ts">
import { globalContentConfig } from "@/config/content/global";
import type { Responsive } from "@/lib/responsive";
import type { Color } from "@/styling/color";
import { createSystemPropsCss } from "@/styling/props/systemProps";
import { systemProps } from "@/styling/props/systemProps";
import type { PropType } from "vue";

const props = defineProps({
  ...systemProps,
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
</script>

<template>
  <a :href="props.href" :class="createSystemPropsCss(props)">
    <slot />
  </a>
</template>
