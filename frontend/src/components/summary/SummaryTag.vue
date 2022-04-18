<script setup lang="ts">
import VButton from "../base/button/VButton.vue";
import VText from "../base/text/VText.vue";
import type { Category } from "@/api/category";
import VCenter from "@/components/base/layout/VCenter.vue";

interface SummaryTagProps {
  category: Category;
}

defineProps<SummaryTagProps>();
</script>

<template>
  <VButton :padding="{ x: 2, y: 0 }">
    <VCenter :height="6">
      <VText as="span" size="sm" weight="medium" line-height="5">
        {{ category.name }}
      </VText>
    </VCenter>
  </VButton>
</template>
