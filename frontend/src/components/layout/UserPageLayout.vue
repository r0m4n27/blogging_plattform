<script setup lang="ts">
import VColumn from "../base/layout/VColumn.vue";
import NavigationBar from "../navigationBar/NavigationBar.vue";
import VContainer from "../base/layout/VContainer.vue";
import type { Responsive } from "@/lib/responsive";
import type { ContainerSize } from "@/styling/props/containerProps";
import { contentSpacingConfig } from "@/config/content/spacing";
import { useSiteConfig } from "@/composables/useSiteConfig";

interface UserPageLayoutProps {
  containerSize?: Responsive<ContainerSize>;
}

withDefaults(defineProps<UserPageLayoutProps>(), {
  containerSize: "lg",
});

const siteConfig = useSiteConfig();
console.log(siteConfig.logoUrl);
</script>

<template>
  <VColumn :gap="{ sm: contentSpacingConfig.xs, md: contentSpacingConfig.sm }">
    <NavigationBar
      :title="siteConfig.blogTitle"
      :logo-url="siteConfig.logoUrl"
    />

    <VContainer :size="containerSize" width="full">
      <slot />
    </VContainer>
  </VColumn>
</template>
