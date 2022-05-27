import type { RouteLocationRaw } from "vue-router";

export interface FooterLink {
  label: string;
  isExternal: boolean;
  destination: string | RouteLocationRaw;
  onClick?: () => void;
}
