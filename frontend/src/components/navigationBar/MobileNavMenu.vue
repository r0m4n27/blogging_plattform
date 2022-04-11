<script setup lang="ts">
const menuItems = ["Categories", "Archive"];
</script>

<template>
  <div class="md:hidden">
    <div class="mobileMenu">
      <a v-for="item in menuItems" :key="item" class="menuItem" href="">
        {{ item }}
      </a>
    </div>
    <div class="h-px bg-gray-200 dark:bg-gray-700" />
  </div>
</template>

<style scoped>
.mobileMenu {
  @apply flex flex-col py-4 space-y-4 items-center bg-gray-50 dark:bg-gray-800;
}

.menuItem {
  @apply text-gray-700 dark:text-gray-300 font-bold text-2xl;
}
</style>
