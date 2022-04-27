<script setup lang="ts">
import VRow from "../base/layout/VRow.vue";
import VHeading from "../base/text/VHeading.vue";
import VImage from "../base/VImage.vue";
import { routeDestinations } from "@/lib/router";
import VLink from "../base/VLink.vue";
import { contentSpacingConfig } from "@/config/content/spacing";

defineProps<{
  title: string;
  logoUrl: string;
}>();
</script>

<template>
  <VRow :gap="contentSpacingConfig.md">
    <VLink :to="routeDestinations.home">
      <VImage
        :src="logoUrl"
        border-radius="full"
        :height="12"
        :width="12"
        display="inherit"
      />
    </VLink>

    <VLink :to="routeDestinations.home" :hidden="{ sm: true, md: false }">
      <VHeading is="span" size="lg">
        {{ title }}
      </VHeading>
    </VLink>
  </VRow>
</template>
