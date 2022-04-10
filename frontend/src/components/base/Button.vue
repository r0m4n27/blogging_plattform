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
.button {
  @apply py-2 px-4 bg-white hover:bg-gray-100;

  @apply rounded-md border border-gray-200;

  @apply font-semibold text-gray-700 text-base;
}
</style>
