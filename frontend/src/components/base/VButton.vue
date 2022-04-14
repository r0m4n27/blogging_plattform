<script setup lang="ts">
interface ButtonProps {
  label: string;
  onClick: () => void;
}

defineProps<ButtonProps>();
</script>

<template>
  <button @click="onClick" class="button">
    {{ label }}
  </button>
</template>

<style scoped>
/* .button {
  @apply py-2 px-4 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700;

  @apply rounded-md border border-gray-200 dark:border-blue-300;

  @apply font-semibold text-gray-700 dark:text-blue-300 text-base;
} */
</style>
