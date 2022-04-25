<script setup lang="ts">
import { ref } from "vue";

import LeftNavBarPart from "./LeftNavBarPart.vue";
import RightNavBarPart from "./RightNavBarPart.vue";
import MobileNavMenu from "./MobileNavMenu.vue";
import NavBarDivider from "./NavBarDivider.vue";
import VRow from "../base/layout/VRow.vue";
import VContainer from "../base/layout/VContainer.vue";
import type { NavigationDestination } from "./navDestination";
import { routeDestinations } from "@/lib/router";
import { contentSpacingConfig } from "@/config/content/spacing";
import VBox from "../base/layout/VBox.vue";

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
    to: routeDestinations.categories,
  },
  {
    label: "Archive",
    to: routeDestinations.archive,
  },
];
</script>

<template>
  <VBox width="full">
    <VContainer :padding="contentSpacingConfig.xs" size="lg">
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
  </VBox>
</template>
