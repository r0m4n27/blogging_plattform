<script setup lang="ts">
import VCenter from "../base/layout/VCenter.vue";
import UpdatePassword from "./UpdatePassword.vue";

interface SettingsListProps {
  passwordUpdated: boolean;
}

defineProps<SettingsListProps>();

interface SettingsListEmits {
  (e: "updatePassword", newPassword: string): void;
}

const emit = defineEmits<SettingsListEmits>();
</script>

<template>
  <VCenter :padding="{ x: 0, y: 20 }">
    <UpdatePassword
      @update-password="(newPassword) => emit('updatePassword', newPassword)"
      :show-success="passwordUpdated"
    />
  </VCenter>
</template>
