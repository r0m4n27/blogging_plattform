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

export const ArticleContentRendered = ({
  content,
}: ArticleContentRenderedProps): VNode => toH(renderer, content);

const componentMap: ContentComponentRecord = {
  ...otherComponents,
  ...headingComponents,
  ...textComponents,
};

const renderer = createContentComponentRenderer(componentMap);
