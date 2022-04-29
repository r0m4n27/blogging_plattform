<script setup lang="ts">
import { createSystemPropsCss, systemProps } from "@/styling/props/systemProps";
import type { PropType } from "vue";

const props = defineProps({
  ...systemProps,
  src: {
    type: String as PropType<string>,
    required: true,
  },
  alt: {
    type: String as PropType<string>,
  },
});
</script>

<template>
  <img :class="createSystemPropsCss(props)" :src="src" :alt="alt" />
</template>
