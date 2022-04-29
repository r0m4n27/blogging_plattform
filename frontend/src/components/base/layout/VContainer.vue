<script setup lang="ts">
import { systemProps } from "@/styling/props/systemProps";
import VBox from "./VBox.vue";
import {
  containerProps,
  createContainerPropsCss,
} from "@/styling/props/containerProps";

const props = defineProps({
  ...systemProps,
  ...containerProps,
});
</script>

<template>
  <VBox v-bind="props" :class="createContainerPropsCss(props)">
    <slot />
  </VBox>
</template>
