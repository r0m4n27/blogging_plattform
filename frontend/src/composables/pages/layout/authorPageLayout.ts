import type { FooterLink } from "@/components/footer/footerLink";
import type { NavigationDestination } from "@/components/navigationBar/navDestination";
import { createAuthorNavBarDestinations } from "@/config/components/navigationBar";
import {
  createBlogLink,
  createLogoutLink,
} from "@/config/components/pageFooter";
import { authorRoutes } from "@/lib/router/author";
import type { RouteLocationRaw } from "vue-router";
import { useUser } from "../../useUser";

export interface VisitorPageLayoutState {
  footerLinks: FooterLink[];
  navBarDestinations: NavigationDestination[];
  headingDestination: RouteLocationRaw;
}

export const useAuthorPageLayoutState = (): VisitorPageLayoutState => {
  const user = useUser();

  const logoutWithAction = {
    ...createLogoutLink(),
    onClick: () => user.logout(),
  };
  const footerLinks = [logoutWithAction, createBlogLink()];

  const navBarDestinations = createAuthorNavBarDestinations();
  const headingDestination = authorRoutes.home.route;

  return {
    footerLinks,
    navBarDestinations,
    headingDestination,
  };
};
