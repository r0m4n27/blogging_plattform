import type { FooterLink } from "@/components/footer/footerLink";
import type { NavigationDestination } from "@/components/navigationBar/navDestination";
import { authorNavBarDestinations } from "@/config/components/navigationBar";
import { blogLink, logoutLink } from "@/config/components/pageFooter";
import { storeToRefs } from "pinia";
import type { Ref } from "vue";
import { useSiteConfig } from "./useSiteConfig";

export interface VisitorPageLayoutState {
  footerLinks: FooterLink[];
  navBarDestinations: NavigationDestination[];

  blogTitle: Ref<string>;
  logoUrl: Ref<string>;
}

export const useAuthorPageLayoutState = (): VisitorPageLayoutState => {
  const siteConfig = useSiteConfig();
  const { blogTitle, logoUrl } = storeToRefs(siteConfig);
  const footerLinks = [logoutLink, blogLink];

  const navBarDestinations = authorNavBarDestinations;

  return {
    footerLinks,
    blogTitle,
    logoUrl,
    navBarDestinations,
  };
};
