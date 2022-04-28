import { fetchSiteConfig } from "@/api/siteConfig";
import { piniaKeysConfig } from "@/config/pinia";
import { defineStore } from "pinia";
import type { ComputedRef } from "vue";
import { useEndpoint } from "./useEndpoint";
import logoTransparent from "/logo_transparent.png";
import { computed } from "@vue/reactivity";

export interface UseSiteConfigState {
  blogTitle: ComputedRef<string>;
  logoUrl: ComputedRef<string>;
}

// The site config is used in multiple places
// and should persist between multiple pages.
// So it is a good idea to create a store for it
//
// NOTE: With pinia it isn't possible to directly return SiteConfig
export const useSiteConfig = defineStore<string, UseSiteConfigState>(
  piniaKeysConfig.siteConfig,
  () => {
    const fetcher = useEndpoint(fetchSiteConfig, {
      blogTitle: "",
      logoUrl: logoTransparent,
    });

    return {
      blogTitle: computed(() => fetcher.value.blogTitle),
      logoUrl: computed(() => fetcher.value.logoUrl),
    };
  }
);
