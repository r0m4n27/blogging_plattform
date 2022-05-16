import VHeading from "@/components/base/text/VHeading.vue";
import VText from "@/components/base/text/VText.vue";
import VExternalLink from "@/components/base/VExternalLink.vue";
import type { HeadingSize } from "@/config/components/heading";
import type { TextElementType } from "@/lib/elementType";
import type { SystemProps } from "@/styling/props/systemProps";
import type { TextProps } from "@/styling/props/textProps";
import {
  createContentComponent,
  type ContentComponentRecord,
} from "./renderer";

const createHeadingComponent = (is: TextElementType, size: HeadingSize) =>
  createContentComponent(VHeading, { is, size });

const createTextComponent = (props: TextProps & SystemProps) =>
  createContentComponent(VText, props);

export const headingComponents: ContentComponentRecord = {
  h1: createHeadingComponent("h1", "xl"),
  h2: createHeadingComponent("h2", "lg"),
  h3: createHeadingComponent("h3", "md"),
  h4: createHeadingComponent("h4", "sm"),
  h5: createHeadingComponent("h5", "xs"),
  h6: createHeadingComponent("h6", "xs"),
};

export const textComponents: ContentComponentRecord = {
  p: createTextComponent({ is: "p" }),
  em: createTextComponent({ is: "em" }),
  strong: createTextComponent({ is: "strong", weight: "bold" }),
  code: createTextComponent({ is: "code", family: "mono" }),
  a: createContentComponent(VExternalLink, { underline: true }),
};
