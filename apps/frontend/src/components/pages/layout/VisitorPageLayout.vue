<script setup lang="ts">
import { useVisitorPageLayoutState } from "@blog/frontend/composables/pages/layout/visitorPageLayout";
import BasePageLayout from "@blog/frontend/components/common/layout/BasePageLayout.vue";
import { RouterView } from "vue-router";

const { footerLinks, navBarDestinations, headingDestination } =
  useVisitorPageLayoutState();
</script>

<template>
  <BasePageLayout
    :nav-bar-destinations="navBarDestinations"
    :footer-links="footerLinks"
    :heading-destination="headingDestination"
  >
    <RouterView />
  </BasePageLayout>
</template>
