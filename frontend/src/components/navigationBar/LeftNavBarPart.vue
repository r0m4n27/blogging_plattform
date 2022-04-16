<script setup lang="ts">
import VRow from "../base/layout/VRow.vue";
import VHeading from "../base/text/VHeading.vue";
import VImage from "../base/VImage.vue";
import VBox from "../base/layout/VBox.vue";
defineProps<{
  title: string;
  logoUrl: string;
}>();
</script>

<template>
  <VRow :gap="4">
    <VImage :src="logoUrl" :height="12" :width="12" border-radius="full" />

    <VBox :hidden="{ sm: true, md: false }">
      <VHeading as="span" size="lg">
        {{ title }}
      </VHeading>
    </VBox>
  </VRow>
</template>
