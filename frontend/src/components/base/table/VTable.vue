<script setup lang="ts">
import { systemProps } from "@/styling/props/systemProps";
import VBox from "../layout/VBox.vue";

const props = defineProps(systemProps);
</script>
<template>
  <VBox v-bind="props" is="table">
    <slot />
  </VBox>
</template>
