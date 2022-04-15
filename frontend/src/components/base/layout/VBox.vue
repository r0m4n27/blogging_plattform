<script setup lang="ts">
import { createSystemPropsCss, type SystemProps } from "@/lib/base/systemProps";

interface VBoxProps {
  padding?: SystemProps["padding"];
  margin?: SystemProps["padding"];
}

const props = defineProps<VBoxProps>();
</script>

<template>
  <div :class="createSystemPropsCss(props)">
    <slot />
  </div>
</template>
