<script setup lang="ts">
import LoginCard from "@/components/visitor/login/LoginCard.vue";
import VCenter from "../../base/layout/VCenter.vue";
import { useLoginPageState } from "@/composables/pages/visitor/loginPage";

const { login, showError } = useLoginPageState();
</script>

<template>
  <VCenter :padding="{ x: 0, y: 20 }">
    <LoginCard @login="login" :show-error="showError" />
  </VCenter>
</template>
