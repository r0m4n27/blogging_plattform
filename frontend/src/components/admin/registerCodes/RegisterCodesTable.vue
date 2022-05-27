<script setup lang="ts">
import ActionableTableLayout from "@/components/common/layout/ActionableTableLayout.vue";
import RegisterCodesTableEntry from "./RegisterCodesTableEntry.vue";
import VTableHeader from "@/components/base/table/VTableHeader.vue";

interface RegisterCodesTableProps {
  codes: string[];
}

interface RegisterCodesTableEmits {
  (e: "deleteCode", registerCode: string): void;
  (e: "newCode"): void;
}

defineProps<RegisterCodesTableProps>();
const emit = defineEmits<RegisterCodesTableEmits>();
</script>

<template>
  <ActionableTableLayout
    title="Register Codes"
    add-button-label="New CODE"
    @add-button-click="emit('newCode')"
  >
    <template #head>
      <VTableHeader label="CODE" width="full" />
      <VTableHeader label="ACTIONS" alignment="center" />
    </template>
    <template #body>
      <RegisterCodesTableEntry
        v-for="code in codes"
        :key="code"
        :register-code="code"
        @delete-code="(c) => emit('deleteCode', c)"
      />
    </template>
  </ActionableTableLayout>
</template>
