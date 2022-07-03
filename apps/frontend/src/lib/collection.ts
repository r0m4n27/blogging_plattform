import type { Category } from "@/api/category";
import type { Year } from "@/api/year";
import { visitorRoutes } from "./router/visitor";
import type { RouteLocationRaw } from "vue-router";

export interface Collection {
  name: string;
  articleCount: number;
  destination: RouteLocationRaw;
  replace?: boolean;
}

export const categoryToCollection = (category: Category): Collection => ({
  name: category.name,
  articleCount: category.articleCount,
  destination: visitorRoutes.category.createRoute(category),
});

export const yearToCollection = (year: Year): Collection => ({
  name: year.year.toString(),
  articleCount: year.articleCount,
  destination: visitorRoutes.year.createRoute(year),
});
