import type { RouteLocationRaw } from "vue-router";

// RouterLinkOptions isn't exported so we can't just extend it
export interface NavigationDestination {
  label: string;
  to: RouteLocationRaw;
  replace?: boolean;
}
