import VColumn from "@/components/base/layout/VColumn.vue";
import VListItem from "@/components/base/list/VListItem.vue";
import VUnorderedList from "@/components/base/list/VUnorderedList.vue";
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
  ul: createContentComponent(VUnorderedList, {}),
  li: createContentComponent(VListItem, {}),
};
