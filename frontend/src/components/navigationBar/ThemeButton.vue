<script setup lang="ts">
import { Moon, Sun } from "lucide-vue-next";
import { computed } from "vue";
import { useTheme } from "../../composables/useTheme";
import IconButton from "../base/IconButton.vue";

const { useDarkMode, toggleDarkMode } = useTheme();

const themeIcon = computed(() => {
  if (useDarkMode.value) {
    return Sun;
  } else {
    return Moon;
  }
});

const buttonClasses = [
  "bg-violet-400",
  "dark:bg-orange-300",
  "hover:bg-violet-500",
  "dark:hover:bg-orange-200",
];

const iconClasses = [
  "text-white",
  "fill-white",
  "dark:text-gray-700",
  "dark:fill-gray-700",
];
</script>

<template>
  <IconButton
    :icon="themeIcon"
    :onClick="toggleDarkMode"
    :iconClasses="iconClasses"
    :buttonClasses="buttonClasses"
    dontShowBorder
  />
</template>
