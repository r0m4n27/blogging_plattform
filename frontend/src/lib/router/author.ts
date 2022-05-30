import type { AuthorArticle } from "@/api/article";
import type { RouteRecordRaw } from "vue-router";
import type { RouteDestination, RouteDestinationWithoutParams } from "./types";

export interface AuthorRoutes {
  home: RouteDestinationWithoutParams;
  newArticle: RouteDestinationWithoutParams;
  editArticle: RouteDestination<AuthorArticle>;
  settings: RouteDestinationWithoutParams;
  categories: RouteDestinationWithoutParams;
}

const createAuthorRoute = (otherPath: string) => `/author/${otherPath}`;

export const authorRoutes: AuthorRoutes = {
  home: {
    path: "",
    name: "Author/Home",
    route: createAuthorRoute(""),
    component: () => import("@/components/pages/author/HomePage.vue"),
  },
  newArticle: {
    path: "articles/new",
    name: "Author/NewArticle",
    route: createAuthorRoute("articles/new"),
    component: () => import("@/components/pages/author/NewArticlePage.vue"),
  },
  editArticle: {
    path: "articles/:id",
    name: "Author/EditArticle",
    component: () => import("@/components/pages/author/EditArticlePage.vue"),
    createRoute: (data: AuthorArticle) =>
      createAuthorRoute(`articles/${data.id}`),
  },
  settings: {
    path: "settings",
    name: "Author/Settings",
    component: () => import("@/components/pages/author/SettingsPage.vue"),
    route: createAuthorRoute("settings"),
  },
  categories: {
    path: "categories",
    name: "Author/Categories",
    component: () => import("@/components/pages/author/CategoriesPage.vue"),
    route: createAuthorRoute("categories"),
  },
};

export const authorRootRoute: RouteRecordRaw = {
  path: "/author",
  component: () => import("@/components/pages/layout/AuthorPageLayout.vue"),
  children: Object.values(authorRoutes),
  meta: {
    requiredUserRole: "AUTHOR",
  },
};
