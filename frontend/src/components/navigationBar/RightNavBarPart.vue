<script setup lang="ts">
import Button from "../base/Button.vue";
import IconButton from "../base/IconButton.vue";
import { Menu } from "lucide-vue-next";
</script>

<template>
  <div class="flex flex-row space-x-2 md:space-x-4 align-middle">
    <Button label="Categories" :onClick="() => ({})" class="hidden md:block" />
    <Button label="Archive" :onClick="() => ({})" class="hidden md:block" />

    <IconButton :onClick="() => ({})" class="md:hidden">
      <Menu />
    </IconButton>
  </div>
</template>
