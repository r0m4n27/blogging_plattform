import { fetchCategories, type Category } from "@/api/category";
import type { Ref } from "vue";
import { usePageTitle } from "../../head/usePageTitle";
import { useEndpoint } from "../../useEndpoint";

export interface CategoriesPageState {
  categories: Ref<Category[]>;
}

export const useCategoriesPageState = (): CategoriesPageState => {
  usePageTitle("Categories");

  const categories = useEndpoint(fetchCategories, []);

  return {
    categories,
  };
};
