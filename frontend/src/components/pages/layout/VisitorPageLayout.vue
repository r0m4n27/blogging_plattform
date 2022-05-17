<script setup lang="ts">
import { useVisitorPageLayoutState } from "@/composables/pages/layout/visitorPageLayout";
import BasePageLayout from "@/components/common/layout/BasePageLayout.vue";
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
