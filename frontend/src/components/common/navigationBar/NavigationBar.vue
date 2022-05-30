<script setup lang="ts">
import LeftNavBarPart from "./LeftNavBarPart.vue";
import RightNavBarPart from "./RightNavBarPart.vue";
import MobileNavMenu from "./MobileNavMenu.vue";
import VRow from "@/components/base/layout/VRow.vue";
import VContainer from "@/components/base/layout/VContainer.vue";
import { contentSpacingConfig } from "@/config/content/spacing";
import VBox from "@/components/base/layout/VBox.vue";
import { useNavBarState } from "@/composables/common/navBar";
import ContentDivider from "@/components/common/util/ContentDivider.vue";
import type { NavigationDestination } from "./navDestination";
import type { RouteLocationRaw } from "vue-router";
import type { FetchedImage } from "@/composables/store/siteConfig";

interface NavBarProps {
  title: string;
  logoUrl: FetchedImage;
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
