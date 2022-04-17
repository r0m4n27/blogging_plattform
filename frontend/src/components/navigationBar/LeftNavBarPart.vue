<script setup lang="ts">
import VRow from "../base/layout/VRow.vue";
import VHeading from "../base/text/VHeading.vue";
import VImage from "../base/VImage.vue";
import VBox from "../base/layout/VBox.vue";
import { RouterLink } from "vue-router";
import { routeDestinations } from "@/lib/router";

defineProps<{
  title: string;
  logoUrl: string;
}>();
</script>

<template>
  <VRow :gap="4">
    <RouterLink :to="routeDestinations.home">
      <VImage :src="logoUrl" :height="12" :width="12" border-radius="full" />
    </RouterLink>

    <VBox :hidden="{ sm: true, md: false }">
      <RouterLink :to="routeDestinations.home">
        <VHeading as="span" size="lg">
          {{ title }}
        </VHeading>
      </RouterLink>
    </VBox>
  </VRow>
</template>
