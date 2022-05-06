<script setup lang="ts">
import VColumn from "../base/layout/VColumn.vue";
import NavigationBar from "../navigationBar/NavigationBar.vue";
import VContainer from "../base/layout/VContainer.vue";
import type { Responsive } from "@/lib/responsive";
import type { ContainerSize } from "@/styling/props/containerProps";
import { contentSpacingConfig } from "@/config/content/spacing";
import PageFooter from "../footer/PageFooter.vue";
import { useAuthorPageLayoutState } from "@/composables/useAuthorPageLayoutState";

interface AuthorPageLayoutProps {
  containerSize?: Responsive<ContainerSize>;
}

withDefaults(defineProps<AuthorPageLayoutProps>(), {
  containerSize: "lg",
});

const { footerLinks, blogTitle, logoUrl, navBarDestinations } =
  useAuthorPageLayoutState();
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
    />

    <VContainer :size="containerSize" width="full" :style="{ flexGrow: 1 }">
      <slot />
    </VContainer>

    <PageFooter :links="footerLinks" />
  </VColumn>
</template>
