<script setup lang="ts">
import UserPageLayout from "@/components/layout/UserPageLayout.vue";
import LoginCard from "../login/LoginCard.vue";
import VCenter from "../base/layout/VCenter.vue";
import { useLoginPageState } from "@/composables/pages/useLoginPageState";

const { login, showError } = useLoginPageState();
</script>

<template>
  <UserPageLayout>
    <VCenter :padding="{ x: 0, y: 20 }">
      <LoginCard @login="login" :show-error="showError" />
    </VCenter>
  </UserPageLayout>
</template>
