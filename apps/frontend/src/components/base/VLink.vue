<script setup lang="ts">
import { systemProps, createSystemPropsCss } from "@/styling/props/systemProps";
import type { PropType } from "vue";
import { type RouteLocationRaw, RouterLink } from "vue-router";
import type { Color } from "@/styling/color";
import type { Responsive } from "@/lib/responsive";
import { globalContentConfig } from "@/config/content/global";

const props = defineProps({
  ...systemProps,
  to: {
    type: [String, Object] as PropType<RouteLocationRaw>,
    required: true,
  },
  replace: {
    type: Boolean as PropType<boolean>,
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
  <RouterLink :to="to" :replace="replace" :class="createSystemPropsCss(props)">
    <slot />
  </RouterLink>
</template>
