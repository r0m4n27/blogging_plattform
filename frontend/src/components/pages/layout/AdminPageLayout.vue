<script setup lang="ts">
import BaseLayout from "@/components/layout/BaseLayout.vue";
import { RouterView } from "vue-router";
import { useAdminPageLayoutState } from "@/composables/pages/layout/adminPageLayout";

const { footerLinks, navBarDestinations, headingDestination } =
  useAdminPageLayoutState();
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
