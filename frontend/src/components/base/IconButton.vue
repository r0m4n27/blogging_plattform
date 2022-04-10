<script setup lang="ts">
interface IconButtonProps {
  onClick: () => void;
}

defineProps<IconButtonProps>();
</script>

<template>
  <button @click="onClick" class="button">
    <slot></slot>
  </button>
</template>

<style scoped>
.button {
  @apply p-2 bg-white hover:bg-gray-100;

  @apply rounded-md border border-gray-200;

  @apply text-gray-700 text-base;
}
</style>
