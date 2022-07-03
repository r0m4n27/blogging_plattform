<script setup lang="ts">
import UsersTable from "../../admin/users/UsersTable.vue";
import { useHomePageState } from "@/composables/pages/admin/homePage";
import VColumn from "../../base/layout/VColumn.vue";
import RegisterCodesTable from "../../admin/registerCodes/RegisterCodesTable.vue";

const { users, deleteUser, codes, createCode, deleteCode } = useHomePageState();
</script>

<template>
  <VColumn width="full">
    <RegisterCodesTable
      :codes="codes"
      @delete-code="deleteCode"
      @new-code="createCode"
    />
    <UsersTable :users="users" @delete-user="deleteUser" />
  </VColumn>
</template>
