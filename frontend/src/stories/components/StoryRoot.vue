<script setup lang="ts">
import { cx } from "@emotion/css";
import { globalContentConfig } from "@/config/content/global";
import { createSystemPropsCss } from "@/styling/props/systemProps";
import { createTextPropsCss } from "@/styling/props/textProps";
import { computed } from "vue";

const className = computed(() =>
  cx(
    createTextPropsCss(globalContentConfig),
    createSystemPropsCss(globalContentConfig)
  )
);
</script>

<template>
  <div :class="className" class="root">
    <slot />
  </div>
</template>

<style scoped>
.root {
  min-height: 100vh;
}
</style>
