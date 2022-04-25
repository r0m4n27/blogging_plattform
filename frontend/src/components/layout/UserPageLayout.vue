<script setup lang="ts">
import VColumn from "../base/layout/VColumn.vue";
import NavigationBar from "../navigationBar/NavigationBar.vue";
import { mockSiteConfig } from "@/api/siteConfig";
import VContainer from "../base/layout/VContainer.vue";
</script>

<template>
  <VColumn>
    <NavigationBar
      :title="mockSiteConfig.blogTitle"
      :logo-url="mockSiteConfig.logoUrl"
    />

    <VContainer size="lg">
      <slot />
    </VContainer>
  </VColumn>
</template>
