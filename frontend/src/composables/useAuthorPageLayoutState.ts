import type { FooterLink } from "@/components/footer/footerLink";
import type { NavigationDestination } from "@/components/navigationBar/navDestination";
import { authorNavBarDestinations } from "@/config/components/navigationBar";
import { blogLink, logoutLink } from "@/config/components/pageFooter";
import { routeDestinations } from "@/config/routes";
import type { RouteLocationRaw } from "vue-router";

export interface VisitorPageLayoutState {
  footerLinks: FooterLink[];
  navBarDestinations: NavigationDestination[];
  headingDestination: RouteLocationRaw;
}

export const useAuthorPageLayoutState = (): VisitorPageLayoutState => {
  const footerLinks = [logoutLink, blogLink];

  const navBarDestinations = authorNavBarDestinations;
  const headingDestination = routeDestinations.dashboard;

  return {
    footerLinks,
    navBarDestinations,
    headingDestination,
  };
};
