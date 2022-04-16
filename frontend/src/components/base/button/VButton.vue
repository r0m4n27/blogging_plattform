<script setup lang="ts">
import { getColor } from "@/config/theme/colors";
import { type SystemProps, createSystemPropsCss } from "@/lib/base/systemProps";

interface ButtonProps {
  padding?: SystemProps["padding"];
  margin?: SystemProps["margin"];

  color?: SystemProps["color"];
  backgroundColor?: SystemProps["backgroundColor"];

  showBorder?: SystemProps["showBorder"];
  borderRadius?: SystemProps["borderRadius"];
  borderColor?: SystemProps["borderColor"];

  height?: SystemProps["height"];
  width?: SystemProps["width"];
}

const props = withDefaults(defineProps<ButtonProps>(), {
  backgroundColor: () => ({
    default: {
      light: getColor("white"),
      dark: getColor("gray", 800),
    },
    hover: {
      light: getColor("gray", 100),
      dark: getColor("gray", 700),
    },
  }),
  color: () => ({
    light: getColor("gray", 700),
    dark: getColor("blue", 300),
  }),

  showBorder: true,
  borderRadius: "md",
  borderColor: () => ({
    light: getColor("gray", 200),
    dark: getColor("blue", 300),
  }),
});
</script>

<template>
  <!-- Can't use VBox since 'is' doesn't work every time
  and reacts very weird to comments in the setup script
  -->
  <button :class="createSystemPropsCss(props)">
    <slot />
  </button>
</template>
