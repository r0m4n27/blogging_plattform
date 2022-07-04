<script setup lang="ts">
import { useAdminSettingsPageState } from "@blog/frontend/composables/pages/admin/settingsPage";
import UpdatePassword from "@blog/frontend/components/common/settings/UpdatePassword.vue";
import SiteConfigSettings from "@blog/frontend/components/common/settings/SiteConfigSettings.vue";
import VColumn from "@blog/frontend/components/base/layout/VColumn.vue";

const {
  updatePasswordState: { passwordUpdated, updatePassword },
  siteConfigSettingsState: {
    initialTitle,
    updateSiteConfig,
    showSuccess,
    error,
    isInitialized,
    createSiteConfig,
  },
} = useAdminSettingsPageState();
</script>

<template>
  <VColumn :gap="6" width="full">
    <SiteConfigSettings
      :show-success="showSuccess"
      :initial-title="initialTitle"
      :error="error"
      :is-initialized="isInitialized"
      @update="updateSiteConfig"
      @create="createSiteConfig"
    />

    <UpdatePassword @update-password="updatePassword" :show-success="passwordUpdated" />
  </VColumn>
</template>
