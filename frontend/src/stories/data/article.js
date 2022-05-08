import { jsCategory, programmingCategory } from "./category";

export const mockArticle = {
  id: "1",
  title: "Why Next.js is the most AWESOME Framework!",
  summary: `Lorem ipsum dolor sit amet,
    consetetur sadipscing elitr, sed diam nonumy eirmod tempor
    invidunt ut labore et dolore magna aliquyam erat,
    sed diam voluptua.`,
  content: `Lorem ipsum dolor sit amet,
    consetetur sadipscing elitr, sed diam nonumy eirmod tempor
    invidunt ut labore et dolore magna aliquyam erat,
    sed diam voluptua.

    Lorem ipsum dolor sit amet,
    consetetur sadipscing elitr, sed diam nonumy eirmod tempor
    invidunt ut labore et dolore magna aliquyam erat,
    sed diam voluptua.

    Lorem ipsum dolor sit amet,
    consetetur sadipscing elitr, sed diam nonumy eirmod tempor
    invidunt ut labore et dolore magna aliquyam erat,
    sed diam voluptua.`,
  categories: [jsCategory, programmingCategory],
  published: true,
};

export const mockArticleDraft = {
  id: "1",
  title: "Why Next.js is the most AWESOME Framework!",
  summary: `Lorem ipsum dolor sit amet,
    consetetur sadipscing elitr, sed diam nonumy eirmod tempor
    invidunt ut labore et dolore magna aliquyam erat,
    sed diam voluptua.`,
  content: `Lorem ipsum dolor sit amet,
    consetetur sadipscing elitr, sed diam nonumy eirmod tempor
    invidunt ut labore et dolore magna aliquyam erat,
    sed diam voluptua.

    Lorem ipsum dolor sit amet,
    consetetur sadipscing elitr, sed diam nonumy eirmod tempor
    invidunt ut labore et dolore magna aliquyam erat,
    sed diam voluptua.

    Lorem ipsum dolor sit amet,
    consetetur sadipscing elitr, sed diam nonumy eirmod tempor
    invidunt ut labore et dolore magna aliquyam erat,
    sed diam voluptua.`,
  categories: [jsCategory, programmingCategory],
  published: false,
};

export const mockArticles = Array(5).fill(mockArticle);
mockArticles.push(mockArticleDraft);
