import { fetchCategories } from "@/api/category";
import type { Collection } from "@/components/summary/collection/collection";
import { categoryToCollection } from "@/lib/collection";
import { computed, type ComputedRef } from "vue";
import { useEndpoint } from "../useEndpoint";
import { usePageHead } from "../usePageHead";

export interface CategoriesPageState {
  categoriesCollections: ComputedRef<Collection[]>;
}

export const useCategoriesPageState = (): CategoriesPageState => {
  usePageHead("Categories");

  const categories = useEndpoint(fetchCategories, []);
  const categoriesCollections = computed(() =>
    categories.value.map(categoryToCollection)
  );

  return {
    categoriesCollections,
  };
};
