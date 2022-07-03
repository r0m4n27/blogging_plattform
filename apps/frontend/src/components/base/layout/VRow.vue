<script setup lang="ts">
import { systemProps } from "@blog/frontend/styling/props/systemProps";
import VStack from "./VStack.vue";
import { flexProps } from "@blog/frontend/styling/props/flexProps";

const props = defineProps({
  ...flexProps,
  ...systemProps,
});
</script>

<template>
  <VStack direction="row" v-bind="props">
    <slot />
  </VStack>
</template>
