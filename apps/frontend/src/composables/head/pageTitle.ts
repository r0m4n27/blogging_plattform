import type { MaybeRef } from "@blog/frontend/lib/types";
import { useHead, type HeadObject } from "@vueuse/head";
import { ref, computed } from "vue";
import { useSiteConfig } from "@blog/frontend/composables/store/siteConfig";

export const usePageTitle = (titlePrefix?: MaybeRef<string>) => {
  const siteConfig = useSiteConfig();
  const titlePrefixRef = ref(titlePrefix);

  const head = computed<HeadObject>(() => ({
    title: createPageTitle(siteConfig.blogTitle, titlePrefixRef.value),
  }));

  useHead(head);
};

const createPageTitle = (title: string, titlePrefix?: string): string => {
  if (titlePrefix !== undefined) {
    return `${titlePrefix} | ${title}`;
  } else {
    return title;
  }
};
