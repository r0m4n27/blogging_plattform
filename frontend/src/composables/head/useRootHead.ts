import { globalContentConfig } from "@/config/content/global";
import { createSystemPropsCss } from "@/styling/props/systemProps";
import { createTextPropsCss } from "@/styling/props/textProps";
import { css, cx } from "@emotion/css";
import { useHead, type HeadObject } from "@vueuse/head";
import { computed } from "vue";
import { useSiteConfig } from "../useSiteConfig";

// Sets all the necessary attributes the the head
// (and also body) for every page
export const useRootHead = () => {
  // Body should fill at least the whole page
  const extraStyle = css`
    min-height: 100vh;
  `;

  const className = computed(() =>
    cx(
      createTextPropsCss(globalContentConfig),
      createSystemPropsCss(globalContentConfig),
      css(extraStyle)
    )
  );

  const siteConfig = useSiteConfig();

  const head = computed<HeadObject>(() => ({
    bodyAttrs: {
      class: className.value,
    },
    link: [
      {
        rel: "icon",
        href: siteConfig.iconUrl,
      },
    ],
  }));

  useHead(head);
};