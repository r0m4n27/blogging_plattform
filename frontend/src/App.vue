<script setup lang="ts">
import ProvideGlobals from "./components/ProvideGlobals.vue";
import { RouterView } from "vue-router";
import VRoot from "./components/base/VRoot.vue";
</script>

<template>
  <ProvideGlobals>
    <VRoot>
      <RouterView />
    </VRoot>
  </ProvideGlobals>
</template>
