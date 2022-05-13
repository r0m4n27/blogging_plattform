import { fetchCategories, type Category } from "@/api/category";
import { computed, type ComputedRef, type Ref } from "vue";
import { usePageTitle } from "../../head/usePageTitle";
import { useEndpoint } from "../../useEndpoint";
import { deleteCategory as deleteCategoryInternal } from "@/api/category";

export interface CategoriesPageState {
  categories: Ref<Category[]>;
  deleteCategory: ComputedRef<(category: Category) => Promise<void>>;
}

export const useCategoriesPageState = (): CategoriesPageState => {
  usePageTitle("Categories");

  const { value: categories, refetch } = useEndpoint(fetchCategories, []);

  const deleteCategory = computed(() => async (category: Category) => {
    await deleteCategoryInternal(category);
    refetch.value();
  });

  return {
    categories,
    deleteCategory,
  };
};
