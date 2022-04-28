import { fetchSiteConfig, type SiteConfig } from "@/api/siteConfig";
import { piniaKeysConfig } from "@/config/pinia";
import { defineStore } from "pinia";
import type { ComputedRef, Ref } from "vue";
import { useEndpoint } from "./useEndpoint";
import logoTransparent from "@/static/logo_transparent.png";

export interface UseSiteConfigState {
  blogTitle: ComputedRef<string>;
  logoUrl: ComputedRef<string>;
}

// The site config is used in multiple places
// and should persist between multiple pages.
// So it is a good idea to create a store for it
export const useSiteConfig = defineStore<string, Ref<SiteConfig>>(
  piniaKeysConfig.siteConfig,
  () =>
    useEndpoint(fetchSiteConfig, {
      blogTitle: "",
      logoUrl: logoTransparent,
    })
);
