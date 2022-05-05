import { routeDestinations } from "@/lib/router";
import { computed, type ComputedRef } from "vue";
import type { RouteLocationRaw } from "vue-router";
import { useUser } from "./useUser";

export interface PageFooterState {
  secondLinkName: string;
  secondLinkDestination: RouteLocationRaw;
  onClick?: () => void;
}

export const usePageFooterState = (): ComputedRef<PageFooterState> => {
  const user = useUser();

  return computed(() => {
    if (user.value === undefined) {
      return {
        secondLinkName: "Login",
        secondLinkDestination: routeDestinations.login,
      };
    } else {
      return {
        secondLinkName: "Logout",
        secondLinkDestination: "#",
        onClick: () => user.logout(),
      };
    }
  });
};
