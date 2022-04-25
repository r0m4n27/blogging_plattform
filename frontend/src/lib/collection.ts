import type { Category } from "@/api/category";
import type { Collection } from "@/components/summary/collection/collection";
import { createCategoryDestination } from "./router";

export const categoryToCollection = (category: Category): Collection => ({
  name: category.name,
  articleCount: category.articleCount,
  destination: createCategoryDestination(category),
});
