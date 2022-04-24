<script setup lang="ts">
import { systemProps } from "@/styling/props/systemProps";
import VStack from "./VStack.vue";
import { flexProps } from "@/styling/flex";

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
