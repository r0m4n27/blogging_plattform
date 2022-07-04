<script setup lang="ts">
import VText from "@blog/frontend/components/base/text/VText.vue";
import { contentColorConfig } from "@blog/frontend/config/content/color";

interface PageFooterItemProps {
  name: string;
}

defineProps<PageFooterItemProps>();
</script>
<template>
  <VText :color="contentColorConfig.mutedFgWithHover">
    {{ name }}
  </VText>
</template>
