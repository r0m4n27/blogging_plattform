<script setup lang="ts">
import { useAuthorPageLayoutState } from "@/composables/pages/layout/authorPageLayout";
import BaseLayout from "@/components/layout/BaseLayout.vue";
import { RouterView } from "vue-router";

const { footerLinks, navBarDestinations, headingDestination } =
  useAuthorPageLayoutState();
</script>

<template>
  <BaseLayout
    :nav-bar-destinations="navBarDestinations"
    :footer-links="footerLinks"
    :heading-destination="headingDestination"
  >
    <RouterView />
  </BaseLayout>
</template>
