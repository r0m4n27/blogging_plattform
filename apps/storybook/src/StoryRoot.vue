<script setup lang="ts">
import { cx } from "@emotion/css";
import { globalContentConfig } from "@blog/frontend/config/content/global";
import { createSystemPropsCss } from "@blog/frontend/styling/props/systemProps";
import { createTextPropsCss } from "@blog/frontend/styling/props/textProps";
import { computed } from "vue";

const rootStyle = computed(() =>
  createSystemPropsCss({
    padding: 8,
  }),
);

const className = computed(() =>
  cx(
    createTextPropsCss(globalContentConfig),
    createSystemPropsCss(globalContentConfig),
    rootStyle.value,
  ),
);
</script>

<template>
  <div :class="className">
    <slot />
  </div>
</template>
