import type { MaybeRef } from "@/lib/types";
import { useHead, type HeadObject } from "@vueuse/head";
import { storeToRefs } from "pinia";
import { computed, ref } from "vue";
import { useSiteConfig } from "./useSiteConfig";

export const usePageHead = (titlePrefix?: MaybeRef<string>) => {
  const siteConfig = useSiteConfig();
  const { blogTitle, iconUrl } = storeToRefs(siteConfig);

  const titlePrefixRef = ref(titlePrefix);

  const headConfig = computed<HeadObject>(() => ({
    title: createPageTitle(blogTitle.value, titlePrefixRef.value),
    link: [
      {
        rel: "icon",
        href: iconUrl.value,
      },
    ],
  }));

  useHead(headConfig);
};

const createPageTitle = (title: string, titlePrefix?: string): string => {
  if (titlePrefix !== undefined) {
    return `${titlePrefix} | ${title}`;
  } else {
    return title;
  }
};
