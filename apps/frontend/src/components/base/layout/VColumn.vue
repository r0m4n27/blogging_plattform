<script setup lang="ts">
import { flexProps } from "@blog/frontend/styling/props/flexProps";
import { systemProps } from "@blog/frontend/styling/props/systemProps";
import VStack from "./VStack.vue";

const props = defineProps({
  ...flexProps,
  ...systemProps,
});
</script>

<template>
  <VStack direction="column" v-bind="props">
    <slot />
  </VStack>
</template>
