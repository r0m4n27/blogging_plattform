<script setup lang="ts">
import {
  createSystemPropsCss,
  systemProps,
} from "@blog/frontend/styling/props/systemProps";
import { createTextPropsCss, textProps } from "@blog/frontend/styling/props/textProps";
import { cx } from "@emotion/css";
import { computed } from "vue";

const props = defineProps({
  ...systemProps,
  ...textProps,
});

const className = computed(() =>
  cx(createTextPropsCss(props), createSystemPropsCss(props)),
);
</script>

<template>
  <component :is="is" :class="className">
    <slot />
  </component>
</template>
