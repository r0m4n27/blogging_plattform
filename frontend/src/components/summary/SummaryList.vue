<script setup lang="ts">
import VGrid from "@/components/base/layout/VGrid.vue";
import VColumn from "@/components/base/layout/VColumn.vue";
import VHeading from "@/components/base/text/VHeading.vue";
import VBox from "@/components/base/layout/VBox.vue";
import type { Responsive } from "@/lib/responsive";
import { defaultContentSpacing } from "@/config/content/spacing";

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
      <VHeading as="h2" size="2xl">
        {{ title }}
      </VHeading>
    </VBox>

    <VGrid :columns="columns" :gap="defaultContentSpacing" width="full">
      <slot />
    </VGrid>
  </VColumn>
</template>
