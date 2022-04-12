<script setup lang="ts">
import NavBarDivider from "./NavBarDivider.vue";

const menuItems = ["Categories", "Archive"];
</script>

<template>
  <div class="md:hidden">
    <div class="mobileMenu">
      <a v-for="item in menuItems" :key="item" class="menuItem" href="">
        {{ item }}
      </a>
    </div>
    <NavBarDivider />
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
