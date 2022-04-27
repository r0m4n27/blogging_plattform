<script setup lang="ts">
import { createTextPropsCss, textProps } from "@/styling/props/textProps";

const props = defineProps(textProps);
</script>

<template>
  <component :is="is" :class="createTextPropsCss(props)">
    <slot />
  </component>
</template>
