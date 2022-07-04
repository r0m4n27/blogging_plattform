<script setup lang="ts">
import VTableRow from "@blog/frontend/components/base/table/VTableRow.vue";
import VTableData from "@blog/frontend/components/base/table/VTableData.vue";
import { redButtonBg, redButtonFg } from "@blog/frontend/config/content/color";
import { contentSpacingConfig } from "@blog/frontend/config/content/spacing";
import VRow from "../../base/layout/VRow.vue";
import TagButton from "../../base/button/TagButton.vue";
import VTableTextEntry from "../../base/table/VTableTextEntry.vue";
import type { AdminUser } from "@blog/frontend/api/user";

interface UsersTableEntryProps {
  user: AdminUser;
}

interface UsersTableEntryPropsEmits {
  (e: "deleteUser", user: AdminUser): void;
}

const props = defineProps<UsersTableEntryProps>();
const emit = defineEmits<UsersTableEntryPropsEmits>();
</script>
<template>
  <VTableRow>
    <VTableData>
      <VTableTextEntry :label="user.username" />
    </VTableData>
    <VTableData>
      <VRow :gap="contentSpacingConfig.xs">
        <TagButton
          label="DELETE"
          :background-color="redButtonBg"
          :color="redButtonFg"
          :show-border="false"
          @click="emit('deleteUser', props.user)"
        />
      </VRow>
    </VTableData>
  </VTableRow>
</template>
