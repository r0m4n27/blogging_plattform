<script setup lang="ts">
import { useAdminSettingsPageState } from "@/composables/pages/admin/settingsPage";
import VCenter from "@/components/base/layout/VCenter.vue";
import UpdatePassword from "@/components/common/settings/UpdatePassword.vue";

const {
  updatePasswordState: { passwordUpdated, updatePassword },
} = useAdminSettingsPageState();
</script>

<template>
  <VCenter :padding="{ x: 0, y: 20 }">
    <UpdatePassword
      @update-password="updatePassword"
      :show-success="passwordUpdated"
    />
  </VCenter>
</template>
