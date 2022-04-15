<script setup lang="ts">
import NavigationBar from "./components/navigationBar/NavigationBar.vue";
import logo from "./static/logo_sample.png";
import ProvideGlobals from "./components/ProvideGlobals.vue";
</script>

<template>
  <ProvideGlobals>
    <NavigationBar title="My Awesome Blog Title" :logo-url="logo" />
  </ProvideGlobals>
</template>
