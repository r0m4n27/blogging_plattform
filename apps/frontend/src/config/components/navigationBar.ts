import type { NavigationDestination } from "@blog/frontend/components/common/navigationBar/navDestination";
import { adminRoutes } from "@blog/frontend/lib/router/admin";
import { authorRoutes } from "@blog/frontend/lib/router/author";
import { visitorRoutes } from "@blog/frontend/lib/router/visitor";

export const visitorNavBarDestinations: NavigationDestination[] = [
  {
    label: "Categories",
    to: visitorRoutes.categories.route,
  },
  {
    label: "Archive",
    to: visitorRoutes.archive.route,
  },
];

export const authorNavBarDestinations: NavigationDestination[] = [
  {
    label: "Categories",
    to: authorRoutes.categories.route,
  },
  {
    label: "Settings",
    to: authorRoutes.settings.route,
  },
];

export const adminNavBarDestinations: NavigationDestination[] = [
  {
    label: "Settings",
    to: adminRoutes.settings.route,
  },
];
