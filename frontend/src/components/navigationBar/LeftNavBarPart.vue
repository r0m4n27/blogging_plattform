<script setup lang="ts">
import VRow from "../base/layout/VRow.vue";
import VHeading from "../base/text/VHeading.vue";
defineProps<{
  title: string;
  logoUrl: string;
}>();
</script>

<template>
  <VRow :gap="4">
    <img :src="logoUrl" class="w-12 h-12 rounded-full" />

    <VHeading as="span" size="lg">
      {{ title }}
    </VHeading>
  </VRow>
</template>
