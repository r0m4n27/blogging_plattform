<script setup lang="ts">
import VGrid from "@/components/base/layout/VGrid.vue";
import VColumn from "@/components/base/layout/VColumn.vue";
import VHeading from "@/components/base/text/VHeading.vue";
import VBox from "@/components/base/layout/VBox.vue";
import type { Responsive } from "@/styling/responsive";

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
  <VColumn :padding="{ sm: 4, md: 6 }" :gap="{ sm: 4, md: 6 }">
    <VBox :hidden="{ sm: false, md: !showTitleOnDesktop }">
      <VHeading as="h2" size="2xl">
        {{ title }}
      </VHeading>
    </VBox>

    <VGrid :columns="columns" :gap="{ sm: 4, md: 6 }" width="full">
      <slot />
    </VGrid>
  </VColumn>
</template>
