import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeSanitize from "rehype-sanitize";
import { toH } from "hast-to-hyperscript";
import {
  createContentComponentRenderer,
  type ContentComponentRecord,
} from "./renderer";
import { otherComponents } from "./otherComponents";
import { headingComponents, textComponents } from "./textComponents";
import type { VNode } from "vue";

interface NewArticleContentProps {
  content: string;
}

// Parsing taken from: https://github.com/remarkjs/react-markdown/blob/main/lib/react-markdown.js
export const NewArticleContent = ({
  content,
}: NewArticleContentProps): VNode => {
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeSanitize);

  const vFile = {
    value: content,
  };

  const htmlNode = processor.runSync(processor.parse(vFile), vFile);

  return toH(renderer, htmlNode);
};

const componentMap: ContentComponentRecord = {
  ...otherComponents,
  ...headingComponents,
  ...textComponents,
};

const renderer = createContentComponentRenderer(componentMap);
