<script setup lang="ts">
import NavigationBar from "./components/navigationBar/NavigationBar.vue";
import logo from "./static/logo_sample.png";
import ProvideTheme from "./components/base/ProvideTheme.vue";
</script>

<template>
  <ProvideTheme>
    <NavigationBar title="My Awesome Blog Title" :logo-url="logo" />
  </ProvideTheme>
</template>
