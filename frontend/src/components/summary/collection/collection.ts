import type { RouteLocationRaw } from "vue-router";

export interface Collection {
  name: string;
  articleCount: number;
  destination: RouteLocationRaw;
  replace?: boolean;
}
