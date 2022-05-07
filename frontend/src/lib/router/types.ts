import type { Component } from "vue";
import type { RouteMeta } from "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    // If the value is not set it is interpreted as false
    requiredAuth?: boolean;
  }
}

// It isn't possible to extend RouteRecordRaw directly
export interface RouteDestination<T> {
  path: string;
  createRoute: (params: T) => string;

  component: Component;

  meta?: RouteMeta;
}

export interface RouteDestinationWithoutParams
  extends Omit<RouteDestination<undefined>, "createRoute"> {
  get route(): string;
}
