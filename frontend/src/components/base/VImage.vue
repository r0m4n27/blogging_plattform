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
  isBase64: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
});

const src = computed(() =>
  props.isBase64 ? `data:image/png;base64,${props.src}` : props.src
);
</script>

<template>
  <img :class="createSystemPropsCss(props)" :src="src" :alt="alt" />
</template>
