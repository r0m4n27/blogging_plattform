<script setup lang="ts">
import type { SVGProps } from "lucide-vue-next";
import type { FunctionalComponent } from "vue";

// Type extracted from the lucide icon package
export type Icon = (props: SVGProps) => FunctionalComponent<SVGProps>;

interface IconButtonProps {
  icon: Icon;
  onClick: () => void;
}

defineProps<IconButtonProps>();
</script>

<template>
  <button @click="onClick" class="button">
    <component :is="icon" class="text-gray-700 text-base w-6 h-6" />
  </button>
</template>

<style scoped>
.button {
  @apply p-2 bg-white hover:bg-gray-100;

  @apply rounded-md border border-gray-200;
}
</style>
