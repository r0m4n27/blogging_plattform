import type { Category } from "@/api/category";
import type { Year } from "@/api/year";
import type { Collection } from "@/components/summary/collection/collection";
import { createCategoryDestination, createYearDestination } from "./router";

export const categoryToCollection = (category: Category): Collection => ({
  name: category.name,
  articleCount: category.articleCount,
  destination: createCategoryDestination(category),
});

export const yearToCollection = (year: Year): Collection => ({
  name: year.value.toString(),
  articleCount: year.articleCount,
  destination: createYearDestination(year),
});
