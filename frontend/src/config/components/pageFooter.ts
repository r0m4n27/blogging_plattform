import type { FooterLink } from "@/components/footer/footerLink";
import { adminRoutes } from "@/lib/router/admin";
import { authorRoutes } from "@/lib/router/author";
import { visitorRoutes } from "@/lib/router/visitor";

export const createContactLink = (): FooterLink => ({
  label: "Contact",
  destination: "mailto:roman.kolesnikov@hs-augsburg.de",
  isExternal: true,
});

export const createLoginLink = (): FooterLink => ({
  label: "Login",
  destination: visitorRoutes.login.route,
  isExternal: false,
});

export const createLogoutLink = (): FooterLink => ({
  label: "Logout",
  destination: "#",
  isExternal: false,
});

export const createAuthorDashboardLink = (): FooterLink => ({
  label: "Dashboard",
  destination: authorRoutes.home.route,
  isExternal: false,
});

export const createAdminDashboardLink = (): FooterLink => ({
  label: "Dashboard",
  destination: adminRoutes.home.route,
  isExternal: false,
});

export const createBlogLink = (): FooterLink => ({
  label: "Blog",
  destination: visitorRoutes.home.route,
  isExternal: false,
});
