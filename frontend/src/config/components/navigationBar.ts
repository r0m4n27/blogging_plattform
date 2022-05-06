import type { NavigationDestination } from "@/components/navigationBar/navDestination";
import { routeDestinations } from "@/config/routes";

export const visitorNavBarDestinations: NavigationDestination[] = [
  {
    label: "Categories",
    to: routeDestinations.categories,
  },
  {
    label: "Archive",
    to: routeDestinations.archive,
  },
];

export const authorNavBarDestinations: NavigationDestination[] = [];
