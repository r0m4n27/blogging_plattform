import type { FooterLink } from "@/components/footer/footerLink";
import {
  contactLink,
  dashboardLink,
  loginLink,
  logoutLink,
} from "@/config/components/pageFooter";
import { computed } from "@vue/reactivity";
import { storeToRefs } from "pinia";
import type { ComputedRef, Ref } from "vue";
import { useSiteConfig } from "./useSiteConfig";
import { useUser } from "./useUser";

export interface UserPageLayoutState {
  footerLinks: ComputedRef<FooterLink[]>;
  blogTitle: Ref<string>;
  logoUrl: Ref<string>;
}

export const useUserPageLayoutState = (): UserPageLayoutState => {
  const siteConfig = useSiteConfig();
  const { blogTitle, logoUrl } = storeToRefs(siteConfig);

  const user = useUser();

  const footerLinks = computed(() => {
    const destinations: FooterLink[] = [];
    destinations.push(contactLink);

    if (user.value === undefined) {
      destinations.push(loginLink);
    } else {
      const logoutWithAction = {
        ...logoutLink,
        onClick: () => user.logout(),
      };
      destinations.push(logoutWithAction, dashboardLink);
    }

    return destinations;
  });

  return {
    footerLinks,
    blogTitle,
    logoUrl,
  };
};
