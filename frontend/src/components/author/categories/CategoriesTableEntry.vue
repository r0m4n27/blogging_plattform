<script setup lang="ts">
import VTableRow from "@/components/base/table/VTableRow.vue";
import VTableData from "@/components/base/table/VTableData.vue";
import {
  orangeButtonBg,
  orangeButtonFg,
  redButtonBg,
  redButtonFg,
} from "@/config/content/color";
import { contentSpacingConfig } from "@/config/content/spacing";
import type { Category } from "@/api/category";
import VRow from "../../base/layout/VRow.vue";
import TagButton from "../../base/button/TagButton.vue";
import VTableTextEntry from "../../base/table/VTableTextEntry.vue";

interface CategoriesTableEntryProps {
  category: Category;
}
defineProps<CategoriesTableEntryProps>();
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
        />

        <TagButton
          label="DELETE"
          :background-color="redButtonBg"
          :color="redButtonFg"
          :show-border="false"
        />
      </VRow>
    </VTableData>
  </VTableRow>
</template>
