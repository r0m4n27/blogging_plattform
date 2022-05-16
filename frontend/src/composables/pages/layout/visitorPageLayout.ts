import type { FooterLink } from "@/components/footer/footerLink";
import type { NavigationDestination } from "@/components/navigationBar/navDestination";
import { createVisitorNavBarDestinations } from "@/config/components/navigationBar";
import {
  createAdminDashboardLink,
  createAuthorDashboardLink,
  createContactLink,
  createLoginLink,
  createLogoutLink,
} from "@/config/components/pageFooter";
import { visitorRoutes } from "@/lib/router/visitor";
import { computed } from "@vue/reactivity";
import type { ComputedRef } from "vue";
import type { RouteLocationRaw } from "vue-router";
import { useUser } from "../../useUser";

export interface VisitorPageLayoutState {
  footerLinks: ComputedRef<FooterLink[]>;
  navBarDestinations: NavigationDestination[];
  headingDestination: RouteLocationRaw;
}

export const useVisitorPageLayoutState = (): VisitorPageLayoutState => {
  const user = useUser();

  const footerLinks = computed(() => {
    const destinations: FooterLink[] = [];
    destinations.push(createContactLink());

    if (user.value === undefined) {
      destinations.push(createLoginLink());
    } else {
      const logoutWithAction = {
        ...createLogoutLink(),
        onClick: () => user.logout(),
      };
      if (user.value.type === "author") {
        destinations.push(logoutWithAction, createAuthorDashboardLink());
      } else {
        destinations.push(logoutWithAction, createAdminDashboardLink());
      }
    }

    return destinations;
  });

  const navBarDestinations = createVisitorNavBarDestinations();
  const headingDestination = visitorRoutes.home.route;

  return {
    footerLinks,
    navBarDestinations,
    headingDestination,
  };
};
