<script setup lang="ts">
import ProvideGlobals from "./components/ProvideGlobals.vue";
import VTheme from "./components/base/VTheme.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <ProvideGlobals>
    <VTheme>
      <RouterView />
    </VTheme>
  </ProvideGlobals>
</template>
