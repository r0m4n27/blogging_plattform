<script setup lang="ts">
import { createSystemPropsCss, systemProps } from "@/styling/props/systemProps";
import VBox from "./VBox.vue";
import {
  containerProps,
  createContainerPropsCss,
} from "@/styling/props/containerProps";
import { computed } from "vue";
import { cx } from "@emotion/css";

const props = defineProps({
  ...systemProps,
  ...containerProps,
});

const className = computed(() =>
  cx(createContainerPropsCss(props), createSystemPropsCss(props))
);
</script>

<template>
  <VBox v-bind="props" :class="className">
    <slot />
  </VBox>
</template>
