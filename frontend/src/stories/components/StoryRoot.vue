<script setup lang="ts">
import { cx } from "@emotion/css";
import { globalContentConfig } from "@/config/content/global";
import { createSystemPropsCss } from "@/styling/props/systemProps";
import { createTextPropsCss } from "@/styling/props/textProps";
import { computed } from "vue";

const rootStyle = computed(() =>
  createSystemPropsCss({
    padding: 8,
  })
);

const className = computed(() =>
  cx(
    createTextPropsCss(globalContentConfig),
    createSystemPropsCss(globalContentConfig),
    rootStyle.value
  )
);
</script>

<template>
  <div :class="className">
    <slot />
  </div>
</template>
