<script setup lang="ts">
import UsersTable from "../../admin/users/UsersTable.vue";
import { useHomePageState } from "@/composables/pages/admin/homePage";

const { users, deleteUser } = useHomePageState();
</script>

<template>
  <UsersTable :users="users" @delete-user="deleteUser" />
</template>
