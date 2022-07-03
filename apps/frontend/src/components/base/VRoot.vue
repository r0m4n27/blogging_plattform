<script setup lang="ts">
import { useRootHead } from "@/composables/head/useRootHead";

// Simple wrapper component for initializing the html head
useRootHead();
</script>

<template>
  <slot />
</template>
