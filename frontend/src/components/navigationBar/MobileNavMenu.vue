<script setup lang="ts">
import NavBarDivider from "./NavBarDivider.vue";
import VColumn from "../base/layout/VColumn.vue";
import VBox from "../base/layout/VBox.vue";
import VHeading from "../base/text/VHeading.vue";
import type { NavigationDestination } from "./navDestination";
import VLink from "../base/VLink.vue";
import { contentSpacingConfig } from "@/config/content/spacing";
import { contentColorConfig } from "@/config/content/color";

interface MobileNavMenuProps {
  destinations: NavigationDestination[];
}

defineProps<MobileNavMenuProps>();
</script>

<template>
  <VBox :hidden="{ sm: false, md: true }">
    <VColumn
      :padding="contentSpacingConfig.md"
      :gap="contentSpacingConfig.md"
      :background-color="contentColorConfig.highlightedBg"
    >
      <VLink
        v-for="destination in destinations"
        :key="destination.label"
        :to="destination.to"
        :replace="destination.replace"
        :color="contentColorConfig.mutedFgWithHover"
      >
        <VHeading size="md" is="span">
          {{ destination.label }}
        </VHeading>
      </VLink>
    </VColumn>

    <NavBarDivider />
  </VBox>
</template>
