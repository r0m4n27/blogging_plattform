<script setup lang="ts">
const menuItems = ["Categories", "Archive"];
</script>

<template>
  <div class="md:hidden">
    <div class="flex flex-col py-4 space-y-4 items-center bg-gray-50">
      <a v-for="item in menuItems" :key="item" class="menuItem" href="">
        {{ item }}
      </a>
    </div>
    <div class="h-px bg-gray-200" />
  </div>
</template>

<style scoped>
.menuItem {
  @apply text-gray-700 font-bold text-2xl;
}
</style>
