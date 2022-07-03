<script setup lang="ts">
import { useAuthorPageLayoutState } from "@blog/frontend/composables/pages/layout/authorPageLayout";
import BasePageLayout from "@blog/frontend/components/common/layout/BasePageLayout.vue";
import { RouterView } from "vue-router";

const { footerLinks, navBarDestinations, headingDestination } =
  useAuthorPageLayoutState();
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
