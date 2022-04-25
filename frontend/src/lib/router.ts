import type { Article } from "@/api/article";
import type { Category } from "@/api/category";
import ArticlePage from "@/pages/ArticlePage.vue";
import CategoriesPage from "@/pages/CategoriesPage.vue";
import HomePage from "@/pages/HomePage.vue";
import CategoryPage from "@/pages/CategoryPage.vue";
import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import type { Year } from "@/api/year";
import ArchivePage from "@/pages/ArchivePage.vue";

export const routeDestinations = {
  home: "/",
  archive: "/archive",
  categories: "/categories",
  article: "/articles/:id",
  category: "/categories/:id",
  year: "/years/:id",
};

export const createCategoryDestination = (category: Category): string =>
  `/categories/${category.id}`;

export const createArticleDestination = (article: Article): string =>
  `/articles/${article.id}`;

export const createYearDestination = (year: Year): string =>
  `/years/${year.value}`;

export const routes: RouteRecordRaw[] = [
  {
    path: routeDestinations.home,
    component: HomePage,
  },
  {
    path: routeDestinations.categories,
    component: CategoriesPage,
  },
  {
    path: routeDestinations.archive,
    component: ArchivePage,
  },
  {
    path: routeDestinations.article,
    component: ArticlePage,
  },
  {
    path: routeDestinations.category,
    component: CategoryPage,
  },
  {
    path: routeDestinations.year,
    component: HomePage,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
