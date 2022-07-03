<script setup lang="ts">
import VBox from "@/components/base/layout/VBox.vue";
import { contentColorConfig } from "@/config/content/color";
</script>

<template>
  <VBox height="px" :background-color="contentColorConfig.border" />
</template>
