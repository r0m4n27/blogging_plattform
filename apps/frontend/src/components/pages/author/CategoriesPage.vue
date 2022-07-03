<script setup lang="ts">
import CategoriesTable from "@blog/frontend/components/author/categories/CategoriesTable.vue";
import { useCategoriesPageState } from "@blog/frontend/composables/pages/author/categoriesPage";
import VModal from "../../base/VModal.vue";
import NewCategoryDialog from "../../author/categories/NewCategoryDialog.vue";
import EditCategoryDialog from "../../author/categories/EditCategoryDialog.vue";

const {
  categories,
  deleteCategory,
  showNewCategoryModal,
  createCategory,
  categoryToUpdate,
  updateCategory,
} = useCategoriesPageState();
</script>

<template>
  <CategoriesTable
    :categories="categories"
    @delete-category="deleteCategory"
    @create-category="showNewCategoryModal = true"
    @rename-category="(c) => (categoryToUpdate = c)"
  />
  <VModal v-model:show-modal="showNewCategoryModal">
    <NewCategoryDialog
      @cancel="showNewCategoryModal = false"
      @create="createCategory"
    />
  </VModal>
  <VModal
    :show-modal="categoryToUpdate !== undefined"
    @update:show-modal="categoryToUpdate = undefined"
  >
    <EditCategoryDialog
      :initial-name="categoryToUpdate?.name!"
      @cancel="categoryToUpdate = undefined"
      @update="updateCategory"
    />
  </VModal>
</template>
