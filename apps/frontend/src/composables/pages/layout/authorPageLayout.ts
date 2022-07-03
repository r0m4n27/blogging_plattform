import type { FooterLink } from "@blog/frontend/components/common/footer/footerLink";
import type { NavigationDestination } from "@blog/frontend/components/common/navigationBar/navDestination";
import { authorNavBarDestinations } from "@blog/frontend/config/components/navigationBar";
import { blogLink, logoutLink } from "@blog/frontend/config/components/pageFooter";
import { authorRoutes } from "@blog/frontend/lib/router/author";
import type { RouteLocationRaw } from "vue-router";
import { useUser } from "@blog/frontend/composables/store/user";

export interface VisitorPageLayoutState {
  footerLinks: FooterLink[];
  navBarDestinations: NavigationDestination[];
  headingDestination: RouteLocationRaw;
}

export const useAuthorPageLayoutState = (): VisitorPageLayoutState => {
  const user = useUser();

  const logoutWithAction = {
    ...logoutLink,
    onClick: () => user.logout(),
  };
  const footerLinks = [logoutWithAction, blogLink];

  const navBarDestinations = authorNavBarDestinations;
  const headingDestination = authorRoutes.home.route;

  return {
    footerLinks,
    navBarDestinations,
    headingDestination,
  };
};
