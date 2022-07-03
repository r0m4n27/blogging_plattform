<script setup lang="ts">
import CategoriesInputHead from "./CategoriesInputHead.vue";
import type { AuthorCategory } from "@blog/frontend/api/category";
import { contentSpacingConfig } from "@blog/frontend/config/content/spacing";
import VColumn from "@blog/frontend/components/base/layout/VColumn.vue";
import VHeading from "@blog/frontend/components/base/text/VHeading.vue";
import CategoriesInputList from "./CategoriesInputList.vue";
import VBox from "../../../base/layout/VBox.vue";
import { useCategoriesInputState } from "@blog/frontend/composables/author/articleEditor/categoriesInput";
import { toRefs } from "vue";

// List of categories that is inspired by https://github.com/vueform/multiselect

interface CategoriesInputProps {
  selectedCategories: AuthorCategory[];
  existingCategories: AuthorCategory[];
}

interface CategoriesInputEmits {
  (e: "update:selectedCategories", newValue: AuthorCategory[]): void;
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
