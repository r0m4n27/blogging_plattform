<script setup lang="ts">
import VHeading from "@/components/base/text/VHeading.vue";
import TextButton from "@/components/base/button/TextButton.vue";
import VRow from "@/components/base/layout/VRow.vue";
import { greenButtonBg, greenButtonFg } from "@/config/content/color";
</script>

<template>
  <VRow justify="space-between" width="full">
    <VHeading size="lg" is="h1"> Categories </VHeading>

    <TextButton
      label="New Category"
      :show-border="false"
      :background-color="greenButtonBg"
      :color="greenButtonFg"
    />
  </VRow>
</template>
