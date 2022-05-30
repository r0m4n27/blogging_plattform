import { piniaKeysConfig } from "@/config/pinia";
import { defineStore } from "pinia";
import type { ComputedRef } from "vue";
import { computed } from "@vue/reactivity";
import { useEndpoint } from "../util/endpoint";
import { getSiteConfig } from "@/api/siteConfig";

export interface UseSiteConfigState {
  blogTitle: ComputedRef<string>;
  logoUrl: ComputedRef<string>;
  iconUrl: ComputedRef<string>;

  isInitialized: ComputedRef<boolean>;

  refetch: () => void;
}

// The site config is used in multiple places
// and should persist between multiple pages.
// So it is a good idea to create a store for it
//
// NOTE: With pinia it isn't possible to directly return SiteConfig
export const useSiteConfig = defineStore<string, UseSiteConfigState>(
  piniaKeysConfig.siteConfig,
  () => {
    const {
      value: siteConfig,
      error,
      refetch: refetchInternal,
    } = useEndpoint(getSiteConfig, {
      blogTitle: "",
      logo: "",
      icon: "",
    });

    // Somehow pinia transforms the ComputedRef<() => void>
    // just to void
    const refetch = () => {
      refetchInternal.value();
    };

    const isInitialized = computed(() => error.value === undefined);

    const blogTitle = computed(() => {
      if (error.value !== undefined) {
        return "Initialize Blog!";
      } else {
        return siteConfig.value.blogTitle;
      }
    });

    const logoUrl = computed(() => {
      if (siteConfig.value.logo !== "") {
        return siteConfig.value.logo;
      } else {
        return "/logo_transparent.png";
      }
    });

    const iconUrl = computed(() => {
      if (siteConfig.value.icon !== "") {
        return siteConfig.value.icon;
      } else {
        return "/favicon.ico";
      }
    });

    return {
      blogTitle,
      logoUrl,
      iconUrl,
      refetch,
      isInitialized,
    };
  }
);
