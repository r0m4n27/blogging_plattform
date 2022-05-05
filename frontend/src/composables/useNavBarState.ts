import type { NavigationDestination } from "@/components/navigationBar/navDestination";
import { routeDestinations } from "@/lib/router";
import { computed, ref, type ComputedRef, type Ref, type UnwrapRef } from "vue";
import { useUser } from "./useUser";

export interface NavBarState {
  menuExpanded: Ref<UnwrapRef<boolean>>;

  destinations: ComputedRef<NavigationDestination[]>;

  toggleMenu: () => void;
}

export const useNavBarState = (): NavBarState => {
  const user = useUser();

  const menuExpanded = ref(false);

  const toggleMenu = () => {
    menuExpanded.value = !menuExpanded.value;
  };

  // Later more destinations could be added when someone is logged in
  const destinations = computed(() => {
    const destinations: NavigationDestination[] = [];
    if (user.value !== undefined) {
      destinations.push({
        label: "Dashboard",
        to: routeDestinations.dashboard,
      });
    }

    destinations.push(
      {
        label: "Categories",
        to: routeDestinations.categories,
      },
      {
        label: "Archive",
        to: routeDestinations.archive,
      }
    );

    return destinations;
  });

  return {
    menuExpanded,
    toggleMenu,
    destinations,
  };
};
