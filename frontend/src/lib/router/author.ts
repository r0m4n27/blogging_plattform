import type { AuthorArticle } from "@/api/article";
import EditArticlePage from "@/components/pages/author/EditArticlePage.vue";
import HomePage from "@/components/pages/author/HomePage.vue";
import NewArticlePage from "@/components/pages/author/NewArticlePage.vue";
import AuthorPageLayout from "@/components/pages/layout/AuthorPageLayout.vue";
import type { RouteRecordRaw } from "vue-router";
import type { RouteDestination, RouteDestinationWithoutParams } from "./types";

export interface AuthorRoutes {
  home: RouteDestinationWithoutParams;
  newArticle: RouteDestinationWithoutParams;
  editArticle: RouteDestination<AuthorArticle>;
}

const createAuthorRoute = (otherPath: string) => `/author/${otherPath}`;

export const authorRoutes: AuthorRoutes = {
  home: {
    path: "",
    get route() {
      return createAuthorRoute("");
    },
    component: HomePage,
  },
  newArticle: {
    path: "articles/new",
    get route() {
      return createAuthorRoute("articles/new");
    },
    component: NewArticlePage,
  },
  editArticle: {
    path: "articles/:id",
    component: EditArticlePage,
    createRoute: (data: AuthorArticle) =>
      createAuthorRoute(`articles/${data.id}`),
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
