<script setup lang="ts">
import LeftNavBarPart from "./LeftNavBarPart.vue";
import RightNavBarPart from "./RightNavBarPart.vue";
import MobileNavMenu from "./MobileNavMenu.vue";
import VRow from "../base/layout/VRow.vue";
import VContainer from "../base/layout/VContainer.vue";
import { contentSpacingConfig } from "@/config/content/spacing";
import VBox from "../base/layout/VBox.vue";
import { useNavBarState } from "@/composables/useNavBarState";
import ContentDivider from "../util/ContentDivider.vue";

interface NavBarProps {
  title: string;
  logoUrl: string;
}

defineProps<NavBarProps>();

const { menuExpanded, toggleMenu, destinations } = useNavBarState();
</script>

<template>
  <VBox width="full" is="nav">
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

    <ContentDivider />
    <MobileNavMenu v-if="menuExpanded" :destinations="destinations" />
  </VBox>
</template>
