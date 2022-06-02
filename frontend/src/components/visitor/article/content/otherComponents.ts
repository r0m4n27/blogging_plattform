import VColumn from "@/components/base/layout/VColumn.vue";
import VListItem from "@/components/base/list/VListItem.vue";
import VUnorderedList from "@/components/base/list/VUnorderedList.vue";
import VExternalImage from "@/components/base/VExternalImage.vue";
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
  img: createContentComponent(VExternalImage, {
    width: "full",
    height: "full",
  }),
  ul: createContentComponent(VUnorderedList, {}),
  li: createContentComponent(VListItem, {}),
};
