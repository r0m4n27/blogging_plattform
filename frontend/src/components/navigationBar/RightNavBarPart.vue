<script setup lang="ts">
import { Menu, X } from "lucide-vue-next";
import ThemeButton from "./ThemeButton.vue";
import { computed } from "vue";
import TextButton from "../base/button/TextButton.vue";
import IconButton from "../base/button/IconButton.vue";

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

    <TextButton label="Categories" />
    <!--"hidden md:block"-->
    <TextButton label="Archive" />
    <!--"hidden md:block"-->

    <IconButton :icon="menuIcon" @click="onMenuClick" />
  </div>
</template>
