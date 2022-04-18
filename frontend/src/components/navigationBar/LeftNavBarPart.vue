<script setup lang="ts">
import VRow from "../base/layout/VRow.vue";
import VHeading from "../base/text/VHeading.vue";
import VImage from "../base/VImage.vue";
import { routeDestinations } from "@/lib/router";
import VLink from "../base/VLink.vue";

defineProps<{
  title: string;
  logoUrl: string;
}>();
</script>

<template>
  <VRow :gap="4">
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
      <VHeading as="span" size="lg">
        {{ title }}
      </VHeading>
    </VLink>
  </VRow>
</template>
