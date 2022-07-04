<script setup lang="ts">
import VGrid from "@blog/frontend/components/base/layout/VGrid.vue";
import VColumn from "@blog/frontend/components/base/layout/VColumn.vue";
import VHeading from "@blog/frontend/components/base/text/VHeading.vue";
import VBox from "@blog/frontend/components/base/layout/VBox.vue";
import type { Responsive } from "@blog/frontend/lib/responsive";
import { defaultContentSpacing } from "@blog/frontend/config/content/spacing";

// Generic summary list layout
// Where the specific items can be inserted into the slot

interface SummaryListProps {
  title: string;
  showTitleOnDesktop?: boolean;
  columns: Responsive<number>;
}

withDefaults(defineProps<SummaryListProps>(), {
  showTitleOnDesktop: false,
});
</script>

<template>
  <VColumn :padding="defaultContentSpacing" :gap="defaultContentSpacing">
    <VBox :hidden="{ sm: false, md: !showTitleOnDesktop }">
      <VHeading is="h1" size="xl">
        {{ title }}
      </VHeading>
    </VBox>

    <VGrid :columns="columns" :gap="defaultContentSpacing" width="full">
      <slot />
    </VGrid>
  </VColumn>
</template>
