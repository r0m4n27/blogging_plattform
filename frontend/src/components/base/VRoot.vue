<script setup lang="ts">
import { cx } from "@emotion/css";
import { globalContentConfig } from "@/config/content/global";
import { createSystemPropsCss } from "@/styling/props/systemProps";
import { createTextPropsCss } from "@/styling/props/textProps";
import { computed } from "vue";

// This is a bnit of a ugly solution for applying a global style
// but it is the only one that was working for me.

// Emotion has a injectGlobal fuction that applies a style globally
// but doesn't work in a vue component. I also tried to add the classname
// to the body but this didn't work because of the limitations where inject
// can be run. For example it isn't realy possible to call inject when
// using the watch or watchEffection function.

const className = computed(() =>
  cx(
    createTextPropsCss(globalContentConfig),
    createSystemPropsCss(globalContentConfig)
  )
);
</script>

<template>
  <main :class="className" class="main">
    <slot />
  </main>
</template>

<style scoped>
.main {
  min-height: 100vh;
}
</style>
