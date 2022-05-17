import type { FooterLink } from "@/components/common/footer/footerLink";
import type { NavigationDestination } from "@/components/common/navigationBar/navDestination";
import { visitorNavBarDestinations } from "@/config/components/navigationBar";
import {
  adminDashboardLink,
  authorDashboardLink,
  contactLink,
  loginLink,
  logoutLink,
} from "@/config/components/pageFooter";
import { visitorRoutes } from "@/lib/router/visitor";
import { computed } from "@vue/reactivity";
import type { ComputedRef } from "vue";
import type { RouteLocationRaw } from "vue-router";
import { useUser } from "@/composables/store/user";

export interface VisitorPageLayoutState {
  footerLinks: ComputedRef<FooterLink[]>;
  navBarDestinations: NavigationDestination[];
  headingDestination: RouteLocationRaw;
}

export const useVisitorPageLayoutState = (): VisitorPageLayoutState => {
  const user = useUser();

  const footerLinks = computed(() => {
    const destinations: FooterLink[] = [];
    destinations.push(contactLink);

    if (user.value === undefined) {
      destinations.push(loginLink);
    } else {
      const logoutWithAction = {
        ...logoutLink,
        onClick: () => user.logout(),
      };
      if (user.value.type === "author") {
        destinations.push(logoutWithAction, authorDashboardLink);
      } else {
        destinations.push(logoutWithAction, adminDashboardLink);
      }
    }

    return destinations;
  });

  const navBarDestinations = visitorNavBarDestinations;
  const headingDestination = visitorRoutes.home.route;

  return {
    footerLinks,
    navBarDestinations,
    headingDestination,
  };
};
