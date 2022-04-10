<script setup lang="ts">
import LeftNavBarPart from "./LeftNavBarPart.vue";
import RightNavBarPart from "./RightNavBarPart.vue";

defineProps<{
  title: string;
  logoUrl: string;
}>();
</script>

<template>
  <div class="flex flex-col">
    <div
      class="md:container md:mx-auto p-3 flex flex-row justify-between items-center"
    >
      <LeftNavBarPart :title="title" :logo-url="logoUrl" />
      <RightNavBarPart />
    </div>
    <div class="h-px bg-gray-200" />
  </div>
</template>
