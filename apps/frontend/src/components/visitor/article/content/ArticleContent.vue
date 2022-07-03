<script setup lang="ts">
import type { Option } from "@/lib/types";
import type { Root } from "hast-to-hyperscript";
import rehypeSanitize from "rehype-sanitize";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import { ref, watchEffect } from "vue";
import { ArticleContentRendered } from "./ArticleContentRendered";

interface ArticleContentProps {
  content: string;
}
const props = defineProps<ArticleContentProps>();

const htmlNode = ref<Option<Root>>();

// Guide from:
// - https://unifiedjs.com/learn/guide/create-an-editor/
// - https://github.com/remarkjs/react-markdown/blob/main/lib/react-markdown.js
const processor = unified()
  .use(remarkParse)
  .use(remarkRehype)
  .use(rehypeSanitize);

watchEffect(() => {
  processor
    .run(processor.parse(props.content))
    .then((root) => (htmlNode.value = root));
});
</script>

<template>
  <ArticleContentRendered v-if="htmlNode !== undefined" :content="htmlNode" />
</template>
