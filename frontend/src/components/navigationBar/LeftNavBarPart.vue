<script setup lang="ts">
defineProps<{
  title: string;
  logoUrl: string;
}>();
</script>

<template>
  <div class="flex flex-row space-x-4">
    <img :src="logoUrl" class="w-12 h-12 rounded-full" />

    <div
      class="text-3xl text-gray-900 font-bold font-sans self-center hidden md:block"
    >
      {{ title }}
    </div>
  </div>
</template>
