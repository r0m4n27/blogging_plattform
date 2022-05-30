import { piniaKeysConfig } from "@/config/pinia";
import { defineStore } from "pinia";
import type { ComputedRef } from "vue";
import { computed } from "@vue/reactivity";
import { useEndpoint } from "../util/endpoint";
import { getSiteConfig } from "@/api/siteConfig";

export interface FetchedImage {
  type: "remote" | "local";
  value: string;
}

export interface UseSiteConfigState {
  blogTitle: ComputedRef<string>;
  logoUrl: ComputedRef<FetchedImage>;
  iconUrl: ComputedRef<FetchedImage>;
}

// The site config is used in multiple places
// and should persist between multiple pages.
// So it is a good idea to create a store for it
//
// NOTE: With pinia it isn't possible to directly return SiteConfig
export const useSiteConfig = defineStore<string, UseSiteConfigState>(
  piniaKeysConfig.siteConfig,
  () => {
    const { value: siteConfig, error } = useEndpoint(getSiteConfig, {
      blogTitle: "",
      logo: "",
      icon: "",
    });

    const blogTitle = computed(() => {
      if (error.value !== undefined) {
        return "Initialize Blog!";
      } else {
        return siteConfig.value.blogTitle;
      }
    });

    const logoUrl = computed<FetchedImage>(() => {
      if (siteConfig.value.logo !== "") {
        return {
          type: "remote",
          value: siteConfig.value.logo,
        };
      } else {
        return {
          type: "local",
          value: "/logo_transparent.png",
        };
      }
    });

    const iconUrl = computed<FetchedImage>(() => {
      if (siteConfig.value.icon !== "") {
        return {
          type: "remote",
          value: siteConfig.value.icon,
        };
      } else {
        return {
          type: "local",
          value: "/favicon.ico",
        };
      }
    });

    return {
      blogTitle,
      logoUrl,
      iconUrl,
    };
  }
);
