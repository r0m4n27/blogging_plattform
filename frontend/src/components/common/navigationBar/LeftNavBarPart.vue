<script setup lang="ts">
import VRow from "@/components/base/layout/VRow.vue";
import VHeading from "@/components/base/text/VHeading.vue";
import VImage from "@/components/base/VImage.vue";
import VLink from "@/components/base/VLink.vue";
import { contentSpacingConfig } from "@/config/content/spacing";
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
        is-base64
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
