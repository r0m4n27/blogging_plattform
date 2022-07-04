<script setup lang="ts">
import VBox from "@blog/frontend/components/base/layout/VBox.vue";
import { contentColorConfig } from "@blog/frontend/config/content/color";
</script>

<template>
  <VBox height="px" :background-color="contentColorConfig.border" />
</template>
