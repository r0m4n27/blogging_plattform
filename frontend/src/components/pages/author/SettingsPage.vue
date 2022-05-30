<script setup lang="ts">
import { useAuthorSettingsPageState } from "@/composables/pages/author/settingsPage";
import UpdatePassword from "@/components/common/settings/UpdatePassword.vue";
import VCenter from "@/components/base/layout/VCenter.vue";

const {
  updatePasswordState: { passwordUpdated, updatePassword },
} = useAuthorSettingsPageState();
</script>

<template>
  <VCenter :padding="{ x: 0, y: 20 }">
    <UpdatePassword
      @update-password="updatePassword"
      :show-success="passwordUpdated"
    />
  </VCenter>
</template>
