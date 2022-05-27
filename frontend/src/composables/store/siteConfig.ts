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
}

// The site config is used in multiple places
// and should persist between multiple pages.
// So it is a good idea to create a store for it
//
// NOTE: With pinia it isn't possible to directly return SiteConfig
export const useSiteConfig = defineStore<string, UseSiteConfigState>(
  piniaKeysConfig.siteConfig,
  () => {
    const { value: fetcher } = useEndpoint(getSiteConfig, {
      blogTitle: "",
      logo: "",
      icon: "",
    });

    return {
      blogTitle: computed(() => fetcher.value.blogTitle),
      logoUrl: computed(() => fetcher.value.logo),
      iconUrl: computed(() => fetcher.value.icon),
    };
  }
);
