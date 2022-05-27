import type { RouteDestinationWithoutParams } from "./types";
import type { RouteRecordRaw } from "vue-router";

export interface AdminRoutes {
  home: RouteDestinationWithoutParams;
  settings: RouteDestinationWithoutParams;
}

const createAdminRoute = (otherPath: string) => `/admin/${otherPath}`;

export const adminRoutes: AdminRoutes = {
  home: {
    path: "",
    route: createAdminRoute(""),
    component: () => import("@/components/pages/admin/HomePage.vue"),
  },
  settings: {
    path: "settings",
    route: createAdminRoute("settings"),
    component: () => import("@/components/pages/shared/SettingsPage.vue"),
  },
};

export const adminRootRoute: RouteRecordRaw = {
  path: "/admin",
  component: () => import("@/components/pages/layout/AuthorPageLayout.vue"),
  children: Object.values(adminRoutes),
  meta: {
    requiredUserRole: "ADMIN",
  },
};
