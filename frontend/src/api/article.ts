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
  const nextId = mockArticles.slice(-1).pop()?.id as string;
  const year = 2022;
  mockArticles.push({
    ...payload,
    id: `${parseInt(nextId) + 1}`,
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
