<script setup lang="ts">
import VLink from "@/components/base/VLink.vue";
import VExternalLink from "@/components/base/VExternalLink.vue";
import PageFooterItem from "./PageFooterItem.vue";
import type { FooterLink } from "./footerLink";

interface PageFooterLinkProps {
  link: FooterLink;
}

defineProps<PageFooterLinkProps>();
</script>
<template>
  <VLink v-if="!link.isExternal" :to="link.destination">
    <PageFooterItem :name="link.name" />
  </VLink>
  <VExternalLink v-else :href="(link.destination as string)">
    <PageFooterItem :name="link.name" />
  </VExternalLink>
</template>
