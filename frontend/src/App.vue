<script setup lang="ts">
import NavigationBar from "./components/navigationBar/NavigationBar.vue";
import logo from "./static/logo_sample.png";
import ProvideGlobals from "./components/ProvideGlobals.vue";
import VTheme from "./components/base/VTheme.vue";
</script>

<template>
  <ProvideGlobals>
    <VTheme>
      <NavigationBar title="My Awesome Blog Title" :logo-url="logo" />
    </VTheme>
  </ProvideGlobals>
</template>
