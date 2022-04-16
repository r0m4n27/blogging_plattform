<script setup lang="ts">
import { Menu, X } from "lucide-vue-next";
import ThemeButton from "./ThemeButton.vue";
import { computed } from "vue";
import TextButton from "../base/button/TextButton.vue";
import IconButton from "../base/button/IconButton.vue";
import VRow from "../base/layout/VRow.vue";

interface RightNavBarPartProps {
  onMenuClick: () => void;
  menuExpanded: boolean;
}

const props = defineProps<RightNavBarPartProps>();

const menuIcon = computed(() => (props.menuExpanded ? X : Menu));

const textButtonHiddenProp = {
  sm: true,
  md: false,
};
</script>

<template>
  <VRow :gap="{ sm: 2, md: 4 }">
    <TextButton label="Categories" :hidden="textButtonHiddenProp" />
    <TextButton label="Archive" :hidden="textButtonHiddenProp" />

    <ThemeButton />
    <IconButton
      :icon="menuIcon"
      @click="onMenuClick"
      :hidden="{ sm: false, md: true }"
    />
  </VRow>
</template>
