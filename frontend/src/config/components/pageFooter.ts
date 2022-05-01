import type { FooterLink } from "@/components/util/footer/footerLink";

export const footerLinks: FooterLink[] = [
  {
    name: "Contact",
    destination: "mailto:roman.kolesnikov@hs-augsburg.de",
    isExternal: true,
  },
  {
    name: "Login",
    destination: "/",
    isExternal: false,
  },
];
