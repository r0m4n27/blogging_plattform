<script setup lang="ts">
import VBox from "../base/layout/VBox.vue";
import { contentColorConfig } from "@/config/content/color";
</script>

<template>
  <VBox height="px" :background-color="contentColorConfig.border" />
</template>
