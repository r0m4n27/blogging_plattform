import type { Article } from "@/api/article";
import type { Category } from "@/api/category";
import type { Year } from "@/api/year";
import VisitorPageLayout from "@/components/pages/layout/VisitorPageLayout.vue";
import ArchivePage from "@/components/pages/visitor/ArchivePage.vue";
import ArticlePage from "@/components/pages/visitor/ArticlePage.vue";
import CategoriesPage from "@/components/pages/visitor/CategoriesPage.vue";
import CategoryPage from "@/components/pages/visitor/CategoryPage.vue";
import HomePage from "@/components/pages/visitor/HomePage.vue";
import LoginPage from "@/components/pages/visitor/LoginPage.vue";
import YearPage from "@/components/pages/visitor/YearPage.vue";
import type { RouteDestinationWithoutParams, RouteDestination } from "./types";
import type { RouteRecordRaw } from "vue-router";

export interface VisitorRoutes {
  home: RouteDestinationWithoutParams;

  archive: RouteDestinationWithoutParams;
  year: RouteDestination<Year>;

  categories: RouteDestinationWithoutParams;
  category: RouteDestination<Category>;

  article: RouteDestination<Article>;

  login: RouteDestinationWithoutParams;
}

const createVisitorRoute = (otherPath: string) => `/${otherPath}`;

export const visitorRoutes: VisitorRoutes = {
  home: {
    path: "",
    get route() {
      return createVisitorRoute("");
    },
    component: HomePage,
  },

  archive: {
    path: "archive",
    get route() {
      return createVisitorRoute("archive");
    },
    component: ArchivePage,
  },
  year: {
    path: "archive/:id",
    createRoute: (data: Year) => createVisitorRoute(`archive/${data.value}`),
    component: YearPage,
  },

  categories: {
    path: "categories",
    get route() {
      return createVisitorRoute("categories");
    },
    component: CategoriesPage,
  },
  category: {
    path: "categories/:id",
    createRoute: (data: Category) =>
      createVisitorRoute(`categories/${data.id}`),
    component: CategoryPage,
  },

  article: {
    path: "articles/:id",
    createRoute: (data: Article) => createVisitorRoute(`articles/${data.id}`),
    component: ArticlePage,
  },

  login: {
    path: "login",
    get route() {
      return createVisitorRoute("login");
    },
    component: LoginPage,
  },
};

export const visitorRootRoute: RouteRecordRaw = {
  path: "/",
  component: VisitorPageLayout,
  children: Object.values(visitorRoutes),
};
