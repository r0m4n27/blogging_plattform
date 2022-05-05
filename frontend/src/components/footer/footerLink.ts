import type { RouteLocationRaw } from "vue-router";

export interface FooterLink {
  name: string;
  isExternal: boolean;
  destination: string | RouteLocationRaw;
}
