import type { Category } from "./category";

export interface Article {
  id: string;
  title: string;
  summary: string;
  content: string;
  categories: Category[];
}

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
  categories: [],
};

export const mockArticles: Article[] = Array(5).fill(mockArticle);
