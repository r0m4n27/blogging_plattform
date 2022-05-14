import type { AuthorArticle } from "@/api/article";
import EditArticlePage from "@/components/pages/author/EditArticlePage.vue";
import HomePage from "@/components/pages/author/HomePage.vue";
import NewArticlePage from "@/components/pages/author/NewArticlePage.vue";
import AuthorPageLayout from "@/components/pages/layout/AuthorPageLayout.vue";
import type { RouteRecordRaw } from "vue-router";
import type { RouteDestination, RouteDestinationWithoutParams } from "./types";
import SettingsPage from "@/components/pages/shared/SettingsPage.vue";
import CategoriesPage from "@/components/pages/author/CategoriesPage.vue";

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
    route: createAuthorRoute(""),
    component: HomePage,
  },
  newArticle: {
    path: "articles/new",
    route: createAuthorRoute("articles/new"),
    component: NewArticlePage,
  },
  editArticle: {
    path: "articles/:id",
    component: EditArticlePage,
    createRoute: (data: AuthorArticle) =>
      createAuthorRoute(`articles/${data.id}`),
  },
  settings: {
    path: "settings",
    component: SettingsPage,
    route: createAuthorRoute("settings"),
  },
  categories: {
    path: "categories",
    component: CategoriesPage,
    route: createAuthorRoute("categories"),
  },
};

export const authorRootRoute: RouteRecordRaw = {
  path: "/author",
  component: AuthorPageLayout,
  children: Object.values(authorRoutes),
  meta: {
    requiredAuth: true,
  },
};
