<script setup lang="ts">
import VColumn from "../base/layout/VColumn.vue";
import NavigationBar from "../navigationBar/NavigationBar.vue";
import { mockSiteConfig } from "@/api/siteConfig";
import { defaultContentSpacing } from "@/config/content/spacing";
import VContainer from "../base/layout/VContainer.vue";
</script>

<template>
  <VColumn :gap="defaultContentSpacing">
    <NavigationBar
      :title="mockSiteConfig.blogTitle"
      :logo-url="mockSiteConfig.logoUrl"
    />

    <VContainer size="lg">
      <slot />
    </VContainer>
  </VColumn>
</template>
