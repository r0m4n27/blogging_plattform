<script setup lang="ts">
import VRow from "@blog/frontend/components/base/layout/VRow.vue";
import VHeading from "@blog/frontend/components/base/text/VHeading.vue";
import VImage from "@blog/frontend/components/base/VImage.vue";
import VLink from "@blog/frontend/components/base/VLink.vue";
import { contentSpacingConfig } from "@blog/frontend/config/content/spacing";
import type { RouteLocationRaw } from "vue-router";

defineProps<{
  title: string;
  logoUrl: string;
  headingDestination: RouteLocationRaw;
}>();
</script>

<template>
  <VRow :gap="contentSpacingConfig.md">
    <VLink :to="headingDestination">
      <VImage
        :src="logoUrl"
        border-radius="full"
        :height="12"
        :width="12"
        display="inherit"
      />
    </VLink>

    <VLink :to="headingDestination" :hidden="{ sm: true, md: false }">
      <VHeading is="span" size="lg">
        {{ title }}
      </VHeading>
    </VLink>
  </VRow>
</template>
