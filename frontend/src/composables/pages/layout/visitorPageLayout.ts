import type { FooterLink } from "@/components/footer/footerLink";
import type { NavigationDestination } from "@/components/navigationBar/navDestination";
import { visitorNavBarDestinations } from "@/config/components/navigationBar";
import {
  contactLink,
  dashboardLink,
  loginLink,
  logoutLink,
} from "@/config/components/pageFooter";
import { routeDestinations } from "@/config/routes";
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
    destinations.push(contactLink);

    if (user.value === undefined) {
      destinations.push(loginLink);
    } else {
      const logoutWithAction = {
        ...logoutLink,
        onClick: () => user.logout(),
      };
      destinations.push(logoutWithAction, dashboardLink);
    }

    return destinations;
  });

  const navBarDestinations = visitorNavBarDestinations;
  const headingDestination = routeDestinations.home;

  return {
    footerLinks,
    navBarDestinations,
    headingDestination,
  };
};
