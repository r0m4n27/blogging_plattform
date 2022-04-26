<script setup lang="ts">
import VColumn from "../base/layout/VColumn.vue";
import NavigationBar from "../navigationBar/NavigationBar.vue";
import { mockSiteConfig } from "@/api/siteConfig";
import VContainer from "../base/layout/VContainer.vue";
import type { Responsive } from "@/lib/responsive";
import type { ContainerSize } from "@/styling/props/containerProps";
import { contentSpacingConfig } from "@/config/content/spacing";

interface UserPageLayoutProps {
  containerSize?: Responsive<ContainerSize>;
}

withDefaults(defineProps<UserPageLayoutProps>(), {
  containerSize: "lg",
});
</script>

<template>
  <VColumn :gap="{ sm: contentSpacingConfig.xs, md: contentSpacingConfig.sm }">
    <NavigationBar
      :title="mockSiteConfig.blogTitle"
      :logo-url="mockSiteConfig.logoUrl"
    />

    <VContainer :size="containerSize">
      <slot />
    </VContainer>
  </VColumn>
</template>
