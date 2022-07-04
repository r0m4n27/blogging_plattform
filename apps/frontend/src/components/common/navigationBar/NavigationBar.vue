<script setup lang="ts">
import LeftNavBarPart from "./LeftNavBarPart.vue";
import RightNavBarPart from "./RightNavBarPart.vue";
import MobileNavMenu from "./MobileNavMenu.vue";
import VRow from "@blog/frontend/components/base/layout/VRow.vue";
import VContainer from "@blog/frontend/components/base/layout/VContainer.vue";
import { contentSpacingConfig } from "@blog/frontend/config/content/spacing";
import VBox from "@blog/frontend/components/base/layout/VBox.vue";
import { useNavBarState } from "@blog/frontend/composables/common/navBar";
import ContentDivider from "@blog/frontend/components/common/util/ContentDivider.vue";
import type { NavigationDestination } from "./navDestination";
import type { RouteLocationRaw } from "vue-router";

interface NavBarProps {
  title: string;
  logoUrl: string;
  destinations: NavigationDestination[];
  headingDestination: RouteLocationRaw;
}

defineProps<NavBarProps>();

const { menuExpanded, toggleMenu } = useNavBarState();
</script>

<template>
  <VBox width="full" is="nav">
    <VContainer :padding="contentSpacingConfig.xs" size="lg">
      <VRow justify="space-between">
        <LeftNavBarPart
          :title="title"
          :logo-url="logoUrl"
          :heading-destination="headingDestination"
        />
        <RightNavBarPart
          @menu-click="toggleMenu"
          :menu-expanded="menuExpanded"
          :destinations="destinations"
        />
      </VRow>
    </VContainer>

    <ContentDivider />
    <MobileNavMenu v-if="menuExpanded" :destinations="destinations" />
  </VBox>
</template>
