<script setup lang="ts">
import VColumn from "@blog/frontend/components/base/layout/VColumn.vue";
import VBox from "@blog/frontend/components/base/layout/VBox.vue";
import VHeading from "@blog/frontend/components/base/text/VHeading.vue";
import type { NavigationDestination } from "./navDestination";
import VLink from "@blog/frontend/components/base/VLink.vue";
import { contentSpacingConfig } from "@blog/frontend/config/content/spacing";
import { contentColorConfig } from "@blog/frontend/config/content/color";
import ContentDivider from "@blog/frontend/components/common/util/ContentDivider.vue";

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

    <ContentDivider />
  </VBox>
</template>
