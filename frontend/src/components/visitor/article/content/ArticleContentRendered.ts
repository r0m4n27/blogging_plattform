import { toH, type Root } from "hast-to-hyperscript";
import type { VNode } from "vue";
import { otherComponents } from "./otherComponents";
import {
  createContentComponentRenderer,
  type ContentComponentRecord,
} from "./renderer";
import { headingComponents, textComponents } from "./textComponents";

export interface ArticleContentRenderedProps {
  content: Root;
}

// Render the content using the toH function
// from  hast-to-hyperscript
// It takes a render function and works with many
// frameworks. Vue is one of them
export const ArticleContentRendered = ({
  content,
}: ArticleContentRenderedProps): VNode => toH(renderer, content);

const componentMap: ContentComponentRecord = {
  ...otherComponents,
  ...headingComponents,
  ...textComponents,
};

const renderer = createContentComponentRenderer(componentMap);
