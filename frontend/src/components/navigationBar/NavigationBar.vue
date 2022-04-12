<script setup lang="ts">
import { ref } from "vue";

import LeftNavBarPart from "./LeftNavBarPart.vue";
import RightNavBarPart from "./RightNavBarPart.vue";
import MobileNavMenu from "./MobileNavMenu.vue";
import NavBarDivider from "./NavBarDivider.vue";

interface NavBarProps {
  title: string;
  logoUrl: string;
}

defineProps<NavBarProps>();

const menuExpanded = ref(false);

const toggleMenu = () => {
  menuExpanded.value = !menuExpanded.value;
};
</script>

<template>
  <nav>
    <div
      class="md:container md:mx-auto p-3 flex flex-row justify-between items-center"
    >
      <LeftNavBarPart :title="title" :logo-url="logoUrl" />
      <RightNavBarPart
        :onMenuClick="toggleMenu"
        :menu-expanded="menuExpanded"
      />
    </div>
    <NavBarDivider />
    <MobileNavMenu v-if="menuExpanded" />
  </nav>
</template>
