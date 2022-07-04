<script setup lang="ts">
import VTableRow from "@blog/frontend/components/base/table/VTableRow.vue";
import VTableData from "@blog/frontend/components/base/table/VTableData.vue";
import {
  orangeButtonBg,
  orangeButtonFg,
  redButtonBg,
  redButtonFg,
} from "@blog/frontend/config/content/color";
import { contentSpacingConfig } from "@blog/frontend/config/content/spacing";
import type { AuthorCategory } from "@blog/frontend/api/category";
import VRow from "../../base/layout/VRow.vue";
import TagButton from "../../base/button/TagButton.vue";
import VTableTextEntry from "../../base/table/VTableTextEntry.vue";

interface CategoriesTableEntryProps {
  category: AuthorCategory;
}

interface CategoriesTableEntryEmits {
  (e: "renameCategory", category: AuthorCategory): void;
  (e: "deleteCategory", category: AuthorCategory): void;
}

const props = defineProps<CategoriesTableEntryProps>();
const emit = defineEmits<CategoriesTableEntryEmits>();
</script>
<template>
  <VTableRow>
    <VTableData>
      <VTableTextEntry :label="category.name" />
    </VTableData>
    <VTableData>
      <VRow :gap="contentSpacingConfig.xs">
        <TagButton
          label="RENAME"
          :background-color="orangeButtonBg"
          :color="orangeButtonFg"
          :show-border="false"
          @click="emit('renameCategory', props.category)"
        />

        <TagButton
          label="DELETE"
          :background-color="redButtonBg"
          :color="redButtonFg"
          :show-border="false"
          @click="emit('deleteCategory', props.category)"
        />
      </VRow>
    </VTableData>
  </VTableRow>
</template>
