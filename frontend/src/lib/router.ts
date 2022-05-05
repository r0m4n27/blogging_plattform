import type { Article } from "@/api/article";
import type { Category } from "@/api/category";
import ArticlePage from "@/components/pages/ArticlePage.vue";
import CategoriesPage from "@/components/pages/CategoriesPage.vue";
import HomePage from "@/components/pages/HomePage.vue";
import CategoryPage from "@/components/pages/CategoryPage.vue";
import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import type { Year } from "@/api/year";
import ArchivePage from "@/components/pages/ArchivePage.vue";
import YearPage from "@/components/pages/YearPage.vue";
import LoginPage from "@/components/pages/LoginPage.vue";
import DashboardPage from "@/components/pages/DashboardPage.vue";

export const routeDestinations = {
  home: "/",
  archive: "/archive",
  categories: "/categories",
  article: "/articles/:id",
  category: "/categories/:id",
  year: "/years/:id",
  login: "/login",
  dashboard: "/dashboard",
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
    component: YearPage,
  },
  {
    path: routeDestinations.login,
    component: LoginPage,
  },
  {
    path: routeDestinations.dashboard,
    component: DashboardPage,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
