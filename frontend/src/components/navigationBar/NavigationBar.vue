<script setup lang="ts">
import { ref } from "vue";

import LeftNavBarPart from "./LeftNavBarPart.vue";
import RightNavBarPart from "./RightNavBarPart.vue";
import MobileNavMenu from "./MobileNavMenu.vue";
import NavBarDivider from "./NavBarDivider.vue";
import VRow from "../base/layout/VRow.vue";
import VContainer from "../base/layout/VContainer.vue";
import type { NavigationDestination } from "@/lib/navigation/navDestination";

interface NavBarProps {
  title: string;
  logoUrl: string;
}

defineProps<NavBarProps>();

const menuExpanded = ref(false);

const toggleMenu = () => {
  menuExpanded.value = !menuExpanded.value;
};

const destinations: NavigationDestination[] = [
  {
    label: "Categories",
    to: "/categories",
  },
  {
    label: "Archive",
    to: "/archive",
  },
];
</script>

<template>
  <nav>
    <VContainer :padding="3" size="lg">
      <VRow justify="space-between">
        <LeftNavBarPart :title="title" :logo-url="logoUrl" />
        <RightNavBarPart
          :onMenuClick="toggleMenu"
          :menu-expanded="menuExpanded"
          :destinations="destinations"
        />
      </VRow>
    </VContainer>

    <NavBarDivider />
    <MobileNavMenu v-if="menuExpanded" :destinations="destinations" />
  </nav>
</template>
