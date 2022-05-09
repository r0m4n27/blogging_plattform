import type { NavigationDestination } from "@/components/navigationBar/navDestination";
import { authorRoutes } from "@/lib/router/author";
import { visitorRoutes } from "@/lib/router/visitor";

// Import cycle has to be broken
export const createVisitorNavBarDestinations = (): NavigationDestination[] => [
  {
    label: "Categories",
    to: visitorRoutes.categories.route,
  },
  {
    label: "Archive",
    to: visitorRoutes.archive.route,
  },
];

export const createAuthorNavBarDestinations = (): NavigationDestination[] => [
  {
    label: "Settings",
    to: authorRoutes.settings.path,
  },
];
