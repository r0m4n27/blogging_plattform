import { fetchCategories, type Category } from "@/api/category";
import { ref, type Ref } from "vue";
import { usePageTitle } from "../../head/usePageTitle";
import { useEndpoint } from "../../useEndpoint";
import {
  deleteCategory as deleteCategoryInternal,
  createCategory as createCategoryInternal,
  updateCategory as updateCategoryInternal,
} from "@/api/category";
import type { Option } from "@/lib/types";

export interface CategoriesPageState {
  categories: Ref<Category[]>;
  deleteCategory: (category: Category) => Promise<void>;

  showNewCategoryModal: Ref<boolean>;
  createCategory: (name: string) => Promise<void>;

  categoryToUpdate: Ref<Option<Category>>;
  updateCategory: (name: string) => Promise<void>;
}

export const useCategoriesPageState = (): CategoriesPageState => {
  usePageTitle("Categories");

  const { value: categories, refetch } = useEndpoint(fetchCategories, []);

  const deleteCategory = async (category: Category) => {
    await deleteCategoryInternal(category);
    refetch.value();
  };

  const showNewCategoryModal = ref(false);

  const createCategory = async (name: string) => {
    await createCategoryInternal(name);
    showNewCategoryModal.value = false;
    refetch.value();
  };

  const categoryToUpdate = ref<Option<Category>>(undefined);
  const updateCategory = async (name: string) => {
    const category = categoryToUpdate.value;
    if (category !== undefined) {
      await updateCategoryInternal({ ...category, name });
      categoryToUpdate.value = undefined;
      refetch.value();
    }
  };

  return {
    categories,
    deleteCategory,
    showNewCategoryModal,
    createCategory,
    categoryToUpdate,
    updateCategory,
  };
};
