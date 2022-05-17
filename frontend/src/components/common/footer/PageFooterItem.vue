<script setup lang="ts">
import VText from "@/components/base/text/VText.vue";
import { contentColorConfig } from "@/config/content/color";

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
