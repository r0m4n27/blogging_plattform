<script setup lang="ts">
import VRow from "@/components/base/layout/VRow.vue";
import { defaultContentSpacing } from "@/config/content/spacing";
import VHeading from "@/components/base/text/VHeading.vue";
import TextButton from "@/components/base/button/TextButton.vue";
import { greenButtonBg, greenButtonFg } from "@/config/content/color";
import VTable from "@/components/base/table/VTable.vue";
import VColumn from "@/components/base/layout/VColumn.vue";

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
  <VColumn :padding="defaultContentSpacing" :gap="defaultContentSpacing">
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
