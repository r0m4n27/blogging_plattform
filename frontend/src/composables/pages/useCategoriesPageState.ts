import { fetchCategories } from "@/api/category";
import type { Collection } from "@/components/summary/collection/collection";
import { categoryToCollection } from "@/lib/collection";
import { computed, type ComputedRef } from "vue";
import { usePageTitle } from "../head/usePageTitle";
import { useEndpoint } from "../useEndpoint";

export interface CategoriesPageState {
  categoriesCollections: ComputedRef<Collection[]>;
}

export const useCategoriesPageState = (): CategoriesPageState => {
  usePageTitle("Categories");

  const categories = useEndpoint(fetchCategories, []);
  const categoriesCollections = computed(() =>
    categories.value.map(categoryToCollection)
  );

  return {
    categoriesCollections,
  };
};
