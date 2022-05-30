import type { UserRole } from "@/api/auth";
import type { Component } from "vue";
import type { RouteMeta } from "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    // Type of user that can access the page
    requiredUserRole?: UserRole;
  }
}

// It isn't possible to extend RouteRecordRaw directly
export interface RouteDestination<T> {
  path: string;
  name: string;
  createRoute: (params: T) => string;

  component: Component;

  meta?: RouteMeta;
}

export interface RouteDestinationWithoutParams
  extends Omit<RouteDestination<undefined>, "createRoute"> {
  route: string;
}
