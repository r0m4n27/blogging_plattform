import type { Article } from "@/api/article";
import type { Category } from "@/api/category";
import type { Year } from "@/api/year";
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
  register: RouteDestinationWithoutParams;
}

const createVisitorRoute = (otherPath: string) => `/${otherPath}`;

export const visitorRoutes: VisitorRoutes = {
  home: {
    path: "",
    route: createVisitorRoute(""),
    component: () => import("@/components/pages/visitor/HomePage.vue"),
  },

  archive: {
    path: "archive",
    route: createVisitorRoute("archive"),
    component: () => import("@/components/pages/visitor/ArchivePage.vue"),
  },
  year: {
    path: "archive/:id",
    createRoute: (data: Year) => createVisitorRoute(`archive/${data.year}`),
    component: () => import("@/components/pages/visitor/YearPage.vue"),
  },

  categories: {
    path: "categories",
    route: createVisitorRoute("categories"),
    component: () => import("@/components/pages/visitor/CategoriesPage.vue"),
  },
  category: {
    path: "categories/:id",
    createRoute: (data: Category) =>
      createVisitorRoute(`categories/${data.id}`),
    component: () => import("@/components/pages/visitor/CategoryPage.vue"),
  },

  article: {
    path: "articles/:id",
    createRoute: (data: Article) => createVisitorRoute(`articles/${data.id}`),
    component: () => import("@/components/pages/visitor/ArticlePage.vue"),
  },

  login: {
    path: "login",
    route: createVisitorRoute("login"),
    component: () => import("@/components/pages/visitor/LoginPage.vue"),
  },
  register: {
    path: "register",
    route: createVisitorRoute("register"),
    component: () => import("@/components/pages/visitor/RegisterPage.vue"),
  },
};

export const visitorRootRoute: RouteRecordRaw = {
  path: "/",
  component: () => import("@/components/pages/layout/VisitorPageLayout.vue"),
  children: Object.values(visitorRoutes),
};
