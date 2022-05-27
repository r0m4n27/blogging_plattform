import {
  deleteWithToken,
  getWithToken,
  patchWithToken,
  postWithToken,
} from "@/lib/fetch";
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

// Remove indentation with the split, trim, join combination
export const mockArticle: AuthorArticle = {
  id: "1",
  year: 2021,
  title: "Why Next.js is the most AWESOME Framework!",
  summary: `Lorem ipsum dolor sit amet,
    consetetur sadipscing elitr, sed diam nonumy eirmod tempor
    invidunt ut labore et dolore magna aliquyam erat,
    sed diam voluptua.`
    .split("\n")
    .map((s) => s.trim())
    .join("\n"),
  content: `
    Lorem ipsum dolor sit amet,
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
    sed diam voluptua.`
    .split("\n")
    .map((s) => s.trim())
    .join("\n"),
  published: true,
  categories: [jsCategory, programmingCategory],
};

export const secondMockArticle: AuthorArticle = {
  id: "2",
  year: 2022,
  title: "Markdown TEST",
  summary: `Lorem ipsum dolor sit amet,
    consetetur sadipscing elitr, sed diam nonumy eirmod tempor
    invidunt ut labore et dolore magna aliquyam erat,
    sed diam voluptua.`
    .split("\n")
    .map((s) => s.trim())
    .join("\n"),
  content: `
    ## Das ist ein Test
    Hier stehen tolle _sachen_ **die** man so machen kann.
    Auch \`code\` ist erlaubt.

    ## More text

    Lorem ipsum dolor sit amet,
    consetetur sadipscing elitr, sed diam nonumy eirmod tempor
    invidunt ut labore et dolore magna aliquyam erat,
    sed diam voluptua.

    Even more

    ## Lists
    - Test
    - More
    - test
        - 1
        - 2

    ## Links
    There is a [Link](https://kowa.hs-augsburg.de/webprog/praktikum/) to something.

    Images don't work because of CORS.
  `
    .split("\n")
    .map((s) => s.trim())
    .join("\n"),
  published: true,
  categories: [jsCategory],
};

let mockArticles: AuthorArticle[] = Array(5).fill(mockArticle);
mockArticles.push(secondMockArticle);

mockArticles = mockArticles.map((article, index) => {
  return {
    ...article,
    id: `${index}`,
  };
});

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
  if (filterType === undefined)
    return mockArticles.filter((article) => article.published);

  // SAFETY: If filterType is not undefined
  // than the filterId is also not undefined
  if (filterType === "category") {
    const categoryId = filterId as string;

    return mockArticles.filter((article) => {
      if (!article.published) return false;

      const categoryIds = article.categories.map((c) => c.id);
      return categoryIds.includes(categoryId);
    });
  } else {
    const year = filterId as number;

    return mockArticles.filter(
      (article) => article.year === year && article.published
    );
  }
}

export const fetchArticle = async (id: string): Promise<Article> => {
  return mockArticles.find((article) => article.id === id) as Article;
};

const authorArticlesBase = "/api/author/articles";

export const getAuthorArticles = (token: string) =>
  getWithToken<AuthorArticle[]>(authorArticlesBase, token);

export const getAuthorArticle = (token: string, id: string) =>
  getWithToken<AuthorArticle>(`${authorArticlesBase}/${id}`, token);

export const publishArticle = (token: string, payload: NewArticlePayload) =>
  postWithToken(authorArticlesBase, token, payload);

export const updateArticle = (
  token: string,
  article: AuthorArticle
): Promise<unknown> => {
  // Year needs to be extracted otherwise it will be put into the db
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id, year: _, ...payload } = article;

  return patchWithToken(`${authorArticlesBase}/${id}`, token, payload);
};

export const deleteArticle = (token: string, article: AuthorArticle) =>
  deleteWithToken(`${authorArticlesBase}/${article.id}`, token);
