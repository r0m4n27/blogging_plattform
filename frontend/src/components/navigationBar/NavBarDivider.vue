<script setup lang="ts">
import VBox from "../base/layout/VBox.vue";
import { getColor } from "@/config/theme/colors";
</script>

<template>
  <VBox
    height="px"
    :background-color="{
      light: getColor('gray', 200),
      dark: getColor('gray', 700),
    }"
  />
</template>
