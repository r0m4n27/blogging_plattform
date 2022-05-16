<script setup lang="ts">
import ActionableTableLayout from "../../layout/ActionableTableLayout.vue";
import UsersTableEntry from "./UsersTableEntry.vue";
import VTableHeader from "@/components/base/table/VTableHeader.vue";
import type { AdminUser } from "@/api/user";

interface UsersTableProps {
  users: AdminUser[];
}

interface UsersTableEmits {
  (e: "deleteUser", user: AdminUser): void;
}

defineProps<UsersTableProps>();
const emit = defineEmits<UsersTableEmits>();
</script>

<template>
  <ActionableTableLayout title="Users">
    <template #head>
      <VTableHeader label="USER" width="full" />
      <VTableHeader label="ACTIONS" alignment="center" />
    </template>
    <template #body>
      <UsersTableEntry
        v-for="user in users"
        :key="user.id"
        :user="user"
        @delete-user="(u) => emit('deleteUser', u)"
      />
    </template>
  </ActionableTableLayout>
</template>
