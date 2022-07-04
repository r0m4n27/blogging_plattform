<script setup lang="ts">
import VRow from "@blog/frontend/components/base/layout/VRow.vue";
import { defaultContentSpacing } from "@blog/frontend/config/content/spacing";
import VHeading from "@blog/frontend/components/base/text/VHeading.vue";
import TextButton from "@blog/frontend/components/base/button/TextButton.vue";
import { greenButtonBg, greenButtonFg } from "@blog/frontend/config/content/color";
import VTable from "@blog/frontend/components/base/table/VTable.vue";
import VColumn from "@blog/frontend/components/base/layout/VColumn.vue";

interface ActionableTableLayoutProps {
  title: string;
  addButtonLabel?: string;
}

interface ActionableTableLayoutEmits {
  (e: "addButtonClick"): void;
}

defineProps<ActionableTableLayoutProps>();

const emit = defineEmits<ActionableTableLayoutEmits>();
</script>

<template>
  <VColumn :padding="defaultContentSpacing" :gap="defaultContentSpacing" width="full">
    <VRow justify="space-between" width="full">
      <VHeading size="lg" is="h1"> {{ title }} </VHeading>

      <TextButton
        v-if="addButtonLabel !== undefined"
        :label="addButtonLabel"
        :show-border="false"
        :background-color="greenButtonBg"
        :color="greenButtonFg"
        @click="emit('addButtonClick')"
      />
    </VRow>

    <VTable width="full">
      <template #head>
        <slot name="head" />
      </template>
      <template #body>
        <slot name="body" />
      </template>
    </VTable>
  </VColumn>
</template>
