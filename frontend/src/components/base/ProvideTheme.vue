<script setup lang="ts">
import { provideTheme } from "../../composables/provideTheme";

// This component exists mostly for storybook
// otherwise it's a bit hard to inject the theme
// for each component that relies on it

provideTheme();
</script>

<template>
  <slot />
</template>
