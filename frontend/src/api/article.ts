import type { Category } from "./category";

export interface Article {
  title: string;
  summary: string;
  categories: Category[];
}
