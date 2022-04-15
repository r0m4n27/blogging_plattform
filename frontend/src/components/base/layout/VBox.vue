<script setup lang="ts">
import { createSystemPropsCss, type SystemProps } from "@/lib/base/systemProps";

interface VBoxProps {
  padding?: SystemProps["padding"];
  margin?: SystemProps["margin"];

  color?: SystemProps["color"];
  backgroundColor?: SystemProps["backgroundColor"];
  borderColor?: SystemProps["borderColor"];
}

const props = defineProps<VBoxProps>();
</script>

<template>
  <div :class="createSystemPropsCss(props)">
    <slot />
  </div>
</template>
