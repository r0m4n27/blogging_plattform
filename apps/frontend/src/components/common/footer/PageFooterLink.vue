<script setup lang="ts">
import VLink from "@blog/frontend/components/base/VLink.vue";
import VExternalLink from "@blog/frontend/components/base/VExternalLink.vue";
import PageFooterItem from "./PageFooterItem.vue";
import type { RouteLocationRaw } from "vue-router";

interface PageFooterLinkProps {
  name: string;
  isExternal: boolean;
  destination: string | RouteLocationRaw;
}

defineProps<PageFooterLinkProps>();
</script>
<template>
  <VLink v-if="!isExternal" :to="destination">
    <PageFooterItem :name="name" />
  </VLink>
  <VExternalLink v-else :href="(destination as string)">
    <PageFooterItem :name="name" />
  </VExternalLink>
</template>
