<script setup lang="ts">
import { Menu, X } from "lucide-vue-next";
import ThemeButton from "./ThemeButton.vue";
import { computed } from "vue";
import TextButton from "../base/button/TextButton.vue";
import IconButton from "../base/button/IconButton.vue";
import VRow from "../base/layout/VRow.vue";
import type { NavigationDestination } from "@/lib/navigation/navDestination";
import VLink from "../base/VLink.vue";

interface RightNavBarPartProps {
  onMenuClick: () => void;
  menuExpanded: boolean;
  destinations: NavigationDestination[];
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
    <VLink
      v-for="destination in destinations"
      :key="destination.label"
      :to="destination.to"
      :replace="destination.replace"
    >
      <TextButton :label="destination.label" :hidden="textButtonHiddenProp" />
    </VLink>

    <ThemeButton />
    <IconButton
      :icon="menuIcon"
      @click="onMenuClick"
      :hidden="{ sm: false, md: true }"
    />
  </VRow>
</template>
