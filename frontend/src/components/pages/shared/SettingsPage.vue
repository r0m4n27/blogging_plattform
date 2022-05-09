<script setup lang="ts">
import SettingsList from "@/components/settings/SettingsList.vue";
import { useSettingsPageState } from "@/composables/pages/shared/settingsPage";

const { passwordUpdated, updatePassword } = useSettingsPageState();
</script>

<template>
  <SettingsList
    :password-updated="passwordUpdated"
    @update-password="updatePassword"
  />
</template>
