import { globalContentConfig } from "@blog/frontend/config/content/global";
import { createSystemPropsCss } from "@blog/frontend/styling/props/systemProps";
import { createTextPropsCss } from "@blog/frontend/styling/props/textProps";
import { css, cx } from "@emotion/css";
import { useHead, type HeadObject } from "@vueuse/head";
import { computed } from "vue";
import { useSiteConfig } from "@blog/frontend/composables/store/siteConfig";

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
      css(extraStyle),
    ),
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
