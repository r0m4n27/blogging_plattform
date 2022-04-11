<script setup lang="ts">
import NavigationBar from "./components/navigationBar/NavigationBar.vue";
import { provideTheme } from "./composables/provideTheme";
import logo from "./static/logo_sample.png";

provideTheme();
</script>

<template>
  <NavigationBar title="My Awesome Blog Title" :logo-url="logo" />
</template>
