<script setup lang="ts">
import { createSystemPropsCss, systemProps } from "@/styling/props/systemProps";
import { computed, type PropType } from "vue";

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

// Somehow this doesn't want to work with svg files
// The image tag just can't render them
const modifiedSrc = computed(
  () => `/api/images/${encodeURIComponent(props.src)}`
);
</script>

<template>
  <img :class="createSystemPropsCss(props)" :src="modifiedSrc" :alt="alt" />
</template>
