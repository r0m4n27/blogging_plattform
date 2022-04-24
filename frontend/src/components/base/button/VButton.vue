<script setup lang="ts">
import { getColor } from "@/config/theme/colors";
import type { Color } from "@/styling/color";
import { systemProps, createSystemPropsCss } from "@/styling/props/systemProps";
import type { BorderRadius } from "@/styling/system";
import type { Responsive } from "@/styling/responsive";
import type { PropType } from "vue";

const props = defineProps({
  ...systemProps,

  backgroundColor: {
    type: [Object, String] as PropType<Responsive<Color>>,
    default: () => ({
      default: {
        light: getColor("white"),
        dark: getColor("gray", 800),
      },
      hover: {
        light: getColor("gray", 100),
        dark: getColor("gray", 700),
      },
    }),
  },

  color: {
    type: [Object, String] as PropType<Responsive<Color>>,
    default: () => ({
      light: getColor("gray", 700),
      dark: getColor("blue", 300),
    }),
  },

  showBorder: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
  borderRadius: {
    type: [Object, String] as PropType<Responsive<BorderRadius>>,
    default: "md",
  },
  borderColor: {
    type: [Object, String] as PropType<Responsive<Color>>,
    default: () => ({
      light: getColor("gray", 200),
      dark: getColor("blue", 300),
    }),
  },
} as const);
</script>

<template>
  <!-- Can't use VBox since 'is' doesn't work every time
  and reacts very weird to comments in the setup script
  -->
  <button :class="createSystemPropsCss(props)">
    <slot />
  </button>
</template>
