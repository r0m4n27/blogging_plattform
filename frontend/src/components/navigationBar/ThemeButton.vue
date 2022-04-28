<script setup lang="ts">
import { useTheme } from "@/composables/useTheme";
import { Moon, Sun } from "lucide-vue-next";
import { computed } from "vue";
import IconButton from "../base/button/IconButton.vue";
import { getColor } from "@/config/theme/colors";

const theme = useTheme();

const themeIcon = computed(() => {
  if (theme.darkMode) {
    return Sun;
  } else {
    return Moon;
  }
});

const backgroundColor = {
  default: {
    light: getColor("purple", 400),
    dark: getColor("orange", 300),
  },
  hover: {
    light: getColor("purple", 500),
    dark: getColor("orange", 200),
  },
};
const color = {
  light: getColor("white"),
  dark: getColor("gray", 700),
};
const fill = {
  light: getColor("white"),
  dark: getColor("gray", 700),
};
</script>

<template>
  <IconButton
    :icon="themeIcon"
    @click="theme.toggleDarkMode"
    :showBorder="false"
    :backgroundColor="backgroundColor"
    :color="color"
    :fill="fill"
  />
</template>
