<script setup lang="ts">
import LoginCard from "@blog/frontend/components/visitor/auth/LoginCard.vue";
import VCenter from "../../base/layout/VCenter.vue";
import { useLoginPageState } from "@blog/frontend/composables/pages/visitor/loginPage";

const { login, showError } = useLoginPageState();
</script>

<template>
  <VCenter :padding="{ x: 0, y: 20 }">
    <LoginCard @login="login" :show-error="showError" />
  </VCenter>
</template>
