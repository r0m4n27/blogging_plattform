<script setup lang="ts">
import VTableRow from "@/components/base/table/VTableRow.vue";
import VTableData from "@/components/base/table/VTableData.vue";
import VText from "../../../base/text/VText.vue";
import {
  contentColorConfig,
  orangeButtonBg,
  orangeButtonFg,
  redButtonBg,
  redButtonFg,
} from "@/config/content/color";
import { contentSpacingConfig } from "@/config/content/spacing";
import type { Category } from "@/api/category";
import VRow from "../../../base/layout/VRow.vue";
import TagButton from "../../../base/button/TagButton.vue";

interface CategoriesTableEntryProps {
  category: Category;
}
defineProps<CategoriesTableEntryProps>();
</script>
<template>
  <VTableRow>
    <VTableData>
      <VText
        size="md"
        weight="medium"
        :max-lines="1"
        :color="contentColorConfig.mutedFg"
      >
        {{ category.name }}
      </VText>
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
