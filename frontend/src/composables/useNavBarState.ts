import type { NavigationDestination } from "@/components/navigationBar/navDestination";
import { routeDestinations } from "@/lib/router";
import { computed, ref, type ComputedRef, type Ref, type UnwrapRef } from "vue";

export interface NavBarState {
  menuExpanded: Ref<UnwrapRef<boolean>>;

  destinations: ComputedRef<NavigationDestination[]>;

  toggleMenu: () => void;
}

export const useNavBarState = (): NavBarState => {
  const menuExpanded = ref(false);

  const toggleMenu = () => {
    menuExpanded.value = !menuExpanded.value;
  };

  // Later more destinations could be added when someone is logged in
  const destinations = ref([
    {
      label: "Categories",
      to: routeDestinations.categories,
    },
    {
      label: "Archive",
      to: routeDestinations.archive,
    },
  ]);

  return {
    menuExpanded,
    toggleMenu,
    // Make destinations computed so no one else can modify it
    destinations: computed(() => destinations.value),
  };
};
