<script setup lang="ts">
import { Moon, Sun } from "lucide-vue-next";
import { computed } from "vue";
import { provideThemeKey, Theme } from "../../composables/provideTheme";
import { injectGlobal } from "../../util/inject";
import IconButton from "../base/IconButton.vue";

const { theme, toggleTheme } = injectGlobal(provideThemeKey);

const themeIcon = computed(() => {
  if (theme.value === Theme.Light) {
    return Moon;
  } else {
    return Sun;
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
    :onClick="toggleTheme"
    :iconClasses="iconClasses"
    :buttonClasses="buttonClasses"
    dontShowBorder
  />
</template>
