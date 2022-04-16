<script setup lang="ts">
import VButton from "./VButton.vue";
import VText from "../text/VText.vue";

interface TextButtonProps {
  label: string;
}

defineProps<TextButtonProps>();
</script>

<template>
  <VButton :padding="{ x: 4, y: 2 }">
    <VText as="span" weight="semibold" line-height="6" size="md">
      {{ label }}
    </VText>
  </VButton>
</template>
