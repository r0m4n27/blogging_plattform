<script setup lang="ts">
import VButton from "../base/VButton.vue";
import VIconButton from "../base/VIconButton.vue";
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

    <VButton label="Categories" :onClick="() => ({})" class="hidden md:block" />
    <VButton label="Archive" :onClick="() => ({})" class="hidden md:block" />

    <VIconButton :icon="menuIcon" :onClick="onMenuClick" class="md:hidden" />
  </div>
</template>
