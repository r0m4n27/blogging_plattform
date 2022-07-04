import VColumn from "@blog/frontend/components/base/layout/VColumn.vue";
import VListItem from "@blog/frontend/components/base/list/VListItem.vue";
import VUnorderedList from "@blog/frontend/components/base/list/VUnorderedList.vue";
import VExternalImage from "@blog/frontend/components/base/VExternalImage.vue";
import { contentSpacingConfig } from "@blog/frontend/config/content/spacing";
import { createContentComponent, type ContentComponentRecord } from "./renderer";

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
