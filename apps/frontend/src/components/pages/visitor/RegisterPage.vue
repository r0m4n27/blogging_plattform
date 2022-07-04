<script setup lang="ts">
import RegisterCard from "@blog/frontend/components/visitor/auth/RegisterCard.vue";
import VCenter from "../../base/layout/VCenter.vue";
import { useRegisterPageState } from "@blog/frontend/composables/pages/visitor/registerPage";

const { register, showError } = useRegisterPageState();
</script>

<template>
  <VCenter :padding="{ x: 0, y: 20 }">
    <RegisterCard :show-error="showError" @register="register" />
  </VCenter>
</template>
