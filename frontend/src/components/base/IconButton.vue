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
    <component :is="icon" class="icon" />
  </button>
</template>

<style scoped>
.button {
  @apply p-2 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700;

  @apply rounded-md border border-gray-200 dark:border-blue-300;
}

.icon {
  @apply w-6 h-6;

  @apply text-gray-700 dark:text-blue-300 text-base;
}
</style>
