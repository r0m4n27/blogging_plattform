<script setup lang="ts">
import { systemProps } from "@/styling/props/systemProps";
import { flexProps } from "@/styling/flex";
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
