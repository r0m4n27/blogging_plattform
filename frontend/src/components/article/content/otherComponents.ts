import VColumn from "@/components/base/layout/VColumn.vue";
import VImage from "@/components/base/VImage.vue";
import { contentSpacingConfig } from "@/config/content/spacing";
import {
  createContentComponent,
  type ContentComponentRecord,
} from "./renderer";

export const otherComponents: ContentComponentRecord = {
  div: createContentComponent(VColumn, {
    gap: contentSpacingConfig.xs,
    align: "start",
  }),
  // NOTE: Images can't be really used because of CORS
  img: createContentComponent(VImage, { width: "full", height: "full" }),
};
