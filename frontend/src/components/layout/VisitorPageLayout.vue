<script setup lang="ts">
import type { Responsive } from "@/lib/responsive";
import type { ContainerSize } from "@/styling/props/containerProps";
import { useVisitorPageLayoutState } from "@/composables/useVisitorPageLayoutState";
import BaseLayout from "./BaseLayout.vue";

interface VisitorPageLayoutProps {
  containerSize?: Responsive<ContainerSize>;
}

withDefaults(defineProps<VisitorPageLayoutProps>(), {
  containerSize: "lg",
});

const { footerLinks, navBarDestinations, headingDestination } =
  useVisitorPageLayoutState();
</script>

<template>
  <BaseLayout
    :nav-bar-destinations="navBarDestinations"
    :footer-links="footerLinks"
    :heading-destination="headingDestination"
  >
    <slot />
  </BaseLayout>
</template>
