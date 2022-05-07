<script setup lang="ts">
import ArticlesListHeader from "./ArticlesListHeader.vue";
import VColumn from "@/components/base/layout/VColumn.vue";
import { defaultContentSpacing } from "@/config/content/spacing";
</script>

<template>
  <VColumn :padding="defaultContentSpacing" :gap="defaultContentSpacing">
    <ArticlesListHeader />
  </VColumn>
</template>
