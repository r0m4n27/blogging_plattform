import type { NavigationDestination } from "@/components/navigationBar/navDestination";
import { adminRoutes } from "@/lib/router/admin";
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
    label: "Categories",
    to: authorRoutes.categories.route,
  },
  {
    label: "Settings",
    to: authorRoutes.settings.route,
  },
];

export const createAdminNavBarDestinations = (): NavigationDestination[] => [
  {
    label: "Settings",
    to: adminRoutes.home.route,
  },
];
