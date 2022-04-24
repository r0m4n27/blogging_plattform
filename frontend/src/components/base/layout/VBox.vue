<script setup lang="ts">
import { createSystemPropsCss, systemProps } from "@/styling/props/systemProps";

const props = defineProps(systemProps);
</script>

<template>
  <div :class="createSystemPropsCss(props)">
    <slot />
  </div>
</template>
