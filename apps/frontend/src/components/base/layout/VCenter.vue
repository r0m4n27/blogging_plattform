<script setup lang="ts">
import { systemProps } from "@blog/frontend/styling/props/systemProps";
import VBox from "./VBox.vue";

const props = defineProps(systemProps);
</script>

<template>
  <VBox class="center" v-bind="props">
    <slot />
  </VBox>
</template>
<style scoped>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
