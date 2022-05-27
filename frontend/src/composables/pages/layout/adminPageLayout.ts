import type { FooterLink } from "@/components/common/footer/footerLink";
import type { NavigationDestination } from "@/components/common/navigationBar/navDestination";
import { adminNavBarDestinations } from "@/config/components/navigationBar";
import { blogLink, logoutLink } from "@/config/components/pageFooter";
import { adminRoutes } from "@/lib/router/admin";
import type { RouteLocationRaw } from "vue-router";
import { useUser } from "@/composables/store/user";

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
