<script setup lang="ts">
import { useVisitorPageLayoutState } from "@/composables/pages/layout/visitorPageLayout";
import BaseLayout from "@/components/layout/BaseLayout.vue";
import { RouterView } from "vue-router";

const { footerLinks, navBarDestinations, headingDestination } =
  useVisitorPageLayoutState();
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
