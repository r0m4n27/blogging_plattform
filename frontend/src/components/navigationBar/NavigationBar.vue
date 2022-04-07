<script setup lang="ts">
import LeftNavBarPart from "./LeftNavBarPart.vue";

defineProps<{
  title: string;
  logoUrl: string;
}>();
</script>

<template>
  <div class="md:container md:mx-auto p-3">
    <LeftNavBarPart :title="title" :logo-url="logoUrl" />
  </div>
</template>
