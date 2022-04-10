<script setup lang="ts">
import Button from "../base/Button.vue";
import IconButton from "../base/IconButton.vue";
import { Menu, X } from "lucide-vue-next";

interface RightNavBarPartProps {
  onMenuClick: () => void;
  menuExpanded: boolean;
}

defineProps<RightNavBarPartProps>();
</script>

<template>
  <div class="flex flex-row space-x-2 md:space-x-4 align-middle">
    <Button label="Categories" :onClick="() => ({})" class="hidden md:block" />
    <Button label="Archive" :onClick="() => ({})" class="hidden md:block" />

    <IconButton :onClick="onMenuClick" class="md:hidden">
      <X v-if="menuExpanded" />
      <Menu v-else />
    </IconButton>
  </div>
</template>
