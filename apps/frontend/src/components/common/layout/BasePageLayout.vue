<script setup lang="ts">
import VColumn from "@blog/frontend/components/base/layout/VColumn.vue";
import NavigationBar from "@blog/frontend/components/common/navigationBar/NavigationBar.vue";
import VContainer from "@blog/frontend/components/base/layout/VContainer.vue";
import { contentSpacingConfig } from "@blog/frontend/config/content/spacing";
import PageFooter from "@blog/frontend/components/common/footer/PageFooter.vue";
import { useSiteConfig } from "@blog/frontend/composables/store/siteConfig";
import { storeToRefs } from "pinia";
import type { NavigationDestination } from "@blog/frontend/components/common/navigationBar/navDestination";
import type { FooterLink } from "@blog/frontend/components/common/footer/footerLink";
import type { RouteLocationRaw } from "vue-router";

interface BasePageLayoutProps {
  navBarDestinations: NavigationDestination[];
  footerLinks: FooterLink[];
  headingDestination: RouteLocationRaw;
}

defineProps<BasePageLayoutProps>();

const { blogTitle, logoUrl } = storeToRefs(useSiteConfig());
</script>

<template>
  <VColumn
    :gap="{ sm: contentSpacingConfig.xs, md: contentSpacingConfig.sm }"
    is="main"
    height="fullVH"
  >
    <NavigationBar
      :title="blogTitle"
      :logo-url="logoUrl"
      :destinations="navBarDestinations"
      :heading-destination="headingDestination"
    />

    <VContainer size="lg" width="full" :style="{ flexGrow: 1 }">
      <slot />
    </VContainer>

    <PageFooter :links="footerLinks" />
  </VColumn>
</template>
