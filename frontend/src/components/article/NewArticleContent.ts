import { h, type VNode } from "vue";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeSanitize from "rehype-sanitize";
import { toH, type CreateElementLike } from "hast-to-hyperscript";

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

  return toH(articleRenderer, htmlNode);
};

const articleRenderer: CreateElementLike = (name, attributes, children) => {
  return h(name, attributes, children);
};
