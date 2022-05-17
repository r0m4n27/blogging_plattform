import { fetchCategories } from "@/api/category";
import type { Collection } from "@/components/visitor/summary/collection/collection";
import { categoryToCollection } from "@/lib/collection";
import { computed, type ComputedRef } from "vue";
import { usePageTitle } from "../../head/pageTitle";
import { useEndpoint } from "../../util/endpoint";

export interface CategoriesPageState {
  categoriesCollections: ComputedRef<Collection[]>;
}

export const useCategoriesPageState = (): CategoriesPageState => {
  usePageTitle("Categories");

  const { value: categories } = useEndpoint(fetchCategories, []);
  const categoriesCollections = computed(() =>
    categories.value.map(categoryToCollection)
  );

  return {
    categoriesCollections,
  };
};
