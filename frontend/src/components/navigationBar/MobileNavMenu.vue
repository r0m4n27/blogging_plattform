<script setup lang="ts">
import NavBarDivider from "./NavBarDivider.vue";
import VColumn from "../base/layout/VColumn.vue";
import { getColor } from "@/config/theme/colors";
import VBox from "../base/layout/VBox.vue";
import VHeading from "../base/text/VHeading.vue";
import type { NavigationDestination } from "./navDestination";
import VLink from "../base/VLink.vue";
import { contentSpacingConfig } from "@/config/content/spacing";

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
      :background-color="{
        light: getColor('gray', 50),
        dark: getColor('gray', 800),
      }"
    >
      <VLink
        v-for="destination in destinations"
        :key="destination.label"
        :to="destination.to"
        :replace="destination.replace"
        :color="{
          light: getColor('gray', 700),
          dark: getColor('gray', 300),
        }"
      >
        <VHeading size="md" as="span">
          {{ destination.label }}
        </VHeading>
      </VLink>
    </VColumn>

    <NavBarDivider />
  </VBox>
</template>
