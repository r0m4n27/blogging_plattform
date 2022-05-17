<script setup lang="ts">
import VColumn from "../base/layout/VColumn.vue";
import NavigationBar from "@/components/common/navigationBar/NavigationBar.vue";
import VContainer from "../base/layout/VContainer.vue";
import { contentSpacingConfig } from "@/config/content/spacing";
import PageFooter from "@/components/common/footer/PageFooter.vue";
import { useSiteConfig } from "@/composables/useSiteConfig";
import { storeToRefs } from "pinia";
import type { NavigationDestination } from "@/components/common/navigationBar/navDestination";
import type { FooterLink } from "@/components/common/footer/footerLink";
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
