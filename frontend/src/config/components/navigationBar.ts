import type { NavigationDestination } from "@/components/common/navigationBar/navDestination";
import { adminRoutes } from "@/lib/router/admin";
import { authorRoutes } from "@/lib/router/author";
import { visitorRoutes } from "@/lib/router/visitor";

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
