import { getCategories } from "@blog/frontend/api/category";
import type { Collection } from "@blog/frontend/lib/collection";
import { categoryToCollection } from "@blog/frontend/lib/collection";
import { computed, type ComputedRef } from "vue";
import { usePageTitle } from "../../head/pageTitle";
import { useEndpoint } from "../../util/endpoint";

export interface CategoriesPageState {
  categoriesCollections: ComputedRef<Collection[]>;
}

export const useCategoriesPageState = (): CategoriesPageState => {
  usePageTitle("Categories");

  const { value: categories } = useEndpoint(getCategories, []);
  const categoriesCollections = computed(() =>
    categories.value.map(categoryToCollection),
  );

  return {
    categoriesCollections,
  };
};
