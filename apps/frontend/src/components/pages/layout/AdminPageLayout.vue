<script setup lang="ts">
import BasePageLayout from "@blog/frontend/components/common/layout/BasePageLayout.vue";
import { RouterView } from "vue-router";
import { useAdminPageLayoutState } from "@blog/frontend/composables/pages/layout/adminPageLayout";

const { footerLinks, navBarDestinations, headingDestination } =
  useAdminPageLayoutState();
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
