import HomePage from "@/components/pages/author/HomePage.vue";
import AuthorPageLayout from "@/components/pages/layout/AuthorPageLayout.vue";
import type { RouteRecordRaw } from "vue-router";
import type { RouteDestinationWithoutParams } from "./types";

export interface AuthorRoutes {
  home: RouteDestinationWithoutParams;
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
};

export const authorRootRoute: RouteRecordRaw = {
  path: "/author",
  component: AuthorPageLayout,
  children: Object.values(authorRoutes),
  meta: {
    requiredAuth: true,
  },
};
