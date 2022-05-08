import { jsCategory, programmingCategory, type Category } from "./category";

export interface Article {
  id: string;
  year: number;
  title: string;
  summary: string;
  content: string;
  categories: Category[];
}

export interface AuthorArticle extends Article {
  published: boolean;
}

export type NewArticlePayload = Omit<AuthorArticle, "id" | "year">;

export const mockArticle: AuthorArticle = {
  id: "1",
  year: 2021,
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
  published: true,
  categories: [jsCategory, programmingCategory],
};

export const secondMockArticle: AuthorArticle = {
  id: "2",
  year: 2022,
  title: "Some interesting title",
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
  published: false,
  categories: [jsCategory],
};

let mockArticles: AuthorArticle[] = Array(5).fill(mockArticle);
mockArticles.push(secondMockArticle);

export async function fetchArticles(
  filterType: "category",
  filterId: string
): Promise<Article[]>;

export async function fetchArticles(
  filterType: "year",
  filterId: number
): Promise<Article[]>;

export async function fetchArticles(): Promise<Article[]>;

export async function fetchArticles(
  filterType?: "category" | "year",
  filterId?: number | string
): Promise<Article[]> {
  if (filterType === undefined) return mockArticles;

  // SAFETY: If filterType is not undefined
  // than the filterId is also not undefined
  if (filterType === "category") {
    const categoryId = filterId as string;

    return mockArticles.filter((article) => {
      const categoryIds = article.categories.map((c) => c.id);
      return categoryIds.includes(categoryId);
    });
  } else {
    const year = filterId as number;

    return mockArticles.filter((article) => article.year === year);
  }
}

export const fetchArticle = async (id: string): Promise<Article> => {
  return mockArticles.find((article) => article.id === id) as Article;
};

export const fetchAuthorArticles = async (): Promise<AuthorArticle[]> => {
  return mockArticles;
};

export const fetchAuthorArticle = async (
  id: string
): Promise<AuthorArticle> => {
  return mockArticles.find((article) => article.id === id) as AuthorArticle;
};

export const publishArticle = async (
  payload: NewArticlePayload
): Promise<void> => {
  const id = "3";
  const year = 2022;
  mockArticles.push({
    ...payload,
    id,
    year,
  });
};

export const updateArticle = async (article: AuthorArticle): Promise<void> => {
  const foundArticle = mockArticles.find(
    (a) => a.id === article.id
  ) as AuthorArticle;

  Object.assign(foundArticle, article);
};

export const deleteArticle = async (article: AuthorArticle): Promise<void> => {
  mockArticles = mockArticles.filter((a) => a.id !== article.id);
};
