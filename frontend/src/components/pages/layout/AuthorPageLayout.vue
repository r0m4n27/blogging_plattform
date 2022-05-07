<script setup lang="ts">
import type { Responsive } from "@/lib/responsive";
import type { ContainerSize } from "@/styling/props/containerProps";
import { useAuthorPageLayoutState } from "@/composables/pages/layout/authorPageLayout";
import BaseLayout from "@/components/layout/BaseLayout.vue";

interface AuthorPageLayoutProps {
  containerSize?: Responsive<ContainerSize>;
}

withDefaults(defineProps<AuthorPageLayoutProps>(), {
  containerSize: "lg",
});

const { footerLinks, navBarDestinations, headingDestination } =
  useAuthorPageLayoutState();
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
