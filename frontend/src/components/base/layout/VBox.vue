<script setup lang="ts">
import {
  createSystemPropsCss,
  type SystemProps,
} from "@/lib/base/props/systemProps";

interface VBoxProps {
  padding?: SystemProps["padding"];
  margin?: SystemProps["margin"];

  color?: SystemProps["color"];
  backgroundColor?: SystemProps["backgroundColor"];

  showBorder?: SystemProps["showBorder"];
  borderRadius?: SystemProps["borderRadius"];
  borderColor?: SystemProps["borderColor"];

  height?: SystemProps["height"];
  width?: SystemProps["width"];
}

const props = defineProps<VBoxProps>();
</script>

<template>
  <div :class="createSystemPropsCss(props)">
    <slot />
  </div>
</template>
