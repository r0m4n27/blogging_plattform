import type { FooterLink } from "@blog/frontend/components/common/footer/footerLink";
import type { NavigationDestination } from "@blog/frontend/components/common/navigationBar/navDestination";
import { adminNavBarDestinations } from "@blog/frontend/config/components/navigationBar";
import { blogLink, logoutLink } from "@blog/frontend/config/components/pageFooter";
import { adminRoutes } from "@blog/frontend/lib/router/admin";
import type { RouteLocationRaw } from "vue-router";
import { useUser } from "@blog/frontend/composables/store/user";

export interface AdminPageLayoutState {
  footerLinks: FooterLink[];
  navBarDestinations: NavigationDestination[];
  headingDestination: RouteLocationRaw;
}

export const useAdminPageLayoutState = (): AdminPageLayoutState => {
  const user = useUser();

  const logoutWithAction = {
    ...logoutLink,
    onClick: () => user.logout(),
  };
  const footerLinks = [logoutWithAction, blogLink];

  const navBarDestinations = adminNavBarDestinations;
  const headingDestination = adminRoutes.home.route;

  return {
    footerLinks,
    navBarDestinations,
    headingDestination,
  };
};
