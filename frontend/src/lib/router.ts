import type { Category } from "@/api/category";
import ArticlePage from "@/pages/ArticlePage.vue";
import CategoriesPage from "@/pages/CategoriesPage.vue";
import HomePage from "@/pages/HomePage.vue";
import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

export const routeDestinations = {
  home: "/",
  archive: "/archive",
  categories: "/categories",
  article: "/articles/:id",
  category: "/categories/:id",
};

export const createCategoryDestination = (category: Category): string =>
  `/categories/${category.id}`;

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
    component: HomePage,
  },
  {
    path: routeDestinations.article,
    component: ArticlePage,
  },
  {
    path: routeDestinations.category,
    component: HomePage,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
