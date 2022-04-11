<script setup lang="ts">
import Button from "../base/Button.vue";
import IconButton from "../base/IconButton.vue";
import { Menu, X } from "lucide-vue-next";
import ThemeButton from "./ThemeButton.vue";
import { computed } from "vue";

interface RightNavBarPartProps {
  onMenuClick: () => void;
  menuExpanded: boolean;
}

const props = defineProps<RightNavBarPartProps>();

const menuIcon = computed(() => (props.menuExpanded ? X : Menu));
</script>

<template>
  <div class="flex flex-row space-x-2 md:space-x-4 align-middle">
    <ThemeButton />

    <Button label="Categories" :onClick="() => ({})" class="hidden md:block" />
    <Button label="Archive" :onClick="() => ({})" class="hidden md:block" />

    <IconButton :icon="menuIcon" :onClick="onMenuClick" class="md:hidden" />
  </div>
</template>
