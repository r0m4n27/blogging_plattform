import type { FooterLink } from "@blog/frontend/components/common/footer/footerLink";
import { adminRoutes } from "@blog/frontend/lib/router/admin";
import { authorRoutes } from "@blog/frontend/lib/router/author";
import { visitorRoutes } from "@blog/frontend/lib/router/visitor";

export const contactLink: FooterLink = {
  label: "Contact",
  destination: "mailto:roman.kolesnikov@hs-augsburg.de",
  isExternal: true,
};

export const loginLink: FooterLink = {
  label: "Login",
  destination: visitorRoutes.login.route,
  isExternal: false,
};

export const logoutLink: FooterLink = {
  label: "Logout",
  destination: "#",
  isExternal: false,
};

export const authorDashboardLink: FooterLink = {
  label: "Dashboard",
  destination: authorRoutes.home.route,
  isExternal: false,
};

export const adminDashboardLink: FooterLink = {
  label: "Dashboard",
  destination: adminRoutes.home.route,
  isExternal: false,
};

export const blogLink: FooterLink = {
  label: "Blog",
  destination: visitorRoutes.home.route,
  isExternal: false,
};
