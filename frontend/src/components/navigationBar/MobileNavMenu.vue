<script setup lang="ts">
import NavBarDivider from "./NavBarDivider.vue";
import VColumn from "../base/layout/VColumn.vue";
import { getColor } from "@/config/theme/colors";
import VBox from "../base/layout/VBox.vue";
import VHeading from "../base/text/VHeading.vue";
import type { NavigationDestination } from "@/lib/navigation/navDestination";

interface MobileNavMenuProps {
  destinations: NavigationDestination[];
}

defineProps<MobileNavMenuProps>();
</script>

<template>
  <VBox :hidden="{ sm: false, md: true }">
    <VColumn
      :padding="{ x: 0, y: 4 }"
      :gap="4"
      :background-color="{
        light: getColor('gray', 50),
        dark: getColor('gray', 800),
      }"
      :color="{
        light: getColor('gray', 700),
        dark: getColor('gray', 300),
      }"
    >
      <RouterLink
        v-for="destination in destinations"
        :key="destination.label"
        :to="destination.to"
        :replace="destination.replace"
      >
        <VHeading size="md" as="span">
          {{ destination.label }}
        </VHeading>
      </RouterLink>
    </VColumn>

    <NavBarDivider />
  </VBox>
</template>
