<script setup lang="ts">
import CategoriesInputHead from "./CategoriesInputHead.vue";
import type { Category } from "@/api/category";
import { contentSpacingConfig } from "@/config/content/spacing";
import VColumn from "@/components/base/layout/VColumn.vue";
import VHeading from "@/components/base/text/VHeading.vue";
import CategoriesInputList from "./CategoriesInputList.vue";
import VBox from "../../../base/layout/VBox.vue";
import { useCategoriesInputState } from "@/composables/components/articleEditor/categoriesInput";
import { toRefs } from "vue";

interface CategoriesInputProps {
  selectedCategories: Category[];
  existingCategories: Category[];
}

interface CategoriesInputEmits {
  (e: "update:selectedCategories", newValue: Category[]): void;
}

const props = defineProps<CategoriesInputProps>();
const { selectedCategories, existingCategories } = toRefs(props);
const emit = defineEmits<CategoriesInputEmits>();

const { showListing, availableCategories, removeCategory, selectCategory } =
  useCategoriesInputState(selectedCategories, existingCategories, emit);
</script>

<template>
  <VColumn :gap="contentSpacingConfig.xs" align="start" width="full">
    <VHeading is="h2" size="sm"> Categories </VHeading>
    <VColumn width="full">
      <CategoriesInputHead
        :selected-categories="selectedCategories"
        :available-categories-size="availableCategories.length"
        v-model:show-listing="showListing"
        @remove-category="removeCategory"
      />

      <VBox width="full" :style="{ position: 'relative' }">
        <CategoriesInputList
          v-if="showListing"
          :available-categories="availableCategories"
          @select-category="selectCategory"
        />
      </VBox>
    </VColumn>
  </VColumn>
</template>
