import type { FooterLink } from "@/components/footer/footerLink";

export const contactLink: FooterLink = {
  label: "Contact",
  destination: "mailto:roman.kolesnikov@hs-augsburg.de",
  isExternal: true,
};

export const loginLink: FooterLink = {
  label: "Login",
  destination: "/login",
  isExternal: false,
};

export const logoutLink: FooterLink = {
  label: "Logout",
  destination: "#",
  isExternal: false,
};

export const dashboardLink: FooterLink = {
  label: "Dashboard",
  destination: "/dashboard",
  isExternal: false,
};

export const blogLink: FooterLink = {
  label: "Blog",
  destination: "/",
  isExternal: false,
};
