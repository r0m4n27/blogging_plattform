<script setup lang="ts">
import UsersTable from "../../admin/users/UsersTable.vue";
import { useHomePageState } from "@/composables/pages/admin/homePage";
import VColumn from "../../base/layout/VColumn.vue";
import RegisterCodesTable from "../../admin/registerCodes/RegisterCodesTable.vue";

const { users, deleteUser } = useHomePageState();
</script>

<template>
  <VColumn width="full">
    <RegisterCodesTable :codes="[]" />
    <UsersTable :users="users" @delete-user="deleteUser" />
  </VColumn>
</template>
